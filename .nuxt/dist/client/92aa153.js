(window.webpackJsonp=window.webpackJsonp||[]).push([[27,41],{327:function(t,e,r){"use strict";r.r(e);r(60);var n={data:function(){return{interviewaudio:!0,interviewrepeat:!0}},props:{videoSrc:{type:String},videoSubEN:{type:String},videoSubAR:{type:String}},methods:{startInterview:function(){this.$refs.interview.muted=!this.$refs.interview.muted,this.interviewaudio=!1,this.interviewrepeat=!0},repeatInterview:function(){var t=this;setTimeout((function(){t.$refs.interview.currentTime=0,t.$refs.interview.play()}),500)},interviewFullscreen:function(){this.$refs.interview.requestFullscreen()},visibilityChanged:function(t,e){this.$refs.interview.muted=1!=t}}},o=r(15),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.visibilityChanged,expression:"visibilityChanged"}],staticClass:"relative z-40 flex items-center content-center justify-center"},[r("button",{staticClass:"absolute z-40 flex flex-row items-center invisible px-4 py-2 mr-20 font-semibold text-white bg-transparent border border-gray-400 rounded shadow fill-current sm:visible sm:mt-48 sm:top-0 sm:right-0 hover:text-black hover:bg-gray-100",class:t.interviewrepeat?"block":"hidden",on:{click:t.repeatInterview}},[r("svg",{staticClass:"w-5 mr-4",attrs:{version:"1.1",viewBox:"0 0 8 8",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[r("path",{attrs:{d:"M4 0c-2.2 0-4 1.8-4 4 0 2.2 1.8 4 4 4 1.1 0 2.12-.43 2.84-1.16l-.72-.72c-.54.54-1.29.88-2.13.88 -1.66 0-3-1.34-3-3 0-1.66 1.34-3 3-3 .83 0 1.55.36 2.09.91l-1.09 1.09h3v-3l-1.19 1.19c-.72-.72-1.71-1.19-2.81-1.19Z"}})]),t._v(t._s(t.$t("RepeatInterview"))+"\n  ")]),t._v(" "),r("button",{staticClass:"absolute z-40 flex flex-row items-center invisible px-4 py-2 ml-20 font-semibold text-white bg-transparent border border-gray-400 rounded shadow fill-current sm:visible sm:mt-48 sm:top-0 sm:left-0 hover:text-black hover:bg-gray-100",class:t.interviewrepeat?"block":"hidden",on:{click:t.interviewFullscreen}},[r("svg",{staticClass:"w-8 mr-4",attrs:{version:"1.1",viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[r("path",{attrs:{d:"M0 0h18v18h-18Z",fill:"none"}}),t._v(" "),r("path",{attrs:{d:"M4.5 11h-1.5v4h4v-1.5h-2.5v-2.5Zm-1.5-4h1.5v-2.5h2.5v-1.5h-4v4Zm10.5 6.5h-2.5v1.5h4v-4h-1.5v2.5Zm-2.5-10.5v1.5h2.5v2.5h1.5v-4h-4Z"}})]),t._v("\n    "+t._s(t.$t("FullScreen"))+"\n  ")]),t._v(" "),"en"===this.$i18n.locale?r("video",{ref:"interview",staticClass:"w-screen",attrs:{preload:"metadata",autoplay:"autoplay",loop:"",muted:""},domProps:{muted:!0}},[r("source",{attrs:{src:t.videoSrc,type:"video/mp4"}}),t._v(" "),r("source",{attrs:{src:t.videoSrc,type:"video/mp4"}}),t._v(" "),r("source",{attrs:{src:t.videoSrc,type:"video/mp4"}}),t._v(" "),r("track",{attrs:{label:"English",kind:"subtitles",srclang:"en",src:t.videoSubEN,default:""}}),t._v("\n\n    Your browser does not support the video tag.\n  ")]):t._e(),t._v(" "),"ar"===this.$i18n.locale?r("video",{ref:"interview",staticClass:"w-screen",attrs:{preload:"metadata",autoplay:"autoplay",loop:"",muted:""},domProps:{muted:!0}},[r("source",{attrs:{src:t.videoSrc,type:"video/mp4"}}),t._v(" "),r("source",{attrs:{src:t.videoSrc,type:"video/mp4"}}),t._v(" "),r("source",{attrs:{src:t.videoSrc,type:"video/mp4"}}),t._v(" "),r("track",{attrs:{label:"Arabic",kind:"subtitles",srclang:"ar",src:t.videoSubAR,default:""}}),t._v("\n    Your browser does not support the video tag.\n  ")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},501:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{isVisible:!1}},methods:{visibilityChangedChapter:function(t,e){1==t&&this.$router.push({path:this.localePath("/chaptertwo#room")})}}},o=r(15),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"pt-10 pb-4 -mt-1 bg-black",attrs:{id:"rahel"}},[r("div",{staticClass:"flex flex-col items-center justify-center w-full font-nassimBold"},[r("p",{staticClass:"mt-5 text-3xl text-center text-white sm:text-2xl"},[t._v("\n        "+t._s(t.$t("sectionFour"))+"\n      ")]),t._v(" "),r("p",{staticClass:"p-1 mt-1 text-5xl text-center text-white sm:text-6xl",staticStyle:{direction:"ltr"}},[t._v("\n        "+t._s(t.$t("s4title"))+"\n      ")])]),t._v(" "),r("div",{staticClass:"flex items-center justify-center mb-5"},[r("div",{staticClass:"relative flex items-start justify-center w-5/6 mt-10 text-white  md:w-3/6",class:"en"===this.$i18n.locale?"flex-row":"flex-row-reverse"},[r("div",{staticClass:"w-24 text-sm md:absolute md:top-0 md:w-48 sm:text-xl",class:"en"===this.$i18n.locale?"text-left ltr md:left-0 md:-ml-32 lg:-ml-48 pr-5":"text-right md:right-0 rtl md:-mr-32 lg:-mr-48 pl-5"},["ar"===this.$i18n.locale?r("div",[r("br"),t._v(" "),r("span",{staticClass:"font-nassimBold"},[t._v("مقابلة مع")]),t._v(" "),r("br"),t._v("رحيل زيجي\n            "),r("br")]):t._e(),t._v(" "),"en"===this.$i18n.locale?r("div",[r("br"),t._v(" "),r("span",{staticClass:"font-nassimBold"},[t._v("Interview with")]),t._v(" "),r("br"),t._v("\n            Rahil Zaiji\n            "),r("br")]):t._e()]),t._v(" "),r("div",{staticClass:"static flex flex-col w-10/12 text-sm  font-nassimBold sm:text-xl",class:"en"===this.$i18n.locale?" ltr":"rtl"},["ar"===this.$i18n.locale?r("p",{staticClass:"flex flex-col mt-5 text-base text-right text-white  sm:text-xl sm:text-right"},[t._v("\n            ضيق سوق العمل في إثيوبيا دفع راحيل إلى التفكير في الرحيل بحثًا عن\n            عمل، بعدما أقنعها زميل لها أن لبنان هو البلد الذي تحققين فيه\n            «أحلامك»، فقررت المجيء لخدمتنا. البلد الذي قال عنه ميشال شيحا إن\n            دور دولته «تأمين الغذاء واللباس اللائق» للعمال، ويُترك للتجار\n            «تأمين معاشاتهم».\n          ")]):t._e(),t._v(" "),"en"===this.$i18n.locale?r("p",{staticClass:"flex flex-col mt-5 text-base text-left text-white  sm:text-xl sm:text-left"},[t._v("\n            The lack of employment options in Ethiopia drove Rahel to consider\n            leaving her home in search of work. She decided to come to Lebanon\n            after a colleague convinced her that this was the country where\n            she’d be able to realize her dreams. The country whose\n            government’s role, as Michel Shiha once said, consisted of\n            “ensuring food and appropriate clothing” for its workers, while\n            merchants were left to “ensure their wages.”\n          ")]):t._e()])])]),t._v(" "),r("div",{staticClass:"flex flex-col items-center justify-center w-full mt-10  sm:mt-10 font-nassimBold"},[r("p",{staticClass:"w-10/12 p-1 mt-1 text-4xl text-center text-white  sm:w-6/12 sm:text-3xl",class:"en"===this.$i18n.locale?" ltr":"rtl"},[t._v("\n        "+t._s(t.$t("s42ndtitle"))+"\n      ")]),t._v(" "),"ar"===this.$i18n.locale?r("p",{staticClass:"flex flex-col w-8/12 mt-10 text-base text-right text-white  rtl sm:text-xl sm:text-right sm:w-6/12"},[t._v("\n        «أُسَمّيه سوقًا. إنّه سوق عمل أنشأه تجّارٌ بشر، كبيع الأغنام مثلًا،\n        هناك من يربّي الأغنام ثم يبيعها لتحقيق ربح من عمله. لكن أصحاب هذه\n        المكاتب لا يربّونك، ولا يطعمونك كما يفعل الوالدان. أسوأ ما في الأمر أن\n        أصحاب هذه المكاتب يمارسون الإتجار بالبشر من دون بذل أي مجهود مُسبق. إن\n        أردتَ بيعَ الأغنام عليك أوّلًا بذْلَ بعضٍ من الجهد لتربيتها، ومن دون\n        جهد وعمل لن تحصل على شيء، فكيف يحدث إذًا في حالة الإنسان، الكائن\n        الجدير بالاحترام، والذي لم يفعلوا شيئًا لتربيته أو لتأمين الماء\n        والطعام له، أنّهم يبذلون كل هذا الجهد للإتجار به؟».\n      ")]):t._e(),t._v(" "),"en"===this.$i18n.locale?r("p",{staticClass:"flex flex-col w-8/12 mt-16 text-base text-left text-white  sm:text-xl sm:text-left sm:w-6/12"},[t._v("\n        I call it a market. It’s a labor market. Set up by human traffickers,\n        who sell humans the way others sell sheep. When you’re trading in\n        sheep, there’s someone who raises the sheep and then sells them to\n        make a profit off the work they put in. But the owners of these\n        agencies don’t even give you a drink of water. They don’t feed you the\n        way your parents do. Worst of all, the owners of these agencies\n        traffic in human beings without ever having had to put any effort into\n        caring for them. If you’re selling sheep, you have to put some effort\n        into raising them. Without that effort, that work, you’d get nothing.\n        And so how can it be that when it comes to human beings, who are\n        creatures worthy of respect… how can it be that people they’ve made no\n        effort to raise or care for or to provide with food and drink… how can\n        they then turn around and put all this effort into trading them in the\n        marketplace?\n      ")]):t._e()])]),t._v(" "),r("VideoPlayer",{attrs:{videoSrc:"/videos/rahil.mp4",videoSubEN:"/videos/Rahilen.vtt",videoSubAR:"/videos/Rahilar.vtt"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{VideoPlayer:r(327).default})}}]);