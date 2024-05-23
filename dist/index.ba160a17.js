function dialogs() {
    const dialogBtns = document.querySelectorAll("[data-dialog]");
    const dialogs = document.querySelectorAll(".dialog");
    dialogBtns.forEach((btn)=>{
        btn.addEventListener("click", ()=>{
            toggleDialog();
        });
    });
    dialogs.forEach((dialog)=>{
        dialog.addEventListener("click", ()=>{
            toggleDialog();
        });
    });
    function toggleDialog() {
        const dialog = document.querySelector(".dialog");
        dialog.classList.toggle("hidden");
        dialog.classList.toggle("open");
        document.body.classList.add("remove-scrolling");
    }
}
dialogs();
const articleToggle = document.querySelectorAll(".article__dialog");
articleToggle.forEach((dialog)=>{
    dialog.addEventListener("click", ()=>{
        dialog.classList.toggle("hidden");
        document.body.classList.remove("remove-scrolling");
    });
});

//# sourceMappingURL=index.ba160a17.js.map
