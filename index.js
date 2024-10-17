const skills = [
  {
    icon: "fa-html5",
    name: "HTML",
    level: "Advanced",
  },
  {
    icon: "fa-css3-alt",
    name: "CSS",
    level: "Advanced",
  },
  {
    icon: "fa-js",
    name: "Javascript",
    level: "Intermediate",
  },
];

const certs = [
  {
    image: "photos/JadynTruman-2018 Spring CIT -certificate copy.jpg",
    icon: "fa-solid fa-network-wired",
    description: `A routing and scaling Network certificate, received from <a href="https://www.netacad.com/" target="_blank" rel="noopener noreferrer">Cisco Networking Academy</a>.`,
    date: "Received: 5/12/18",
  },
  {
    image: "photos/JavaScript Certificate.png",
    icon: "fa-brands fa-js",
    description: `A JavaScript certificate received from <a href="https://www.freecodecamp.org/" target="_blank">freeCodeCamp</a>.`,
    date: "Received: 7/10/24",
  },
  {
    image: "photos/responsive wed certificate.png",
    icon: "fa-solid fa-mobile",
    description: `A Responsive Web Design certificate received from <a href="https://www.freecodecamp.org/" target="_blank">freeCodeCamp</a>.`,
    date: "Received: 6/13/24",
  },
];

let skillsHtml = "";

skills.forEach((skill) => {
  skillsHtml += `
    
    <div class="skill">
    <i class="fa-brands ${skill.icon}"></i>
    <h3>${skill.name}</h3>
    <p>${skill.level}</p>
</div>

    `;
});

document.querySelector(".skills-container").innerHTML = skillsHtml;

let certHtml = "";
certs.forEach((cert) => {
  certHtml += `

    <div class="textCont">
    <div class="certIcon">
        <img src="${cert.image}"
            alt="Routing and Scaling Network Certificate">
        <i class="${cert.icon}"></i>
    </div>
    <p>${cert.description}</p>
    <p>${cert.date}</p>
</div>
    `;
});

document.querySelector(".certCon").innerHTML = certHtml;

const projects = [
  {
    image: "photos/Screen Shot 2024-08-09 at 4.42.21 PM.png",
    title: "To-Do",
    description: "This is a simple To Do, focused on functionality.",
    languages: `<span>Languages: <br></span>
<i class="fa-brands fa-html5"></i>
<i class="fa-brands fa-css3"></i>
<i class="fa-brands fa-js"></i>`,
    button: "/TODo /index.html",
    sourceCode:
      "https://github.com/jdottruman/TrumanDev-Website/tree/main/TODo",
  },
  {
    image: "photos/note.png",
    title: "Note Taker",
    description: "A simple note-taking app that focuses on functionality.",
    languages: `<span>Languages: <br></span>
<i class="fa-brands fa-html5"></i>
<i class="fa-brands fa-css3"></i>
<i class="fa-brands fa-js"></i>`,
    button: "Todo App 2 copy/index.html",
    sourceCode:
      "https://github.com/jdottruman/TrumanDev-Website/tree/main/Todo%20App%202%20copy",
  },
  {
    image: "photos/expense.png",
    title: "Expenses",
    description: "A simple expense app that focuses on functionality.",
    languages: `<span>Languages: <br></span>
<i class="fa-brands fa-html5"></i>
<i class="fa-brands fa-css3"></i>
<i class="fa-brands fa-js"></i>`,
    button: "expenses/index.html",
    sourceCode:
      "https://github.com/jdottruman/TrumanDev-Website/tree/main/expenses",
  },
  {
    image: "photos/calculator screenshot.png",
    title: "Calculator",
    description: "A simple Calculator app that focuses on functionality.",
    languages: `<span>Languages: <br></span>
<i class="fa-brands fa-html5"></i>
<i class="fa-brands fa-css3"></i>
<i class="fa-brands fa-js"></i>`,
    button: "calCode/calCode.html",
    sourceCode:
      "https://github.com/jdottruman/TrumanDev-Website/tree/main/calCode",
  },
  {
    image: "photos/qrGenerator.png",
    title: "QR Genrator",
    description: "A QR code Generator",
    languages: `<span>Languages: <br></span>
      <i class="fa-brands fa-html5"></i>
      <i class="fa-brands fa-css3"></i>
      <i class="fa-brands fa-js"></i>`,
    button: "qrGenerator/index.html",
    sourceCode:
      "https://github.com/jdottruman/TrumanDev-Website/tree/main/qrGenerator",
  },
];

let projectHtml = "";

projects.forEach((project) => {
  projectHtml += `
    <div class="project">
    <h3>${project.title}</h3>
    <div class="projectImgDiv">
        <img src="${project.image}" alt="Calculator App Screenshot">
    </div>
    <div class="projText">
    
        <p class="contText">${project.description}</p>
        <p>${project.languages}
        </p>
        <a href="${project.button}" target="_blank" aria-label="View Calculator App Project">View
            Project </a>
            

            <a href="${project.sourceCode}" target="_blank" aria-label="View Calculator App Project">Souce Code</a>


    </div>

</div>`;
});

document.querySelector(".projects-container").innerHTML = projectHtml;
