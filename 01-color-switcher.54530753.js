let t=null;const e={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),body:document.querySelector("body")};e.stopBtn.disabled=!0,e.startBtn.addEventListener("click",(function(){e.stopBtn.disabled=!1,e.startBtn.disabled=!0,t=setInterval((()=>{e.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),e.stopBtn.addEventListener("click",(function(){e.stopBtn.disabled=!0,e.startBtn.disabled=!1,clearInterval(t)}));
//# sourceMappingURL=01-color-switcher.54530753.js.map
