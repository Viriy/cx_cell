/*to load use reset-screen-size*/
(function(document){var dcl=document.documentElement,wh;function setRootRem(){ww=dcl.clientWidth;wh=dcl.clientHeight;if(wh<ww*2){dcl.style.fontSize=100*(wh/1334)+'px'}else{dcl.style.fontSize=100*(ww/750)+'px'}}setRootRem();document.addEventListener('DOMContentLoaded',setRootRem,false);window.addEventListener('resize',setRootRem,false)})(document);

/*判断手机系统,兼容屏幕*/
var phoneWidth=parseInt(window.screen.width);var phoneScale=phoneWidth/750;var ua=navigator.userAgent;if(/Android (\d+\.\d+)/.test(ua)){var version=parseFloat(RegExp.$1);if(version>2.3){document.write('<meta name="viewport" content="width=750, minimum-scale='+phoneScale+', maximum-scale='+phoneScale+'">')}else{document.write('<meta name="viewport" content="width=750,user-scalable=no">')}}else{document.write('<meta name="viewport" content="width=750, user-scalable=no">')};