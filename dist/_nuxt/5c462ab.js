(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{397:function(e,t,n){var content=n(466);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(54).default)("18d24130",content,!0,{sourceMap:!1})},465:function(e,t,n){"use strict";n(397)},466:function(e,t,n){var l=n(53)((function(i){return i[1]}));l.push([e.i,".container[data-v-a15595c4]{margin:0 auto;justify-content:center;align-items:center;text-align:center}.gallery[data-v-a15595c4]{display:flex}.pic[data-v-a15595c4]{cursor:pointer;margin-right:8px}",""]),l.locals={},e.exports=l},518:function(e,t,n){"use strict";n.r(t);var l={data:function(){return{show:!0,imgList:["https://makhdomeen.vercel.app/slider7/001.jpg","https://makhdomeen.vercel.app/slider7/002.jpg","https://makhdomeen.vercel.app/slider7/003.jpg"],visible:!1,index:0}},methods:{showawawa:function(e){this.index=e,this.visible=!0},handlePrevClick:function(e,t){console.log("when next btn click ----"),console.log("oldIndex of imgs:",e),console.log("newIndex of imgs:",t)},handleNextClick:function(e,t){console.log("when next btn click ----"),console.log("oldIndex of imgs:",e),console.log("newIndex of imgs:",t)}}},o=(n(465),n(15)),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col justify-center mt-10 mb-10"},[n("div",{staticClass:"flex"},[n("div",{staticClass:"lightboxcontainer"},[e._m(0),e._v(" "),n("client-only",[n("vue-easy-lightbox",{attrs:{visible:e.visible,index:e.index,imgs:e.imgList},on:{hide:function(t){e.visible=!1},"on-prev-click":e.handlePrevClick,"on-next-click":e.handleNextClick}})],1)],1)]),e._v(" "),n("div",{staticClass:"flex flex-col w-10/12 mt-4 ml-6 text-base text-left"},[n("p",{staticClass:"font-nassimBold"},[e._v("\n      Typical floor plan drawing, Mirage Tower building, Tayyouneh (2015)\n    ")]),e._v(" "),n("p",{staticClass:"flex flex-row items-start mt-5 text-sm cursor-pointer",on:{click:function(t){return e.showawawa(1)}}},[e._m(1),e._v("\n\n      Excerpts from the 2004 Lebanese building law\n    ")]),e._v(" "),n("p",{staticClass:"flex flex-row items-start mt-5 text-sm cursor-pointer",on:{click:function(t){return e.showawawa(2)}}},[e._m(2),e._v("\n\n      Advertisement of floor plan for residential building on Sayydeh street,\n      Ashrafieh (2009)\n    ")])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"lightboxgallery"},[t("div",{staticClass:"lightboxgallery"},[t("img",{attrs:{src:"https://makhdomeen.vercel.app/slider7/001.jpg"}})])])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"mt-1 mr-2"},[t("i",{staticClass:"far fa-file"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"mt-1 ml-2"},[t("i",{staticClass:"far fa-file"})])}],!1,null,"a15595c4",null);t.default=component.exports}}]);