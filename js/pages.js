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