
//All Games
const routen = [
    { hash: "#demonborn", function: renderDemonborn},
    { hash: "#othergames", function: renderOthergames}
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
    document.getElementsByClassName("ddd")[0].innerHTML = "game not found";
}

function renderDemonborn() {
    document.getElementsByClassName("ddd")[0].innerHTML = `<iframe src="./demonborn/index.html" frameborder="0"></iframe>`;  
}

function renderOthergames() {
    document.getElementsByClassName("ddd")[0].innerHTML = "dfdf";  
}

