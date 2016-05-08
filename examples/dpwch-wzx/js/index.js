!function(t,n,e){function o(t){t.preventDefault()}function i(t,n,e){return 0>t?e?n-1:0:t>=n?e?0:n-1:t}function a(t,n,e){var o="0px",i="0px";"v"===n?i=e+"px":o=e+"px",t.css({"-webkit-transform":"translate3d("+o+", "+i+", 0px);",transform:"translate3d("+o+", "+i+", 0px);"})}function r(n){var e=t.extend(!0,{},s,n),o=this;o.curIndex=-1,o.o=e,o.startY=0,o.movingFlag=!1,o.$this.addClass("page-wrap"),o.$parent=o.$this.parent(),o.$pages=o.$this.find(e.page).addClass("fullpage fullpage-dir-"+e.dir),o.pagesLength=o.$pages.length,o.update(),o.initEvent(),o.start()}function c(t,n){this.$this=t,r.call(this,n)}if("undefined"==typeof t)throw new Error("zepto.fullpage's script requires Zepto");var g=null,s={page:".fullpage",start:0,duration:500,loop:!1,drag:!1,dir:"v",der:.1,change:function(t){},beforeChange:function(t){},afterChange:function(t){},orientationchange:function(t){}};t.extend(c.prototype,{update:function(){"h"===this.o.dir&&(this.width=this.$parent.width(),this.$pages.width(this.width),this.$this.width(this.width*this.pagesLength)),this.height=this.$parent.height(),this.$pages.height(this.height),this.moveTo(this.curIndex<0?this.o.start:this.curIndex)},initEvent:function(){var t=this,e=t.$this;e.on("touchstart",function(n){return t.status?t.movingFlag?0:(t.startX=n.targetTouches[0].pageX,void(t.startY=n.targetTouches[0].pageY)):1}),e.on("touchend",function(n){if(!t.status)return 1;if(t.movingFlag)return 0;var e="v"===t.o.dir?(n.changedTouches[0].pageY-t.startY)/t.height:(n.changedTouches[0].pageX-t.startX)/t.width,o=e>t.o.der||e<-t.o.der?e>0?-1:1:0;t.moveTo(t.curIndex+o,!0)}),t.o.drag&&e.on("touchmove",function(n){if(!t.status)return 1;if(t.movingFlag)return t.startX=n.targetTouches[0].pageX,t.startY=n.targetTouches[0].pageY,0;var o=n.changedTouches[0].pageY-t.startY;(0==t.curIndex&&o>0||t.curIndex===t.pagesLength-1&&0>o)&&(o/=2);var i=n.changedTouches[0].pageX-t.startX;(0==t.curIndex&&i>0||t.curIndex===t.pagesLength-1&&0>i)&&(i/=2);var r="v"===t.o.dir?-t.curIndex*t.height+o:-t.curIndex*t.width+i;e.removeClass("anim"),a(e,t.o.dir,r)}),n.addEventListener("orientationchange",function(){180!==n.orientation&&0!==n.orientation||t.o.orientationchange("portrait"),90!==n.orientation&&-90!==n.orientation||t.o.orientationchange("landscape")},!1),n.addEventListener("resize",function(){t.update()},!1)},holdTouch:function(){t(document).on("touchmove",o)},unholdTouch:function(){t(document).off("touchmove",o)},start:function(){this.status=1,this.holdTouch()},stop:function(){this.status=0,this.unholdTouch()},moveTo:function(t,e){var o=this,r=o.$this,c=o.curIndex;if(t=i(t,o.pagesLength,o.o.loop),e?r.addClass("anim"):r.removeClass("anim"),t!==c){var g=o.o.beforeChange({next:t,cur:c});if(g===!1)return 1}return o.movingFlag=!0,o.curIndex=t,a(r,o.o.dir,-t*("v"===o.o.dir?o.height:o.width)),t!==c&&o.o.change({prev:c,cur:t}),n.setTimeout(function(){o.movingFlag=!1,t!==c&&(o.o.afterChange({prev:c,cur:t}),o.$pages.removeClass("cur").eq(t).addClass("cur"))},o.o.duration),0},movePrev:function(t){this.moveTo(this.curIndex-1,t)},moveNext:function(t){this.moveTo(this.curIndex+1,t)},getCurIndex:function(){return this.curIndex}}),t.fn.fullpage=function(n){return g||(g=new c(t(this),n)),this},t.fn.fullpage.version="0.5.0",t.each(["update","moveTo","moveNext","movePrev","start","stop","getCurIndex","holdTouch","unholdTouch"],function(n,e){t.fn.fullpage[e]=function(){return g?g[e].apply(g,[].slice.call(arguments,0)):0}})}(Zepto,window),function(){!function(){!function(){if(!window.Motion){var t={version:"1.1",add:function(t,n){for(var e=window,o=arguments.callee,i=null,a=(/^([\w\.]+)(?:\:([\w\.]+))?\s*$/.test(t),RegExp.$1.split(".")),r=RegExp.$2.split("."),t=a.pop(),c=/[A-Z]/.test(t.substr(0,1)),g=function(){var t=arguments.callee.prototype.init;"function"==typeof t&&arguments.callee.caller!=o&&t&&t.apply(this,arguments)},s=0;s<a.length;s++){var u=a[s];e=e[u]||(e[u]={})}if(""!=r[0]){i=window;for(var s=0;s<r.length;s++)if(i=i[r[s]],!i){i=null;break}}c&&"function"==typeof n?(i&&(g.prototype=new i,g.prototype.superClass=i),e[t]=g,g.prototype.constructor=g,n.call(e[t].prototype)):e[t]=n}};window.Motion=window.mo=t}}()}(),function(){Motion.add("mo.Base",function(){var t=this;this.constructor;t.constructor=function(){},t.on=function(t,n){return box=Zepto(this),box.on.apply(box,arguments)},t.off=function(t,n){return box=Zepto(this),box.off.apply(box,arguments)},t.trigger=function(t,n){var e=Zepto(this);return e.triggerHandler.apply(e,arguments)}})}(),function(){Motion.add("mo.Loader:mo.Base",function(){var t=this,n={empty:function(){},imgLoader:function(t,n){var e=new Image,o=new Date;e.onload=e.onerror=function(){n(t,e,new Date-o),e.onload=null},e.src=t},jsLoader:function(){var t=document.getElementsByTagName("script")[0],n=t.parentNode,e=/ded|co/,o="onload",i="onreadystatechange",a="readyState";return function(r,c,g){g=g||"gb2312";var s=document.createElement("script"),u=new Date;s.charset=g,s[o]=s[i]=function(){this[a]&&!e.test(this[a])||(s[o]=s[i]=null,c&&c(r,s,new Date-u),s=null)},s.async=!0,s.src=r,n.insertBefore(s,t)}}(),cssLoader:function(t,n){var e=document.head||document.getElementsByTagName("head")[0],o=new Date;node=document.createElement("link"),node.rel="stylesheet",node.href=t,e.appendChild(node),n&&n(t,node,new Date-o)},audioLoader:function(t,n){var e=new Audio,o=new Date;$(e).bind("canplaythrough",function(){n(t,e,new Date-o)}),e.src=t,e.load()},getExt:function(t){return t.match(/\.([^\.]*)$/)[0].substr(1).match(/^[a-zA-Z0-9]+/)[0]},getType:function(t){var e=n.getExt(t),o={img:["png","jpg","gif"],css:["css"],js:["js"],audio:["mp3","ogg","wav"]};for(var i in o)if(o[i].indexOf(e)>-1)return i;return!1}},e=this.constructor;t.constructor=function(t,n){t&&this.init(t,n)},e.config={onLoading:n.empty,onComplete:n.empty,loadType:0,minTime:0,dataAttr:"preload"},t.init=function(t,o){var i=this;if("function"==typeof o){var a=o;o={onComplete:a}}i.config=Zepto.extend(!0,{},e.config,o);var o=i.config;t=[].concat(t);var r={},c=Array.prototype.slice.call(document.querySelectorAll("[data-"+o.dataAttr+"]"));Zepto(c).each(function(n,e){var i=Zepto(e),a=i.attr("data-"+o.dataAttr);r[a]?r[a].push(e):(r[a]=[e],t.indexOf(a)<0&&t.push(a))}),o.event&&i.on(o.event);var g=t.length,s=0;Zepto(t).each(function(t,n){if("object"==typeof n){g--;for(var e in n)g++}});var u=(new Date).getTime(),d=function(t){r[t]&&Zepto.each(r[t],function(n,e){e.removeAttribute("data-"+o.dataAttr);var i=e.tagName.toLowerCase();switch(i){case"link":e.href=t;break;case"img":case"script":case"video":e.src=t;break;default:e.style.backgroundImage="url("+t+")"}})},p=function(t,n,e,a){var r=function(){if(o.onLoading(++s,g,t,n),i.trigger("loading",[s,g,t,n]),d(t),a([s,g,t,n]),s==g){var e=(new Date).getTime()-u;o.onComplete(e),i.trigger("complete",[e])}},c=o.minTime-e;c>0?setTimeout(r,c):r()};if(t.length){var h=function(t,e,o){var i=function(t,e,o){var i=n.getType(t),o=o||function(){},a=n[i+"Loader"];void 0===a?e(t,null,0,o):a(t,function(){var t=Array.prototype.slice.call(arguments,0);t.push(o),e.apply(null,t)})};if("object"==typeof t)for(var a in t)!function(t,n){i(n,function(){var o=Zepto(t);o.is("img")?o.attr("src",n):o.css("backgroundImage",'url("'+n+'")');var i=Array.prototype.slice.call(arguments,0);e.apply(null,i)},o)}(a,t[a]);else i(t,e,o)};if(1==o.loadType){var f=0;!function(){var n=arguments.callee;h(t[f],function(){p.apply(null,arguments)},function(){f++,t[f]&&n()})}()}else Zepto.each(t,function(t,n){h(n,p)})}else o.onComplete(0),i.trigger("complete",[0])}})}()}(),$(function(){function t(t){$("#load_text").text("Loading... "+t+"%")}function n(){var t=$("#container"),n=document.getElementById("audio_bgm");$("#page_wrap").fullpage(),$("#audio_bgm").on("play",function(){$("#music").addClass("playing")}),$("#audio_bgm").on("pause",function(){$("#music").removeClass("playing")}),$("#music").on("click",function(t){var e=$(this);e.hasClass("playing")?n.pause():n.play()}),t.on("click",".btn-change",function(t){var n=$(this),e=n.closest(".page"),o=parseInt(e.data("index"));e.removeClass("fadeIn").addClass("hide"),o>=3?$(".page-1").removeClass("hide").addClass("fadeIn"):$(".page-"+(o+1)).removeClass("hide").addClass("fadeIn")}),t.on("click",".cover",function(t){var n=$(this),e=$("#video_wrap"),o=$('<video id="video" src="http://cdn.ttthing.com/yy_wuzongxian/video.mp4" controls width="100%"></video>');e.append(o),n.hide(),o[0].play(),$("#music").trigger("click")})}var e=["http://cdn.ttthing.com/yy_wuzongxian/images/arrow.png","http://cdn.ttthing.com/yy_wuzongxian/images/bg_1.jpg","http://cdn.ttthing.com/yy_wuzongxian/images/bg_2.jpg","http://cdn.ttthing.com/yy_wuzongxian/images/bg_3.jpg","http://cdn.ttthing.com/yy_wuzongxian/images/btn_change.png","http://cdn.ttthing.com/yy_wuzongxian/images/btn_go.png","http://cdn.ttthing.com/yy_wuzongxian/images/cover.jpg","http://cdn.ttthing.com/yy_wuzongxian/images/frame.png","http://cdn.ttthing.com/yy_wuzongxian/images/gif_1.jpg","http://cdn.ttthing.com/yy_wuzongxian/images/gif_2.jpg","http://cdn.ttthing.com/yy_wuzongxian/images/gif_3.jpg","http://cdn.ttthing.com/yy_wuzongxian/images/gif_4.jpg","http://cdn.ttthing.com/yy_wuzongxian/images/gif_5.jpg","http://cdn.ttthing.com/yy_wuzongxian/images/gif_6.jpg","http://cdn.ttthing.com/yy_wuzongxian/images/mask.png","http://cdn.ttthing.com/yy_wuzongxian/images/p_1.png","http://cdn.ttthing.com/yy_wuzongxian/images/p_2.png","http://cdn.ttthing.com/yy_wuzongxian/images/p_3.png","http://cdn.ttthing.com/yy_wuzongxian/images/p_4.png","http://cdn.ttthing.com/yy_wuzongxian/images/p_5.png","http://cdn.ttthing.com/yy_wuzongxian/images/title_1.png","http://cdn.ttthing.com/yy_wuzongxian/images/title_2.png"];new mo.Loader(e,{loadType:1,onLoading:function(n,e){var o=parseInt(n/e*100);t(o)},onComplete:function(e){t(100);var o=$("#loading_mask"),i=$("#page_wrap");i.html($("#tpl").html()),o.addClass("fadeOut"),setTimeout(function(){n()},300),setTimeout(function(){o.addClass("hide")},1e3);var a=document.getElementById("audio_bgm");a.src="http://cdn.ttthing.com/yy_wuzongxian/bgm.mp3",a.play(),$(document).on("touchstart",function(){$(document).off("touchstart"),a.play()}),$("#music").removeClass("hide"),new mo.Loader(["http://cdn.ttthing.com/yy_wuzongxian/images/gif_1.gif","http://cdn.ttthing.com/yy_wuzongxian/images/gif_2.gif","http://cdn.ttthing.com/yy_wuzongxian/images/gif_3.gif","http://cdn.ttthing.com/yy_wuzongxian/images/gif_4.gif","http://cdn.ttthing.com/yy_wuzongxian/images/gif_5.gif","http://cdn.ttthing.com/yy_wuzongxian/images/gif_6.gif"],{loadType:1,onLoading:function(t,n){var e=i.find(".gif-"+t);e.find("img").attr("src","http://cdn.ttthing.com/yy_wuzongxian/images/gif_"+t+".gif"),e.find(".load-wrap").addClass("hide")}})}})});