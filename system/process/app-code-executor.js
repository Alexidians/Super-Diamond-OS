    window.addEventListener("message", function (e) {
     if(new URL(e.origin).protocol !== "https:" && new URL(e.origin).protocol !== "file:") {
       return;
     }
     eval(e.data)
    })
