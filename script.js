async function loadPart(file, placeholderId) {
    try {
        const response = await fetch(file);

        if (!response.ok) {
            throw new Error("Failed to load " + file);
        }

        const html = await response.text();
        const placeholder = document.getElementById(placeholderId);

        if (placeholder) {
            placeholder.innerHTML = html;
        }
    } catch (error) {
        console.error(error);
    }
}


function initializeHeader() {
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".main-nav");
    const dropdowns = document.querySelectorAll(".dropdown");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", function () {
            navigation.classList.toggle("open");
            menuButton.classList.toggle("active");

            menuButton.setAttribute(
                "aria-expanded",
                navigation.classList.contains("open")
            );
        });
    }

    dropdowns.forEach(function (dropdown) {
        const button = dropdown.querySelector(".dropdown-button");

        if (!button) {
            return;
        }

        button.addEventListener("click", function () {
            if (window.innerWidth <= 1050) {
                dropdown.classList.toggle("mobile-open");

                button.setAttribute(
                    "aria-expanded",
                    dropdown.classList.contains("mobile-open")
                );
            }
        });
    });
}


function initializeFooter() {
    const yearElements = document.querySelectorAll(".footer-year");

    yearElements.forEach(function (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    });
}


async function initializeWebsite() {
    await Promise.all([
        loadPart("header.html", "header-placeholder"),
        loadPart("footer.html", "footer-placeholder")
    ]);

    initializeHeader();
    initializeFooter();
}


document.addEventListener("DOMContentLoaded", initializeWebsite);
