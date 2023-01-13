import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as p,a as n,b as t,d as s,w as e,e as i,r}from"./app.0aad2287.js";const c={},d=n("h1",{id:"assert-connector",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#assert-connector","aria-hidden":"true"},"#"),t(" Assert connector")],-1),u=i(`<p><strong>BitSail</strong> Assert connector can validate data against user-defined rules. The main function points are as follows:</p><ul><li>Support multiple custom check rules</li></ul><h2 id="maven-dependency" tabindex="-1"><a class="header-anchor" href="#maven-dependency" aria-hidden="true">#</a> Maven dependency</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.bytedance.bitsail<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>connector-assert<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${revision}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>provided<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="supported-data-types" tabindex="-1"><a class="header-anchor" href="#supported-data-types" aria-hidden="true">#</a> Supported data types</h2><ul><li>Basic data types supported: <ul><li>Integer type: <ul><li>tinyint</li><li>smallint</li><li>int</li><li>bigint</li></ul></li><li>Float type: <ul><li>float</li><li>double</li><li>decimal</li></ul></li><li>Time type: <ul><li>timestamp</li><li>date</li></ul></li><li>String type: <ul><li>string</li><li>varchar</li><li>char</li></ul></li><li>Bool type: <ul><li>boolean</li></ul></li></ul></li></ul><h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h3><p>The following mentioned parameters should be added to <code>job.writer</code> block when using, for example:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;writer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.bytedance.bitsail.connector.assertion.sink.AssertSink&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;columns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;price&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;row_rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;min_row&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_row&quot;</span><span class="token operator">:</span> <span class="token number">20</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;column_rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;not_null&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token property">&quot;min_len&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;max_len&quot;</span><span class="token operator">:</span> <span class="token number">1000</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;not_null&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">180</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="necessary-parameters" tabindex="-1"><a class="header-anchor" href="#necessary-parameters" aria-hidden="true">#</a> Necessary parameters</h4><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Required</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">class</td><td style="text-align:left;">yes</td><td style="text-align:left;"></td><td style="text-align:left;">Assert writer&#39;s class name, <code>com.bytedance.bitsail.connector.assertion.sink.AssertSink</code></td></tr><tr><td style="text-align:left;">columns</td><td style="text-align:left;">yes</td><td style="text-align:left;"></td><td style="text-align:left;">The name and type of columns to write</td></tr></tbody></table><h4 id="optional-parameters" tabindex="-1"><a class="header-anchor" href="#optional-parameters" aria-hidden="true">#</a> Optional parameters</h4><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Required</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">writer_parallelism_num</td><td style="text-align:left;">no</td><td style="text-align:left;"></td><td style="text-align:left;">Writer parallelism num</td></tr><tr><td style="text-align:left;">row_rules</td><td style="text-align:left;">no</td><td style="text-align:left;"></td><td style="text-align:left;">Custom row check rule</td></tr><tr><td style="text-align:left;">column_rules</td><td style="text-align:left;">no</td><td style="text-align:left;"></td><td style="text-align:left;">Custom column check rule</td></tr></tbody></table><h4 id="check-rules" tabindex="-1"><a class="header-anchor" href="#check-rules" aria-hidden="true">#</a> Check rules</h4><table><thead><tr><th style="text-align:left;">Rule</th><th style="text-align:left;">Description</th><th style="text-align:left;">Parameter Type</th></tr></thead><tbody><tr><td style="text-align:left;">min_row</td><td style="text-align:left;">The minimum number of rows</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:left;">max_row</td><td style="text-align:left;">The maximum number of rows</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:left;">not_null</td><td style="text-align:left;">The value can&#39;t be null</td><td style="text-align:left;">boolean</td></tr><tr><td style="text-align:left;">min</td><td style="text-align:left;">The minimum value of data</td><td style="text-align:left;">double</td></tr><tr><td style="text-align:left;">max</td><td style="text-align:left;">The maximum value of data</td><td style="text-align:left;">double</td></tr><tr><td style="text-align:left;">min_len</td><td style="text-align:left;">The minimum string length of a string data</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:left;">max_len</td><td style="text-align:left;">The maximum string length of a string data</td><td style="text-align:left;">int</td></tr></tbody></table><h4 id="descriptions" tabindex="-1"><a class="header-anchor" href="#descriptions" aria-hidden="true">#</a> Descriptions</h4><ul><li>If <code>row_rules</code> is declared, the parallelism of <code>Assert Sink</code> will be forced to <code>1</code> and the custom <code>writer_parallelism_num</code> parameter value will be disabled.</li></ul><h2 id="related-documents" tabindex="-1"><a class="header-anchor" href="#related-documents" aria-hidden="true">#</a> Related documents</h2>`,18);function m(k,g){const a=r("RouterLink");return o(),p("div",null,[d,n("p",null,[t("Parent document: "),s(a,{to:"/en/documents/connectors/"},{default:e(()=>[t("Connectors")]),_:1})]),u,n("p",null,[t("Configuration examples: "),s(a,{to:"/en/documents/connectors/assert/assert-example.html"},{default:e(()=>[t("Assert connector example")]),_:1})])])}const v=l(c,[["render",m],["__file","assert.html.vue"]]);export{v as default};
