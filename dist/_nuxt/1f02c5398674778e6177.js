(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{338:function(t,e,o){var content=o(360);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("5c41423a",content,!0,{sourceMap:!1})},359:function(t,e,o){"use strict";var n=o(338);o.n(n).a},360:function(t,e,o){(t.exports=o(18)(!1)).push([t.i,'body{font-family:Microsoft YaHei,arial;background-color:#f2f2f2;background-color:rgba(0,0,0,.6)}ol,ul{list-style:none}li{list-style-type:none}.clearfix:after{display:block;overflow:hidden;clear:both;height:0;visibility:hidden;content:""}*{margin:0;padding:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}@media screen and (max-width:319px){html{font-size:42.666665px}}@media screen and (min-width:320px) and (max-width:359px){html{font-size:42.66666px}}@media screen and (min-width:360px) and (max-width:374px){html{font-size:48px}}@media screen and (min-width:375px) and (max-width:383px){html{font-size:50px}}@media screen and (min-width:384px) and (max-width:399px){html{font-size:51.2px}}@media screen and (min-width:400px) and (max-width:413px){html{font-size:53.333335px}}@media screen and (min-width:414px){html{font-size:55.2px}}.productBox{position:fixed;bottom:0;left:0;width:100%;background-color:#fff}.productConten{margin-bottom:1rem}.product-delcom{padding:.24rem 7%;color:#323232;font-size:.26rem;border-bottom:1px solid #eee}.product-footerlist{margin-top:.1rem}.product-footerlist li{border:1px solid #606060;border-radius:.08rem;color:#606060;text-align:center;padding:.04rem .16rem;float:left;margin-right:.16rem;min-width:.96rem;margin-bottom:.16rem}.product-footerlist li.productActive{background-color:#1a1a29;color:#fff;border:1px solid #1a1a29}.product-footerlist li.noneActive{background-color:#ccc;opacity:.4;color:#000;pointer-events:none}.product-footer{display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1;background-color:#1a1a29;line-height:1rem;text-align:center}.product-footer a{-webkit-box-flex:1;flex:1;color:#fff;font-size:.3rem;text-decoration:none}',""])},387:function(t,e,o){"use strict";o.r(e);o(85);var n={name:"other",data:function(){return{simulatedDATA:{difference:[],specifications:[]},selectArr:[],shopItemInfo:{},subIndex:[]}},created:function(){for(var i in this.createData(),this.simulatedDATA.difference)this.shopItemInfo[this.simulatedDATA.difference[i].difference]=this.simulatedDATA.difference[i];this.checkItem()},mounted:function(){},methods:{createData:function(){var t=this,e=[{name:"规格",specsValues:["s","m","l","xl","xxl"]},{name:"颜色",specsValues:["赤","橙","黄","绿","蓝"]},{name:"版式",specsValues:["非主流","杀马特","洗剪吹"]}];e.forEach((function(e,o){t.simulatedDATA.specifications[o]={name:e.name,item:[]},e.specsValues.forEach((function(e,n){t.simulatedDATA.specifications[o].item.push({name:e})}))}));var o=0;e[0].specsValues.forEach((function(n,r){!function n(r,c){if(e.length-1===c){var l=Math.floor(1.1*Math.random());t.simulatedDATA.difference.push({id:Math.floor(1e5*Math.random()),price:179*c,stock:l,difference:"".concat(r)}),o+=l}else e[c+1].specsValues.forEach((function(t,e){n("".concat(r,",").concat(t),c+1)}))}(n,0)})),this.goodsNum=o,console.log("总库存：",o)},specificationBtn:function(t,e,o,n){this.selectArr[e]!=t?(this.selectArr[e]=t,this.subIndex[e]=n):(this.selectArr[e]="",this.subIndex[e]=-1),this.checkItem()},checkItem:function(){var option=this.simulatedDATA.specifications,t=[];for(var i in option)t[i]=this.selectArr[i]?this.selectArr[i]:"";for(var e in option){var o=t[e];for(var n in option[e].item)t[e]=option[e].item[n].name,option[e].item[n].isShow=this.isMay(t);t[e]=o}this.$forceUpdate()},isMay:function(t){for(var i in t)if(""==t[i])return!0;return console.log(t),0!=this.shopItemInfo[t].stock}}},r=(o(359),o(5)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"productBox",attrs:{id:"vmsimulatedDATA"}},[o("div",{staticClass:"productConten"},t._l(t.simulatedDATA.specifications,(function(e,n){return o("div",{staticClass:"product-delcom"},[o("p",[t._v(t._s(e.name))]),t._v(" "),o("ul",{staticClass:"product-footerlist clearfix"},t._l(e.item,(function(e,r){return o("li",{class:[e.isShow?"":"noneActive",t.subIndex[n]==r?"productActive":""],on:{click:function(o){return t.specificationBtn(e.name,n,o,r)}}},[t._v(t._s(e.name)+"\n        ")])})),0)])})),0),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"product-footer"},[e("a",{attrs:{href:"javascript:"}},[this._v("立即购买")])])}],!1,null,null,null);e.default=component.exports}}]);