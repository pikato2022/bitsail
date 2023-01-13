import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as p,a as n,b as t,d as a,w as e,e as i,r as c}from"./app.0aad2287.js";const r={},d=n("h1",{id:"assert-连接器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#assert-连接器","aria-hidden":"true"},"#"),t(" Assert 连接器")],-1),u=i(`<p><strong>BitSail</strong> Assert 连接器可以根据用户自定义的规则验证数据的合法性。其功能点主要包括:</p><ul><li>支持多种自定义校验规则</li></ul><h2 id="依赖引入" tabindex="-1"><a class="header-anchor" href="#依赖引入" aria-hidden="true">#</a> 依赖引入</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.bytedance.bitsail<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>connector-assert<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${revision}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>provided<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="支持的数据类型" tabindex="-1"><a class="header-anchor" href="#支持的数据类型" aria-hidden="true">#</a> 支持的数据类型</h2><ul><li>支持的基础数据类型： <ul><li>整数类型： <ul><li>tinyint</li><li>smallint</li><li>int</li><li>bigint</li></ul></li><li>浮点类型： <ul><li>float</li><li>double</li><li>decimal</li></ul></li><li>时间类型： <ul><li>timestamp</li><li>date</li></ul></li><li>字符类型： <ul><li>string</li><li>varchar</li><li>char</li></ul></li><li>布尔类型： <ul><li>boolean</li></ul></li></ul></li></ul><h3 id="主要参数" tabindex="-1"><a class="header-anchor" href="#主要参数" aria-hidden="true">#</a> 主要参数</h3><p>写连接器参数在<code>job.writer</code>中配置，实际使用时请注意路径前缀。示例:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="必需参数" tabindex="-1"><a class="header-anchor" href="#必需参数" aria-hidden="true">#</a> 必需参数</h4><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">是否必填</th><th style="text-align:left;">参数枚举值</th><th style="text-align:left;">参数含义</th></tr></thead><tbody><tr><td style="text-align:left;">class</td><td style="text-align:left;">是</td><td style="text-align:left;"></td><td style="text-align:left;">Assert写连接器类型, <code>com.bytedance.bitsail.connector.assertion.sink.AssertSink</code></td></tr><tr><td style="text-align:left;">columns</td><td style="text-align:left;">是</td><td style="text-align:left;"></td><td style="text-align:left;">指定写入的字段名和字段类型</td></tr></tbody></table><h4 id="可选参数" tabindex="-1"><a class="header-anchor" href="#可选参数" aria-hidden="true">#</a> 可选参数</h4><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">是否必填</th><th style="text-align:left;">参数枚举值</th><th style="text-align:left;">参数含义</th></tr></thead><tbody><tr><td style="text-align:left;">writer_parallelism_num</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">指定Assert写并发数</td></tr><tr><td style="text-align:left;">row_rules</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">自定义行校验规则</td></tr><tr><td style="text-align:left;">column_rules</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">自定义列校验规则</td></tr></tbody></table><h4 id="校验规则" tabindex="-1"><a class="header-anchor" href="#校验规则" aria-hidden="true">#</a> 校验规则</h4><table><thead><tr><th style="text-align:left;">规则</th><th style="text-align:left;">含义</th><th style="text-align:left;">参数类型</th></tr></thead><tbody><tr><td style="text-align:left;">min_row</td><td style="text-align:left;">最小行数</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:left;">max_row</td><td style="text-align:left;">最大行数</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:left;">not_null</td><td style="text-align:left;">是否非空</td><td style="text-align:left;">boolean</td></tr><tr><td style="text-align:left;">min</td><td style="text-align:left;">数据的最小值</td><td style="text-align:left;">double</td></tr><tr><td style="text-align:left;">max</td><td style="text-align:left;">数据的最大值</td><td style="text-align:left;">double</td></tr><tr><td style="text-align:left;">min_len</td><td style="text-align:left;">字符串最小长度</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:left;">max_len</td><td style="text-align:left;">字符串最大长度</td><td style="text-align:left;">int</td></tr></tbody></table><h4 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h4><ul><li>若声明了 <code>row_rules</code>，则 <code>Assert Sink</code> 的并行度会被强制设置为 <code>1</code>，自定义的 <code>writer_parallelism_num</code> 参数值会失效。</li></ul><h2 id="相关文档" tabindex="-1"><a class="header-anchor" href="#相关文档" aria-hidden="true">#</a> 相关文档</h2>`,18);function k(g,m){const s=c("RouterLink");return o(),p("div",null,[d,n("p",null,[t("上级文档："),a(s,{to:"/zh/documents/connectors/"},{default:e(()=>[t("连接器")]),_:1})]),u,n("p",null,[t("配置示例文档："),a(s,{to:"/zh/documents/connectors/assert/assert-example.html"},{default:e(()=>[t("Assert 连接器示例")]),_:1})])])}const b=l(r,[["render",k],["__file","assert.html.vue"]]);export{b as default};
