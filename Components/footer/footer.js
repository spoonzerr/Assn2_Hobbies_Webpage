document.addEventListener("DOMContentLoaded", () => {
    const footerContainer = document.getElementById("footer");

    if (footerContainer) {
        fetch("/Components/footer/footer.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Could not load footer HTML");
                }
                return response.text();
            })
            .then(data => {
                footerContainer.innerHTML = data;
            })
            .catch(error => console.error("Error loading footer:", error));
    }
});