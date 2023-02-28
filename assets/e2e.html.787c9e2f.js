import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as a,e}from"./app.a6ab98b3.js";const t={},o=e(`<h1 id="end-to-end-test" tabindex="-1"><a class="header-anchor" href="#end-to-end-test" aria-hidden="true">#</a> End-to-End Test</h1><p>BitSail supports End-to-End (E2E) test for most connectors.</p><h2 id="_0-prerequisite" tabindex="-1"><a class="header-anchor" href="#_0-prerequisite" aria-hidden="true">#</a> 0. Prerequisite</h2><p>E2E framework use docker to construct test data resources and test executors, so you need to install docker at first.</p><h2 id="_1-what-connectors-and-data-sources-are-supported" tabindex="-1"><a class="header-anchor" href="#_1-what-connectors-and-data-sources-are-supported" aria-hidden="true">#</a> 1. What connectors and data sources are supported?</h2><p>Curent E2E test framework is aim at connector V2, <em>e.g.</em>, <code>connector-redis</code>, <code>connector-rocketmq</code>.</p><p>Connectors under <code>bitsail-connectors-legacy</code> cannot be test.</p><ul><li>Supported test cases: <code>bitsail-test/bitsail-test-end-to-end/bitsail-test-e2e-connector-v1</code></li></ul><h2 id="_2-how-to-run-e2e-test" tabindex="-1"><a class="header-anchor" href="#_2-how-to-run-e2e-test" aria-hidden="true">#</a> 2. How to run E2E test</h2><h3 id="_1-run-in-local-ide" tabindex="-1"><a class="header-anchor" href="#_1-run-in-local-ide" aria-hidden="true">#</a> 1. Run in Local IDE</h3><p>You can directly run E2E test in local IDE. You may need to run <code>build.sh</code> beforehand.</p><h3 id="_2-run-single-case-in-console" tabindex="-1"><a class="header-anchor" href="#_2-run-single-case-in-console" aria-hidden="true">#</a> 2. Run single case in console</h3><p>You can use <code>test-e2e.sh</code> script to test specific case, for example:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">bash</span> test-e2e.sh bitsail-test-e2e-connector-v1-clickhouse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-run-all-cases" tabindex="-1"><a class="header-anchor" href="#_3-run-all-cases" aria-hidden="true">#</a> 3. Run all cases</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mvn clean verify <span class="token parameter variable">-DskipUT</span><span class="token operator">=</span>true <span class="token parameter variable">-DskipITCase</span><span class="token operator">=</span>true <span class="token parameter variable">-DskipE2E</span><span class="token operator">=</span>false -D<span class="token string">&quot;checkstyle.skip&quot;</span><span class="token operator">=</span>true -D<span class="token string">&quot;license.skipAddThirdParty&quot;</span><span class="token operator">=</span>true --no-snapshot-updates <span class="token parameter variable">-am</span> <span class="token parameter variable">-P</span> _maven.oracle.com_
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-how-to-prepare-a-test-case" tabindex="-1"><a class="header-anchor" href="#_3-how-to-prepare-a-test-case" aria-hidden="true">#</a> 3. How to prepare a test case</h2><h3 id="_1-prepare-data-source" tabindex="-1"><a class="header-anchor" href="#_1-prepare-data-source" aria-hidden="true">#</a> 1. Prepare data source</h3><p>There are some existing data sources are supported in <code>bitsail-test/bitsail-test-end-to-end/bitsail-test-e2e-connector-v1</code>.</p><p>If you cannot find target data source, then you need to implement it at first.</p><h3 id="_2-prepare-test-script" tabindex="-1"><a class="header-anchor" href="#_2-prepare-test-script" aria-hidden="true">#</a> 2. Prepare test script</h3><p>Use <code>connector-redis</code> as example, you can use the following script:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-prepare-test-class" tabindex="-1"><a class="header-anchor" href="#_3-prepare-test-class" aria-hidden="true">#</a> 3. Prepare test class</h3><p>After data sources and scripts being prepared, you only need to read the scripts and submit to test.</p><p>Take <code>fake-to-redis</code> case as an example:</p><ul><li><code>AbstractE2ETest</code>: Abstract E2E test class. Users can extend this class to submit script to E2E test executor.</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FakeToRedisE2ETest</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractE2ETest</span> <span class="token punctuation">{</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),p=[o];function c(i,l){return n(),a("div",null,p)}const d=s(t,[["render",c],["__file","e2e.html.vue"]]);export{d as default};
