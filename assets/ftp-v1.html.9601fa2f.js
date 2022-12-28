import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as r,a as e,b as t,d as a,w as n,e as s,r as o}from"./app.8458c586.js";const c={},p=e("h1",{id:"ftp-sftp-v1-连接器",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ftp-sftp-v1-连接器","aria-hidden":"true"},"#"),t(" FTP/SFTP-v1 连接器")],-1),h=s(`<h2 id="主要功能" tabindex="-1"><a class="header-anchor" href="#主要功能" aria-hidden="true">#</a> 主要功能</h2><p>连接器可用于批式场景下的 FTP/SFTP 服务器上文件读取。其功能点主要包括:</p><ul><li>支持同时读取多个目录下的文件</li><li>支持读取多种格式的文件</li></ul><h2 id="依赖引入" tabindex="-1"><a class="header-anchor" href="#依赖引入" aria-hidden="true">#</a> 依赖引入</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.bytedance.bitsail<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>connector-ftp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${revision}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="支持的数据类型" tabindex="-1"><a class="header-anchor" href="#支持的数据类型" aria-hidden="true">#</a> 支持的数据类型</h2><ul><li>支持的基础数据类型： <ul><li>整数类型： <ul><li>tinyint</li><li>smallint</li><li>int</li><li>bigint</li></ul></li><li>浮点类型： <ul><li>float</li><li>double</li><li>decimal</li></ul></li><li>时间类型： <ul><li>timestamp</li><li>date</li></ul></li><li>字符类型： <ul><li>string</li><li>varchar</li><li>char</li></ul></li><li>布尔类型： <ul><li>boolean</li></ul></li><li>二进制类型： <ul><li>binary</li></ul></li></ul></li><li>支持的复杂数据类型包括： <ul><li>map</li><li>array</li></ul></li></ul><h2 id="主要参数" tabindex="-1"><a class="header-anchor" href="#主要参数" aria-hidden="true">#</a> 主要参数</h2>`,8),u=e("code",null,"job.reader",-1),f=s('<h3 id="必需参数" tabindex="-1"><a class="header-anchor" href="#必需参数" aria-hidden="true">#</a> 必需参数</h3><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">参数是否必需</th><th style="text-align:left;">参数枚举值</th><th style="text-align:left;">参数含义</th></tr></thead><tbody><tr><td style="text-align:left;">class</td><td style="text-align:left;">是</td><td style="text-align:left;"></td><td style="text-align:left;">读连接器类名，只能为 <code>com.bytedance.bitsail.connector.ftp.source.FtpSource</code></td></tr><tr><td style="text-align:left;">path_list</td><td style="text-align:left;">是</td><td style="text-align:left;"></td><td style="text-align:left;">指定读入文件的路径。可指定多个路径，使用 <code>&#39;,&#39;</code>分隔</td></tr><tr><td style="text-align:left;">content_type</td><td style="text-align:left;">是</td><td style="text-align:left;">JSON/CSV</td><td style="text-align:left;">指定读入文件的格式，详情参考<a href="#jump_format">支持的文件格式</a></td></tr><tr><td style="text-align:left;">columns</td><td style="text-align:left;">是</td><td style="text-align:left;"></td><td style="text-align:left;">数据字段名称及类型</td></tr><tr><td style="text-align:left;">port</td><td style="text-align:left;">是</td><td style="text-align:left;"></td><td style="text-align:left;">服务器端口，FTP 通常为21，SFTP 为22</td></tr><tr><td style="text-align:left;">host</td><td style="text-align:left;">是</td><td style="text-align:left;"></td><td style="text-align:left;">服务器主机地址</td></tr><tr><td style="text-align:left;">user</td><td style="text-align:left;">是</td><td style="text-align:left;"></td><td style="text-align:left;">用户名</td></tr><tr><td style="text-align:left;">password</td><td style="text-align:left;">是</td><td style="text-align:left;"></td><td style="text-align:left;">密码</td></tr><tr><td style="text-align:left;">protocol</td><td style="text-align:left;">是</td><td style="text-align:left;">FTP/SFTP</td><td style="text-align:left;">文件传输协议</td></tr><tr><td style="text-align:left;">success_file_path</td><td style="text-align:left;">是</td><td style="text-align:left;"></td><td style="text-align:left;">SUCCESS 标签文件路径(检查默认开启，文件存在才会执行任务)</td></tr></tbody></table><h3 id="可选参数" tabindex="-1"><a class="header-anchor" href="#可选参数" aria-hidden="true">#</a> 可选参数</h3><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">参数是否必需</th><th>默认值</th><th style="text-align:left;">参数枚举值</th><th style="text-align:left;">参数含义</th></tr></thead><tbody><tr><td style="text-align:left;">connect_pattern</td><td style="text-align:left;">否</td><td>PASV(FTP)/NULL(SFTP)</td><td style="text-align:left;">PASV/PORT/NULL</td><td style="text-align:left;">连接模式，FTP 协议下可为 PASV 或 PORT，SFTP 协议下为 NULL</td></tr><tr><td style="text-align:left;">time_out</td><td style="text-align:left;">否</td><td>5000ms</td><td style="text-align:left;"></td><td style="text-align:left;">连接超时</td></tr><tr><td style="text-align:left;">enable_success_file_check</td><td style="text-align:left;">否</td><td>True</td><td style="text-align:left;"></td><td style="text-align:left;">默认开启，必须有 SUCCESS 标签文件存在才会执行任务</td></tr><tr><td style="text-align:left;">max_retry_time</td><td style="text-align:left;">否</td><td>60</td><td style="text-align:left;"></td><td style="text-align:left;">检查 SUCCESS 标签文件次数</td></tr><tr><td style="text-align:left;">retry_interval_ms</td><td style="text-align:left;">否</td><td>60s</td><td style="text-align:left;"></td><td style="text-align:left;">检查 SUCCESS 标签文件间隔</td></tr></tbody></table><h2 id="支持的文件格式" tabindex="-1"><a class="header-anchor" href="#支持的文件格式" aria-hidden="true">#</a> <span id="jump_format">支持的文件格式</span></h2><p>支持对以下格式的文件进行解读(配置参数<code>content_type</code>):</p><ul><li><a href="#jump_json">JSON</a></li><li><a href="#jump_csv">CSV</a></li></ul><h3 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> <span id="jump_json">JSON</span></h3><p>支持对json格式的文本文件进行解析，要求每行均为标准的json字符串。 支持以下参数对json解析方式进行调整:</p><table><thead><tr><th>参数名称</th><th>参数默认值</th><th>参数说明</th></tr></thead><tbody><tr><td><code>job.reader.case_insensitive</code></td><td>false</td><td>是否对json字段中的key大小写敏感</td></tr><tr><td><code>job.reader.convert_error_column_as_null</code></td><td>false</td><td>是否将解析出错的字段置为null</td></tr></tbody></table><h3 id="csv" tabindex="-1"><a class="header-anchor" href="#csv" aria-hidden="true">#</a> <span id="jump_csv">CSV</span></h3><p>支持对 CSV 格式的文本文件进行解析，要求每行均为标准的 CSV 字符串。 支持以下参数对 CSV 解析方式进行调整：</p><table><thead><tr><th>参数名称</th><th>参数默认值</th><th>参数说明</th></tr></thead><tbody><tr><td><code>job.reader.csv_delimiter</code></td><td><code>&#39;,&#39;</code></td><td>csv分隔符</td></tr><tr><td><code>job.reader.csv_escape</code></td><td></td><td>escape字符</td></tr><tr><td><code>job.reader.csv_quote</code></td><td></td><td>quote字符</td></tr><tr><td><code>job.reader.csv_with_null_string</code></td><td></td><td>指定null字段的转化值，默认不转化</td></tr></tbody></table><h2 id="相关文档" tabindex="-1"><a class="header-anchor" href="#相关文档" aria-hidden="true">#</a> 相关文档</h2>',14);function g(x,y){const l=o("RouterLink");return i(),r("div",null,[p,e("p",null,[t("上级文档："),a(l,{to:"/zh/documents/connectors/"},{default:n(()=>[t("连接器")]),_:1})]),h,e("p",null,[t("以下参数在 "),u,t(" 中配置，配置示例请参考 "),a(l,{to:"/zh/documents/connectors/ftp/v1/ftp-v1-example.html"},{default:n(()=>[t("FTP/SFTP-v1 连接器示例")]),_:1})]),f,e("p",null,[t("配置示例文档："),a(l,{to:"/zh/documents/connectors/ftp/v1/ftp-v1-example.html"},{default:n(()=>[t("FTP/SFTP-v1 连接器示例")]),_:1})])])}const m=d(c,[["render",g],["__file","ftp-v1.html.vue"]]);export{m as default};
