(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{382:function(t,e,o){"use strict";o.r(e);var n={name:"Sku3",layout:"bar",data:function(){return{specsValueDtos:[],specsGroupDtos:[],selectArr:[],shopItemInfo:{},subIndex:[],goodsNum:0,goodsStatus:[],skuNum:0}},created:function(){for(var i in this.createData(),this.specsValueDtos)this.shopItemInfo[this.specsValueDtos[i].propvalids]=this.specsValueDtos[i];this.checkItem()},methods:{createData:function(){var t=this,e=[{name:"套餐",specsValues:["一号","二号","三号"]},{name:"规格",specsValues:["s","m","l","xl","xxl"]},{name:"颜色",specsValues:["赤","橙","黄","绿","蓝"]},{name:"版式",specsValues:["非主流","杀马特","洗剪吹"]}];this.specsGroupDtos=e,this.specsValueDtos=[];var o=0;e[0].specsValues.forEach((function(n,c){!function n(c,r){if(e.length-1===r){var h=Math.floor(200*Math.random());t.specsValueDtos.push({specCode:490,propvalids:"".concat(c),skuPrice:179*r,skuCostPrice:179*r,skuStock:h}),o+=h}else e[r+1].specsValues.forEach((function(t,e){n("".concat(c,",").concat(t),r+1)}))}(n,0)})),this.goodsNum=o,console.log("总库存",o)},specificationBtn:function(t,e,o,n){this.selectArr[e]!==t?(this.selectArr[e]=t,this.subIndex[e]=n):(this.selectArr[e]="",this.subIndex[e]=-1),this.checkItem()},checkItem:function(){var option=this.specsGroupDtos,t=[];for(var i in option)t[i]=this.selectArr[i]?this.selectArr[i]:"";for(var e in this.goodsNum=0,option){var o=t[e];for(var n in option[e].specsValues){t[e]=option[e].specsValues[n],this.goodsStatus[e]=this.goodsStatus[e]?this.goodsStatus[e]:[];var c=this.getProduct(t);this.goodsStatus[e][n]=c.status,this.goodsNum+=c.num}t[e]=o}this.$forceUpdate()},getProduct:function(t){for(var i in t)if(""==t[i])return{status:!0,num:0};return{status:0!==this.shopItemInfo[t].skuStock,num:this.shopItemInfo[t].skuStock}}},computed:{}},c=o(5),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._l(t.specsGroupDtos,(function(e,n){return o("div",{key:n},[o("div",[o("div",[t._v(t._s(e.name))]),t._v(" "),t._l(e.specsValues,(function(e,c){return o("el-button",{key:c,attrs:{size:"mini",type:t.subIndex[n]===c?"primary":"",disabled:!t.goodsStatus[n][c]},on:{click:function(o){return t.specificationBtn(e,n,o,c)}}},[t._v(t._s(e)+"\n      ")])}))],2)])})),t._v(" "),o("div",[t._v("总库存："+t._s(t.goodsNum))]),t._v(" "),t._m(0)],2)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{},[o("div",[t._v("说明")]),t._v(" "),o("div",[t._v("当前页面的组件逻辑模块是百度找的。")]),t._v(" "),o("div",[t._v("其它几个类型：\n      "),o("a",{attrs:{href:"/sku3/other"}},[t._v("当前页面组件的初始状态")]),t._v("|\n      "),o("a",{attrs:{href:"/sku3/default"}},[t._v("基础功能")]),t._v("|\n      "),o("a",{attrs:{href:"/sku3/remove"}},[t._v("可以取消选中")])]),t._v(" "),o("div",[t._v("最终的目的是实现淘宝的sku选择器功能")])])}],!1,null,null,null);e.default=component.exports}}]);