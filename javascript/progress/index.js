document.addEventListener("DOMContentLoaded", function() {
    const circles = document.querySelectorAll(".circle");
    const values = document.querySelectorAll(".value");
    const ends = [100, 100, 100]; // Eindpunt voor elke cirkel
    const speeds = [50, 40, 30]; // Snelheid van elke cirkel
    
    function updateCircle(index) {
        let counter = 0;
        return function() {
            counter++;
            if (counter <= ends[index]) {
                values[index].textContent = counter + '%';
                circles[index].style.background = `conic-gradient(
                    rgb(17, 255, 8) 0deg,
                    rgb(17, 255, 8) ${counter * 3.6}deg,
                    rgba(0, 0, 0, 0.1) ${counter * 3.6}deg,
                    rgba(0, 0, 0, 0.1) 180deg
                )`;
            } else {
                clearInterval(progress);
            }
        };
    }

    for (let i = 0; i < circles.length; i++) {
        let progress = setInterval(updateCircle(i), speeds[i]);
    }
});
