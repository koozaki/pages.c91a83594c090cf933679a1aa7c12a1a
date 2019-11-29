(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(91)},41:function(e,t,a){},89:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(15),i=a.n(c),r=(a(41),a(2)),o=a(3),s=a(5),m=a(4),u=a(6),d=a(94),h=a(95),p=a(97),E=a(96),b=a(93),f=!1,v=function(){},g=function(){return Math.round(performance.now())},y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v;if("undefined"===typeof e)throw new Error("This parameter is required.");if("number"!==typeof e&&"string"!==typeof e)throw new TypeError("This parameter is number or string.");if("string"===typeof e){var a=document.querySelector(e);if(!a)return t(!1);var n=a.getBoundingClientRect().top;e=window.scrollY+n}if(e<0)return t(!1);if(f)return t(!1);f=!0;var l,c=document.scrollingElement||document.documentElement,i=c.scrollTop>e,r=function(){return Math.abs(c.scrollTop-e)},o=Math.ceil(r()/50),s=10,m=c.scrollTop,u=!1,d=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return f=!1,t(e)};!function t(){if(r()<=1)return c.scrollTop=e,d();if(r()<o&&(o=Math.ceil(r()/2),s=1),i){if(c.scrollTop<=e)return d();c.scrollTop-=o}else{if(c.scrollTop>=e)return d();c.scrollTop+=o}if(m===c.scrollTop?(u||(l=g()),u=!0):u=!1,g()-l>1e3)return d();m=c.scrollTop,setTimeout(t,s)}()},k=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={opened:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"clickHandler",value:function(){this.setState({opened:!this.state.opened})}},{key:"clickNav",value:function(e){y(e)}},{key:"render",value:function(){var e=this;return l.a.createElement(h.a,null,l.a.createElement("div",null,l.a.createElement(b.a,{className:"menu-toggle rounded bg-dark text-white ".concat(this.state.opened?"active":""),onClick:this.clickHandler.bind(this),to:"#"},l.a.createElement("i",{className:"fas "+(this.state.opened?"fa-times":"fa-bars")})),l.a.createElement("nav",{id:"sidebar-wrapper",className:"bg-dark ".concat(this.state.opened?"active":""),onClick:this.clickHandler.bind(this)},l.a.createElement("ul",{className:"sidebar-nav"},l.a.createElement(function(t){return t.data.map(function(t,a){return l.a.createElement("li",{key:a,className:"sidebar-nav-item"},l.a.createElement(b.a,{onClick:e.clickNav.bind(e,t.to),className:"text-white font-weight-bold",to:t.to},t.title))})},{data:[{to:"#top",title:"Top"},{to:"#about",title:"About"},{to:"#services",title:"Services"},{to:"#portfolio",title:"Portfolio"},{to:"#pricing",title:"Pricing"},{to:"#contact",title:"Contact"}]})))))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={style:{height:"".concat(document.documentElement.clientHeight,"px")}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.eventHandler=this.onResize.bind(this),window.addEventListener("resize",this.eventHandler)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.eventHandler)}},{key:"onResize",value:function(){this.setState({style:{height:"".concat(document.documentElement.clientHeight,"px")}})}},{key:"onClick",value:function(e){var t=document.querySelector(e).getBoundingClientRect().top;y(window.scrollY+t)}},{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement("header",{id:"header",className:"masthead d-flex",style:this.state.style},l.a.createElement("div",{className:"container text-center my-auto"},l.a.createElement("div",{className:"row justify-content-center align-items-end"},l.a.createElement(b.a,{className:"header-logo",onClick:this.onClick.bind(this,"#about"),to:"#about"}))),l.a.createElement("div",{className:"overlay"})))}}]),t}(n.Component),j=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"bg-light text-black",id:"about"},l.a.createElement("div",{className:"container text-center"},l.a.createElement("h3",{className:"text-gold"},"ABOUT"),l.a.createElement("h2",null,"\u5f53\u5e97\u306b\u3064\u3044\u3066"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-10 mx-auto"},l.a.createElement("p",{className:"lead"},"\u8eca\u4f53\u3092\u7814\u304e\u6f84\u307e\u3057\u5b88\u308b\u3002\u6700\u9ad8\u306e\u30b3\u30fc\u30c6\u30a3\u30f3\u30b0\u5264\u3068\u3044\u3046\u3001\u5e38\u306b\u7f8e\u3057\u304f\u3042\u308b\u9078\u629e\u80a2\u3002\u5320\u306e\u6280\u8853\u3067\u6700\u9ad8\u306e\u4ed5\u4e0a\u304c\u308a\u3092\u3042\u306a\u305f\u306e\u304a\u8eca\u306b\u63d0\u4f9b\u3044\u305f\u3057\u307e\u3059\u3002"),l.a.createElement("p",{className:"lead"},"\u5f53\u5e97\u3067\u306f\u3001\u7814\u78e8\u8cc7\u6750\u3084\u30b3\u30fc\u30c6\u30a3\u30f3\u30b0\u5264\u3092\u6771\u4eac\u30e2\u30fc\u30bf\u30fc\u30b7\u30e7\u30fc\u3001\u6771\u4eac\u30aa\u30fc\u30c8\u30b5\u30ed\u30f3\u4f1a\u5834\u3067\u3082\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u53b3\u9078\u3055\u308c\u305fMade in Japan\u306e\u8cc7\u6750\u3092\u6271\u3046\u5c02\u9580\u5e97\u3088\u308a\u53d6\u308a\u5bc4\u305b\u3001\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002")))))}}]),t}(n.Component),N=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=function(e){var t=e.icon,a=e.name,n=e.description;return l.a.createElement("div",{className:"col-lg-4 col-md-4 mb-5 mb-lg-0"},l.a.createElement("span",{className:"service-icon bg-white rounded-circle mx-auto mb-3"},l.a.createElement("i",{className:"".concat(t," text-gold font-weight-bold")})),l.a.createElement("h4",null,l.a.createElement("strong",null,a)),l.a.createElement("p",{className:"text-light"},n))};return l.a.createElement("section",{className:"bg-dark text-white",id:"services"},l.a.createElement("div",{className:"container text-center"},l.a.createElement("h3",{className:"text-gold"},"SERVICES"),l.a.createElement("h2",null,"\u30b5\u30fc\u30d3\u30b9"),l.a.createElement("div",{className:"row"},l.a.createElement(e,{icon:"icon-camera",name:"\u30ab\u30fc\u30b3\u30fc\u30c6\u30a3\u30f3\u30b0",description:"\u30dc\u30c7\u30a3\u306b\u30b3\u30fc\u30c6\u30a3\u30f3\u30b0\u3059\u308b\u3053\u3068\u3067\u5857\u88c5\u306e\u72b6\u614b\u3092\u7f8e\u3057\u304f\u4fdd\u8b77\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),l.a.createElement(e,{icon:"icon-like",name:"\u30ab\u30fc\u30dd\u30ea\u30c3\u30b7\u30f3\u30b0",description:"\u30dc\u30c7\u30a3\u3092\u7814\u78e8\u3059\u308b\u3053\u3068\u3067\u65b0\u8eca\u6642\u306b\u8fd1\u3044\u8f1d\u304d\u3092\u53d6\u308a\u623b\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),l.a.createElement(e,{icon:"icon-heart",name:"\u624b\u6d17\u3044\u6d17\u8eca",description:"\u7d14\u6c34\u3092\u4f7f\u7528\u3057\u3001\u4e01\u5be7\u306b\u624b\u6d17\u3044\u6d17\u8eca\u3092\u3055\u305b\u3066\u3044\u305f\u3060\u304d\u307e\u3059\u3002"}))))}}]),t}(n.Component),S=a(35),x=a.n(S),w=[{caption:"\u5e97\u5185",description:"",image:"assets/shop/store.jpg"},{caption:"\u5f85\u5408\u5ba4",description:"",image:"assets/shop/waiting.jpg"},{caption:"\u6d17\u8eca",description:"",image:"assets/shop/washing.jpg"},{caption:"\u30dd\u30ea\u30c3\u30b7\u30e5",description:"",image:"assets/shop/polishing.jpg"}],T=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={lightboxIsOpen:!1,currentImage:0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"gotoPrevious",value:function(){this.setState({currentImage:this.state.currentImage-1})}},{key:"gotoNext",value:function(){this.setState({currentImage:this.state.currentImage+1})}},{key:"closeLightbox",value:function(){this.setState({lightboxIsOpen:!1})}},{key:"openLightbox",value:function(e){this.setState({lightboxIsOpen:!0,currentImage:e})}},{key:"clickThumbnail",value:function(e){this.setState({currentImage:e})}},{key:"render",value:function(){var e=this,t=w.map(function(e){return{src:e.image,caption:e.caption,alt:e.caption}});return l.a.createElement("section",{className:"bg-light text-black",id:"portfolio"},l.a.createElement("div",{className:"container text-center"},l.a.createElement("h3",{className:"text-gold"},"SHOP"),l.a.createElement("h2",null,"\u5e97\u5185\u306e\u69d8\u5b50"),l.a.createElement("div",{className:"row no-gutters"},l.a.createElement(function(t){return t.data.map(function(t,a){return l.a.createElement("div",{key:a,className:"col-lg-6"},l.a.createElement(b.a,{className:"portfolio-item text-white",to:"#",onClick:e.openLightbox.bind(e,a)},l.a.createElement("div",{className:"caption"},l.a.createElement("h2",null,t.caption),l.a.createElement("p",null,t.description)),l.a.createElement("img",{className:"img-fluid",src:t.image,alt:t.caption})))})},{data:w}),l.a.createElement(x.a,{backdropClosesModal:!0,showThumbnails:!0,images:t,currentImage:this.state.currentImage,isOpen:this.state.lightboxIsOpen,onClickPrev:this.gotoPrevious.bind(this),onClickNext:this.gotoNext.bind(this),onClose:this.closeLightbox.bind(this),onClickThumbnail:this.clickThumbnail.bind(this)}))))}}]),t}(n.Component),L=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=function(e){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row mx-auto"},l.a.createElement("div",{className:"col-lg-12 mb-5"},l.a.createElement("div",{className:"text-center mb-4"},l.a.createElement("h4",null,e.title)),l.a.createElement("div",{className:"table-responsive"},l.a.createElement("table",{className:"table text-center"},l.a.createElement("tbody",null,e.data.map(function(e,t){var a=e.map(function(e,a){return 0===t||0===a?l.a.createElement("th",{key:a},e):l.a.createElement("td",{key:a},e)});return l.a.createElement("tr",{key:t},a)})))))))},t=function(e){return l.a.createElement("div",{className:"col-lg-6 mb-5"},l.a.createElement("h4",{className:"text-gold"},e.title),l.a.createElement("table",{className:"table text-center"},l.a.createElement("tbody",null,e.table.map(function(e,t){var a=Object.keys(e),n=Object.values(e);return l.a.createElement("tr",{key:t},l.a.createElement("th",{scope:"row"},a),l.a.createElement("td",null,n))}))),e.feature?l.a.createElement("div",null,l.a.createElement("h5",null,"\u7279\u5fb4"),l.a.createElement("p",null,e.feature)):"",e.note?l.a.createElement("div",null,l.a.createElement("h5",null,"\u5099\u8003"),l.a.createElement("ul",null,e.note.map(function(e,t){return l.a.createElement("li",{key:t},e)}))):"")};return l.a.createElement(h.a,null,l.a.createElement("section",{className:"bg-dark text-white",id:"pricing"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"text-center"},l.a.createElement("h3",{className:"text-gold"},"MENU"),l.a.createElement("h2",null,"\u30e1\u30cb\u30e5\u30fc"))),l.a.createElement("div",{className:"text-center mb-4"},l.a.createElement("h4",null,"\u30b3\u30fc\u30c6\u30a3\u30f3\u30b0\u30e1\u30cb\u30e5\u30fc")),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row mx-auto"},l.a.createElement(t,{title:"3D HYBRID COAT",table:[{SS:"\uffe5100,000"},{S:"\uffe5110,000"},{M:"\uffe5120,000"},{L:"\uffe5140,000"},{LL:"\uffe5150,000"},{XL:"\uffe5160,000"},{"3L":"\uffe5180,000"}],feature:"\u30ac\u30e9\u30b9\u30b3\u30fc\u30c6\u30a3\u30f3\u30b0\u306e\u5e38\u8b58\u3092\u8986\u3059\u9ad8\u3044\u8010\u4e45\u6027\u3068\u8010\u96e8\u67d3\u307f(\u6c34\u8de1\u75d5)\u6027\u3092\u6301\u3063\u305f3D\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc(\u7acb\u4f53\u69cb\u9020)\u7121\u6eb6\u5264\u30b3\u30fc\u30c6\u30a3\u30f3\u30b0\u5264\u3067\u3059\u3002",note:["\u8010\u4e45\u60275\u5e74\u4ee5\u4e0a(\u5e741\u56de\u306e\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u5fc5\u8981) ","\u65bd\u5de5\u304a\u9810\u304b\u308a\u671f\u95934\u65e5\u301c \u65b0\u8eca\u306e\u5834\u54083\u65e5\u301c","\u64a5\u6c34\u30b3\u30fc\u30c6\u30a3\u30f3\u30b0"]}),l.a.createElement(t,{title:"ULGO",table:[{SS:"\uffe560,000"},{S:"\uffe565,000"},{M:"\uffe570,000"},{L:"\uffe580,000"},{LL:"\uffe590,000"},{XL:"\uffe5100,000"},{"3L":"\uffe5110,000"}],feature:"\u2fbc\u6fc3\u5ea6\u306e\u30ac\u30e9\u30b9\u6210\u5206\u3092\u6301\u3061\u3001\u819c\u539a\u611f\u306e\u3042\u308b\u91cd\u539a\u306a\u4ed5\u4e0a\u304c\u308a\u3092\u5b9f\u73fe\u3057\u305fW\u30ec\u30a4\u30e4\u30fc\uff082\u5c64\uff09\u5f0f\u306e\u64a5\u2f54\u30bf\u30a4\u30d7\u30dc\u30c7\u30a3\u30fc\u30b3\u30fc\u30c6\u30a3\u30f3\u30b0\u5264\u3067\u3059\u3002",note:["\u8010\u4e45\u60275\u5e74\u4ee5\u4e0a\uff08\u5e741\u56de\u306e\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u5fc5\u8981\uff09","\u65bd\u2f2f\u304a\u9810\u304b\u308a\u671f\u95933\u2f47\u301c","\u64a5\u2f54\uff65\u758e\u2f54\u30b3\u30fc\u30c6\u30a3\u30f3\u30b0\u306e\u3044\u305a\u308c\u304b\u3092\u304a\u9078\u3073\u304f\u3060\u3055\u3044\u3002"]}),l.a.createElement(t,{title:"BLACK JACK",table:[{SS:"\uffe550,000"},{S:"\uffe555,000"},{M:"\uffe560,000"},{L:"\uffe570,000"},{LL:"\uffe580,000"},{XL:"\uffe590,000"},{"3L":"\uffe5100,000"}],feature:"\u901a\u5e38\u7d04\uff11\u03bcm\u672a\u6e80\u3067\u3042\u308b\u539a\u307f\u306e\u30ac\u30e9\u30b9\u30b3\u30fc\u30c6\u30a3\u30f3\u30b0\u3092\u2f24\u304d\u304f\u8d85\u3048\u308b3-5\u03bcm\u306e\u88ab\u819c\u3092 \u5f62\u6210\u3059\u308b\u7d14\u5ea6\u306e\u2fbc\u3044\u30ac\u30e9\u30b9\u30b3\u30fc\u30c6\u30a3\u30f3\u30b0\u5264\u3067\u3059\u3002",note:["\u8010\u4e45\u60273\u5e74\u4ee5\u4e0a\uff08\u5e741\u56de\u306e\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u5fc5\u8981\uff09","\u65bd\u2f2f\u304a\u9810\u304b\u308a\u671f\u95933\u2f47\u301c","\u758e\u2f54\u30fb\u89aa\u2f54\u30b3\u30fc\u30c6\u30a3\u30f3\u30b0\u306e\u3044\u305a\u308c\u304b\u3092\u304a\u9078\u3073\u304f\u3060\u3055\u3044\u3002"]}),l.a.createElement(t,{title:"IGUAZ",table:[{SS:"\uffe520,000"},{S:"\uffe522,000"},{M:"\uffe525,000"},{L:"\uffe526,000"},{LL:"\uffe528,000"},{XL:"\uffe530,000"},{"3L":"\uffe535,000"}],feature:"\u30b9\u30d7\u30ec\u30fc\u578b\u306e\u2f3f\u8efd\u3055\u3068\u786c\u5316\u578b\u30ac\u30e9\u30b9\u30b3\u30fc\u30c6\u30a3\u30f3\u30b0\u306e\u8010\u4e45\u6027\u3092\u30d0\u30e9\u30f3\u30b9\u3055\u305b\u305f \u30b3\u30fc\u30c6\u30a3\u30f3\u30b0\u5264\u3067\u3059\u3002\u65bd\u2f2f\u5f8c\u306e\u89e6\u899a\uff08\u2f3f\u89e6\u308a\u306a\u3069\uff09\u306b\u3088\u308b\u30b9\u30d9\u30b9\u30d9\u611f\u304c\u7279\u5fb4\u3067\u3059\u3002",note:["\u8010\u4e45\u60276\u30f6\u2f49\u301c9\u30f6\u2f49","\u65bd\u2f2f\u304a\u9810\u304b\u308a\u671f\u95931\u2f47","\u64a5\u2f54\u30b3\u30fc\u30c6\u30a3\u30f3\u30b0"]}))),l.a.createElement(e,{title:"\u5f53\u5e97\u30b3\u30fc\u30c6\u30a3\u30f3\u30b0\u65bd\u2f2f\u2f9e\u69d8\u5411\u3051 \u2f3f\u6d17\u3044\u6d17\u2f9e\u30e1\u30cb\u30e5\u30fc",data:[["","SS","S","M","L","LL","XL","3L"],["\u30d7\u30ec\u30df\u30a2\u30e0\u6d17\u8eca \u203b1","\uffe53,500","\uffe54,000","\uffe55,000","\uffe55,000","\uffe55,500","\uffe56,000","\uffe57,000"],["\u6d17\u8eca","\uffe51,900","\uffe52,200","\uffe52,200","\uffe52,500","\uffe52,800","\uffe53,000","\uffe53,500"],["\u5ba4\u5185\u6e05\u6383","\uffe51,700","\uffe51,800","\uffe51,900","\uffe52,200","\uffe52,300","\uffe52,400","\uffe52,500"],["\u6708\u5b9a\u984d\u6d17\u8eca \u203b2","\uffe54,000","\uffe54,500","\uffe55,000","\uffe55,500","\uffe56,000","\uffe56,500","\uffe57,000"]]}),l.a.createElement(e,{title:"\u30dd\u30ea\u30c3\u30b7\u30e5\u30e1\u30cb\u30e5\u30fc",data:[["","SS","S","M","L","LL","XL","3L"],["\u4ed5\u4e0a\u3052\u7814\u78e8","\uffe514,500","\uffe520,500","\uffe526,500","\uffe536,500","\uffe546,500","\uffe557,000","\uffe569,000"],["\u4e2d\u9593\u7814\u78e8","\uffe532,000","\uffe538,000","\uffe544,000","\uffe554,000","\uffe564,000","\uffe574,500","\uffe586,500"],["\u93e1\u9762\u7814\u78e8","\uffe550,500","\uffe556,500","\uffe562,500","\uffe572,000","\uffe582,500","\uffe593,000","\uffe5105,000"]]}),l.a.createElement(e,{title:"\u30a6\u30a4\u30f3\u30c9\u30a6\u30b3\u30fc\u30c6\u30a3\u30f3\u30b0\u30e1\u30cb\u30e5\u30fc",data:[["","SS","S","M","L","LL","XL","3L"],["\u30d5\u30ed\u30f3\u30c8\u30ac\u30e9\u30b9\u306e\u307f","\uffe55,000","\uffe55,000","\uffe56,000","\uffe56,000","\uffe58,000","\uffe58,000","\uffe510,000"],["\u5168\u9762","\uffe515,000","\uffe515,000","\uffe517,000","\uffe517,000","\uffe520,000","\uffe520,000","\uffe522,000"],["\u30b5\u30f3\u30eb\u30fc\u30d5\u8eca","\uffe517,000","\uffe517,000","\uffe520,000","\uffe520,000","\uffe522,000","\uffe522,000","\uffe525,000"]]})))}}]),t}(n.Component),C=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement("section",{className:"bg-light text-black",id:"contact"},l.a.createElement("div",{className:"container text-center"},l.a.createElement("h3",{className:"text-gold"},"CONTACT"),l.a.createElement("h2",null,"\u304a\u554f\u3044\u5408\u308f\u305b"),l.a.createElement("p",null,l.a.createElement("i",{className:"icon-paper-plane"})," autodetailinggarage.refine@gmail.com"))))}}]),t}(n.Component),D=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=function(e){var t=e.href,a=e.icon,n=e.addClass,c=void 0===n?"":n;return l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{className:"social-link rounded-circle text-white ".concat(c),href:t,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:a})))};return l.a.createElement("footer",{className:"bg-dark text-white"},l.a.createElement("div",{className:"container text-center"},l.a.createElement("ul",{className:"list-inline mb-5"},l.a.createElement(e,{href:"https://www.instagram.com/refine392/",icon:"icon-social-instagram",addClass:"mr-3"}),l.a.createElement(e,{href:"https://twitter.com/auto_refine",icon:"icon-social-twitter",addClass:"ml-3"})),l.a.createElement("p",{className:"small text-muted"},"Copyright \xa9 carcoatingrefine.com 2019")))}}]),t}(n.Component),I=a(14),M=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).scrollThrottle=e.scrollThrottle||500,a.scrollEndTransitionDuration=e.scrollEndTransitionDuration||500,a.scrollEndDelay=e.scrollEndDelay||1500,a.scrollTimer=null,a.scrollEndTimer=null,a.defaultStyle=Object(I.a)({WebkitTransitionDuration:"100ms",transitionDuration:"100ms",opacity:0,pointerEvents:"none"},e.defaultStyle),a.afterStyle=Object(I.a)({WebkitTransitionDuration:"100ms",transitionDuration:"100ms",opacity:.75,pointerEvents:"auto"},e.afterStyle),a.state={style:a.defaultStyle},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"setStateStyle",value:function(e){this.setState({style:e})}},{key:"setStateDefaultStyle",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.setStateStyle(Object(I.a)({},this.defaultStyle,e))}},{key:"setStateAfterStyle",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.setStateStyle(Object(I.a)({},this.afterStyle,e))}},{key:"componentDidMount",value:function(){this.eventHandler=this.onScroll.bind(this),document.addEventListener("scroll",this.eventHandler)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.eventHandler)}},{key:"onScroll",value:function(){var e=this;clearTimeout(this.scrollTimer),this.scrollTimer=setTimeout(function(){return e.scrollEnd()},this.scrollThrottle),-1*document.documentElement.getBoundingClientRect().top>document.documentElement.clientHeight?this.setStateAfterStyle():this.setStateDefaultStyle()}},{key:"scrollEnd",value:function(){var e=this;clearTimeout(this.scrollEndTimer),this.scrollEndTimer=setTimeout(function(){e.setStateDefaultStyle({WebkitTransitionDuration:"".concat(e.scrollEndTransitionDuration,"ms"),transitionDuration:"".concat(e.scrollEndTransitionDuration,"ms")})},this.scrollEndDelay)}},{key:"onClick",value:function(){y(0)}},{key:"render",value:function(){return l.a.createElement(b.a,{className:"rounded bg-dark text-white",onClick:this.onClick.bind(this),style:Object(I.a)({position:"fixed",right:"15px",bottom:"15px",width:"50px",height:"50px",textAlign:"center",lineHeight:"45px",zIndex:1e3,WebkitTransitionProperty:"opacity",WebkitTransitionTimingFunction:"ease-out",transitionProperty:"opacity",transitionTimingFunction:"ease-out"},this.state.style),to:"#"},l.a.createElement("i",{className:"fas fa-angle-up"}))}}]),t}(n.Component),H=(a(89),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(k,null),l.a.createElement(O,null),l.a.createElement(j,null),l.a.createElement(N,null),l.a.createElement(T,null),l.a.createElement(L,null),l.a.createElement(C,null),l.a.createElement(D,null),l.a.createElement(M,null))}}]),t}(n.Component)),A=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,{to:"/"})}}]),t}(n.Component),W=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement(p.a,null,l.a.createElement(E.a,{exact:!0,path:"/",component:H}),l.a.createElement(E.a,{component:A})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.5af0f98e.chunk.js.map