document.addEventListener("DOMContentLoaded", async function () {

    try {

        const headerResponse = await fetch("./header.html?v=2");

        const headerHTML = await headerResponse.text();

        document.getElementById("header-placeholder").innerHTML =
            headerHTML;


        const footerResponse = await fetch("./footer.html?v=2");

        const footerHTML = await footerResponse.text();

        document.getElementById("footer-placeholder").innerHTML =
            footerHTML;


        const menuButton =
            document.querySelector(".menu-toggle");

        const navigation =
            document.querySelector(".main-nav");


        if (menuButton && navigation) {

            menuButton.addEventListener("click", function () {

                navigation.classList.toggle("open");

                menuButton.classList.toggle("active");

            });

        }


        const dropdowns =
            document.querySelectorAll(".dropdown");


        dropdowns.forEach(function (dropdown) {

            const button =
                dropdown.querySelector(".dropdown-button");


            if (button) {

                button.addEventListener("click", function () {

                    if (window.innerWidth <= 1050) {

                        dropdown.classList.toggle(
                            "mobile-open"
                        );

                    }

                });

            }

        });


        const footerYear =
            document.querySelector(".footer-year");


        if (footerYear) {

            footerYear.textContent =
                new Date().getFullYear();

        }


        console.log(
            "ABC Bin Rental header and footer loaded successfully"
        );


    } catch (error) {

        console.error(
            "Website loading error:",
            error
        );

    }

});
