var t=document.querySelectorAll(".population"),e=document.querySelector(".total-population"),o=document.querySelector(".average-population"),n=0;t.forEach(function(t){n+=Number(t.textContent.replace(/,/g,""))}),e.textContent=n.toLocaleString("en-US"),o.textContent=(n/t.length).toLocaleString("en-US");
//# sourceMappingURL=index.09f57bd5.js.map
