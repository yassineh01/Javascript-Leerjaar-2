document.addEventListener('DOMContentLoaded', function () {
    let nav =
        "<ul>" +
        "<li><a href='index.html'>" +
        "<img src='tree.png' alt='logo' width='50px'/>" +
        "</a></li>" +
        "<li><a href='projecten.html'>Projecten</a></li>" +
        "<li><a href='services.html'>Services</a></li>" +
        "<li><a href='aboutus.html'>Profiel</a></li>" +
        "<li><a href='aboutus.html'>Inloggen</a></li>" +
        "</ul>";

    let hamburger = `<input id='hamburger' type="checkbox" />
    <label class="hamburger_btn" for="hamburger">
        <span></span>
    </label>
    <ul class="hamburger_menu">
        <li class="menu_item">
            <a href='index.html'>
                <img src='tree.png' alt='logo' width='50px'/>
            </a>
        </li>
        <li class="menu_item"><a href="projecten.html">Projecten</a></li>
        <li class="menu_item"><a href="services.html">Services</a></li>
        <li class="menu_item"><a href="aboutus.html">Profiel</a></li>
        <li class="menu_item"><a href="aboutus.html">Inloggen</a></li>
    </ul>`;

    document.getElementById("navbar").innerHTML = nav;
    document.getElementById("hamburgernav").innerHTML = hamburger;
});


document.addEventListener("DOMContentLoaded", function() {
    const voortgangsbalken = document.querySelectorAll(".progress");
    
    voortgangsbalken.forEach(voortgangsBalk => {
        const cirkel = voortgangsBalk.querySelector(".circle");
        const waarde = voortgangsBalk.querySelector(".value");
        const eind = parseInt(voortgangsBalk.getAttribute("data-end"));
        const snelheid = parseInt(voortgangsBalk.getAttribute("data-speed"));
        
        let teller = 0;
        const voortgang = setInterval(() => {
            teller++;
            if (teller <= eind) {
                waarde.textContent = teller + '%';
                cirkel.style.background = `conic-gradient(
                    rgb(17, 255, 8) 0deg,
                    rgb(17, 255, 8) ${teller * 3.6}deg,
                    rgba(0, 0, 0, 0.1) ${teller * 3.6}deg,
                    rgba(0, 0, 0, 0.1) 180deg
                )`;
            } else {
                clearInterval(voortgang);
            }
        }, snelheid);
    });
});


let contacten = [];

contacten.push({
    "Project": "Duurzame landbouw",
    "Land": "Bangladesh"
});

contacten.push({
    "Project": "Red de regenwouden",
    "Land": "Benin Republiek"
});

contacten.push({
    "Project": "Red de regenwouden",
    "Land": "Mali"
});

contacten.push({
    "Project": "Voedselbossen",
    "Land": "Colombia"
});
