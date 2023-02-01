import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as o,a as e,b as t,d as l,w as s,e as r,r as a}from"./app.da453788.js";const p={},u=e("h1",{id:"selectdb-连接器",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#selectdb-连接器","aria-hidden":"true"},"#"),t(" SelectDB 连接器")],-1),g=r(`<p>SelectDB连接器支持批式往SelectDB云数仓写数据，并提供灵活地写入请求构建。</p><h2 id="依赖引入" tabindex="-1"><a class="header-anchor" href="#依赖引入" aria-hidden="true">#</a> 依赖引入</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.bytedance.bitsail<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>bitsail-connector-selectdb<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${revision}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="selectdb写入" tabindex="-1"><a class="header-anchor" href="#selectdb写入" aria-hidden="true">#</a> SelectDB写入</h2><h3 id="支持的数据类型" tabindex="-1"><a class="header-anchor" href="#支持的数据类型" aria-hidden="true">#</a> 支持的数据类型</h3><p>Selectdb 写连接器使用json或者csv格式传输数据，支持的数据类型有:</p><ul><li>CHAR</li><li>VARCHAR</li><li>TEXT</li><li>BOOLEAN</li><li>BINARY</li><li>VARBINARY</li><li>DECIMAL</li><li>DECIMALV2</li><li>INT</li><li>TINYINT</li><li>SMALLINT</li><li>INTEGER</li><li>INTERVAL_YEAR_MONTH</li><li>INTERVAL_DAY_TIME</li><li>BIGINT</li><li>LARGEINT</li><li>FLOAT</li><li>DOUBLE</li><li>DATE</li><li>DATETIME</li></ul><h3 id="主要参数" tabindex="-1"><a class="header-anchor" href="#主要参数" aria-hidden="true">#</a> 主要参数</h3><p>写连接器参数在<code>job.writer</code>中配置，实际使用时请注意路径前缀。示例:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;writer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.bytedance.bitsail.connector.selectdb.sink.SelectdbSink&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;cluster_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test_cluster&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;table_identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test_db.test_select_table&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="必需参数" tabindex="-1"><a class="header-anchor" href="#必需参数" aria-hidden="true">#</a> 必需参数</h4><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">是否必填</th><th style="text-align:left;">参数含义</th></tr></thead><tbody><tr><td style="text-align:left;">class</td><td style="text-align:left;">是</td><td style="text-align:left;">Selectdb写连接器类型, <code>com.bytedance.bitsail.connector.selectdb.sink.SelectdbSink</code></td></tr><tr><td style="text-align:left;">load_url</td><td style="text-align:left;">是</td><td style="text-align:left;">Selectdb上传数据的HTTP URL</td></tr><tr><td style="text-align:left;">jdbc_url</td><td style="text-align:left;">是</td><td style="text-align:left;">JDBC连接Selectdb的地址</td></tr><tr><td style="text-align:left;">cluster_name</td><td style="text-align:left;">是</td><td style="text-align:left;">Selectdb cluster 的名称</td></tr><tr><td style="text-align:left;">user</td><td style="text-align:left;">是</td><td style="text-align:left;">Selectdb账户</td></tr><tr><td style="text-align:left;">password</td><td style="text-align:left;">是</td><td style="text-align:left;">Selectdb密码</td></tr><tr><td style="text-align:left;">table_identifier</td><td style="text-align:left;">是</td><td style="text-align:left;">要写入Selectdb的库表，例如：test_db.test_select_table</td></tr></tbody></table><h4 id="可选参数" tabindex="-1"><a class="header-anchor" href="#可选参数" aria-hidden="true">#</a> 可选参数</h4><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">是否必填</th><th style="text-align:left;">参数枚举值</th><th style="text-align:left;">参数含义</th></tr></thead><tbody><tr><td style="text-align:left;">writer_parallelism_num</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">指定Selectdb写并发</td></tr><tr><td style="text-align:left;">sink_flush_interval_ms</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">Upsert模式下的flush间隔, 默认5000 ms</td></tr><tr><td style="text-align:left;">sink_max_retries</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">写入的最大重试次数，默认3</td></tr><tr><td style="text-align:left;">sink_buffer_size</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">写入buffer最大值，默认 1048576 bytes (1MB)</td></tr><tr><td style="text-align:left;">sink_buffer_count</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">初始化 buffer 的数量，默认为3</td></tr><tr><td style="text-align:left;">sink_enable_delete</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">是否支持delete事件同步</td></tr><tr><td style="text-align:left;">sink_write_mode</td><td style="text-align:left;">否</td><td style="text-align:left;">目前仅支持BATCH_UPSERT</td><td style="text-align:left;">写入模式</td></tr><tr><td style="text-align:left;">stream_load_properties</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">追加在streamload url后的参数，map&lt;string,string&gt;格式</td></tr><tr><td style="text-align:left;">load_contend_type</td><td style="text-align:left;">否</td><td style="text-align:left;">csv<br>json</td><td style="text-align:left;">copy-into使用的格式，默认json</td></tr><tr><td style="text-align:left;">csv_field_delimiter</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">csv格式的行内分隔符, 默认逗号 &quot;,&quot;</td></tr><tr><td style="text-align:left;">csv_line_delimiter</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">csv格式的行间分隔符, 默认 &quot;\\n&quot;</td></tr></tbody></table><h2 id="相关文档" tabindex="-1"><a class="header-anchor" href="#相关文档" aria-hidden="true">#</a> 相关文档</h2>`,15),f={href:"https://cn.selectdb.com/",target:"_blank",rel:"noopener noreferrer"};function x(y,b){const n=a("RouterLink"),d=a("ExternalLinkIcon");return c(),o("div",null,[u,e("p",null,[t("上级文档: "),l(n,{to:"/zh/documents/connectors/"},{default:s(()=>[t("connectors")]),_:1})]),g,e("p",null,[t("配置示例文档: "),l(n,{to:"/zh/documents/connectors/selectdb/selectdb-example.html"},{default:s(()=>[t("selectdb-connector-example")]),_:1})]),e("p",null,[t("SelectDB Cloud: "),e("a",f,[t("selectdb"),l(d)])])])}const _=i(p,[["render",x],["__file","selectdb.html.vue"]]);export{_ as default};
