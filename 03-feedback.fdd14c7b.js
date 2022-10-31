!function(){var e=document.querySelector(".feedback-form"),t=document.querySelector("input"),n="feedback-form-state";function a(){t.textContent=localStorage.getItem(n)||""}a(),e.addEventListener("input",(function(t){t.preventDefault(),localStorage.setItem(n,e.elements.email.value,e.elements.message.value),a(),e.reset()}))}();
//# sourceMappingURL=03-feedback.fdd14c7b.js.map
