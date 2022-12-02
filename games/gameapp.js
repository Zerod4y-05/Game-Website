import { renderDemonborn } from "./pagerenderer.js";
import { renderBehindTheWalls } from "./pagerenderer.js";
import { renderOthergames } from "./pagerenderer.js";

//All Games
const routen = [
    { hash: "#demonborn", function: renderDemonborn},
    { hash: "#behindthewalls", function: renderBehindTheWalls},
    { hash: "#othergames", function: renderOthergames},
];

//Checking hash
var hasfound = true;
for (let index = 0; index < routen.length; index++) {
    const element = routen[index];
    console.log(element);
    if (element.hash == location.hash) {
        element.function();
        hasfound = false;
    }
}

if (hasfound) {
    document.getElementsByClassName("WholeSite")[0].innerHTML = "game not found";
}