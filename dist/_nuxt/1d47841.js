(window.webpackJsonp=window.webpackJsonp||[]).push([[25,40],{334:function(t,e,r){var content=r(346);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(54).default)("2789ffb5",content,!0,{sourceMap:!1})},345:function(t,e,r){"use strict";r(334)},346:function(t,e,r){var o=r(53)((function(i){return i[1]}));o.push([t.i,".fade-enter-active{transition:opacity 1s}.fade-leave-active{transition:opacity .5s}.fade-enter,.fade-leave-to{opacity:0}",""]),o.locals={},t.exports=o},359:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{clicked:!1,isVisiblee:!0}},props:{position:{type:String}},methods:{mute:function(){this.$emit("mute")},repeat:function(){this.$emit("repeat")}},mounted:function(){"1"==this.position?this.$refs.vref.play():"2"==this.position?(this.$refs.vref.currentTime=50,this.$refs.vref.play()):"3"==this.position||"4"==this.position?(this.$refs.vref.currentTime=150,this.$refs.vref.play()):"5"==this.position?(this.$refs.vref.currentTime=50,this.$refs.vref.play()):"6"==this.position&&this.$refs.vref.play()}},n=(r(345),r(15)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative cursor-pointer",on:{mouseleave:function(e){t.clicked=!1},click:function(e){t.clicked=!0}}},[r("video",{ref:"vref",staticClass:"block object-cover w-full duration-150 transform opacity-50  hover:opacity-100",attrs:{autoplay:"autoplay",loop:"",muted:""},domProps:{muted:!0}},[r("source",{attrs:{src:"/videos/strip.mp4",type:"video/mp4"}}),t._v(" "),r("source",{attrs:{src:"/videos/strip.mp4",type:"video/mp4"}}),t._v(" "),r("source",{attrs:{src:"/videos/strip.mp4",type:"video/mp4"}}),t._v("\n    Your browser does not support the video tag.\n  ")]),t._v(" "),r("transition",{attrs:{name:"fadeTwo"}},[t.clicked?r("div",{staticClass:"absolute inset-0 inset-x-0 z-50 w-32 h-10 mx-auto my-auto mt-8"},[r("div",{staticClass:"z-50 flex flex-row items-center"},[r("svg",{staticClass:"ml-4 text-white bg-transparent border border-transparent rounded cursor-pointer fill-current  w-66 hover:text-black hover:shadow hover:bg-gray-100",attrs:{version:"1.1",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(e){return t.mute()}}},[r("path",{attrs:{d:"M21.707 20.293l-2.03-2.03c1.44-1.686 2.31-3.846 2.31-6.27 0-4.091-2.48-7.453-6-9v2c2.38 1.38 3.99 4.04 3.99 7 0 1.83-.63 3.54-1.68 4.913L17 15.616c.6-1.1.95-2.44.95-3.628 0-1.78-.78-3.9-2-5v7.586l-2-2V3.98c0-.37-.21-.71-.53-.89 -.33-.18-.72-.16-1.03.05L7.67 6.29 3.65 2.27l-1.42 1.41 18 18 1.41-1.42ZM12 5.86v4.718L9.16 7.74l2.83-1.89ZM4 16.99h2.697l5.748 3.83c.16.11.36.16.55.16 .16 0 .32-.04.47-.12 .32-.18.52-.52.52-.89v-1.88l-2-2v2.01L7.54 15.13c-.03-.02-.06-.02-.09-.04 -.07-.04-.13-.06-.19-.08 -.07-.02-.13-.04-.2-.04 -.04-.01-.06-.02-.1-.02h-3v-6h.87L3.05 7.17c-.66.33-1.11.99-1.11 1.77v6c0 1.1.89 2 2 2Z"}})]),t._v(" "),r("svg",{staticClass:"w-64 ml-4 text-white bg-transparent border border-transparent rounded cursor-pointer fill-current  hover:text-black hover:shadow hover:bg-gray-100",attrs:{version:"1.1",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},on:{click:function(e){return t.repeat()}}},[r("path",{attrs:{d:"M12 5v-4l-5 5 5 5v-4c3.31 0 6 2.69 6 6 0 3.31-2.69 6-6 6 -3.31 0-6-2.69-6-6h-2c0 4.42 3.58 8 8 8 4.42 0 8-3.58 8-8 0-4.42-3.58-8-8-8Z"}})])])]):t._e()])],1)}),[],!1,null,null,null);e.default=component.exports},407:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{isVisible:!0}},methods:{visibilityChanged:function(t,e){1==t?(this.$refs.a1.currentTime=6e3,this.$refs.a1.play()):this.$refs.a1.pause()},a7a:function(){this.audioPlayer.muted=!this.audioPlayer.muted},a7tean:function(){this.audioPlayer.currentTime=0,this.audioPlayer.muted=!1}},mounted:function(){this.audioPlayer=this.$el.querySelectorAll("audio")[0]}},n=r(15),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.visibilityChanged,expression:"visibilityChanged"}],staticClass:"block object-cover min-w-full"},[r("strip",{attrs:{position:"1"},on:{mute:function(e){return t.a7a()},repeat:function(e){return t.a7tean()}}}),t._v(" "),r("audio",{ref:"a1",attrs:{src:"/videos/audio.mp3",loop:"",autoplay:"autoplay"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Strip:r(359).default})}}]);