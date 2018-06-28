mui.init();
//主界面和侧滑菜单界面均支持区域滚动；
mui('#offCanvasSideScroll').scroll();

//侧滑容器父节点
var offCanvasWrapper = mui('.mui-off-canvas-wrap');
$(".offCanvasHide").on('tap', function() {
    offCanvasWrapper.offCanvas('close');
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