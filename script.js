const content = {
  snapshots: [
    ["Learning", "Python, SQL, and the craft of turning data into useful insights."],
    ["Building", "Data-driven projects and practical AI applications."],
    ["Thinking about", "Data analytics, business intelligence, and prompt engineering."],
    ["Working with", "Messy datasets, dashboards, visualizations, and real-world questions."],
    ["Goals", "Keep improving, keep building, and make analysis easier to understand."]
  ],
  updates: [
    ["2026", "Building practical projects with Python, SQL, exploratory data analysis, and AI tools."],
    ["2025", "Completed data analytics simulations with Deloitte and Accenture through Forage."]
  ],
  projects: [
    ["01", "Netflix Movies & TV Shows Analysis", "Exploring 8,800+ records", "Cleaned and analyzed a Netflix dataset to identify trends across genres, ratings, release years, and content. Created visualizations with Matplotlib and Seaborn.", ["Python", "Pandas", "NumPy", "EDA", "Matplotlib", "Seaborn"]],
    ["02", "QPGen", "AI Question Paper Generator", "Integrated the Google Gemini API to generate exam-oriented questions from syllabus input, with structured prompts, validation, retry logic, and JWT-based authentication.", ["Python", "Google Gemini API", "Prompt Engineering", "JWT"]]
  ],
  skills: [
    ["Programming", "Python · SQL"], ["Data Analysis", "Pandas · NumPy · Exploratory Data Analysis"], ["Data Visualization", "Power BI · Matplotlib"], ["Tools", "Git · GitHub · Jupyter Notebook · Google Colab · Microsoft Excel"]
  ],
  experience: [
    ["Data Analyst — Deloitte", "Virtual Job Simulation · Completed 2025", "Built an interactive dashboard for data analysis and forensic technology use cases. Used advanced Excel functions, pivot tables, and conditional formatting to clean, classify, and analyze datasets."],
    ["Data Analyst — Accenture", "Virtual Job Simulation · Completed 2025", "Cleaned, modeled, and analyzed seven datasets to identify trends in user engagement and content performance, then communicated findings through a presentation and video."]
  ],
  credentials: ["Microsoft Certified: Azure Data Fundamentals (AZ-900) — September 2025", "Data Analytics & Visualization — Accenture (Forage Simulation)", "Data Analytics with Tableau and Excel — Deloitte (Forage Simulation)", "Preparing Data for Analysis with Microsoft Excel — Microsoft (Coursera)", "Harnessing the Power of Data with Power BI — Microsoft (Coursera)"],
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
  $("#experience-list").innerHTML = content.experience.map(([title, summary, description]) => `<article class="experience-item"><div><h3>${title}</h3><p class="project-summary">${summary}</p></div><p>${description}</p></article>`).join("");
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
