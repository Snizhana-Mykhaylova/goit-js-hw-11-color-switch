(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1DEj":function(t,n,o){},QfWi:function(t,n,o){"use strict";o.r(n);o("1DEj"),o("t1/J")},"t1/J":function(t,n){var o={body:document.querySelector("body"),startButton:document.querySelector('button[data-action="start"]'),stopButton:document.querySelector('button[data-action="stop"]')},i=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],e={intervalId:null,isActiv:!1,start:function(){this.isActiv||(this.isActiv=!0,this.intervalId=setInterval((function(){var t,n,e=(t=0,n=i.length-1,Math.floor(Math.random()*(n-t+1)+t));return o.body.style.backgroundColor=i[e]}),1e3))},stop:function(){clearInterval(this.intervalId),this.intervalId=null,this.isActiv=!1}};o.startButton.addEventListener("click",e.start.bind(e)),o.stopButton.addEventListener("click",e.stop.bind(e))}},[["QfWi",1]]]);
//# sourceMappingURL=main.b8d528e4df878d156b02.js.map