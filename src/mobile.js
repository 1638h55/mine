(function getAdapte(){
    var dpr ,rem,scale,width;
    var docEl=document.documentElement||document.body;
    var fontEl = document.createElement('style');
    var metaEl = document.querySelector('meta[name="viewport"]');
    dpr = window.devicePixelRatio||1;
	  dpr = dpr>=3 ? 3 :(dpr>=2 ? 2 : 1);
    scale = 1/dpr;
    widow.onresize = function () {
        docEl.setAttribute('data-dpr',dpr);
        metaEl.setAttribute('content', 'width=' + dpr* width + ',initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no');
        docEl.firstElementChild.appendChild(fontEl);
        width = docEl.clientWidth > 1300 ? 1300 : docEl.clientWidth;
        rem = width*dpr/10;
        console.log(width);
        fontEl.innerHTML ='html{font-size:'+rem+'px!important}';
    }
    window.rem =rem;
    window.dpr=dpr;
    // console.log(dpr);
    // console.log(rem);
 })()
