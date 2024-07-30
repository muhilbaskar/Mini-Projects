const containerEl = document.querySelector(".container");
const careers = ["Youtube", "Web Developer", "Freelancer", "Athlete","Instructor"];

let careerIndex = 0;
let characterIndex = 0;

function updatetext() {
    characterIndex++;
    containerEl.innerHTML = `<h1>I Am ${careers[careerIndex].slice(0, 1) === "I" ? "an " : "a "}${careers[careerIndex].slice(0,characterIndex)}</h1>`;

    if(characterIndex === careers[careerIndex].length) {
        careerIndex++;
        characterIndex = 0
    }

    if(careerIndex === careers.length){
        careerIndex = 0;
    }

    setTimeout(updatetext,400);
}
updatetext();
