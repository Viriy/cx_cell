mui.init();

//主界面和侧滑菜单界面均支持区域滚动；
mui('#offCanvasSideScroll').scroll();
mui('#offCanvasContentScroll').scroll();
mui('.mui-scroll-wrapper').scroll();
//实现ios平台原生侧滑关闭页面；
if (mui.os.plus && mui.os.ios) {
    mui.plusReady(function() { //5+ iOS暂时无法屏蔽popGesture时传递touch事件
        plus.webview.currentWebview().setStyle({
            'popGesture': 'none'
        });
    });
}
//侧滑容器父节点
var offCanvasWrapper = mui('.mui-off-canvas-wrap');
$(".list_menu a").on('tap', function() {
    offCanvasWrapper.offCanvas('close');
});

mui('body').on('tap', '[href^="html"],[href*="html"],[href^="tel:"],[href*="tel:"],[href^="mailto:"],[href*="mailto:"],[href^="http"],[href*="http"],[href^="www."],[href*="www."],[href^="com"],[href*="com"],[href^="php"],[href*="php"],[href^="aspx"],[href*="aspx"]', function() {
    window.top.location.href = this.href;
});

(function() {
	var supportOrientation = (typeof window.orientation === 'number' && typeof window.onorientationchange === 'object');
	var init = function(){
		var htmlNode = document.body.parentNode,
		orientation;
		var updateOrientation = function(){
			if(supportOrientation){
				orientation = window.orientation;
				switch(orientation){
				case 90:
				case -90:
				orientation = 'landscape';
				break;
				default:
				orientation = 'portrait';
				break;
			}
		}else{
			orientation = (window.innerWidth > window.innerHeight) ? 'landscape' : 'portrait';
		}
		htmlNode.setAttribute('class',orientation);
	};
	if(supportOrientation){
		window.addEventListener('orientationchange',updateOrientation,false);
	}else{
		window.addEventListener('resize',updateOrientation,false);
	}
		updateOrientation();
	};
	window.addEventListener('DOMContentLoaded',init,false);

    // 微信分享
     function ready(){
       share({
        title:document.title,
        desc: '承信网络',
        link: location.href,
        imgUrl: '../images/share.jpg',//显示小图标
        debug: false
        });
     }
})();

//返回顶部
mui('body').on('tap', '.to_top', function() {
    mui('#offCanvasContentScroll').scroll().scrollTo(0,0,1000);
});