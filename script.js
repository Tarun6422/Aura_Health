function toggleMenu() {
    let nav = document.getElementById("nav");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

// Button click demo
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Feature coming soon!");
    });
});


@media(max-width: 768px) {
    .branch-cards {
        grid-template-columns: 1fr;
    }
}