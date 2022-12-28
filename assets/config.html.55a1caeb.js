import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as r,a as s,d as a,w as e,b as n,e as i,r as c}from"./app.8458c586.js";const l={},u=s("h1",{id:"任务配置说明",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#任务配置说明","aria-hidden":"true"},"#"),n(" 任务配置说明")],-1),d=i(`<p><em><strong>BitSail</strong></em> 完整配置脚本是由一个 JSON 组成的，完整示意结构如下所示：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;job&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;common&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        ...
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;reader&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        ...
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;writer&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        ...
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>模块名称</th><th>参数含义</th></tr></thead><tbody><tr><td>common</td><td>主要负责设置一些通用的参数配置，如标注作业的元数据信息，标注作业所需要插件的实现方案等。</td></tr><tr><td>reader/readers</td><td>主要负责设置源数据侧相关参数信息等。以MySQL数据源进行举例，需要在reader的子域下设置JDBC的连接信息，操作的库表信息等。</td></tr><tr><td>writer/writers</td><td>主要负责设置目标数据源的相关参数等。以Hive目标数据源为例，需要在writer的子域下设置Hive的metastore连接信息，设置Hive库表、分区的相关信息等。</td></tr></tbody></table><h2 id="common-模块" tabindex="-1"><a class="header-anchor" href="#common-模块" aria-hidden="true">#</a> Common 模块</h2><p>示例：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;job&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;common&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;user_name&quot;</span><span class="token operator">:</span><span class="token string">&quot;bytedance_dts&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;instance_id&quot;</span><span class="token operator">:</span>-1L<span class="token punctuation">,</span>
            <span class="token property">&quot;job_id&quot;</span><span class="token operator">:</span>-1L<span class="token punctuation">,</span>
            <span class="token property">&quot;job_name&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;min_parallelism&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;max_parallelism&quot;</span><span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token property">&quot;parallelism_chain&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;max_dirty_records_stored_num&quot;</span><span class="token operator">:</span><span class="token number">50</span><span class="token punctuation">,</span>
            <span class="token property">&quot;dirty_records_count_threshold&quot;</span><span class="token operator">:</span><span class="token number">-1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;dirty_records_percentage_threshold&quot;</span><span class="token operator">:</span><span class="token number">-1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p><p>元数据配置：任务的基本信息配置</p><table><thead><tr><th>参数名称</th><th>是否必须</th><th>默认值</th><th>参数含义</th><th>示例</th></tr></thead><tbody><tr><td>user_name</td><td>TRUE</td><td>-</td><td>提交作业的用户</td><td>bitsail</td></tr><tr><td>job_id</td><td>TRUE</td><td>-</td><td>提交作业的id</td><td>12345</td></tr><tr><td>instance_id</td><td>TRUE</td><td>-</td><td>作业的实例id</td><td>12345</td></tr><tr><td>job_name</td><td>TRUE</td><td>-</td><td>作业的名称，用于指定作业在外部资源provider的名称；</td><td>bitsail_conf</td></tr></tbody></table><p>并行度配置：配置任务的读写并发信息</p><table><thead><tr><th>参数名称</th><th>是否必须</th><th>默认值</th><th>参数含义</th><th>示例</th></tr></thead><tbody><tr><td>min_parallelism</td><td>FALSE</td><td>1</td><td>作业最小的并行度，自动计算的并行度会大于等于最小并行度</td><td>2</td></tr><tr><td>max_parallelism</td><td>FALSE</td><td>512</td><td>作业最大的并行度，自动计算的并行度会小于等于最大并行度</td><td>2</td></tr><tr><td>parallelism_chain</td><td>FALSE</td><td>FALSE</td><td>算子之间是否需要统一并行度。如果开启该设计，会选择reader和writer之间最小的并行度来进行设置。</td><td>2</td></tr></tbody></table><p>脏数据配置：任务的脏数据配置</p><table><thead><tr><th>参数名称</th><th>是否必须</th><th>默认值</th><th>参数含义</th><th>示例</th></tr></thead><tbody><tr><td>max_dirty_records_stored_num</td><td>FALSE</td><td>50</td><td>每个task级别脏数据的收集数量，默认为50条</td><td>50</td></tr><tr><td>dirty_records_count_threshold</td><td>FALSE</td><td>-1</td><td>整体脏数据的阈值设置，如果在传输结束后发现脏数据多于该设置，作业失败。</td><td>-1</td></tr><tr><td>dirty_record_percentage_threshold</td><td>FALSE</td><td>-1</td><td>整体脏数据占整体传输数据的比例，如果传输结束后发现脏数据的比例大于该阈值，作业失败。</td><td>-1</td></tr></tbody></table><h2 id="reader-模块" tabindex="-1"><a class="header-anchor" href="#reader-模块" aria-hidden="true">#</a> Reader 模块</h2><p>字节跳动数据集成目前支持多数据源写入的同时读取，在支持多数据源读取的场景下，要求上游数据源的输入数据schema需要保持一致，下面介绍Reader模块的具体信息。</p><p>示例：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;job&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;reader&quot;</span><span class="token operator">:</span>
   
            <span class="token punctuation">{</span>
                <span class="token property">&quot;class&quot;</span><span class="token operator">:</span><span class="token string">&quot;com.bytedance.bitsail.connector.legacy.jdbc.source.JDBCInputFormat&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;columns&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;bigint&quot;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;varchar&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">&quot;table_name&quot;</span><span class="token operator">:</span><span class="token string">&quot;your table name&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;db_name&quot;</span><span class="token operator">:</span><span class="token string">&quot;your database name&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;password&quot;</span><span class="token operator">:</span><span class="token string">&quot;your database connection password&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;user_name&quot;</span><span class="token operator">:</span><span class="token string">&quot;your database connection username&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;split_pk&quot;</span><span class="token operator">:</span><span class="token string">&quot;your table primary key&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;connections&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;slaves&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                            <span class="token punctuation">{</span>
                                <span class="token property">&quot;port&quot;</span><span class="token operator">:</span><span class="token string">&quot;your connection&#39;s port&quot;</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;db_url&quot;</span><span class="token operator">:</span><span class="token string">&quot;your connection&#39;s url&quot;</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;host&quot;</span><span class="token operator">:</span><span class="token string">&quot;your connection&#39;s host&quot;</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">]</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;shard_num&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;master&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                            <span class="token property">&quot;port&quot;</span><span class="token operator">:</span><span class="token string">&quot;your connection&#39;s port&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;db_url&quot;</span><span class="token operator">:</span><span class="token string">&quot;your connection&#39;s url&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;host&quot;</span><span class="token operator">:</span><span class="token string">&quot;your connection&#39;s host&quot;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通用参数：</p><table><thead><tr><th>参数名称</th><th>是否必须</th><th>默认值</th><th>参数含义</th><th>示例</th></tr></thead><tbody><tr><td>class</td><td>TRUE</td><td>-</td><td>标识使用的connector的 class 名称</td><td>com.bytedance.bitsail.connector.legacy.jdbc.source.JDBCInputFormat</td></tr><tr><td>reader_parallelism_num</td><td>FALSE</td><td>-</td><td>指定该Reader的并行度，默认情况下数据引擎会按照其实现逻辑计算得到一个并行度。</td><td>2</td></tr></tbody></table><p>其他参数详情：参考具体 connector 实现参数</p><h2 id="writer-模块" tabindex="-1"><a class="header-anchor" href="#writer-模块" aria-hidden="true">#</a> Writer 模块</h2><p>字节跳动数据集成目前支持同时写出到多个目标数据源，多个写出的目标数据源的schema需要保持一致。下面介绍Writer模块的具体组成信息。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;writer&quot;</span><span class="token operator">:</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;class&quot;</span><span class="token operator">:</span><span class="token string">&quot;com.bytedance.bitsail.connector.legacy.hive.sink.HiveParquetOutputFormat&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;db_name&quot;</span><span class="token operator">:</span><span class="token string">&quot;your hive database&#39; name.&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;table_name&quot;</span><span class="token operator">:</span><span class="token string">&quot;your hive database&#39; table name.&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;partition&quot;</span><span class="token operator">:</span><span class="token string">&quot;your partition which want to add.&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;metastore_properties&quot;</span><span class="token operator">:</span><span class="token string">&quot;{\\&quot;hive.metastore.uris\\&quot;:\\&quot;thrift://localhost:9083\\&quot;}&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;columns&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;bigint&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;write_mode&quot;</span><span class="token operator">:</span><span class="token string">&quot;overwrite&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;writer_parallelism_num&quot;</span><span class="token operator">:</span><span class="token number">1</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通用参数：</p><table><thead><tr><th>参数名称</th><th>是否必须</th><th>默认值</th><th>参数含义</th><th>示例</th></tr></thead><tbody><tr><td>class</td><td>TRUE</td><td>-</td><td>标识使用的connector的 class 名称</td><td>com.bytedance.bitsail.connector.legacy.hive.sink.HiveParquetOutputFormat</td></tr><tr><td>writer_parallelism_num</td><td>FALSE</td><td>-</td><td>指定该Writer的并行度，默认情况下数据引擎会按照其实现逻辑计算得到一个并行度。</td><td>2</td></tr></tbody></table>`,25);function k(v,m){const t=c("RouterLink");return p(),r("div",null,[u,s("p",null,[a(t,{to:"/en/documents/start/config.html"},{default:e(()=>[n("English")]),_:1}),n(" | 简体中文")]),d,s("p",null,[n("其他参数详情：参考具体 "),a(t,{to:"/zh/documents/connectors/"},{default:e(()=>[n("connector")]),_:1}),n(" 实现参数")])])}const h=o(l,[["render",k],["__file","config.html.vue"]]);export{h as default};
