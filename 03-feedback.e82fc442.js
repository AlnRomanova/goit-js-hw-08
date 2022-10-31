const e=document.querySelector(".feedback-form"),t=document.querySelector("input");function n(){t.textContent=localStorage.getItem("feedback-form-state")||""}n(),e.addEventListener("input",(function(t){t.preventDefault(),localStorage.setItem("feedback-form-state",e.elements.email.value,e.elements.message.value),n(),e.reset()}));
//# sourceMappingURL=03-feedback.e82fc442.js.map
