(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{467:function(e,t,r){var n=r(468),o=r(469),c=r(470),h=r(471),f=r(472);function l(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,h=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){h=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(h)throw o}}}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}r(48),r(28),r(29),r(49),r(56),r(39),r(97),r(473),r(474),r(38),r(17),r(30),r(42),r(24),r(21),r(44),r(45),r(31);var v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(e).filter((function(e){return t.includes(e)})).reduce((function(t,r){return Object.assign(t,f({},r,e[r]))}),{})},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(e).filter((function(e){return!t.includes(e)})).reduce((function(t,r){return Object.assign(t,f({},r,e[r]))}),{})},d=function(){"use strict";function e(t,r){var n=t.query,path=t.path,o=t.init,text=t.text,h=t.postprocess,f=void 0===h?[]:h;c(this,e),this.query=n,this.path=path,this.init=o,this.postprocess=f,this.options=r||{},this.onlyKeys=null,this.withoutKeys=null,this.sortKeys=[],this.limitN=null,this.skipN=null,text||this.postprocess.unshift((function(data){return data.map((function(e){return w(e,["text"])}))}))}var t;return h(e,[{key:"only",value:function(e){return this.onlyKeys=Array.isArray(e)?e:[e],this}},{key:"without",value:function(e){return this.withoutKeys=Array.isArray(e)?e:[e],this}},{key:"sortBy",value:function(e,t){return this.sortKeys.push([e,"desc"===t]),this}},{key:"where",value:function(e){return this.query=this.query.find(e),this}},{key:"search",value:function(e,t){return e?(r="object"===o(e)?e:t?{query:{type:"match",field:e,value:t,prefix_length:1,fuzziness:1,extended:!0,minimum_should_match:1}}:{query:{type:"bool",should:this.options.fullTextSearchFields.map((function(t){return{type:"match",field:t,value:e,prefix_length:1,operator:"and",minimum_should_match:1,fuzziness:1,extended:!0}}))}},this.query=this.query.find({$fts:r}).sortByScoring(),this):this;var r}},{key:"surround",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.before,n=void 0===r?1:r,o=t.after,c=void 0===o?1:o,h=0===e.indexOf("/")?"path":"slug";this.onlyKeys&&this.onlyKeys.push(h),this.withoutKeys&&(this.withoutKeys=this.withoutKeys.filter((function(e){return e!==h})));var f=function(data){var t=data.findIndex((function(t){return t[h]===e})),r=new Array(n+c).fill(null,0);if(-1===t)return r;for(var o=data.slice(t-n,t),f=data.slice(t+1,t+1+c),l=0,i=n-1;i>=0;i--)r[i]=o[l]||null,l++;for(var y=0,v=n;v<=c;v++)r[v]=f[y]||null,y++;return r};return this.postprocess.push(f),this}},{key:"limit",value:function(e){return"string"==typeof e&&(e=parseInt(e)),this.limitN=e,this}},{key:"skip",value:function(e){return"string"==typeof e&&(e=parseInt(e)),this.skipN=e,this}},{key:"fetch",value:(t=n(regeneratorRuntime.mark((function e(){var data,t,r,n,o,c,h=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.sortKeys&&this.sortKeys.length&&(this.query=this.query.compoundsort(this.sortKeys)),this.skipN&&(this.query=this.query.offset(this.skipN)),this.limitN&&(this.query=this.query.limit(this.limitN)),data=this.query.data({removeMeta:!0}),this.onlyKeys&&(this.options.watch&&this.onlyKeys.push("path","extension"),t=function(data){return data.map((function(e){return v(e,h.onlyKeys)}))},this.postprocess.unshift(t)),this.withoutKeys&&(this.options.watch&&(this.withoutKeys=this.withoutKeys.filter((function(e){return!["path","extension"].includes(e)}))),r=function(data){return data.map((function(e){return w(e,h.withoutKeys)}))},this.postprocess.unshift(r)),n=l(this.postprocess);try{for(n.s();!(o=n.n()).done;)c=o.value,data=c(data)}catch(e){n.e(e)}finally{n.f()}if(data){e.next=10;break}throw new Error("".concat(this.path," not found"));case 10:return e.abrupt("return",JSON.parse(JSON.stringify(data)));case 11:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})}]),e}();e.exports=d},481:function(e,t,r){"use strict";r.r(t);var n=r(20),o=(r(27),r(42),r(24),r(34),r(62),r(69),r(97),r(159),r(81),r(467)),c=r.n(o),h=r(476),f=r.n(h),l=r(477);r.n(l).a.register();var y,v,w=["/","/en","/ar","/en/chapterThree","/en/chapterFour","/en/chapterOne","/en/chapterThree copy","/en/chapterTwo","/ar/chapterFive","/ar/chapterFour","/ar/chapterOne","/ar/chapterThree","/ar/chapterTwo","/en/chapterThree/sectionFive","/en/chapterThree/sectionFour","/en/chapterThree/sectionOne","/en/chapterThree/sectionThree","/en/chapterThree/sectionTwo","/en/chapterFour/sectionOne","/en/chapterFour/sectionTwo","/en/chapterOne/sectionFour","/en/chapterOne/sectionThree","/en/chapterOne/sectionOne","/en/chapterOne/sectionTwo","/en/chapterTwo/sectionFive","/en/chapterTwo/sectionFour","/en/chapterTwo/sectionOne","/en/chapterTwo/sectionSix","/en/chapterTwo/sectionThree","/en/chapterTwo/sectionTwo","/en/chapterThree copy/sectionFour","/en/chapterThree copy/sectionOne","/en/chapterThree copy/sectionThree","/en/chapterThree copy/sectionTwo","/ar/chapterFive/sectionFour","/ar/chapterFive/sectionFive","/ar/chapterFive/sectionOne","/ar/chapterFive/sectionSix","/ar/chapterFive/sectionTwo","/ar/chapterFive/sectionThree","/ar/chapterFour/sectionTwo","/ar/chapterFour/sectionOne","/ar/chapterOne/sectionOne","/ar/chapterOne/sectionFour","/ar/chapterOne/sectionThree","/ar/chapterOne/sectionTwo","/ar/chapterThree/sectionFive","/ar/chapterThree/sectionTwo","/ar/chapterThree/sectionFour","/ar/chapterThree/sectionOne","/ar/chapterThree/sectionThree","/ar/chapterTwo/sectionFive","/ar/chapterTwo/sectionFour","/ar/chapterTwo/sectionOne","/ar/chapterTwo/sectionThree","/ar/chapterTwo/sectionSix","/ar/chapterTwo/sectionTwo","/en/chapterOne/sectionOne/assets","/en/chapterOne/sectionTwo/assets","/ar/chapterOne/sectionOne/assets","/ar/chapterOne/sectionTwo/assets"],d=function(){var e={},t=[];Array.from(arguments).forEach((function(r){"string"==typeof r?t.push(r):"object"===Object(n.a)(r)&&(e=r)}));var r=e,o=r.text,text=void 0!==o&&o,h=r.deep,f=void 0!==h&&h,path="/".concat(t.join("/").replace(/\/+/g,"/")),l=!path||!!w.find((function(e){return e===path})),y=l?{dir:f?{$regex:new RegExp("^".concat(path))}:path}:{path:path},d=l?[]:[function(data){return data[0]}];return new c.a({query:v.chain().find(y,!l),path:path,postprocess:d,text:text},{fullTextSearchFields:["title","description","slug","text"]})};t.default=function(e){return(y=new f.a("content.db")).loadJSONObject(e),v=y.getCollection("items"),d}}}]);