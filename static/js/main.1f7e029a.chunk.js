(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,n,t){e.exports=t(18)},16:function(e,n,t){},17:function(e,n,t){},18:function(e,n,t){"use strict";t.r(n);var s=t(0),a=t.n(s),i=t(3),r=t.n(i),m=(t(16),t(4)),c=t(5),o=t(9),l=t(6),d=t(8),h=t(1),u=t(7),b=t.n(u);t(17);var k=function(e){return a.a.createElement("div",{className:"flex-third"},a.a.createElement("h3",{id:"break-label"},"Break Length"),a.a.createElement("p",{class:"incDec",id:"break-increment",onClick:e.breakIncrement},"+"),a.a.createElement("p",{id:"break-length"},e.breakTime),a.a.createElement("p",{class:"incDec",id:"break-decrement",onClick:e.breakDecrement},"-"))};var T=function(e){return a.a.createElement("div",{className:"flex-third",id:"timer"},a.a.createElement("h3",{id:"timer-label"},e.timerLabel),a.a.createElement("div",{id:"time-left"},e.minutes,":",e.seconds),a.a.createElement("div",{className:"timer-buttons"},a.a.createElement("p",{id:"start_stop",onClick:e.counting?e.handleStop:e.handleStart},"Start/Stop"),a.a.createElement("p",{id:"reset",onClick:e.handleReset},"Reset")))};var S=function(e){return a.a.createElement("div",{className:"flex-third"},a.a.createElement("h3",{id:"session-label"},"Session Length"),a.a.createElement("p",{class:"incDec",id:"session-increment",onClick:e.seshIncrement},"+"),a.a.createElement("p",{id:"session-length"},e.seshTime),a.a.createElement("p",{class:"incDec",id:"session-decrement",onClick:e.seshDecrement},"-"))};var f=function(e){return a.a.createElement("div",{id:"whole-app"},a.a.createElement("header",{id:"Header"},a.a.createElement("img",{src:e.logo,className:"App-logo",alt:"logo"}),a.a.createElement("h1",null,"Steven's Pomodoro Clock")),a.a.createElement("main",{id:"Main"},a.a.createElement(k,{breakIncrement:e.breakIncrement,breakTime:e.breakTime,breakDecrement:e.breakDecrement}),a.a.createElement(T,{counting:e.counting,onBreak:e.onBreak,timerLabel:e.timerLabel,handleStart:e.handleStart,handleStop:e.handleStop,handleReset:e.handleReset,minutes:e.minutes,seconds:e.seconds}),a.a.createElement(S,{seshIncrement:e.seshIncrement,seshTime:e.seshTime,seshDecrement:e.seshDecrement})))},p=function(e){function n(){var e;return Object(m.a)(this,n),(e=Object(o.a)(this,Object(l.a)(n).call(this))).state={breakTime:5,seshTime:25,minutes:25,seconds:"00",getTime:function(){e.setState(function(e){return!1===e.onBreak&&"00"===e.minutes&&"00"===e.seconds?{minutes:Number(e.breakTime-1)<10&&Number(e.breakTime-1)>=0?"0"+e.breakTime:e.breakTime,seconds:59,onBreak:!0,timerLabel:"Break"}:!1===e.onBreak?{timerLabel:"Session",minutes:25===e.minutes&&25===e.seshTime&&"00"===e.seconds?24:25===e.minutes&&e.seshTime-1<10&&e.seshTime-1>=1&&"00"===e.seconds?"0"+(e.seshTime-1):1===Number(e.seshTime)&&"00"===e.seconds?"00":25===e.minutes&&"00"===e.seconds?e.seshTime-1:e.minutes-1<10&&e.minutes-1>=1&&"00"===e.seconds?"0"+(e.minutes-1):1===Number(e.minutes)&&"00"===e.seconds?"00":"00"===e.minutes?"00":e.minutes,seconds:"00"===e.seconds&&"00"!==e.minutes?59:"00"===e.minutes&&"00"===e.seconds?"00":e.minutes-1===0&&Number(e.seconds)-1===0?"00":Number(e.seconds-1)<10?"0"+Number(e.seconds-1):Number(e.seconds)-1,onBreak:"00"===e.minutes&&"00"===e.seconds||e.onBreak}:!0===e.onBreak&&"00"===e.minutes&&"00"===e.seconds?{minutes:Number(e.seshTime-1)<10&&Number(e.seshTime-1)>=0?"0"+e.seshTime:e.seshTime,seconds:59,onBreak:!1,timerLabel:"Session"}:!0===e.onBreak?{timerLabel:"Break",minutes:"05"===e.minutes&&5===e.breakTime&&"00"===e.seconds?"04":"05"===e.minutes&&e.breakTime-1<10&&e.breakTime-1>=1&&"00"===e.seconds?"0"+(e.breakTime-1):1===e.breakTime&&"00"===e.seconds?"00":"05"===e.minutes&&"00"===e.seconds?e.breakTime-1:Number(e.minutes)-1<10&&Number(e.minutes)-1>=1&&"00"===e.seconds?"0"+Number(e.minutes-1):1===Number(e.minutes)&&"00"===e.seconds?"00":"00"===e.minutes&&"00"===e.seconds&&e.seshTime-1<10&&e.seshTime-1>=1?"0"+e.seshTime:"00"===e.minutes&&"00"===e.seconds&&e.seshTime>9?e.seshTime:"00"===e.minutes?"00":e.minutes,seconds:"00"===e.seconds&&"00"!==e.minutes?59:"00"===e.minutes&&"00"===e.seconds?"00":e.minutes-1===0&&Number(e.seconds)-1===0?"00":Number(e.seconds-1)<10?"0"+Number(e.seconds-1):Number(e.seconds)-1,onBreak:("00"!==e.seconds||"00"!==e.minutes)&&e.onBreak}:void 0})},counting:!1,onBreak:!1,timerLabel:"Session"},e.handleStart=e.handleStart.bind(Object(h.a)(Object(h.a)(e))),e.handleStop=e.handleStop.bind(Object(h.a)(Object(h.a)(e))),e.handleReset=e.handleReset.bind(Object(h.a)(Object(h.a)(e))),e.handleBreakIncrement=e.handleBreakIncrement.bind(Object(h.a)(Object(h.a)(e))),e.handleBreakDecrement=e.handleBreakDecrement.bind(Object(h.a)(Object(h.a)(e))),e.handleSeshIncrement=e.handleSeshIncrement.bind(Object(h.a)(Object(h.a)(e))),e.handleSeshDecrement=e.handleSeshDecrement.bind(Object(h.a)(Object(h.a)(e))),e}return Object(d.a)(n,e),Object(c.a)(n,[{key:"handleStart",value:function(){this.setState({counting:!0}),this.timer=setInterval(this.state.getTime,1e3)}},{key:"handleStop",value:function(){this.setState({counting:!1}),clearInterval(this.timer)}},{key:"handleReset",value:function(){clearInterval(this.timer),this.setState({seshTime:25,breakTime:5,minutes:25,seconds:"00",timerLabel:"Session",onBreak:!1})}},{key:"handleBreakIncrement",value:function(){this.setState(function(e){return{breakTime:60===e.breakTime?60:e.breakTime+1}})}},{key:"handleBreakDecrement",value:function(){this.setState(function(e){return{breakTime:1===e.breakTime?1:e.breakTime-1}})}},{key:"handleSeshIncrement",value:function(){this.setState(function(e){return{seshTime:60===e.seshTime?60:e.seshTime+1}})}},{key:"handleSeshDecrement",value:function(){this.setState(function(e){return{seshTime:1===e.seshTime?1:e.seshTime-1}})}},{key:"render",value:function(){return a.a.createElement(f,{logo:b.a,counting:this.state.counting,onBreak:this.state.onBreak,timerLabel:this.state.timerLabel,handleStart:this.handleStart,handleStop:this.handleStop,handleReset:this.handleReset,breakIncrement:this.handleBreakIncrement,breakTime:this.state.breakTime,breakDecrement:this.handleBreakDecrement,seshIncrement:this.handleSeshIncrement,seshTime:this.state.seshTime,seshDecrement:this.handleSeshDecrement,minutes:this.state.minutes,seconds:this.state.seconds})}}]),n}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.1f7e029a.chunk.js.map