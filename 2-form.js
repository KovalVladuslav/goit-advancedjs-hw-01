import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const t={email:"",message:""},r="feedback-form-state",a=document.querySelector(".feedback-form"),l=localStorage.getItem(r);if(l){const e=JSON.parse(l);Object.entries(e).forEach(([o,s])=>{a.elements[o].value=s,t[o]=s})}a.addEventListener("input",e=>{t[e.target.name]=e.target.value,localStorage.setItem(r,JSON.stringify(t))});a.addEventListener("submit",e=>{if(e.preventDefault(),!t.email||!t.message){alert("Fill please all fields");return}console.log("Form Data:",t),localStorage.removeItem(r),a.reset()});
//# sourceMappingURL=2-form.js.map
