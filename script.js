const content = {
  snapshots: [
    ["Learning", "Python, SQL, and the small decisions that make data useful."],
    ["Building", "A few projects that started as “I wonder if…”"],
    ["Thinking about", "What to get really good at next — without rushing it."],
    ["Reading / watching", "Good stories, messy datasets, and anything that teaches me something."],
    ["Goals", "Ship more often. Keep the work honest. Stay curious."]
  ],
  updates: [
    ["September 2026", "Been spending more time figuring out what I actually want to build rather than trying to learn everything at once."],
    ["August 2026", "Started treating this website less like a finished product and more like a place I can keep returning to."]
  ],
  projects: [
    ["01", "QPGen", "AI Question Paper Generator", "A project exploring how a useful question paper workflow could be supported with AI.", ["Python", "Flask", "SQLAlchemy", "JWT", "Google Gemini API"]],
    ["02", "Netflix Movies & TV Shows Analysis", "Exploring a catalogue of stories", "An exploratory data analysis project using a Netflix movies and TV shows dataset.", ["Python", "Pandas", "NumPy", "EDA"]],
    ["03", "AIQE", "Adaptive Image Quality Enhancer", "An experiment focused on improving image quality adaptively.", ["Python"]],
    ["04", "MedPoint", "Hospital and appointment management", "A hospital and appointment management application.", ["Web application"]],
    ["05", "Bharat Bazaar", "E-commerce web application", "An e-commerce web application built to explore the shape of an online marketplace.", ["Web application"]],
    ["06", "Verification Portal", "Certificate verification platform", "A QR-based certificate verification platform with admin functionality.", ["Web application", "QR verification"]]
  ],
  skills: [
    ["Languages", "Python · SQL"], ["Data", "Pandas · NumPy · EDA · Matplotlib"], ["Analytics", "Power BI · Excel"], ["Development", "Flask · REST APIs · SQLAlchemy · JWT"], ["Tools", "Git · GitHub · Jupyter"], ["Database", "PostgreSQL"]
  ],
  credentials: ["Microsoft Azure AZ-900", "Microsoft Excel: Preparing Data for Analysis", "IBM Applied Data Science with Python", "Accenture Data Analytics & Visualization Job Simulation", "Deloitte Data Analytics Job Simulation"],
  thoughts: [
    ["September 2026", "Why I stopped trying to learn everything at once", "There is a strange comfort in admitting that a direction can be discovered by moving, not just by planning. I’m learning to choose the next useful thing instead of trying to understand the whole map."],
    ["August 2026", "What building QPGen taught me about actually shipping software", "The first version is allowed to be smaller than the idea in your head. Getting something into the hands of another person teaches you things a tutorial never can."],
    ["July 2026", "Things I learned while working with messy datasets", "Real data rarely arrives in the neat shape we imagine. A lot of the work is asking better questions before reaching for another chart."]
  ]
};

const $ = (selector) => document.querySelector(selector);
const render = () => {
  $("#snapshot-list").innerHTML = content.snapshots.map(([label, text]) => `<article class="snapshot-item"><span class="snapshot-label">${label}</span><p>${text}</p></article>`).join("");
  $("#updates-list").innerHTML = content.updates.map(([date, text]) => `<article class="update"><time>${date}</time><p>${text}</p></article>`).join("");
  $("#projects-list").innerHTML = content.projects.map(([number, name, summary, description, tech]) => `<article class="project"><div class="project-head"><span class="project-number">${number}</span><div><h3>${name}</h3><p class="project-summary">${summary}</p></div><span class="project-toggle" aria-hidden="true">+</span></div><div class="project-detail"><p>${description}</p><div class="tech-list">${tech.map(item => `<span>${item}</span>`).join("")}</div></div></article>`).join("");
  $("#skills-list").innerHTML = content.skills.map(([label, list]) => `<div class="skill-group"><h3>${label}</h3><p>${list}</p></div>`).join("");
  $("#credential-list").innerHTML = content.credentials.map(item => `<div class="credential">${item}</div>`).join("");
  $("#thoughts-list").innerHTML = content.thoughts.map(([date, title, body]) => `<article class="thought"><time>${date}</time><div><h3>${title}</h3><p>Click to read the note</p></div><span class="thought-arrow">↘</span><div class="thought-body">${body}</div></article>`).join("");
};
const switchView = (view) => {
  document.querySelectorAll(".view-button").forEach(button => {
    const active = button.dataset.view === view;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", active);
  });
  document.querySelectorAll(".view-panel").forEach(panel => {
    const active = panel.dataset.panel === view;
    panel.hidden = !active;
    panel.classList.toggle("is-active", active);
  });
  history.replaceState(null, "", `#${view}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
};
document.addEventListener("click", (event) => {
  const viewButton = event.target.closest("[data-view]");
  const viewJump = event.target.closest("[data-view-jump]");
  if (viewButton) switchView(viewButton.dataset.view);
  if (viewJump) switchView(viewJump.dataset.viewJump);
  const project = event.target.closest(".project");
  if (project) project.classList.toggle("is-open");
  const thought = event.target.closest(".thought");
  if (thought) thought.classList.toggle("is-open");
});
render();
const initialView = ["me", "work", "thoughts"].includes(location.hash.slice(1)) ? location.hash.slice(1) : "me";
if (initialView !== "me") switchView(initialView);
window.addEventListener("hashchange", () => {
  const view = location.hash.slice(1);
  if (["me", "work", "thoughts"].includes(view)) switchView(view);
});
$("#year").textContent = new Date().getFullYear();
