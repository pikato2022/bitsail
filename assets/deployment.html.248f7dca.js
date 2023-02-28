import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as p,a,d as n,w as c,b as e,e as t,r as i}from"./app.a6ab98b3.js";const d={},u=a("h1",{id:"部署指南",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#部署指南","aria-hidden":"true"},"#"),e(),a("span",{id:"jump_deployment_guide"},"部署指南")],-1),b=t('<hr><blockquote><p>目前 BitSail 支持本地和Yarn和原生kubernetes部署。</p></blockquote><p>本部分目录:</p><ul><li><a href="#jump_deployment_guide">部署指南</a><ul><li><a href="#jump_pre_configure">环境配置</a><ul><li><a href="#jump_configure_hadoop">配置Hadoop</a></li><li><a href="#jump_configure_flink">配置Flink</a></li></ul></li><li><a href="#jump_submit_to_yarn">提交到Yarn</a><ul><li><a href="#jump_submit_example">提交一个示例作业</a></li><li><a href="#jump_log">调试日志</a></li></ul></li><li><a href="#jump_remote_submit">远程提交</a></li><li><a href="#jump_local_submit">本地提交</a></li><li><a href="#cn_native_kubernetes_deployment">部署原生Kubernetes</a><ul><li><a href="#cn_jump_prerequisites_k8s">要求</a></li><li><a href="#cn_jump_pre_configuration_k8s">前置作业</a><ul><li><a href="#cn_jump_configure_RBAC">建立RBAC鉴权</a></li></ul></li><li><a href="#cn_jump_application_mode">Application模式</a><ul><li><a href="#cn_jump_build_custom_flink_image">自定义 Flink Docker 镜像</a></li><li><a href="#cn_jump_start_application">启动Application</a></li><li><a href="#cn_jump_stop_application">停止Application</a></li><li><a href="#cn_jump_kubernetes_logs">Kubernetes日志文件</a></li><li><a href="#cn_jump_history_server">History Server</a></li><li><a href="#cn_jump_test_locally">本地测试</a></li></ul></li></ul></li></ul></li></ul><p>下面各部分详细介绍BitSail的部署。</p><hr><h2 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置" aria-hidden="true">#</a> <span id="jump_pre_configure">环境配置</span></h2><h3 id="配置hadoop" tabindex="-1"><a class="header-anchor" href="#配置hadoop" aria-hidden="true">#</a> <span id="jump_configure_hadoop">配置Hadoop</span></h3><p>为了支持Yarn/Kubernetes部署，需要在环境变量中配置<code>HADOOP_CLASSPATH</code>。目前有两种方式设置:</p>',9),h=a("li",null,[a("p",null,[e("直接手动设置 "),a("code",null,"HADOOP_CLASSPATH"),e("。")])],-1),m=a("code",null,"HADOOP_HOME",-1),k={href:"https://github.com/bytedance/bitsail/blob/master/bitsail-dist/src/main/archive/bin/bitsail",target:"_blank",rel:"noopener noreferrer"},v=a("code",null,"HADOOP_CLASSPATH",-1),g=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$HADOOP_HOME</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">export</span> <span class="token assign-left variable">HADOOP_CLASSPATH</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>$HADOOP_HOME/bin/hadoop classpath<span class="token variable">)</span></span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置flink" tabindex="-1"><a class="header-anchor" href="#配置flink" aria-hidden="true">#</a> <span id="jump_configure_flink">配置Flink</span></h3>`,2),_={href:"https://github.com/bytedance/bitsail/blob/master/bitsail-dist/src/main/resources/bitsail.conf",target:"_blank",rel:"noopener noreferrer"},f=t('<p>下面是一些常用的配置项:</p><table><tr><th>参数前缀</th><th>参数名称</th><th>参数描述</th><th>示例</th></tr><tr><td rowspan="3">sys.flink.</td><td>flink_home</td><td>使用的flink所在目录.</td><td>${BITSAIL_HOME}/embedded/flink</td></tr><tr><td>checkpoint_dir</td><td>存储flink checkpoint元数据和数据文件的路径。详情参考:<a href="https://nightlies.apache.org/flink/flink-docs-master/docs/ops/state/checkpoints/">Flink Checkpoints</a></td><td>&quot;hdfs://opensource/bitsail/flink-1.11/checkpoints/&quot;</td></tr><tr><td>flink_default_properties</td><td>通用的flink运行参数，以 &quot;-D xxx=xxx&quot; 方式传递。</td><td>{<br> classloader.resolve-order: &quot;child-first&quot;<br> akka.framesize: &quot;838860800b&quot;<br> rest.client.max-content-length: 838860800<br> rest.server.max-content-len<br>} </td></tr></table><hr><h2 id="提交到yarn" tabindex="-1"><a class="header-anchor" href="#提交到yarn" aria-hidden="true">#</a> <span id="jump_submit_to_yarn">提交到Yarn</span></h2><blockquote><p><em><strong>BitSail</strong></em> 目前仅支持flink的 <code>yarn-per-job</code> 模式提交。</p></blockquote><p>你可以使用 <code>bin/bitsail</code> 脚本将flink作业提交到yarn上。具体的执行指令如下:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">bash</span> ./bin/bitsail run <span class="token parameter variable">--engine</span> flink <span class="token parameter variable">--conf</span> <span class="token punctuation">[</span>job_conf_path<span class="token punctuation">]</span> --execution-mode run <span class="token parameter variable">--queue</span> <span class="token punctuation">[</span>queue_name<span class="token punctuation">]</span> --deployment-mode yarn-per-job <span class="token punctuation">[</span>--priority <span class="token punctuation">[</span>yarn_priority<span class="token punctuation">]</span> -p/--props <span class="token punctuation">[</span>name<span class="token operator">=</span>value<span class="token punctuation">]</span><span class="token punctuation">]</span> \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面中括号内的参数说明如下：</p><ul><li>必需参数: <ul><li><strong>queue_name</strong>: 要提交的yarn队列</li><li><strong>job_conf_path</strong>: 作业的配置文件</li></ul></li><li>可选参数: <ul><li><strong>yarn_priority</strong>: 作业在队列上的优先级</li><li><strong>name=value</strong>: flink运行属性，以 &quot;-D name=value&quot; 方式添加在flink run命令后 <ul><li><strong>name</strong>: 要添加的属性名</li><li><strong>value</strong>: 要添加的属性值</li><li>例如 <code>classloader.resolve-order=child-first</code></li></ul></li></ul></li></ul><h3 id="提交一个示例作业" tabindex="-1"><a class="header-anchor" href="#提交一个示例作业" aria-hidden="true">#</a> <span id="jump_submit_example">提交一个示例作业</span></h3><p>可以使用如下指令提交一个 Fake2Print 测试作业到default队列。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">bash</span> ./bin/bitsail run <span class="token parameter variable">--engine</span> flink <span class="token parameter variable">--conf</span> ~/bitsail-archive-0.1.0-SNAPSHOT/examples/Fake_Proint_Example.json --execution-mode run <span class="token parameter variable">-p</span> <span class="token assign-left variable">1</span><span class="token operator">=</span><span class="token number">1</span>  --deployment-mode yarn-per-job  <span class="token parameter variable">--queue</span> default\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="调试日志" tabindex="-1"><a class="header-anchor" href="#调试日志" aria-hidden="true">#</a> <span id="jump_log">调试日志</span></h3><h4 id="client端日志" tabindex="-1"><a class="header-anchor" href="#client端日志" aria-hidden="true">#</a> client端日志</h4><p>可以在 <code>${FLINK_HOME}/log/</code> 中找到BitSail client端的执行日志。</p><h4 id="yarn作业日志" tabindex="-1"><a class="header-anchor" href="#yarn作业日志" aria-hidden="true">#</a> Yarn作业日志</h4><p>可以通过Yarn的WebUI来查看Flink JobManager和TaskManager的日志。</p><hr><h2 id="flink提交" tabindex="-1"><a class="header-anchor" href="#flink提交" aria-hidden="true">#</a> Flink提交</h2><p>假设BitSail的安装路径为: <code>${BITSAIL_HOME}</code>。打包BitSail后，我们可以在如下路径中找到可运行jar包以及示例作业配置文件:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token variable">${BITSAIL_HOME}</span>/bitsail-dist/target/bitsail-dist-0.1.0-SNAPSHOT-bin/bitsail-archive-0.1.0-SNAPSHOT/\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="远程提交" tabindex="-1"><a class="header-anchor" href="#远程提交" aria-hidden="true">#</a> <span id="jump_remote_submit">远程提交</span></h3>',22),x=a("code",null,"--deployment-mode remote",-1),j={href:"https://github.com/bytedance/bitsail/blob/master/bitsail-dist/src/main/archive/examples/Fake_Print_Example.json",target:"_blank",rel:"noopener noreferrer"},y=t(`<ul><li><code>&lt;job-manager-address&gt;</code>: 要连接的的JobManager地址，格式为host:port，例如<code>localhost:8081</code>。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">bash</span> bin/bitsail run <span class="token punctuation">\\</span>
  <span class="token parameter variable">--engine</span> flink <span class="token punctuation">\\</span>
  --execution-mode run <span class="token punctuation">\\</span>
  --deployment-mode remote <span class="token punctuation">\\</span>
  <span class="token parameter variable">--conf</span> examples/Fake_Print_Example.json <span class="token punctuation">\\</span>
  --jm-address <span class="token operator">&lt;</span>job-manager-address<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如，使用<code>bitsail-archive-0.1.0-SNAPSHOT/embedded/flink/bin/start-cluster.sh</code>脚本可以在本地启动一个flink standalone集群，此时 <code>&lt;job-manager-address&gt;</code> 就是 <code>localhost:8081</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">bash</span> bin/bitsail run <span class="token punctuation">\\</span>
  <span class="token parameter variable">--engine</span> flink <span class="token punctuation">\\</span>
  --execution-mode run <span class="token punctuation">\\</span>
  --deployment-mode remote <span class="token punctuation">\\</span>
  <span class="token parameter variable">--conf</span> examples/Fake_Print_Example.json <span class="token punctuation">\\</span>
  --jm-address localhost:8081
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行命令后，可以在Flink WebUI中查看运行的Fake_to_Print作业。在task manager的stdout文件中可以看到作业输出。</p><h3 id="本地提交" tabindex="-1"><a class="header-anchor" href="#本地提交" aria-hidden="true">#</a> <span id="jump_local_submit">本地提交</span></h3>`,6),S=a("code",null,"--deployment-mode local",-1),A={href:"https://github.com/bytedance/bitsail/blob/master/bitsail-dist/src/main/archive/examples/Fake_Print_Example.json",target:"_blank",rel:"noopener noreferrer"},q=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">bash</span> bin/bitsail run <span class="token punctuation">\\</span>
  <span class="token parameter variable">--engine</span> flink <span class="token punctuation">\\</span>
  --execution-mode run <span class="token punctuation">\\</span>
  --deployment-mode <span class="token builtin class-name">local</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--conf</span> examples/Fake_Print_Example.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="运行fake-to-hive示例作业" tabindex="-1"><a class="header-anchor" href="#运行fake-to-hive示例作业" aria-hidden="true">#</a> 运行Fake_to_Hive示例作业</h4>`,2),O={href:"https://github.com/bytedance/bitsail/blob/master/bitsail-dist/src/main/archive/examples/Fake_Hive_Example.json",target:"_blank",rel:"noopener noreferrer"},H=t(`<ul><li>在运行前补充完整配置文件中的hive信息: <ul><li><code>job.writer.db_name</code>: 要写入的hive库.</li><li><code>job.writer.table_name</code>: 要写入的hive表.</li><li><code>job.writer.metastore_properties</code>: hive的连接信息，包括metastore地址等:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>   <span class="token punctuation">{</span>
      <span class="token string">&quot;job&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;writer&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;metastore_properties&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;{<span class="token entity" title="\\&quot;">\\&quot;</span>hive.metastore.uris<span class="token entity" title="\\&quot;">\\&quot;</span>:<span class="token entity" title="\\&quot;">\\&quot;</span>thrift://localhost:9083<span class="token entity" title="\\&quot;">\\&quot;</span>}&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>执行如下命令，便可以在本地启动一个Fake_to_Hive作业:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">bash</span> bin/bitsail run <span class="token punctuation">\\</span>
  <span class="token parameter variable">--engine</span> flink <span class="token punctuation">\\</span>
  --execution-mode run <span class="token punctuation">\\</span>
  --deployment-mode <span class="token builtin class-name">local</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--conf</span> examples/Fake_Hive_Example.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="运行hadoop相关任务" tabindex="-1"><a class="header-anchor" href="#运行hadoop相关任务" aria-hidden="true">#</a> 运行hadoop相关任务</h4><p>如果读或者写数据源与hadoop相关，例如<code>hive_to_print</code>任务，那么需要向本体的flink mini cluster提供hadoop lib。 下面介绍两种提供hadoop lib的方法:</p><ol><li>如果你的环境已经部署了hadoop，那么直接通过<code>$HADOOP_HOME</code>环境变量指向本地的hadoop目录即可，例如:</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">HADOOP_HOME</span><span class="token operator">=</span>/usr/local/hadoop-3.1.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>如果本地没有hadoop环境，可以通过<code>flink-shaded-hadoop-uber</code> jar包提供hadoop lib。例如，假设flink的目录为 <code>/opt/flink</code>，那么可以通过如下命令添加<code>flink-shaded-hadoop-uber</code>包:</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># download flink-shaded-hadoop-uber jar</span>
<span class="token function">wget</span> https://repo.maven.apache.org/maven2/org/apache/flink/flink-shaded-hadoop-2-uber/2.7.5-10.0/flink-shaded-hadoop-2-uber-2.7.5-10.0.jar

<span class="token comment"># move to flink libs</span>
<span class="token function">mv</span> flink-shaded-hadoop-2-uber-2.7.5-10.0.jar /opt/flink/lib/flink-shaded-hadoop-uber.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h1 id="部署原生kubernetes" tabindex="-1"><a class="header-anchor" href="#部署原生kubernetes" aria-hidden="true">#</a> <span id="cn_native_kubernetes_deployment">部署原生Kubernetes</span></h1><blockquote><p>目前<em><strong>BitSail</strong></em>仅支持在Flink 1.11引擎上的原生Kubernetes.<br></p></blockquote><p>以下的内容将一步步带领你部署BitSail到原生Kubernetes。目前BitSail支持Application模式：让使用者去创建一个单一镜像去包住任务和Flink runtime。这个镜像将会在kubernetes cluster自动创建及退出删除。</p><h2 id="要求" tabindex="-1"><a class="header-anchor" href="#要求" aria-hidden="true">#</a> <span id="cn_jump_prerequisites_k8s">要求</span></h2><ol><li>Kubernetes 版本 1.9 或以上。</li><li>KubeConfig 可以查看、创建、删除 pods 和 services，可以通过~/.kube/config 配置。你可以通过运行 kubectl auth can-i &lt;list|create|edit|delete&gt; pods 来验证权限。</li><li>启用 Kubernetes DNS。</li></ol>`,15),I={href:"https://kubernetes.io/zh-cn/docs/setup/",target:"_blank",rel:"noopener noreferrer"},P=a("h2",{id:"前置作业",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#前置作业","aria-hidden":"true"},"#"),e(),a("span",{id:"cn_jump_pre_configuration_k8s"},"前置作业")],-1),F={id:"建立-rbac鉴权",tabindex:"-1"},B=a("a",{class:"header-anchor",href:"#建立-rbac鉴权","aria-hidden":"true"},"#",-1),T={id:"cn_jump_configure_RBAC"},E={href:"https://kubernetes.io/zh-cn/docs/reference/access-authn-authz/rbac/",target:"_blank",rel:"noopener noreferrer"},M=t(`<p>基于角色的访问控制（RBAC）是一种在企业内部基于单个用户的角色来调节对计算或网络资源的访问的方法。 用户可以配置 RBAC 角色和服务账户，JobManager 使用这些角色和服务帐户访问 Kubernetes 集群中的 Kubernetes API server。</p><p>如果你不想使用默认服务账户，使用以下命令创建一个新的 &lt;自定义帐户名称&gt; 服务账户并设置角色绑定。然后使用配置项 -p kubernetes.jobmanager.service-account=&lt;自定义账户名称&gt; 来使 JobManager pod 使用 &lt;自定义帐户名称&gt; 服务账户去创建和删除 TaskManager pod。 每个命名空间有默认的服务账户，但是默认服务账户可能没有权限在 Kubernetes 集群中创建或删除 pod。用户可能需要更新默认服务账户的权限或指定另一个绑定了正确角色的服务账户。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ kubectl create serviceaccount <span class="token operator">&lt;</span>self-defined-service-account<span class="token operator">&gt;</span> <span class="token comment"># 请把&lt;self-defined-service-account&gt;替换成实际的帐户名称</span>
$ kubectl create clusterrolebinding <span class="token operator">&lt;</span>self-defined-cluster-role-binding<span class="token operator">&gt;</span> <span class="token parameter variable">--clusterrole</span><span class="token operator">=</span>edit <span class="token parameter variable">--serviceaccount</span><span class="token operator">=</span>default:<span class="token operator">&lt;</span>self-defined-service-account<span class="token operator">&gt;</span> <span class="token comment"># 请把&lt;self-defined-service-account&gt;和&lt;self-defined-cluster-role-binding&gt;替换成实际的名称</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="application模式" tabindex="-1"><a class="header-anchor" href="#application模式" aria-hidden="true">#</a> <span id="cn_jump_application_mode"> Application模式</span></h2><p>Application 模式允许用户创建单个镜像，其中包含他们的作业和 Flink 运行时，该镜像将按需自动创建和销毁集群组件。Flink 社区提供了可以构建多用途自定义镜像的基础镜像。</p><h3 id="在第一次跑bitsail或当bitsail-jar改动时-自定义-flink-docker-镜像" tabindex="-1"><a class="header-anchor" href="#在第一次跑bitsail或当bitsail-jar改动时-自定义-flink-docker-镜像" aria-hidden="true">#</a> <span id="cn_jump_build_custom_flink_image">[在第一次跑BitSail或当BitSail Jar改动时] 自定义 Flink Docker 镜像</span></h3><p>用<code>\${BITSAIL_HOME}/output/Dockerfile</code>创建你的 <code>&lt;CustomImage&gt;</code> :</p><p>把你的<code>&lt;CustomImage&gt;</code>发表到Dockerhub，让Kubernetes集群可以下载下来:</p>`,8),L={href:"https://docs.docker.com/docker-hub/repos/#:~:text=To%20push%20an%20image%20to,docs%2Fbase%3Atesting%20",target:"_blank",rel:"noopener noreferrer"},w=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> <span class="token operator">&lt;</span>your <span class="token function">docker</span> repository<span class="token operator">&gt;</span>:<span class="token operator">&lt;</span>tag<span class="token operator">&gt;</span>
<span class="token function">docker</span> push <span class="token operator">&lt;</span>your <span class="token function">docker</span> repository<span class="token operator">&gt;</span>:<span class="token operator">&lt;</span>tag<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动application" tabindex="-1"><a class="header-anchor" href="#启动application" aria-hidden="true">#</a> <span id="cn_jump_start_application">启动Application</span></h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">bash</span> <span class="token variable">\${BITSAIL_HOME}</span>/bin/bitsail run <span class="token punctuation">\\</span>
   <span class="token parameter variable">--engine</span> flink <span class="token punctuation">\\</span>
   <span class="token parameter variable">--target</span> kubernetes-application <span class="token punctuation">\\</span>
   --deployment-mode kubernetes-application <span class="token punctuation">\\</span>
   --execution-mode run-application <span class="token punctuation">\\</span>
   <span class="token parameter variable">-p</span> kubernetes.kubernetes.jobmanager.service-account<span class="token operator">=</span><span class="token operator">&lt;</span>self-defined-service-account<span class="token operator">&gt;</span> <span class="token punctuation">\\</span>
   <span class="token parameter variable">-p</span> <span class="token assign-left variable">kubernetes.container.image</span><span class="token operator">=</span><span class="token operator">&lt;</span>CustomImage<span class="token operator">&gt;</span> <span class="token punctuation">\\</span>
   <span class="token parameter variable">-p</span> <span class="token assign-left variable">kubernetes.jobmanager.cpu</span><span class="token operator">=</span><span class="token number">0.25</span> <span class="token punctuation">\\</span>
   <span class="token parameter variable">-p</span> <span class="token assign-left variable">kubernetes.taskmanager.cpu</span><span class="token operator">=</span><span class="token number">0.5</span> <span class="token punctuation">\\</span>
   --conf-in-base64 <span class="token operator">&lt;</span>base64 conf<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用者可以在BitSail 指令集用<code>-p key=value</code>配置参数</p><p>配置参数:</p><table><tr><th>Key</th><th>Required or Optional</th><th>Default</th><th>Type</th><th>Description</th></tr><tr><td>kubernetes.cluster-id</td><td>Optional</td><td>bitsail-&lt;instance-id&gt;</td><td>String</td><td>The cluster-id, which should be no more than 45 characters, is used for identifying a unique Flink cluster. If not set, the client will automatically generate it with a random numeric ID with &#39;bitsail-&#39; prefix.</td></tr><tr><td>kubernetes.cluster.jar.path</td><td>Optional</td><td>&quot;/opt/bitsail/bitsail-core.jar&quot;</td><td>String</td><td>The BitSail jar path in kubernetes cluster.</td></tr><tr><td>kubernetes.container.image</td><td>Required</td><td>The default value depends on the actually running version. In general it looks like &quot;flink:&lt;FLINK_VERSION&gt;-scala_&lt;SCALA_VERSION&gt;&quot;</td><td>String</td><td>Image to use for BitSail containers. The specified image must be based upon the same Apache Flink and Scala versions as used by the application. Visit https://hub.docker.com/_/flink?tab=tags for the images provided by the Flink project.</td></tr><tr><td>kubernetes.container.image.pull-policy</td><td>Optional</td><td>IfNotPresent</td><td>Enum. Possible values: [IfNotPresent, Always, Never]</td><td>The Kubernetes container image pull policy (IfNotPresent or Always or Never). The default policy is IfNotPresent to avoid putting pressure to image repository.</td></tr><tr><td>kubernetes.container.image.pull-secrets</td><td>Optional</td><td>(none)</td><td>List &lt;String&gt;</td><td>A semicolon-separated list of the Kubernetes secrets used to access private image registries.</td></tr><tr><td>kubernetes.hadoop.conf.config-map.name</td><td>Optional</td><td>(none)</td><td>String</td><td>Specify the name of an existing ConfigMap that contains custom Hadoop configuration to be mounted on the JobManager(s) and TaskManagers.</td></tr><tr><td>kubernetes.jobmanager.cpu</td><td>Optional</td><td>1.0</td><td>Double</td><td>The number of cpu used by job manager</td></tr><tr><td>kubernetes.jobmanager.service-account</td><td>Required</td><td>&quot;default&quot;</td><td>String</td><td>Service account that is used by jobmanager within kubernetes cluster. The job manager uses this service account when requesting taskmanager pods from the API server.</td></tr><tr><td>kubernetes.namespace</td><td>Optional</td><td>&quot;default&quot;</td><td>String</td><td>The namespace that will be used for running the jobmanager and taskmanager pods.</td></tr><tr><td>kubernetes.taskmanager.cpu</td><td>Optional</td><td>-1.0</td><td>Double</td><td>The number of cpu used by task manager. By default, the cpu is set to the number of slots per TaskManager</td></tr></table><h3 id="停止application" tabindex="-1"><a class="header-anchor" href="#停止application" aria-hidden="true">#</a> <span id="cn_jump_stop_application">停止Application</span></h3><p>用户可以去 Flink WebUI 取消正在运行的作业。</p><p>或者，用户可以运行以下 bitsail 命令来取消作业。请注意，<code>&lt;jobId&gt;</code> 应该从 Flink JobManager 中检索，可以从日志或 WebUI 中检索。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">bash</span> <span class="token variable">\${BITSAIL_HOME}</span>/bin/bitsail stop <span class="token punctuation">\\</span>
   <span class="token parameter variable">--engine</span> flink <span class="token punctuation">\\</span>
   <span class="token parameter variable">--target</span> kubernetes-application <span class="token punctuation">\\</span>
   --deployment-mode kubernetes-application <span class="token punctuation">\\</span>
   --execution-mode cancel <span class="token punctuation">\\</span>
   <span class="token parameter variable">-p</span> kubernetes.cluster-id<span class="token operator">=</span><span class="token operator">&lt;</span>cluster-id<span class="token operator">&gt;</span> <span class="token punctuation">\\</span>
   --job-id <span class="token operator">&lt;</span>jobId<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当 Application 停止时，所有 Flink 集群资源都会自动销毁。 与往常一样，作业可能会在手动取消或执行完的情况下停止。 使用者也可以跑 <code>kubectl</code> 指令集来删除整个部署的Application</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl delete deployments bitsail-job
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="kubernetes日志文件" tabindex="-1"><a class="header-anchor" href="#kubernetes日志文件" aria-hidden="true">#</a> <span id="cn_jump_kubernetes_logs">Kubernetes日志文件</span></h3><p>以下三种日志文件可以使用：</p><ol><li>BitSail 客戶端日志： <code>\${FLINK_HOME}/log/flink-xxx.log</code> on client end</li><li>BitSail JobManager日志： <code>/opt/flink/log/jobmanager.log</code> on Kubernetes JobManager pod</li><li>BitSail TaskManager日志： <code>/opt/flink/log/taskmanager.log</code> on Kubernetes TaskManager pod</li></ol><p>如果要使用 <code>kubectl logs &lt;PodName&gt;</code> 查看日志，必须执行以下操作：</p><ol><li>在 Flink 客户端的 log4j.properties 中增加新的 appender。</li><li>在 log4j.properties 的 rootLogger 中增加如下 ‘appenderRef’，<code>rootLogger.appenderRef.console.ref = ConsoleAppender</code>。</li><li>停止并重启你的 session。现在你可以使用 kubectl logs 查看日志了。</li><li>已准备好编译 BitSail（使用 <code>\${BITSAIL_HOME}/build.sh</code> 构建后，工件将位于 <code>\${BITSAIL_HOME}/output/</code> 中）</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Log all infos to the console</span>
appender.console.name <span class="token operator">=</span> ConsoleAppender
appender.console.type <span class="token operator">=</span> CONSOLE
appender.console.layout.type <span class="token operator">=</span> PatternLayout
appender.console.layout.pattern <span class="token operator">=</span> %d<span class="token punctuation">{</span>yyyy-MM-dd HH:mm:ss,SSS<span class="token punctuation">}</span> %-5p %-60c %x - %m%n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用者可以使用以下<code>kubectl</code> 指令集来查看日志</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># During job running</span>
kubectl get pods <span class="token comment"># Will return jobmanager pod and taskmanager pod</span>

kubectl logs <span class="token parameter variable">-f</span> <span class="token operator">&lt;</span>jobmanagerPod<span class="token operator">&gt;</span> <span class="token comment"># Will dump jobManager log</span>

kubectl logs <span class="token parameter variable">-f</span> <span class="token operator">&lt;</span>taskmanagerPod<span class="token operator">&gt;</span>  <span class="token comment"># Will dump taskManager log</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="history-server" tabindex="-1"><a class="header-anchor" href="#history-server" aria-hidden="true">#</a> <span id="cn_jump_history_server">History Server</span></h3>`,21),K={href:"https://nightlies.apache.org/flink/flink-docs-release-1.11/monitoring/historyserver.html",target:"_blank",rel:"noopener noreferrer"},N=t(`<p>启动及停止HistoryServer</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token variable">\${FLINK_HOME}</span>/bin/historyserver.sh <span class="token punctuation">(</span>start<span class="token operator">|</span>start-foreground<span class="token operator">|</span>stop<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用BitSail指令集去配置history server。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">bash</span> <span class="token variable">\${BITSAIL_HOME}</span>/bin/bitsail run <span class="token punctuation">\\</span>
   <span class="token parameter variable">--engine</span> flink <span class="token punctuation">\\</span>
   <span class="token parameter variable">--target</span> kubernetes-application <span class="token punctuation">\\</span>
   --deployment-mode kubernetes-application <span class="token punctuation">\\</span>
   --execution-mode run-application <span class="token punctuation">\\</span>
   <span class="token parameter variable">-p</span> kubernetes.cluster-id<span class="token operator">=</span><span class="token operator">&lt;</span>cluster-id<span class="token operator">&gt;</span> <span class="token punctuation">\\</span>
   <span class="token parameter variable">-p</span> kubernetes.jobmanager.service-account<span class="token operator">=</span><span class="token operator">&lt;</span>self-defined-service-account<span class="token operator">&gt;</span> <span class="token punctuation">\\</span>
   <span class="token parameter variable">-p</span> <span class="token assign-left variable">kubernetes.container.image</span><span class="token operator">=</span><span class="token operator">&lt;</span>CustomImage<span class="token operator">&gt;</span> <span class="token punctuation">\\</span>
   <span class="token parameter variable">-p</span> <span class="token assign-left variable">kubernetes.jobmanager.cpu</span><span class="token operator">=</span><span class="token number">0.25</span> <span class="token punctuation">\\</span>
   <span class="token parameter variable">-p</span> <span class="token assign-left variable">kubernetes.taskmanager.cpu</span><span class="token operator">=</span><span class="token number">0.5</span> <span class="token punctuation">\\</span>
   <span class="token parameter variable">-p</span> <span class="token assign-left variable">jobmanager.archive.fs.dir</span><span class="token operator">=</span>hdfs:///completed-jobs/ <span class="token punctuation">\\</span>
   <span class="token parameter variable">-p</span> <span class="token assign-left variable">historyserver.web.address</span><span class="token operator">=</span><span class="token number">0.0</span>.0.0 <span class="token punctuation">\\</span>
   <span class="token parameter variable">-p</span> historyserver.web.port <span class="token number">8082</span> <span class="token punctuation">\\</span>
   <span class="token parameter variable">-p</span> historyserver.archive.fs.dir hdfs:///completed-jobs/ <span class="token punctuation">\\</span>
   <span class="token parameter variable">-p</span> historyserver.archive.fs.refresh-interval <span class="token number">10000</span> <span class="token punctuation">\\</span>
   --conf-in-base64 <span class="token operator">&lt;</span>base64 conf<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="本地测试" tabindex="-1"><a class="header-anchor" href="#本地测试" aria-hidden="true">#</a> <span id="cn_jump_test_locally">本地测试</span></h3><p>BitSail提供了一个测试脚本，用于在本地 Kubernetes 集群上运行构建的 bitSail jar。</p><p>先决条件：</p>`,7),C=a("li",null,"本地环境已经用build.sh搭建好BitSail",-1),D={href:"https://minikube.sigs.k8s.io/docs/start/",target:"_blank",rel:"noopener noreferrer"},$={href:"https://kubernetes.io/docs/tasks/tools/#kubectl",target:"_blank",rel:"noopener noreferrer"},R=t(`<p>命令:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">bash</span> testscripts/run_bitsail-locally_with_minikube.sh <span class="token parameter variable">-c</span> <span class="token operator">&lt;</span>Path of Job conf file<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2);function J(V,W){const l=i("RouterLink"),s=i("ExternalLinkIcon");return r(),p("div",null,[u,a("p",null,[n(l,{to:"/en/documents/start/deployment.html"},{default:c(()=>[e("English")]),_:1}),e(" | 简体中文")]),b,a("ol",null,[h,a("li",null,[a("p",null,[e("设置环境变量 "),m,e("。此环境变量指向环境中使用的hadoop目录。根据此环境变量，"),a("a",k,[e("bitsail"),n(s)]),e(" 脚本可生成 "),v,e("。")])])]),g,a("p",null,[e("打包完成后，产物中包含可配置flink的文件 "),a("a",_,[e("conf/bitsail.conf"),n(s)]),e(" 。 这个文件描述了系统中使用的flink环境，包括flink所在目录以及其他默认参数。")]),f,a("p",null,[e("用户可以通过 "),x,e(" 选项来将作业提交到指定的flink session。以 "),a("a",j,[e("examples/Fake_Print_Example.json"),n(s)]),e(" 为例，可以通过如下指令进行提交:")]),y,a("p",null,[e("用户可以通过 "),S,e(" 选项在本地运行作业。以 "),a("a",A,[e("examples/Fake_Print_Example.json"),n(s)]),e(" 为例，可以通过如下指令进行提交:")]),q,a("p",null,[e("以 "),a("a",O,[e("examples/Fake_hive_Example.json"),n(s)]),e(" 为例:")]),H,a("p",null,[e("若您有创见kubernetes集群相关的问题，可以查看"),a("a",I,[e("如何创建Kubernetes集群"),n(s)]),e(".")]),P,a("h3",F,[B,e(),a("span",T,[e("建立 "),a("a",E,[e("RBAC鉴权"),n(s)])])]),M,a("p",null,[a("a",L,[e("How to create and manage docker repository"),n(s)]),e(")")]),w,a("p",null,[e("Flink 提供了 history server，可以在相应的 Flink 集群关闭之后查询已完成作业的统计信息。 此外，它暴露了一套 REST API，该 API 接受 HTTP 请求并返回 JSON 格式的数据。 更多相关讯息在 "),a("a",K,[e("https://nightlies.apache.org/flink/flink-docs-release-1.11/monitoring/historyserver.html"),n(s)])]),N,a("ol",null,[C,a("li",null,[e("本地环境安装了minikube和kubectl "),a("ol",null,[a("li",null,[e("minikube安装："),a("a",D,[e("https://minikube.sigs.k8s.io/docs/start/"),n(s)])]),a("li",null,[e("kubectl安装："),a("a",$,[e("https://kubernetes.io/docs/tasks/tools/#kubectl"),n(s)])])])])]),R])}const U=o(d,[["render",J],["__file","deployment.html.vue"]]);export{U as default};
