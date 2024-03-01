LogWriteInfo("Starting Task: system/process/app-code-executer.js")
LogWriteInfo("initalizing iframe window application os interacrion environment")
window.addEventListener("message", function (e) {
     if(new URL(e.origin).protocol !== "https:" && new URL(e.origin).protocol !== "file:") {
       return;
     }
     eval(e.data)
    })
LogWriteInfo("iframe window application os interacrion environment initalized sucesfully")
LogWriteInfo("listening for iframe window application os interacrion requests")
