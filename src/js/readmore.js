document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".read-more");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const hiddenContent = this.previousElementSibling;
            if (hiddenContent.classList.contains("hidden")) {
                hiddenContent.classList.remove("hidden");
                this.textContent = "閉じる";
            } else {
                hiddenContent.classList.add("hidden");
                this.textContent = "続きを読む";
            }
        });
    });
});
