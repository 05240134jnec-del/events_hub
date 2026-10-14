console.log("main.js is running"); 

 const resetBtn = document.querySelector("#regForm button[type='reset']"); 
 if (resetBtn) { 
   resetBtn.addEventListener("click", function (e) { 
  if (!confirm("Clear the whole form?")) { 
    e.preventDefault(); 
  } 
   }); 
 } 

 for (const ev of events) { 
   if (q && !ev.title.toLowerCase().includes(q)) { 
  continue; // skip this round 
   } 
   list.push(ev); 
 } 
