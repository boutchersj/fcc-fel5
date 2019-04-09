(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(3),i=n.n(r),c=(n(16),n(4)),m=n(5),l=n(9),h=n(6),o=n(8),d=n(1),u=n(7),b=n.n(u);n(17);var k=function(e){return s.a.createElement("div",{className:"flex-third"},s.a.createElement("h3",{id:"break-label"},"Break Length"),s.a.createElement("p",{class:"incDec",id:"break-increment",onClick:e.breakIncrement},"+"),s.a.createElement("p",{id:"break-length"},e.breakTime),s.a.createElement("p",{class:"incDec",id:"break-decrement",onClick:e.breakDecrement},"-"))};var T=function(e){return s.a.createElement("div",{className:"flex-third",id:"timer"},s.a.createElement("h3",{id:"timer-label"},"Session"),s.a.createElement("div",{id:"time-left"},e.minutes,":",e.seconds),s.a.createElement("div",{className:"timer-buttons"},s.a.createElement("p",{id:"start_stop",onClick:e.counting?e.handleStop:e.handleStart},"Start/Stop"),s.a.createElement("p",{id:"reset",onClick:e.handleReset},"Reset")))};var S=function(e){return s.a.createElement("div",{className:"flex-third"},s.a.createElement("h3",{id:"session-label"},"Session Length"),s.a.createElement("p",{class:"incDec",id:"session-increment",onClick:e.seshIncrement},"+"),s.a.createElement("p",{id:"session-length"},e.seshTime),s.a.createElement("p",{class:"incDec",id:"session-decrement",onClick:e.seshDecrement},"-"))};var f=function(e){return s.a.createElement("div",{id:"whole-app"},s.a.createElement("header",{id:"Header"},s.a.createElement("img",{src:e.logo,className:"App-logo",alt:"logo"}),s.a.createElement("h1",null,"Steven's Pomodoro Clock")),s.a.createElement("main",{id:"Main"},s.a.createElement(k,{breakIncrement:e.breakIncrement,breakTime:e.breakTime,breakDecrement:e.breakDecrement}),s.a.createElement(T,{counting:e.counting,handleStart:e.handleStart,handleStop:e.handleStop,handleReset:e.handleReset,minutes:e.minutes,seconds:e.seconds}),s.a.createElement(S,{seshIncrement:e.seshIncrement,seshTime:e.seshTime,seshDecrement:e.seshDecrement})))},p=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(h.a)(t).call(this))).state={breakTime:5,seshTime:25,minutes:25,seconds:"00",getTime:function(){e.setState(function(e){return{minutes:25===e.minutes&&25===e.seshTime&&"00"===e.seconds?24:25===e.minutes&&e.seshTime-1<10&&e.seshTime-1>=1&&"00"===e.seconds?"0"+(e.seshTime-1):25===e.minutes&&"00"===e.seconds?e.seshTime-1:e.minutes-1<10&&e.minutes-1>=1&&"00"===e.seconds?"0"+(e.minutes-1):e.minutes-1===0&&"00"===e.seconds?"00":"00"===e.minutes?"00":e.minutes,seconds:"00"===e.seconds&&"00"!==e.minutes?59:"00"===e.minutes&&"00"===e.seconds?"00":e.minutes-1===0&&Number(e.seconds)-1===0?"00":Number(e.seconds-1)<10?"0"+Number(e.seconds-1):Number(e.seconds)-1}})},counting:!1},e.handleStart=e.handleStart.bind(Object(d.a)(Object(d.a)(e))),e.handleStop=e.handleStop.bind(Object(d.a)(Object(d.a)(e))),e.handleReset=e.handleReset.bind(Object(d.a)(Object(d.a)(e))),e.handleBreakIncrement=e.handleBreakIncrement.bind(Object(d.a)(Object(d.a)(e))),e.handleBreakDecrement=e.handleBreakDecrement.bind(Object(d.a)(Object(d.a)(e))),e.handleSeshIncrement=e.handleSeshIncrement.bind(Object(d.a)(Object(d.a)(e))),e.handleSeshDecrement=e.handleSeshDecrement.bind(Object(d.a)(Object(d.a)(e))),e}return Object(o.a)(t,e),Object(m.a)(t,[{key:"handleStart",value:function(){this.setState({counting:!0}),this.timer=setInterval(this.state.getTime,1e3)}},{key:"handleStop",value:function(){this.setState({counting:!1}),clearInterval(this.timer)}},{key:"handleReset",value:function(){clearInterval(this.timer),this.setState({seshTime:25,breakTime:5,minutes:25,seconds:"00"})}},{key:"handleBreakIncrement",value:function(){this.setState(function(e){return{breakTime:60===Number(e.breakTime)?"00":Number(e.breakTime)+1>9?Number(e.breakTime)+1:"0"+(Number(e.breakTime)+1)}})}},{key:"handleBreakDecrement",value:function(){this.setState(function(e){return{breakTime:Number(e.breakTime)-1>9?Number(e.breakTime)-1:Number(e.breakTime)-1===0?"00":0===Number(e.breakTime)?60:"0"+(Number(e.breakTime)-1)}})}},{key:"handleSeshIncrement",value:function(){this.setState(function(e){return{seshTime:60===Number(e.seshTime)?"00":Number(e.seshTime)+1>9?Number(e.seshTime)+1:"0"+(Number(e.seshTime)+1)}})}},{key:"handleSeshDecrement",value:function(){this.setState(function(e){return{seshTime:Number(e.seshTime)-1>9?Number(e.seshTime)-1:Number(e.seshTime)-1===0?"00":0===Number(e.seshTime)?60:"0"+(Number(e.seshTime)-1)}})}},{key:"render",value:function(){return s.a.createElement(f,{logo:b.a,counting:this.state.counting,handleStart:this.handleStart,handleStop:this.handleStop,handleReset:this.handleReset,breakIncrement:this.handleBreakIncrement,breakTime:this.state.breakTime,breakDecrement:this.handleBreakDecrement,seshIncrement:this.handleSeshIncrement,seshTime:this.state.seshTime,seshDecrement:this.handleSeshDecrement,minutes:this.state.minutes,seconds:this.state.seconds})}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.7a5ad4d6.chunk.js.map