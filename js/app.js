/*
The Digital Gallery Walk Site is a website which can display several downloadable artworks based on previously-set categories. 
Copyright (C) 2026 Jhazmine Audrey Perez

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

//LANDING

const viewArtButton = document.querySelector("#LANDING-PAGE-BUTTON");
const landing = document.querySelectorAll(".landing");
const landvid = document.querySelector("#WEBSITE-LANDING-CONT")

window.addEventListener("load", () => {
    const introText = document.querySelector("#LANDING-PAGE-INTRO");
    introText.classList.add("hide");

    introText.addEventListener("animationend", (anim) => {
        if (anim.animationName === "fade") {
            introText.style.visibility = "hidden";
            introText.style.opacity = "0"
        }
    })
})

viewArtButton.addEventListener("click", async () => {
    landing.forEach(el => {
        const anim = el.animate(
            [
                { transform: "translateY(0)", opacity: "1"},
                { transform: "translateY(-120vh)", opacity: "0" }
            ],
            {
                duration: 1000,
                easing: "ease",
                fill: "forwards"
            }
        );

        anim.onfinish = () => {
            el.remove();
        };
    });

    landvid.classList.remove("active");
});

// ZOOM IN
const card = document.querySelectorAll(".artwork-card");
const zoomCont = document.querySelector("#ZOOMED-IN-CONTAINER");
const zoomContBtn = document.querySelector("#ZOOM-CONT-CLOSE");

card.forEach((el) => {
    el.addEventListener("click", () => {
        const download = document.querySelector("#ZOOM-CONT-DOWNLOAD");
        const imgHolder = document.querySelector("#ZOOM-IMG");
        zoomCont.classList.add("active");
        const img = el.firstElementChild.src;

        imgHolder.src = img;
        download.href = String(img)
    })
});

zoomContBtn.addEventListener("click", () => {
    zoomCont.classList.remove("active")
})