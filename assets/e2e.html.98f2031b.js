import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t}from"./app.a6ab98b3.js";const e={},p=t(`<h1 id="end-to-end-测试" tabindex="-1"><a class="header-anchor" href="#end-to-end-测试" aria-hidden="true">#</a> End-to-End 测试</h1><p>BitSail为大部分connector添加了End-to-End(E2E)测试，下面详细介绍下如何运行测试和自己建立一个测试。</p><h2 id="_0-前置条件" tabindex="-1"><a class="header-anchor" href="#_0-前置条件" aria-hidden="true">#</a> 0. 前置条件</h2><p>E2E框架使用Docker构建测试数据源 &amp; 测试容器，所以需要先在本地安装docker。</p><h2 id="_1-当前支持测试哪些connector和数据源。" tabindex="-1"><a class="header-anchor" href="#_1-当前支持测试哪些connector和数据源。" aria-hidden="true">#</a> 1. 当前支持测试哪些connector和数据源。</h2><p>目前的E2E框架针对 V1 版本的connector进行设计，比如 <code>connector-redis</code>, <code>connector-rocketmq</code>。 但对于<code>bitsail-connectors-legacy</code>下的connector不支持测试。</p><ul><li>支持的测试样例统一在 <code>bitsail-test/bitsail-test-end-to-end/bitsail-test-e2e-connector-v1</code> 模块中进行管理。</li></ul><h2 id="_2-如何进行测试" tabindex="-1"><a class="header-anchor" href="#_2-如何进行测试" aria-hidden="true">#</a> 2. 如何进行测试</h2><h3 id="_1-本地ide运行" tabindex="-1"><a class="header-anchor" href="#_1-本地ide运行" aria-hidden="true">#</a> 1. 本地IDE运行</h3><p>如果运行中发现BitSail lib包文件缺失，可以先在本地执行build.sh脚本，再进行测试。</p><h3 id="_2-命令行运行单个测试样例" tabindex="-1"><a class="header-anchor" href="#_2-命令行运行单个测试样例" aria-hidden="true">#</a> 2. 命令行运行单个测试样例</h3><p>可以通过脚本 <code>test-e2e.sh</code> 运行指定测试样例，例如:</p><p><code>bash test-e2e.sh bitsail-test-e2e-connector-v1-clickhouse</code></p><h3 id="_3-命令行运行所有测试样例" tabindex="-1"><a class="header-anchor" href="#_3-命令行运行所有测试样例" aria-hidden="true">#</a> 3. 命令行运行所有测试样例</h3><p>通过maven命令进行测试:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mvn clean verify <span class="token parameter variable">-DskipUT</span><span class="token operator">=</span>true <span class="token parameter variable">-DskipITCase</span><span class="token operator">=</span>true <span class="token parameter variable">-DskipE2E</span><span class="token operator">=</span>false -D<span class="token string">&quot;checkstyle.skip&quot;</span><span class="token operator">=</span>true -D<span class="token string">&quot;license.skipAddThirdParty&quot;</span><span class="token operator">=</span>true --no-snapshot-updates <span class="token parameter variable">-am</span> <span class="token parameter variable">-P</span> _maven.oracle.com_
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-如何编写一个测试样例" tabindex="-1"><a class="header-anchor" href="#_3-如何编写一个测试样例" aria-hidden="true">#</a> 3. 如何编写一个测试样例</h2><h3 id="_1-准备测试数据源" tabindex="-1"><a class="header-anchor" href="#_1-准备测试数据源" aria-hidden="true">#</a> 1. 准备测试数据源</h3><p>目前已有一些测试数据源在 <code>bitsail-test/bitsail-test-end-to-end/bitsail-test-e2e-connector-v1</code> 模块中进行了支持。</p><p>如果用户需要测试的conenctor所关联的数据源并未实现，则需要先实现一个测试数据源。</p><h3 id="_2-准备测试脚本" tabindex="-1"><a class="header-anchor" href="#_2-准备测试脚本" aria-hidden="true">#</a> 2. 准备测试脚本</h3><p>以redis为例，可以准备如下脚本:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token property">&quot;common&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token property">&quot;job_id&quot;</span><span class="token operator">:</span> <span class="token number">-2413</span><span class="token punctuation">,</span>
       <span class="token property">&quot;job_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bitsail_fake_to_redis_e2e_test&quot;</span><span class="token punctuation">,</span>
       <span class="token property">&quot;instance_id&quot;</span><span class="token operator">:</span> <span class="token number">-20413</span><span class="token punctuation">,</span>
       <span class="token property">&quot;user_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;user&quot;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token property">&quot;reader&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.bytedance.bitsail.connector.fake.source.FakeSource&quot;</span><span class="token punctuation">,</span>
       <span class="token property">&quot;total_count&quot;</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
       <span class="token property">&quot;rate&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
       <span class="token property">&quot;null_percentage&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
       <span class="token property">&quot;unique_fields&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fake_key&quot;</span><span class="token punctuation">,</span>
       <span class="token property">&quot;columns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
           <span class="token punctuation">{</span>
               <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fake_key&quot;</span><span class="token punctuation">,</span>
               <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
               <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token string">&quot;unique&quot;</span>
           <span class="token punctuation">}</span><span class="token punctuation">,</span>
           <span class="token punctuation">{</span>
               <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fake_value&quot;</span><span class="token punctuation">,</span>
               <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
           <span class="token punctuation">}</span>
       <span class="token punctuation">]</span>
       <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token property">&quot;writer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.bytedance.bitsail.connector.redis.sink.RedisSink&quot;</span><span class="token punctuation">,</span>
       <span class="token property">&quot;redis_data_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
       <span class="token property">&quot;columns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
           <span class="token punctuation">{</span>
               <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fake_key&quot;</span><span class="token punctuation">,</span>
               <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
           <span class="token punctuation">}</span><span class="token punctuation">,</span>
           <span class="token punctuation">{</span>
               <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fake_value&quot;</span><span class="token punctuation">,</span>
               <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
           <span class="token punctuation">}</span>
       <span class="token punctuation">]</span>
       <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-准备测试类" tabindex="-1"><a class="header-anchor" href="#_3-准备测试类" aria-hidden="true">#</a> 3. 准备测试类</h3><p>数据源和测试脚本准备好后，只需要读取脚本，并提交测试即可。以fake-to-redis任务为例:</p><ul><li><code>AbstractE2ETest</code>: E2E抽象类，用户可通过继承此类来使用submitFlink11Job等方法提交E2E测试作业。</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FakeToRedisE2ETest</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractE2ETest</span> <span class="token punctuation">{</span>

  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testFakeToRedis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token class-name">BitSailConfiguration</span> jobConf <span class="token operator">=</span> <span class="token class-name">BitSailConfiguration</span><span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>
        <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token class-name">Paths</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">getResource</span><span class="token punctuation">(</span><span class="token string">&quot;fake_to_redis.json&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">toURI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    jobConf<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">FakeReaderOptions</span><span class="token punctuation">.</span><span class="token constant">TOTAL_COUNT</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Check if there are 500 keys in redis.</span>
    <span class="token function">submitFlink11Job</span><span class="token punctuation">(</span>jobConf<span class="token punctuation">,</span>
        <span class="token string">&quot;test_fake_to_redis&quot;</span><span class="token punctuation">,</span>
        dataSource <span class="token operator">-&gt;</span> <span class="token class-name">Assert</span><span class="token punctuation">.</span><span class="token function">assertEquals</span><span class="token punctuation">(</span>
            <span class="token number">500</span><span class="token punctuation">,</span>
            <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">RedisDataSource</span><span class="token punctuation">)</span> dataSource<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getKeyCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","e2e.html.vue"]]);export{d as default};
