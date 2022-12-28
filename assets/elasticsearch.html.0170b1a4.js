import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as d,a as e,b as t,d as l,w as n,e as r,r as o}from"./app.8458c586.js";const c={},f=e("h1",{id:"elasticsearch-connector",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#elasticsearch-connector","aria-hidden":"true"},"#"),t(" Elasticsearch connector")],-1),u=r(`<h2 id="main-function" tabindex="-1"><a class="header-anchor" href="#main-function" aria-hidden="true">#</a> Main function</h2><p>The Elasticsearch connector can be used in stream and batch scenarios, providing the ability to write elasticsearch in <code>&#39;At Least Once&#39;</code> mode, and providing flexible write request construction.</p><h2 id="supported-version" tabindex="-1"><a class="header-anchor" href="#supported-version" aria-hidden="true">#</a> Supported version</h2><ul><li>Support Elasticsearch 7.X</li></ul><h2 id="maven-depedency" tabindex="-1"><a class="header-anchor" href="#maven-depedency" aria-hidden="true">#</a> Maven depedency</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.bytedance.bitsail<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>connector-elasticsearch<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${revision}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="supported-data-types" tabindex="-1"><a class="header-anchor" href="#supported-data-types" aria-hidden="true">#</a> Supported data types</h2><p>Basic data types supported by Elasticsearch connectors:</p><ul><li>String type: <ul><li>string</li><li>text</li><li>keyword</li></ul></li><li>Integer type: <ul><li>long</li><li>integer</li><li>short</li><li>byte</li></ul></li><li>Float type: <ul><li>double</li><li>float</li><li>half_float</li><li>scaled_float</li></ul></li><li>Bool type: <ul><li>boolean</li></ul></li><li>Binary type: <ul><li>binary</li></ul></li><li>Date type: <ul><li>date</li></ul></li></ul><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><p>Users can add parameters to <code>job.writer</code> block in task configuration files.</p><h3 id="necessary-parameters" tabindex="-1"><a class="header-anchor" href="#necessary-parameters" aria-hidden="true">#</a> Necessary parameters</h3><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">class</td><td style="text-align:left;">-</td><td style="text-align:left;"></td><td style="text-align:left;">Class name of Elasticsearch connector，<code>com.bytedance.bitsail.connector.elasticsearch.sink.ElasticsearchSink</code></td></tr><tr><td style="text-align:left;">es_hosts</td><td style="text-align:left;">-</td><td style="text-align:left;"></td><td style="text-align:left;">Address list for Elasticsearch handling REST requests</td></tr><tr><td style="text-align:left;">es_index</td><td style="text-align:left;">-</td><td style="text-align:left;"></td><td style="text-align:left;">Elasticsearch index</td></tr><tr><td style="text-align:left;">columns</td><td style="text-align:left;">-</td><td style="text-align:left;"></td><td style="text-align:left;">Describing fields&#39; names and types</td></tr></tbody></table><h3 id="optional-parameters" tabindex="-1"><a class="header-anchor" href="#optional-parameters" aria-hidden="true">#</a> Optional parameters</h3><h4 id="general-optional-parameters" tabindex="-1"><a class="header-anchor" href="#general-optional-parameters" aria-hidden="true">#</a> General optional parameters</h4><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">writer_parallelism_num</td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">writer parallelism</td></tr></tbody></table><h4 id="parameters-for-construct-rest-request" tabindex="-1"><a class="header-anchor" href="#parameters-for-construct-rest-request" aria-hidden="true">#</a> Parameters for construct REST request</h4><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">request_path_prefix</td><td style="text-align:left;">-</td><td style="text-align:left;"></td><td style="text-align:left;">The path prefix used by the http client when making a request</td></tr><tr><td style="text-align:left;">connection_request_timeout_ms</td><td style="text-align:left;">10000</td><td style="text-align:left;"></td><td style="text-align:left;">Timeout (ms) used by http connection manager when requesting a connection</td></tr><tr><td style="text-align:left;">connection_timeout_ms</td><td style="text-align:left;">10000</td><td style="text-align:left;"></td><td style="text-align:left;">Http connection establishment timeout (ms)</td></tr><tr><td style="text-align:left;">socket_timeout_ms</td><td style="text-align:left;">60000</td><td style="text-align:left;"></td><td style="text-align:left;">Socket timeout for http connection (ms)</td></tr></tbody></table><h4 id="parameters-for-bulk-request" tabindex="-1"><a class="header-anchor" href="#parameters-for-bulk-request" aria-hidden="true">#</a> Parameters for bulk request</h4><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">bulk_flush_max_actions</td><td style="text-align:left;">300</td><td style="text-align:left;"></td><td style="text-align:left;">When the number of requests reaches, execute a bulk operation</td></tr><tr><td style="text-align:left;">bulk_flush_max_size_mb</td><td style="text-align:left;">10</td><td style="text-align:left;"></td><td style="text-align:left;">When the request data size (in MB) reaches, execute a bulk operation</td></tr><tr><td style="text-align:left;">bulk_flush_interval_ms</td><td style="text-align:left;">10000</td><td style="text-align:left;"></td><td style="text-align:left;">How often to execute bulk operation (unit: ms)</td></tr><tr><td style="text-align:left;">bulk_backoff_policy</td><td style="text-align:left;">EXPONENTIAL</td><td style="text-align:left;">CONSTANT<br>EXPONENTIAL<br>NONE</td><td style="text-align:left;">Backoff policy when bulk operation fails:<br>1. <code>CONSTANT</code>: fixed delay backoff<br>2. <code>EXPONENTAIL</code>: exponential backoff<br>3. <code>NONE</code>: no backoff</td></tr><tr><td style="text-align:left;">bulk_backoff_delay_ms</td><td style="text-align:left;">100</td><td style="text-align:left;"></td><td style="text-align:left;">Failure retry delay (ms) of bulk operation</td></tr><tr><td style="text-align:left;">bulk_backoff_max_retry_count</td><td style="text-align:left;">5</td><td style="text-align:left;"></td><td style="text-align:left;">The maximum number of failed retries for bulk operations</td></tr></tbody></table><h4 id="parameters-for-building-actionrequests" tabindex="-1"><a class="header-anchor" href="#parameters-for-building-actionrequests" aria-hidden="true">#</a> Parameters for building ActionRequests</h4><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">es_operation_type</td><td style="text-align:left;">&quot;index&quot;</td><td style="text-align:left;">&quot;index&quot;<br>&quot;create&quot;<br>&quot;update&quot;<br>&quot;upsert&quot;<br>&quot;delete&quot;</td><td style="text-align:left;">Type of ActionRequest</td></tr><tr><td style="text-align:left;">es_dynamic_index_field</td><td style="text-align:left;">-</td><td style="text-align:left;"></td><td style="text-align:left;">Get the index name of this data to insert from this field</td></tr><tr><td style="text-align:left;">es_operation_type_field</td><td style="text-align:left;">-</td><td style="text-align:left;"></td><td style="text-align:left;">Get the ActionRequest type of this data from this field</td></tr><tr><td style="text-align:left;">es_version_field</td><td style="text-align:left;">-</td><td style="text-align:left;"></td><td style="text-align:left;">Get the version information of this data from this field</td></tr><tr><td style="text-align:left;">es_id_fields</td><td style="text-align:left;">&quot;&quot;</td><td style="text-align:left;"></td><td style="text-align:left;">Get the document ID from this field.<br>The format is <code>&#39;,&#39;</code> separated string, <i>e.g.</i> <code>&quot;1,2&quot;</code></td></tr><tr><td style="text-align:left;">doc_exclude_fields</td><td style="text-align:left;">&quot;&quot;</td><td style="text-align:left;"></td><td style="text-align:left;">When creating a document, ignore these fields. The format is <code>&#39;,&#39;</code> separated string, for example: <code>&quot;1,2&quot;</code></td></tr><tr><td style="text-align:left;">ignore_blank_value</td><td style="text-align:left;">false</td><td style="text-align:left;"></td><td style="text-align:left;">Whether to ignore fields with null values when creating documents</td></tr><tr><td style="text-align:left;">flatten_map</td><td style="text-align:left;">false</td><td style="text-align:left;"></td><td style="text-align:left;">Whether to expand the <code>Map</code> type data into the document when creating the document</td></tr><tr><td style="text-align:left;">id_delimiter</td><td style="text-align:left;"><code>#</code></td><td style="text-align:left;"></td><td style="text-align:left;">The separator used when merging multiple fields into one document id</td></tr><tr><td style="text-align:left;">json_serializer_features</td><td style="text-align:left;">-</td><td style="text-align:left;"></td><td style="text-align:left;">Json features used when building json strings. The format is <code>&#39;,&#39;</code> separated string, for example: <code>&quot;QuoteFieldNames,UseSingleQuotes&quot;</code></td></tr></tbody></table><h2 id="related-documents" tabindex="-1"><a class="header-anchor" href="#related-documents" aria-hidden="true">#</a> Related documents</h2>`,23);function h(p,g){const a=o("RouterLink");return i(),d("div",null,[f,e("p",null,[t("Parent document: "),l(a,{to:"/en/documents/connectors/"},{default:n(()=>[t("Connectors")]),_:1})]),u,e("p",null,[t("Configuration examples: "),l(a,{to:"/en/documents/connectors/elasticsearch/elasticsearch-example.html"},{default:n(()=>[t("Elasticsearch connector example")]),_:1})])])}const m=s(c,[["render",h],["__file","elasticsearch.html.vue"]]);export{m as default};
