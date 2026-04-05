const seasons = {
    spring: { gridId: "#spring-month", cells: [] },
    summer: { gridId: "#summer-month", cells: [] },
    fall:   { gridId: "#fall-month",   cells: [] },
    winter: { gridId: "#winter-month", cells: [] },
};

for (const season of Object.values(seasons)) {
    const grid = document.querySelector(season.gridId);
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 7; col++) {
            const cell = document.createElement('div');
            const daynumber = row * 7 + col + 1;
            cell.classList.add('day');
            cell.dataset.row = row;
            cell.dataset.col = col;
            cell.textContent = daynumber;
            grid.appendChild(cell);
            season.cells.push(cell);
        }
    }
}

function addImage(season, day, src) {
    const cell = seasons[season].cells[day - 1];
    const img = document.createElement('img');
    img.src = src;
    cell.appendChild(img);
}

addImage("spring", 4, "characters/Kent_Icon.png");
addImage("spring", 7, "characters/Lewis_Icon.png");
addImage("spring", 10, "characters/Vincent_Icon.png");
addImage("spring", 14, "characters/Haley_Icon.png");
addImage("spring", 18, "characters/Pam_Icon.png");
addImage("spring", 20, "characters/Shane_Icon.png");
addImage("spring", 26, "characters/Pierre_Icon.png");
addImage("spring", 27, "characters/Emily_Icon.png");

addImage("summer", 4, "characters/Jas_Icon.png");
addImage("summer", 8, "characters/Gus_Icon.png");
addImage("summer", 10, "characters/Maru_Icon.png");
addImage("summer", 13, "characters/Alex_Icon.png");
addImage("summer", 17, "characters/Sam_Icon.png");
addImage("summer", 19, "characters/Demetrius_Icon.png");
addImage("summer", 22, "characters/Dwarf_Icon.png");
addImage("summer", 24, "characters/Willy_Icon.png");
addImage("summer", 26, "characters/Leo_Icon.png");