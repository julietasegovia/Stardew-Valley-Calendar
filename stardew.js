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
            cell.classList.add('day');
            cell.dataset.row = row;
            cell.dataset.col = col;

            const number = document.createElement('span');
            number.classList.add('day-number');
            number.textContent = row * 7 + col + 1;

            const crops = document.createElement('div');
            crops.classList.add('day-crops');

            const icons = document.createElement('div');
            icons.classList.add('day-icons');

            cell.appendChild(number);
            cell.appendChild(crops);
            cell.appendChild(icons);
            grid.appendChild(cell);
            season.cells.push(cell);
        }
    }
}

function addImage(season, day, src, type = "icon", tooltipImages = []) {
    const cell = seasons[season].cells[day - 1];

    if (type === "crop") {
        const container = cell.querySelector('.day-crops');
        const img = document.createElement('img');
        img.src = src;
        container.appendChild(img);
    } else {
        const iconsContainer = cell.querySelector('.day-icons');

        const wrapper = document.createElement('div');
        wrapper.classList.add('icon-wrapper');

        const img = document.createElement('img');
        img.src = src;

        const tooltip = document.createElement('div');
        tooltip.classList.add('icon-tooltip');

        tooltipImages.forEach(tooltipSrc => {
            const tImg = document.createElement('img');
            tImg.src = tooltipSrc;
            tooltip.appendChild(tImg);
        });

        wrapper.appendChild(img);
        wrapper.appendChild(tooltip);
        iconsContainer.appendChild(wrapper);
    }
}

addImage("spring", 4, "characters/Kent_Icon.png", "icon", ["gifts/Fiddlehead_Risotto.png", "gifts/Roasted_Hazelnuts.png"]);
addImage("spring", 7, "characters/Lewis_Icon.png", "icon", ["gifts/Autumn's_Bounty.png", "gifts/Glazed_Yams.png", "gifts/Green_Tea.png", "gifts/Hot_Pepper.png", "gifts/Vegetable_Medley.png"]);
addImage("spring", 10, "characters/Vincent_Icon.png", "icon", ["gifts/Cranberry_Candy.png", "gifts/Ginger_Ale.png", "gifts/Grape.png", "gifts/Green_Frog_Egg.png", "gifts/Snail.png", "gifts/Pink_Cake.png"]);
addImage("spring", 14, "characters/Haley_Icon.png", "icon", ["gifts/Pink_Cake.png", "gifts/Sunflower.png", "gifts/Fruit_Salad.png", "gifts/Coconut.png"]);
addImage("spring", 15, "seeds/Rhubarb_Seeds.png", "crop");
addImage("spring", 16, "seeds/Cauliflower_Seeds.png", "crop");
addImage("spring", 18, "seeds/Bean_Starter.png", "crop");
addImage("spring", 18, "characters/Pam_Icon.png", "icon", ["gifts/Glazed_Yams.png", "gifts/Beer.png", "gifts/Cactus_Fruit.png", "gifts/Mead.png", "gifts/Pale_Ale.png", "gifts/Parsnip.png", "gifts/Parsnip_Soup.png", "gifts/Piña_Colada.png"]);
addImage("spring", 20, "seeds/Strawberry_Seeds.png", "crop");
addImage("spring", 20, "characters/Shane_Icon.png", "icon", ["gifts/Beer.png", "gifts/Hot_Pepper.png", "gifts/Pizza.png", "gifts/Pepper_Poppers.png"]);
addImage("spring", 21, "seeds/Jazz_Seeds.png", "crop");
addImage("spring", 22, "seeds/Kale_Seeds.png", "crop");
addImage("spring", 22, "seeds/Potato_Seeds.png", "crop");
addImage("spring", 22, "seeds/Tulip_Bulb.png", "crop");
addImage("spring", 24, "seeds/Parsnip_Seeds.png", "crop");
addImage("spring", 24, "seeds/Garlic_Seeds.png", "crop");
addImage("spring", 26, "characters/Pierre_Icon.png", "icon", []);
addImage("spring", 27, "characters/Emily_Icon.png", "icon", []);

addImage("summer", 4, "characters/Jas_Icon.png", "icon", []);
addImage("summer", 8, "characters/Gus_Icon.png", "icon", []);
addImage("summer", 10, "characters/Maru_Icon.png", "icon", []);
addImage("summer", 13, "characters/Alex_Icon.png", "icon", []);
addImage("summer", 15, "seeds/Starfruit_Seeds.png", "crop");
addImage("summer", 15, "seeds/Blueberry_Seeds.png", "crop");
addImage("summer", 16, "seeds/Melon_Seeds.png", "crop");
addImage("summer", 17, "seeds/Tomato_Seeds.png", "crop");
addImage("summer", 17, "seeds/Hops_Starter.png", "crop");
addImage("summer", 17, "characters/Sam_Icon.png", "icon", []);
addImage("summer", 18, "seeds/Coffee_Bean.png", "crop");
addImage("summer", 19, "seeds/Red_Cabbage_Seeds.png", "crop");
addImage("summer", 19, "characters/Demetrius_Icon.png", "icon", []);
addImage("summer", 20, "seeds/Spangle_Seeds.png", "crop");
addImage("summer", 21, "seeds/Poppy_Seeds.png", "crop");
addImage("summer", 22, "seeds/Radish_Seeds.png", "crop");
addImage("summer", 22, "characters/Dwarf_Icon.png", "icon", []);
addImage("summer", 23, "seeds/Pepper_Seeds.png", "crop");
addImage("summer", 24, "characters/Willy_Icon.png", "icon", []);
addImage("summer", 26, "characters/Leo_Icon.png", "icon", []);
addImage("summer", 28, "seeds/Ancient_Seeds.png", "crop");

addImage("fall", 2, "characters/Penny_Icon.png", "icon", []);
addImage("fall", 4, "seeds/Rare_Seed.png", "crop");
addImage("fall", 5, "characters/Elliott_Icon.png", "icon", []);
addImage("fall", 11, "characters/Jodi_Icon.png", "icon", []);
addImage("fall", 13, "characters/Abigail_Icon.png", "icon", []);
addImage("fall", 14, "seeds/Corn_Seeds.png", "crop");
addImage("fall", 15, "seeds/Pumpkin_Seeds.png", "crop");
addImage("fall", 15, "characters/Sandy_Icon.png", "icon", []);
addImage("fall", 16, "seeds/Fairy_Seeds.png", "crop");
addImage("fall", 18, "seeds/Grape_Starter.png", "crop");
addImage("fall", 18, "seeds/Yam_Seeds.png", "crop");
addImage("fall", 18, "characters/Marnie_Icon.png", "icon", []);
addImage("fall", 20, "seeds/Artichoke_Seeds.png", "crop");
addImage("fall", 20, "seeds/Sunflower_Seeds.png", "crop");
addImage("fall", 21, "seeds/Amaranth_Seeds.png", "crop");
addImage("fall", 21, "seeds/Cranberry_Seeds.png", "crop");
addImage("fall", 22, "seeds/Beet_Seeds.png", "crop");
addImage("fall", 23, "seeds/Eggplant_Seeds.png", "crop");
addImage("fall", 24, "seeds/Bok_Choy_Seeds.png", "crop");
addImage("fall", 24, "seeds/Wheat_Seeds.png", "crop");
addImage("fall", 21, "characters/Robin_Icon.png", "icon", []);
addImage("fall", 24, "characters/George_Icon.png", "icon", []);

addImage("winter", 1, "characters/Krobus_Icon.png", "icon", []);
addImage("winter", 3, "characters/Linus_Icon.png", "icon", []);
addImage("winter", 7, "characters/Caroline_Icon.png", "icon", []);
addImage("winter", 10, "characters/Sebastian_Icon.png", "icon", []);
addImage("winter", 14, "characters/Harvey_Icon.png", "icon", []);
addImage("winter", 17, "characters/Wizard_Icon.png", "icon", []);
addImage("winter", 20, "characters/Evelyn_Icon.png", "icon", []);
addImage("winter", 23, "characters/Leah_Icon.png", "icon", []);
addImage("winter", 26, "characters/Clint_Icon.png", "icon", []);

const seasonss = {
  spring: document.querySelector("#spring"),
  summer: document.querySelector("#summer"),
  fall: document.querySelector("#fall"),
  winter: document.querySelector("#winter"),
};

const buttons = {
  spring: document.querySelector("#spring-button"),
  summer: document.querySelector("#summer-button"),
  fall: document.querySelector("#fall-button"),
  winter: document.querySelector("#winter-button"),
};

let currentSeason = "spring";

function changeSeason(newSeason) {
  seasonss[currentSeason].classList.remove("selected-season");
  buttons[currentSeason].classList.remove("selected-season-button");

  currentSeason = newSeason;
  seasonss[currentSeason].classList.add("selected-season");
  buttons[currentSeason].classList.add("selected-season-button");
}

changeSeason("spring");

Object.keys(buttons).forEach((season) => {
  buttons[season].addEventListener("click", () => changeSeason(season));
});