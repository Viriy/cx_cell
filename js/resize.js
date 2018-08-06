/*to load use reset-screen-size*/
// (function(document){var dcl=document.documentElement,wh;function setRootRem(){ww=dcl.clientWidth;wh=dcl.clientHeight;if(wh<ww*2-wh*0.037){dcl.style.fontSize=100*(wh/1334)+'px'}else{dcl.style.fontSize=100*(ww/750)+'px'}}setRootRem();document.addEventListener('DOMContentLoaded',setRootRem,false);window.addEventListener('resize',setRootRem,false)})(document);


(function(document) {
    var dcl = document.documentElement,
        wh;

    function setRootRem() { ww = dcl.clientWidth;
        wh = dcl.clientHeight;
        if (wh < ww * 2 - wh * 0.037) { dcl.style.fontSize = 100 * (wh / 1334) + 'px' } else { dcl.style.fontSize = 100 * (ww / 750) + 'px' } }
    setRootRem();
    document.addEventListener('DOMContentLoaded', setRootRem, false);
    window.addEventListener('resize', setRootRem, false) })(document);


(function(doc, win) {
//      用原生方法获取用户设置的浏览器的字体大小(兼容ie)
        if(doc.documentElement.currentStyle) {
            var user_webset_font=doc.documentElement.currentStyle['fontSize'];
        }
        else {
            var user_webset_font=getComputedStyle(doc.documentElement,false)['fontSize'];
        }
//      取整后与默认16px的比例系数
        var xs=parseFloat(user_webset_font)/16;
//      设置rem的js设置的字体大小
        var view_jsset_font,result_font;
        var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        clientWidth,
        recalc = function() {
            if(!clientWidth) return;
            if(!doc.addEventListener) return;
        	var dcl = document.documentElement,wh;
            clientWidth = docEl.clientWidth;
            ww = dcl.clientWidth;
        	wh = dcl.clientHeight;
            if (wh < ww * 2 - wh * 0.037) {
            	dcl.style.fontSize = 100 * (wh / 1334) + 'px'
            } else {
//              设置rem的js设置的字体大小
                view_jsset_font=100 * (clientWidth / 750);
//              最终的字体大小为rem字体/系数
                result_font=view_jsset_font/xs;
//              设置根字体大小
                docEl.style.fontSize = result_font + 'px';
            }

            //if(clientWidth<540){
//              设置rem的js设置的字体大小
                view_jsset_font=100 * (clientWidth / 750);
//              最终的字体大小为rem字体/系数
                result_font=view_jsset_font/xs;
//              设置根字体大小
                docEl.style.fontSize = result_font + 'px';
                //}
            // else{
            //     docEl.style.fontSize = 54 + 'px';
            //     }
        };
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

/*判断手机系统,兼容屏幕*/
var phoneWidth=parseInt(window.screen.width);var phoneScale=phoneWidth/750;var ua=navigator.userAgent;if(/Android (\d+\.\d+)/.test(ua)){var version=parseFloat(RegExp.$1);if(version>2.3){document.write('<meta name="viewport" content="width=750, minimum-scale='+phoneScale+', maximum-scale='+phoneScale+'">')}else{document.write('<meta name="viewport" content="width=750,user-scalable=no">')}}else{document.write('<meta name="viewport" content="width=750, user-scalable=no">')};