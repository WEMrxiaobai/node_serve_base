(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cb3a6d12"],{3810:function(t,e,a){t.exports=a.p+"img/user.a1631c06.jpg"},"3c19":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{attrs:{gutter:15}},[a("el-col",{staticClass:"col_margin_top",attrs:{xs:24,sm:12,md:12,lg:9}},[a("el-card",{staticClass:"card_col_height"},[a("el-row",[a("el-col",{attrs:{xs:24,sm:12,md:12,lg:12}},[a("img",{staticClass:"index_img",attrs:{src:t.userImg,alt:"头像"}})]),a("el-col",{staticClass:"index_name",attrs:{xs:24,sm:12,md:12,lg:12}},[a("h2",[t._v(t._s(t.indexData.admin_name))]),a("span",[t._v("管理员")]),a("span",[t._v("权限")])])],1),a("el-row",[a("p",[a("br"),a("br")]),a("p",{staticClass:"index_xinxi"},[a("span",[t._v("上次登录时间：")]),a("span",[t._v(" "+t._s(t.timeFormat))])]),a("p",{staticClass:"index_xinxi"},[a("span",[t._v("上次IP地址：")]),a("span",[t._v(" "+t._s(t.NumberIP))])])])],1)],1),a("el-col",{staticClass:"col_margin_top",attrs:{xs:24,sm:12,md:12,lg:5}},[a("el-card",{staticClass:"card_col_height"},[a("div",{attrs:{id:"card_1"}},[a("Echarts",{style:{height:"250px",width:"auto"},attrs:{echartsData:t.option1_diQue}})],1)])],1),a("el-col",{staticClass:"col_margin_top",attrs:{xs:24,sm:12,md:12,lg:5}},[a("el-card",{staticClass:"card_col_height"},[a("div",{attrs:{id:"card_2"}},[a("Echarts",{style:{height:"250px",width:"auto"},attrs:{echartsData:t.option_laiYuan}})],1)])],1),a("el-col",{staticClass:"col_margin_top",attrs:{xs:24,sm:12,md:12,lg:5}},[a("el-card",{staticClass:"card_col_height"},[a("div",{attrs:{id:"card_3"}},[a("Echarts",{style:{height:"250px",width:"auto"},attrs:{echartsData:t.option_fuZai}})],1)])],1)],1),a("el-row",{staticStyle:{"margin-top":"15px",height:"300px"},attrs:{gutter:15}},[a("el-col",{attrs:{span:9}},[a("el-card",[[a("el-table",{staticClass:"tableleft",staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"date",label:"时间",width:"130"}}),a("el-table-column",{attrs:{prop:"name",label:"ip地址",width:"130"}}),a("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)]],2)],1),a("el-col",{attrs:{span:15}},[a("el-card",[a("div",{attrs:{id:"card_4"}},[a("Echarts",{style:{height:"300px",width:"auto"},attrs:{echartsData:t.option_fangWen}})],1)])],1)],1)],1)},r=[],s=a("b775"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"echartsDiv",staticStyle:{width:"auto",height:"300px",padding:"0px"}})},n=[],o={name:"Echarts",props:{echartsData:{type:Object,default:function(){}}},data:function(){return{myEcharts:null}},methods:{drawCharts:function(){this.myEcharts=this.$echarts.init(this.$refs.echartsDiv),this.myEcharts.setOption(this.echartsData)}},mounted:function(){var t=this;this.drawCharts(),window.addEventListener("resize",(function(){t.myEcharts.resize()}))}},c=o,d=a("2877"),m=Object(d["a"])(c,l,n,!1,null,null,null),u=m.exports,h={name:"Home",components:{Echarts:u},data:function(){return{indexData:"",userImg:a("3810"),tableData:[{date:"2021-11-14",name:"10.101.3.150",address:"浙江省杭州市"},{date:"2021-11-12",name:"10.101.3.152",address:"浙江省杭州市"},{date:"2021-11-12",name:"10.101.3.150",address:"浙江省杭州市"},{date:"2021-11-12",name:"10.101.3.151",address:"浙江省杭州市"},{date:"2021-11-12",name:"10.101.3.151",address:"浙江省杭州市"}],option_fangWen:{title:{text:" 近期访问量",left:"left",fontSize:14},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},xAxis:{type:"category",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],axisPointer:{type:"shadow"}},yAxis:{type:"value"},series:[{data:[{value:1220,itemStyle:{color:"rgb(103,224,227)"}},{value:2020,itemStyle:{color:"rgb(55,162,218)"}},{value:1003,itemStyle:{color:"rgb(115,192,222)"}},{value:1520,itemStyle:{color:"rgb(130,99,99)"}},{value:720,itemStyle:{color:"rgb(230,99,99)"}},{value:1530,itemStyle:{color:"rgb(250,200,88)"}},{value:1020,itemStyle:{color:"rgb(73,199,255)"}},{value:1232,itemStyle:{color:"rgb(145,204,117)"}},{value:1590,itemStyle:{color:"rgb(164,252,200)"}},{value:2290,itemStyle:{color:"rgb(248,96,182)"}},{value:2190,itemStyle:{color:"rgb(22,202,212)"}},{value:0,itemStyle:{color:"rgb(145,204,117)"}}],type:"bar"}]},option1_diQue:{title:{text:"用户访问地区",fontSize:14},tooltip:{trigger:"item"},legend:{top:"10%",left:"left"},series:[{top:"28%",name:"数据",type:"pie",radius:["40%","85%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:2,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"14",fontWeight:500}},labelLine:{show:!1},data:[{value:1048,name:"杭州"},{value:735,name:"上海"},{value:580,name:"北京"},{value:484,name:"广州"},{value:300,name:"深圳"},{value:600,name:"其他"}]}]},option_fuZai:{title:{text:"当前负载",fontSize:14},series:[{type:"gauge",radius:"88%",axisLine:{lineStyle:{width:20,color:[[.3,"#67e0e3"],[.7,"#37a2da"],[1,"#fd666d"]]}},pointer:{itemStyle:{color:"inherit"},length:"60%",width:7},axisTick:{distance:-30,length:15,lineStyle:{color:"#fff",width:2}},splitLine:{distance:-28,length:15,lineStyle:{color:"#fff",width:2}},axisLabel:{color:"inherit",distance:35,fontSize:12},detail:{valueAnimation:!0,formatter:"{value}%",color:"inherit",fontSize:24},data:[{value:65}],center:["50%","65%"]}]},option_laiYuan:{title:{text:"用户访问来源",fontSize:14},legend:{data:["PC","M-Web"],top:"12%",left:"left"},radar:{shape:"circle",indicator:[{text:"Chrome",max:1e4},{text:"IE9+",max:1e4},{text:"Safari",max:1e4},{text:"Firefox",max:1e4},{text:"IE8-",max:1e4}],center:["50%","62%"],padding:[-10,-13]},series:[{name:"PC vs M-Web",type:"radar",data:[{value:[1e4,3e3,3e3,5e3,5e3,9e3],name:"PC"},{value:[8e3,5e3,5e3,2e3,4e3,8e3],name:"M-Web"}]}]}}},methods:{dateFormat:function(t,e){var a=new Date(1e3*parseInt(t)),i=a.getFullYear(),r=a.getMonth()+1;r=r<10?"0"+r:r;var s=a.getDate();s=s<10?"0"+s:s;var l=a.getHours();l=l<10?"0"+l:l;var n=a.getMinutes(),o=a.getSeconds();n=n<10?"0"+n:n,o=o<10?"0"+o:o;var c=i+"年"+r+"月"+s+"日 ",d=l+":"+n+":"+o;return e?c+d:c}},computed:{NumberIP:function(){var t,e=this.indexData.admin_last_login_ip,a=new Array;return a[0]=e>>>24>>>0,a[1]=e<<8>>>24>>>0,a[2]=e<<16>>>24,a[3]=e<<24>>>24,t=String(a[0])+"."+String(a[1])+"."+String(a[2])+"."+String(a[3]),t},timeFormat:function(){return this.dateFormat(this.indexData.admin_last_login_time,1)}},mounted:function(){var t=this;s["a"].post("/admin/index").then((function(e){t.indexData=e.data.data})).catch((function(t){console.log(t)}))},watch:{}},p=h,g=(a("501b"),Object(d["a"])(p,i,r,!1,null,"1731b2ca",null));e["default"]=g.exports},"501b":function(t,e,a){"use strict";a("ed1a")},ed1a:function(t,e,a){}}]);
//# sourceMappingURL=chunk-cb3a6d12.ec4a6d44.js.map