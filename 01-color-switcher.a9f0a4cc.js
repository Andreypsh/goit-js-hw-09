!function(){var t=null;refs={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),body:document.querySelector("body")},refs.stopBtn.disabled=!0,refs.startBtn.addEventListener("click",(function(){refs.stopBtn.disabled=!1,refs.startBtn.disabled=!0,t=setInterval((function(){refs.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),refs.stopBtn.addEventListener("click",(function(){refs.stopBtn.disabled=!0,refs.startBtn.disabled=!1,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.a9f0a4cc.js.map
