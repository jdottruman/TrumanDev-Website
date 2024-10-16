<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Truman Front End Developer | Software Engineer in Chicago, Illinois</title>
    <link rel="icon" href="photos/IMG_1088.PNG">
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
</head>

<body>


    <main>

        <section class="welcome">
            <button id="scrollToTop"><i class="fa-solid fa-chevron-up"></i></button>
<div class="overlay">
    <div class="WelcomeCon">
               
        <div class="welcomeText">
            <h2>Jadyn Truman <br> Front-end Web Developer</h2>
            <h3>Based in Chicago, Illinois</h3>

            <div class="social">
                <a target="_blank" href="https://github.com/jdottruman" aria-label="GitHub Profile"><i
                        class="fab fa-github"></i></a>
                <a target="_blank" href="https://codepen.io/jdottruman" aria-label="CodePen Profile"><i
                        class="fab fa-codepen"></i></a>
                <a target="_blank" href="https://www.linkedin.com/in/jadyn-truman/"
                    aria-label="LinkedIn Profile"><i class="fab fa-linkedin"></i></a>
            </div>
        </div>

        <div class="welcomeRight">
            <div class="headshotCon">

                <img class="headshot" src="photos/headshot_black_copy-removebg-preview.png"
                    alt="Jadyn Truman Headshot">


            </div>

        </div>
    </div>
    
</div>
            <nav class="nav" role="navigation" aria-label="Main Navigation">
                <a href="index.html" aria-label="Home">
                    <img class="nav__logo" src="photos/IMG_1088.PNG" alt="Logo">
                </a>

                <a href="#" class="nav__hamburger" aria-label="Open Navigation Menu">
                    <span class="nav__hamburger__line"></span>
                    <span class="nav__hamburger__line"></span>
                    <span class="nav__hamburger__line"></span>
                </a>
                <div class="nav__menu">
                    <ul>
                        <li class="nav__menu__link">
                            <a href="#aboutMe">
                                <i class="fa fa-user" aria-hidden="true"></i>
                                <p>About Me</p>
                            </a>
                        </li>
                        <li class="nav__menu__link">
                            <a href="#projects">
                                <i class="fa-solid fa-folder"></i>
                                <p>Projects</p>
                            </a>
                        </li>
                        <li class="nav__menu__link">
                            <a href="#contactMe">
                                <i class="fa fa-mobile" aria-hidden="true"></i>
                                <p>Contact Me</p>
                            </a>
                        </li>
                        <li>
                            <i onclick="darkMode()" id="bolt" class="fa-solid fa-bolt"></i>
                        </li>
                    </ul>
                </div>
            </nav>

          

        </section>


        <section id="aboutMe" class="aboutMe" role="region" aria-labelledby="aboutMeHeading">

            <div class="paragraphs">
                <div class="paraCon">
                    <h1 id="aboutMeHeading">About Me</h1>
                    <p class="paragraph1">
                        I’m Jadyn, a web developer passionate about creating beautiful and functional websites.
                        Specializing in front-end development, I have a strong foundation in HTML, CSS, and JavaScript.
                        I am proficient in various frameworks and libraries, including React, Angular, and Vue.js, and I
                        excel in responsive design, ensuring that websites look great and function seamlessly on all
                        devices. My keen eye for UI/UX design drives me to craft intuitive and engaging user
                        experiences.
                        <br>
                        Skilled in version control systems like Git, I thrive in collaborative environments, bringing
                        creative projects to life. I believe coding is a powerful tool for problem-solving and
                        innovation, enabling us to transform ideas into reality efficiently. My passion for web
                        development fuels my continuous learning and growth, as I strive to stay ahead in the
                        ever-evolving tech landscape. By blending creativity with technical expertise, I aim to deliver
                        solutions that exceed expectations.
                    </p>
                </div>
                <div id="why" class="paraCon" role="region" aria-labelledby="whyHeading">
                    <h1 id="whyHeading">Why</h1>
                    <p class="paragraph2">
                        I understand that coding is a powerful tool for bringing ideas to life and solving real-world
                        problems efficiently. My passion for developing web applications drives me to continuously
                        improve and innovate, ensuring each project is functional, user-friendly, and visually
                        appealing. As technology evolves, so does our ability to create impactful solutions. By
                        combining creativity with technical expertise, I strive to deliver results that not only meet
                        but exceed expectations.
                    </p>
                    <div class="imgCon">
                        <p class="evolve">Networks and the innovation of Technology have led people to do great thing.
                            As technology gets better, so does our world.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="skills" role="region" aria-labelledby="skillsHeading">
            <div class="landSide">
                <h2 id="skillsHeading">Languages</h2>
                <p>These are the languages and technologies I am currently proficient in. While it is impossible to know
                    everything about a language, I continually strive to expand my knowledge and expertise.</p>
                <div class="skills-container">

                </div>
            </div>

            <div class="certSide">
                <h2>Certificates</h2>
                <p>Certificates I have collected over the years</p>
                <div class="certCon">

                </div>
        </section>

        <section id="projects" class="projects" role="region" aria-labelledby="projectsHeading">
            <h2 id="projectsHeading">Projects</h2>
            <h3 class="projectdes">
                A running List of projects, with more to come!
            </h3>
            <div class="projects-container">
                <div class="project">
                    <div class="projectImgDiv">
                        <img src="photos/Screen Shot 2024-08-09 at 4.42.21 PM.png" alt="To Do App Screenshot">
                    </div>
                    <div class="projText">
                        <h3>To-Do App</h3>
                        <p class="contText">This is a simple "To DO App", focused on functionality.</p>
                        <p><span>Languages: <br></span>
                            <i class="fa-brands fa-html5"></i>
                            <i class="fa-brands fa-css3"></i>
                            <i class="fa-brands fa-js"></i>
                        </p>
                        <a href="/TODo /index.html" target="_blank" aria-label="View To Do Project">View
                            Project <i class="fa-regular fa-eye"></i></a>
                    </div>
                </div>

                <div class="project">
                    <div class="projectImgDiv">
                        <img src="photos/note.png" alt="Note Taker App Screenshot">
                    </div>
                    <div class="projText">
                        <h3>Note Taker</h3>
                        <p class="contText">A simple note-taking app that focuses on functionality.</p>
                        <p><span>Languages: <br></span>
                            <i class="fa-brands fa-html5"></i>
                            <i class="fa-brands fa-css3"></i>
                            <i class="fa-brands fa-js"></i>
                        </p>
                        <a href="Todo App 2 copy/index.html" target="_blank" aria-label="View Note Taker Project">View
                            Project <i class="fa-regular fa-eye"></i></a>
                    </div>
                </div>


                <div class="project">

                    <div class="projectImgDiv">
                        <img src="photos/expense.png" alt="Expenses App Screenshot">
                    </div>
                    <div class="projText">
                        <h3>Expenses</h3>
                        <p class="contText">A simple expense app that focuses on functionality.</p>
                        <p><span>Languages: <br></span>
                            <i class="fa-brands fa-html5"></i>
                            <i class="fa-brands fa-css3"></i>
                            <i class="fa-brands fa-js"></i>
                        </p>
                        <a href="expenses/index.html" target="_blank" aria-label="View Expenses App Project">View
                            Project <i class="fa-regular fa-eye"></i></a>
                    </div>
                </div>






                <div class="project">

                    <div class="projectImgDiv">
                        <img src="photos/calculator screenshot.png" alt="Calculator App Screenshot">
                    </div>
                    <div class="projText">
                        <h3>Calculator App</h3>
                        <p class="contText">A simple Calculator app that focuses on functionality.</p>
                        <p><span>Languages: <br></span>
                            <i class="fa-brands fa-html5"></i>
                            <i class="fa-brands fa-css3"></i>
                            <i class="fa-brands fa-js"></i>
                        </p>
                        <a href="calCode/calCode.html" target="_blank" aria-label="View Calculator App Project">View
                            Project <i class="fa-regular fa-eye"></i></a>
                    </div>

                </div>




            </div>


        </section>

        <section id="contactMe" class="contact" role="region" aria-labelledby="contactHeading">
            <div class="contact-section">
                <h2 id="contactHeading">Contact Me</h2>
                <p>If you have any questions, feel free to reach out!</p>
                <div class="contact-links">
                    <a href="mailto:jadyntruman2@gmail.com" target="_blank" class="contact-link"
                        aria-label="Email Me">Email Me</a>
                    <a href="https://www.linkedin.com/in/jadyn-truman/" target="_blank" class="contact-link"
                        aria-label="LinkedIn Profile">LinkedIn</a>
                </div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 Jadyn Truman. All rights reserved.</p>
            <div class="social">
                <a target="_blank" href="https://codepen.io/jdottruman" aria-label="CodePen Profile"><i
                        class="fab fa-codepen"></i></a>
                <a target="_blank" href="https://www.linkedin.com/in/jadyn-truman/" aria-label="LinkedIn Profile"><i
                        class="fab fa-linkedin-in"></i></a>
                <a target="_blank" href="https://github.com/jdottruman" aria-label="GitHub Profile"><i
                        class="fab fa-github"></i></a>
            </div>
        </div>
    </footer>
    <script src="index.js"></script>
    <script src="script.js" defer></script>

</body>

</html>
