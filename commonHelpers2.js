import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i}from"./assets/vendor-BbSUbo7J.js";function o(e,r){return new Promise((s,t)=>{setTimeout(()=>{r?s(`✅ Fulfilled promise in ${e}ms`):t(`❌ Rejected promise in ${e}ms`)},e)})}document.querySelector("form").addEventListener("submit",e=>{e.preventDefault();const r=parseInt(e.target.delay.value),s=e.target.state.value==="fulfilled";o(r,s).then(t=>{i.success({message:t})}).catch(t=>{i.error({message:t})})});
//# sourceMappingURL=commonHelpers2.js.map
