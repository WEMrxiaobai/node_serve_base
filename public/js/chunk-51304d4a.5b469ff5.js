(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51304d4a"],{4622:function(e,t,l){"use strict";l.r(t);var s=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-container",[l("el-main",[l("el-row",{attrs:{gutter:0}},[l("el-col",{staticClass:"c_col",attrs:{span:24}},[l("el-input",{ref:"inputEnter",staticClass:"input-with-select",attrs:{placeholder:"输入视频播放地址"},model:{value:e.enterUrl,callback:function(t){e.enterUrl=t},expression:"enterUrl"}},[l("el-select",{staticClass:"ssss",staticStyle:{width:"165px"},attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:e.selectUrlvlaue,callback:function(t){e.selectUrlvlaue=t},expression:"selectUrlvlaue"}},e._l(e.selectUrl,(function(t){return l("el-option",{key:t.id,attrs:{label:t.api_name,value:t.api_url}},[e._v(" "+e._s(t.api_name)+" ")])})),1),l("el-button",{attrs:{slot:"append"},on:{click:e.LookVideo},slot:"append"},[e._v("解析播放")])],1)],1),l("el-col",{staticClass:"dpplayerdiv",attrs:{span:24}},[l("iframe",{attrs:{src:e.lookUrl,allowfullscreen:"true",allowtransparency:"true",id:"player",frameborder:"0"}})]),l("el-col",{staticClass:"c_col",attrs:{span:24}})],1)],1)],1)],1)},r=[],a=l("b775"),n={name:"other",data:function(){return{lookUrl:"",selectUrlvlaue:"",enterUrl:"",selectUrl:[]}},methods:{LookVideo:function(){if(""!=this.selectUrlvlaue)return""==this.enterUrl?(this.$message({message:"请输入网址!",type:"error"}),void this.$refs.inputEnter.focus()):void(this.lookUrl=this.selectUrlvlaue+this.enterUrl);this.selectUrlvlaue=this.selectUrl[0].api_url}},computed:{},mounted:function(){var e=this;a["a"].get("/api/video").then((function(t){e.selectUrl=t.data})).catch((function(e){console.log(e)}))}},c=n,o=(l("d0ca"),l("2877")),i=Object(o["a"])(c,s,r,!1,null,"6f5f748b",null);t["default"]=i.exports},c15e:function(e,t,l){},d0ca:function(e,t,l){"use strict";l("c15e")}}]);
//# sourceMappingURL=chunk-51304d4a.5b469ff5.js.map