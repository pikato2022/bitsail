import{_ as s,a as l}from"./wechat_QR.453bad8a.js";import{_ as c}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as h,c as u,f as p,a as t,d as i,w as n,b as e,e as o,r as d}from"./app.8458c586.js";const g={},m=t("h1",{id:"bitsail",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#bitsail","aria-hidden":"true"},"#"),e(" BitSail")],-1),b={href:"https://github.com/bytedance/bitsail/actions/workflows/cicd.yml",target:"_blank",rel:"noopener noreferrer"},f=t("img",{src:"https://github.com/bytedance/bitsail/actions/workflows/cicd.yml/badge.svg",alt:"Build",loading:"lazy"},null,-1),_={href:"https://www.apache.org/licenses/LICENSE-2.0.html",target:"_blank",rel:"noopener noreferrer"},y=t("img",{src:"https://img.shields.io/badge/license-Apache 2-4EB1BA.svg",alt:"License",loading:"lazy"},null,-1),S={href:"https://join.slack.com/t/bitsailworkspace/shared_invite/zt-1l1vgcnlj-gPSWqggOeRHrSO5l7na2WQ",target:"_blank",rel:"noopener noreferrer"},k=t("img",{src:"https://img.shields.io/badge/slack-%23BitSail-72eff8?logo=slack&color=5DADE2&label=Join Slack",alt:"Join Slack",loading:"lazy"},null,-1),v={href:"https://bytedance.github.io/bitsail/",target:"_blank",rel:"noopener noreferrer"},w=t("img",{src:"https://img.shields.io/badge/Website-%23BitSail-blue",alt:"Website",loading:"lazy"},null,-1),x=t("h2",{id:"navigation",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#navigation","aria-hidden":"true"},"#"),e(" Navigation")],-1),L=o('<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>BitSail is ByteDance&#39;s open source data integration engine which is based on distributed architecture and provides high performance. It supports data synchronization between multiple heterogeneous data sources, and provides global data integration solutions in batch, streaming, and incremental scenarios. At present, it serves almost all business lines in ByteDance, such as Douyin, Toutiao, etc., and synchronizes hundreds of trillions of data every day.</p><h2 id="why-do-we-use-bitsail" tabindex="-1"><a class="header-anchor" href="#why-do-we-use-bitsail" aria-hidden="true">#</a> Why Do We Use BitSail</h2><p>BitSail has been widely used and supports hundreds of trillions of large traffic. At the same time, it has been verified in various scenarios such as the cloud native environment of the volcano engine and the on-premises private cloud environment.</p><p>We have accumulated a lot of experience and made a number of optimizations to improve the function of data integration</p><ul><li><p>Global Data Integration, covering batch, streaming and incremental scenarios</p></li><li><p>Distributed and cloud-native architecture, supporting horizontal scaling</p></li><li><p>High maturity in terms of accuracy, stability and performance</p></li><li><p>Rich basic functions, such as type conversion, dirty data processing, flow control, data lake integration, automatic parallelism calculation , etc.</p></li><li><p>Task running status monitoring, such as traffic, QPS, dirty data, latency, etc.</p></li></ul><h2 id="bitsail-use-scenarios" tabindex="-1"><a class="header-anchor" href="#bitsail-use-scenarios" aria-hidden="true">#</a> BitSail Use Scenarios</h2><ul><li><p>Mass data synchronization in heterogeneous data sources</p></li><li><p>Streaming and batch integration data processing capability</p></li><li><p>Data lake and warehouse integration data processing capability</p></li><li><p>High performance, high reliability data synchronization</p></li><li><p>Distributed, cloud-native architecture data integration engine</p></li></ul><h2 id="features-of-bitsail" tabindex="-1"><a class="header-anchor" href="#features-of-bitsail" aria-hidden="true">#</a> Features of BitSail</h2><ul><li><p>Low start-up cost and high flexibility</p></li><li><p>Stream-batch integration and Data lake-warehouse integration architecture, one framework covers almost all data synchronization scenarios</p></li><li><p>High-performance, massive data processing capabilities</p></li><li><p>DDL automatic synchronization</p></li><li><p>Type system, conversion between different data source types</p></li><li><p>Engine independent reading and writing interface, low development cost</p></li><li><p>Real-time display of task progress, under development</p></li><li><p>Real-time monitoring of task status</p></li></ul><h2 id="architecture-of-bitsail" tabindex="-1"><a class="header-anchor" href="#architecture-of-bitsail" aria-hidden="true">#</a> Architecture of BitSail</h2><p><img src="'+s+`" alt="" loading="lazy"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Source[Input Sources] -&gt; Framework[Data Transmission] -&gt; Sink[Output Sinks]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The data processing pipeline is as follows. First, pull the source data through Input Sources, then process it through the intermediate framework layer, and finally write the data to the target through Output Sinks</p><p>At the framework layer, we provide rich functions and take effect for all synchronization scenarios, such as dirty data collection, auto parallelism calculation, task monitoring, etc.</p><p>In data synchronization scenarios, it covers batch, streaming, and incremental data synchronization</p><p>In the Runtime layer, it supports multiple execution modes, such as yarn, local, and k8s is under development</p><h2 id="supported-connectors" tabindex="-1"><a class="header-anchor" href="#supported-connectors" aria-hidden="true">#</a> Supported Connectors</h2><table><tr><th>DataSource</th><th>Sub Modules</th><th>Reader</th><th>Writer</th></tr><tr><td>ClickHouse</td><td>-</td><td>✅</td><td>-</td></tr><tr><td>Doris</td><td>-</td><td></td><td>✅</td></tr><tr><td>Druid</td><td>-</td><td></td><td>✅</td></tr><tr><td>Elasticsearch</td><td>-</td><td></td><td>✅</td></tr><tr><td>Fake</td><td>-</td><td>✅</td><td></td></tr><tr><td>FTP/SFTP</td><td>-</td><td>✅</td><td></td></tr><tr><td>Hadoop</td><td>-</td><td>✅</td><td>✅</td></tr><tr><td>HBase</td><td>-</td><td>✅</td><td>✅</td></tr><tr><td>Hive</td><td>-</td><td>✅</td><td>✅</td></tr><tr><td>Hudi</td><td>-</td><td>✅</td><td>✅</td></tr><tr><td rowspan="4">JDBC</td><td>MySQL</td><td rowspan="4">✅</td><td rowspan="4">✅</td></tr><tr><td>Oracle</td></tr><tr><td>PostgreSQL</td></tr><tr><td>SqlServer</td></tr><tr><td>Kafka</td><td>-</td><td>✅</td><td>✅</td></tr><tr><td>Kudu</td><td>-</td><td>✅</td><td>✅</td></tr><tr><td>LarkSheet</td><td>-</td><td>✅</td><td></td></tr><tr><td>MongoDB</td><td>-</td><td>✅</td><td>✅</td></tr><tr><td>Print</td><td>-</td><td></td><td>✅</td></tr><tr><td>Redis</td><td>-</td><td></td><td>✅</td></tr><tr><td>RocketMQ</td><td>-</td><td></td><td>✅</td></tr></table>`,19),B=t("h2",{id:"community-support",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#community-support","aria-hidden":"true"},"#"),e(" Community Support")],-1),D=t("h3",{id:"slack",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#slack","aria-hidden":"true"},"#"),e(" Slack")],-1),C={href:"https://join.slack.com/t/bitsailworkspace/shared_invite/zt-1l1vgcnlj-gPSWqggOeRHrSO5l7na2WQ",target:"_blank",rel:"noopener noreferrer"},E=o('<h3 id="mailing-list" tabindex="-1"><a class="header-anchor" href="#mailing-list" aria-hidden="true">#</a> Mailing List</h3><p>Currently, BitSail community use Google Group as the mailing list provider. You need to subscribe to the mailing list before starting a conversation</p><p>Subscribe: Email to this address <code>bitsail+subscribe@googlegroups.com</code></p><p>Start a conversation: Email to this address <code>bitsail@googlegroups.com</code></p><p>Unsubscribe: Email to this address <code>bitsail+unsubscribe@googlegroups.com</code></p><h3 id="wechat-group" tabindex="-1"><a class="header-anchor" href="#wechat-group" aria-hidden="true">#</a> WeChat Group</h3><p>Welcome to scan this QR code and to join the WeChat group chat.</p><img src="'+l+'" alt="qr" width="100"><h2 id="environment-setup" tabindex="-1"><a class="header-anchor" href="#environment-setup" aria-hidden="true">#</a> Environment Setup</h2>',9),I=t("h2",{id:"deployment-guide",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#deployment-guide","aria-hidden":"true"},"#"),e(" Deployment Guide")],-1),z=t("h2",{id:"bitsail-configuration",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#bitsail-configuration","aria-hidden":"true"},"#"),e(" BitSail Configuration")],-1),A=t("h2",{id:"contributing-guide",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#contributing-guide","aria-hidden":"true"},"#"),e(" Contributing Guide")],-1),R=o('<h2 id="contributors" tabindex="-1"><a class="header-anchor" href="#contributors" aria-hidden="true">#</a> Contributors</h2><p><strong>Thanks all contributors</strong><br></p><a href="https://github.com/bytedance/bitsail/graphs/contributors"><img src="https://contrib.rocks/image?repo=bytedance/bitsail"></a><h2 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> License</h2>',4),W={href:"https://github.com/bytedance/bitsail/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"};function N(T,O){const r=d("ExternalLinkIcon"),a=d("RouterLink");return h(),u("div",null,[p(`

Copyright 2022 Bytedance Ltd. and/or its affiliates.
         
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

`),m,t("p",null,[t("a",b,[f,i(r)]),t("a",_,[y,i(r)]),t("a",S,[k,i(r)]),t("a",v,[w,i(r)])]),x,t("ul",null,[t("li",null,[i(a,{to:"/en/documents/start/"},{default:n(()=>[e("Quick Start")]),_:1})]),t("li",null,[i(a,{to:"/en/documents/connectors/"},{default:n(()=>[e("BitSail Connectors")]),_:1})]),t("li",null,[i(a,{to:"/en/documents/components/"},{default:n(()=>[e("BitSail Components")]),_:1})]),t("li",null,[i(a,{to:"/en/documents/faq/"},{default:n(()=>[e("FAQs")]),_:1})])]),L,t("p",null,[e("Documentation for "),i(a,{to:"/en/documents/connectors/"},{default:n(()=>[e("Connectors")]),_:1})]),B,D,t("p",null,[e("Join BitSail Slack channel via this "),t("a",C,[e("link"),i(r)])]),E,t("p",null,[e("Link to "),i(a,{to:"/en/documents/start/env_setup.html"},{default:n(()=>[e("Environment Setup")]),_:1}),e(".")]),I,t("p",null,[e("Link to "),i(a,{to:"/en/documents/start/deployment.html"},{default:n(()=>[e("Deployment Guide")]),_:1}),e(".")]),z,t("p",null,[e("Link to "),i(a,{to:"/en/documents/start/config.html"},{default:n(()=>[e("Configuration Guide")]),_:1}),e(".")]),A,t("p",null,[e("Link to "),i(a,{to:"/en/community/contribute.html"},{default:n(()=>[e("Contributing Guide")]),_:1}),e(".")]),R,t("p",null,[t("a",W,[e("Apache 2.0 License"),i(r)]),e(".")])])}const F=c(g,[["render",N],["__file","introduce.html.vue"]]);export{F as default};
