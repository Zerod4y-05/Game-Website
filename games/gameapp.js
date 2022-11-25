
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
    document.getElementsByClassName("WholeGame")[0].innerHTML = "game not found";
}

function renderDemonborn() {
    document.getElementsByClassName("WholeGame")[0].innerHTML = `
    <iframe src="./demonborn/index.html" class="game"></iframe>
    <section>
        <h3>Info</h3>
        Demon born ist ein kleines 2D game, bei dem der Spieler einen Ritter
        spielt. Der Spieler muss dabei mit seinem Schwert gegner besiegen
        und von Platform zu Platform springen.
    </section>`;  
}

function renderOthergames() {
    document.getElementsByClassName("WholeGame")[0].innerHTML = "dfdf";  
}

