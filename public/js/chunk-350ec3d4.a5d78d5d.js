(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-350ec3d4"],{"00a3":function(t,i,s){"use strict";s("7b2c")},"0fd9":function(t,i,s){"use strict";s("70ac")},"178d":function(t,i,s){"use strict";var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("div",{staticClass:"dytuijian"},t._l(t.LieShu,(function(i){return s("div",{key:i,staticClass:"lieBiao"},t._l(t.Show[i-1],(function(i){return s("div",{key:i.vod_id,staticClass:"list",staticStyle:{height:"280px",width:"168px"}},[s("router-link",{staticClass:"vod_a",attrs:{to:"/detail?id="+i.vod_id,target:"_blank"}},[s("div",{staticStyle:{height:"235px","min-width":"168px"}},[s("img",{staticClass:"videoimg",attrs:{src:i.vod_pic,alt:i.vod_name,title:i.vod_name}})]),s("div",{staticClass:"title_div"},[s("div",{staticClass:"vname"},[t._v(t._s(i.vod_name))]),t._v(" "),s("div",{staticClass:"vscore"},[t._v(t._s(i.vod_score)+".0")]),s("p",{staticClass:"vjieshao"},[s("span",{directives:[{name:"show",rawName:"v-show",value:"0"!=i.vod_year,expression:"item.vod_year!='0'"}]},[t._v(t._s(i.vod_year+"/")+" ")]),t._v(t._s(i.vod_area+"/"+i.vod_class+"/"+i.vod_lang))])])])],1)})),0)})),0)])},e=[],n=(s("fb6a"),{name:"ListVideo",data:function(){return{showList:[]}},props:["List","LieShu"],methods:{},computed:{Show:function(){for(var t=[],i=this.List,s=Math.ceil(i.length/7),a=0,e=0;e<s;e++)t[e]=i.slice(a,a+7),a+=7;return t}}}),c=n,l=(s("1d6a"),s("2877")),o=Object(l["a"])(c,a,e,!1,null,"36bbc904",null);i["a"]=o.exports},"1d6a":function(t,i,s){"use strict";s("6c0f")},"635a":function(t,i,s){"use strict";s.r(i);var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("Banner"),s("div",{staticClass:"titlediv"},[t._m(0),s("div",{staticStyle:{width:"60px"}},[s("router-link",{attrs:{to:"/mv"}},[s("button",{staticClass:"btn"},[t._v("更多"),s("i",{staticClass:"el-icon-arrow-right"})])])],1)]),s("ListVideo",{attrs:{List:t.MvList,LieShu:2}}),s("div",{staticClass:"titlediv"},[t._m(1),s("div",{staticStyle:{width:"60px"}},[s("router-link",{attrs:{to:"/tv"}},[s("button",{staticClass:"btn"},[t._v("更多"),s("i",{staticClass:"el-icon-arrow-right"})])])],1)]),s("ListVideo",{attrs:{List:t.TvList,LieShu:2}}),s("div",{staticClass:"titlediv"},[t._m(2),s("div",{staticStyle:{width:"60px"}},[s("router-link",{attrs:{to:"/va"}},[s("button",{staticClass:"btn"},[t._v("更多"),s("i",{staticClass:"el-icon-arrow-right"})])])],1)]),s("ListVideo",{attrs:{List:t.VaList,LieShu:2}}),s("div",{staticClass:"titlediv"},[t._m(3),s("div",{staticStyle:{width:"60px"}},[s("router-link",{attrs:{to:"/ac"}},[s("button",{staticClass:"btn"},[t._v("更多"),s("i",{staticClass:"el-icon-arrow-right"})])])],1)]),s("ListVideo",{attrs:{List:t.AcList,LieShu:2}})],1)},e=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"H_title"},[s("span",[t._v("电影推荐")])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"H_title"},[s("span",[t._v("剧集推荐")])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"H_title"},[s("span",[t._v("综艺推荐")])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"H_title"},[s("span",[t._v("动漫推荐")])])}],n=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"big",staticStyle:{"margin-top":"10px"}},[s("div",{staticClass:"sma"},[s("div",{staticClass:"banner"},[s("el-carousel",{attrs:{height:"320px"}},t._l(t.listBanner,(function(i){return s("el-carousel-item",{key:i.vod_name},[s("router-link",{staticClass:"vod_a",attrs:{to:"/detail?id="+i.vod_id,target:"_blank"}},[s("div",{staticClass:"banner_img"},[s("img",{staticStyle:{height:"100%",width:"100%"},attrs:{src:i.vod_pic,alt:i.vod_name,title:i.vod_name}})]),s("div",{staticClass:"banner_title"},[s("div",{staticClass:"title_bg"},[s("div",{staticClass:"bgz"},[s("h3",[t._v(t._s(i.vod_name))]),s("span",[t._v(t._s(i.vod_blurb))])])])])])],1)})),1)],1),s("div",{staticClass:"col-mar you1"},t._l(t.listBanner.slice(0,3),(function(i){return s("div",{key:i.vod_id,staticClass:"RRight"},[s("router-link",{staticClass:"vod_a",attrs:{to:"/detail?id="+i.vod_id,target:"_blank"}},[s("div",{staticClass:"dianYin"},[s("img",{staticClass:"minImg",attrs:{src:i.vod_pic,alt:i.vod_name,title:i.vod_name}}),s("div",{staticClass:"detail"},[s("div",{staticClass:"title"},[t._v(t._s(i.vod_name))]),s("div",{staticClass:"info"},[t._v(t._s(i.vod_area+"|"+i.vod_class+"|"+i.vod_lang))]),s("div",{staticClass:"des"},[t._v(" "+t._s(i.vod_blurb)+" ")])])])])],1)})),0),s("div",{staticClass:"col-mar you2"},t._l(t.listBanner.slice(3,6),(function(i){return s("div",{key:i.vod_id,staticClass:"RRight"},[s("div",{staticClass:"dianYin"},[s("img",{staticClass:"minImg",attrs:{src:i.vod_pic,alt:i.vod_name,title:i.vod_name}}),s("div",{staticClass:"detail"},[s("div",{staticClass:"title"},[t._v(t._s(i.vod_name))]),s("div",{staticClass:"info"},[t._v(t._s(i.vod_area+"|"+i.vod_class+"|"+i.vod_lang))]),s("div",{staticClass:"des"},[t._v(" "+t._s(i.vod_blurb)+" ")])])])])})),0)])])},c=[],l=s("b775"),o={name:"Banner",data:function(){return{listBanner:[],tuijian:[],tuijian2:[]}},methods:{},mounted:function(){var t=this;l["a"].get("/api/index/banner").then((function(i){t.listBanner=i.data})).catch((function(t){console.log(t)}))}},d=o,r=(s("0fd9"),s("2877")),v=Object(r["a"])(d,n,c,!1,null,"36febba2",null),_=v.exports,u=s("178d"),h={name:"Vindex",components:{Banner:_,ListVideo:u["a"]},data:function(){return{MvList:[],TvList:[],VaList:[],AcList:[]}},mounted:function(){var t=this;document.title="小柏影视",l["a"].get("/api/index/mv").then((function(i){t.MvList=i.data})).catch((function(t){console.log(t)})),setTimeout((function(){l["a"].get("/api/index/tv").then((function(i){t.TvList=i.data})).catch((function(t){console.log(t)}))}),200),setTimeout((function(){l["a"].get("/api/index/va").then((function(i){t.VaList=i.data})).catch((function(t){console.log(t)}))}),500),setTimeout((function(){l["a"].get("/api/index/ac").then((function(i){t.AcList=i.data})).catch((function(t){console.log(t)}))}),700)}},m=h,f=(s("00a3"),Object(r["a"])(m,a,e,!1,null,"c2333588",null));i["default"]=f.exports},"6c0f":function(t,i,s){},"70ac":function(t,i,s){},"7b2c":function(t,i,s){}}]);
//# sourceMappingURL=chunk-350ec3d4.a5d78d5d.js.map