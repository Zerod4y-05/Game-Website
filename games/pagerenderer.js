export function renderDemonborn() {
    document.getElementsByClassName("WholeSite")[0].innerHTML = `
    <div class="HeaderNav">
    <header>
        <h1>Demonborn</h1>
    </header>
    <nav>
        <a href="../index.html" class="DefaultButton NavButton">
            Home
        </a>
    </nav>
</div>
<div class="WholeGame">
    <iframe src="./demonborn/index.html" class="game"></iframe>
    <section>
        <h3>Info</h3>
        Demonborn ist ein kleines 2D game, bei dem der Spieler
        einen Ritter spielt. Der Spieler muss dabei mit seinem
        Schwert gegner besiegen und von Platform zu Platform
        springen. Das Spiel ist nicht in seinem fertigen Stand.
        <h3>Developer</h3>
        Team Broccoli
        <h3>Download</h3>
        <input class="inputGame" type="text" name="" id="" />
        <a
            href="https://drive.google.com/file/d/1bmIZgcERw-eSx2kFUVs0twBR-Dhv0qS9/view?usp=sharing"
            class="DefaultButton"
        >
            Version 0.9.3
        </a>
    </section>
    <footer class="footer"></footer>
</div>`;
}

export function renderBehindTheWalls() {
    document.getElementsByClassName("WholeSite")[0].innerHTML = `
    <div class="HeaderNav">
                <header>
                    <h1>Behind The Walls</h1>
                </header>
                <nav>
                    <a href="../index.html" class="DefaultButton NavButton">
                        Home
                    </a>
                </nav>
            </div>
            <div class="WholeGame">
                <iframe src="./behindTheWalls/index.html" class="game"></iframe>
                <section>
                    <h3>Info</h3>
                    Behind the walls ist ein 3D-Game, in dem der Spieler Münzen
                    in einem Labyrinth sammeln muss. Während dessen wird er von
                    einem Monster gejagt. Die Sicht des Spielers ist sehr
                    eingeschränkt, was das Spiel noch ein wenig erschwert. Da
                    das Spiel noch in Entwicklung ist, ist das Monster nur ein
                    roter Würfel und läuft zufällig und ziellos herum. Das Spiel
                    kann im Fullscreen mode nur mithilfe der Windowstaste
                    geschlossen werden.s
                    <h3>Developer</h3>
                    Nicola Egloff
                    <h3>Download</h3>
                    <a
                        href="https://drive.google.com/file/d/1WyjquuQ4Sslm9mNbrX_0vnGPKy489i8M/view?usp=sharing"
                        class="DefaultButton"
                    >
                        Version 0.5.0
                    </a>
                </section>
                <footer class="footer"></footer>
            </div>`;
}

export function renderOthergames() {
    document.getElementsByClassName("WholeSite")[0].innerHTML = `How did you find this page?`;  
}