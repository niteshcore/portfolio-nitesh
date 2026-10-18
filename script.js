const content = {
  snapshots: [
    ["Learning", "Python, SQL & data analysis", "Getting better at working with data and finding useful insights."],
    ["Building", "Projects that solve real problems", "Turning ideas into useful applications and experimenting with AI."],
    ["Interested in", "Data, business & technology", "Exploring how data analytics and business intelligence help people make better decisions."]
  ],
  projects: [
    ["01", "QPGen", "AI Question Paper Generator", "Built an AI powered question bank and paper generation studio for educators. It uses Google Gemini with structured prompts validation retry logic JWT authentication and grounded PDF content to create balanced papers with Bloom's Taxonomy in mind.", ["Python", "Flask", "React", "Google Gemini API", "RAG", "JWT"], "https://github.com/niteshcore/qpgen-ai"],
    ["02", "Certificate Verification Portal", "Issuing and verifying internship certificates", "Created a production ready SaaS application for issuing managing and verifying internship certificates. It includes a React frontend Flask API JWT authentication and SQLite or PostgreSQL support.", ["React", "Vite", "Tailwind CSS", "Flask", "SQLAlchemy", "PostgreSQL"], "https://github.com/niteshcore/verify.futureanimations.in"],
    ["03", "Netflix Movies & TV Shows Analysis", "Exploring 8,800+ records", "Cleaned and analyzed the Netflix Titles dataset to identify trends across genres ratings release years and content type. Created heatmaps trend charts distribution plots and word clouds to communicate the findings.", ["Python", "Pandas", "NumPy", "EDA", "Matplotlib", "Seaborn", "WordCloud"], "https://github.com/niteshcore/Netflix-Eda-Project"],
    ["04", "MedPoint", "Medical appointment booking prototype", "Designed a responsive healthcare prototype where users can book appointments view clinic schedules check doctor availability and get symptom based specialty recommendations. Demo data is stored with localStorage.", ["HTML", "Tailwind CSS", "JavaScript", "LocalStorage"], "https://github.com/niteshcore/MedPoint"],
    ["05", "The Indus Group", "Corporate website for a global trade group", "Built a corporate website presenting The Indus Group's work across global logistics enterprise growth professional skill development and real estate. It includes dedicated service and company pages.", ["HTML", "CSS", "JavaScript", "Responsive Design"], "https://github.com/niteshcore/theindusgroupweb"]
  ],
  skills: [
    ["Programming", "Python · SQL"], ["Data Analysis", "Pandas · NumPy · Exploratory Data Analysis"], ["Data Visualization", "Power BI · Matplotlib"], ["Tools", "Git · GitHub · Jupyter Notebook · Google Colab · Microsoft Excel"]
  ],
  experience: [
    ["Deloitte Australia. Data Analytics Job Simulation", "Virtual Job Simulation · Completed 2025", "Built an interactive dashboard for data analysis and forensic technology use cases. Used advanced Excel functions pivot tables and conditional formatting to clean classify and analyze datasets."],
    ["Accenture North America. Data Analytics and Visualization Job Simulation", "Virtual Job Simulation · Completed 2025", "Cleaned modeled and analyzed seven datasets to identify trends in user engagement and content performance. Then communicated findings through a presentation and video."]
  ],
  credentials: [
    ["Microsoft Certified: Azure Data Fundamentals", "https://www.credly.com/badges/d698cd3e-2291-481b-ad99-45617f66b66c/linked_in_profile"],
    ["Preparing Data for Analysis with Microsoft Excel", "https://www.coursera.org/account/accomplishments/verify/A6F6GP9YXWWZ"],
    ["Harnessing the Power of Data with Power BI", "https://www.coursera.org/account/accomplishments/verify/NR2KFRHSVC7Y"],
    ["Accenture North America. Data Analytics and Visualization Job Simulation", "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/T6kdcdKSTfg2aotxT/hzmoNKtzvAzXsEqx8_T6kdcdKSTfg2aotxT_hanZPhBAq6biw4tX2_1748104760288_completion_certificate.pdf"],
    ["Deloitte Australia. Data Analytics Job Simulation", "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_hanZPhBAq6biw4tX2_1747475955514_completion_certificate.pdf"]
  ],
  thoughts: [
    ["October 2026", "I’m trying to get better at finishing things", "I have more ideas than finished projects sometimes. I’m learning that choosing one thing and taking it to a usable version is its own skill.", "I like exploring ideas. One minute it’s a data project, the next it’s an AI tool or a small app that solves an everyday problem. That curiosity is useful, but it can also pull me in too many directions. I’m trying to put more value on finishing: making the basic version work, testing it, fixing what breaks, and letting someone else use it. A project doesn’t become better just because the idea behind it is ambitious. It becomes better when the details are handled and the thing actually works."],
    ["September 2026", "Learning a tool isn’t the same as knowing what to do with it", "Knowing Python or SQL syntax is one thing. Knowing which question to ask, and how to check the answer, is another.", "It’s easy to measure progress by how many topics or libraries I’ve covered. But when I work on an analysis, the harder part is often deciding what I actually need to find out. Python can clean and transform data; SQL can help me pull the right rows; a chart can make a pattern easier to see. None of those tools can rescue a question that hasn’t been thought through. I want to get more comfortable explaining why I used a method, what the result means, and what it still doesn’t tell me."],
    ["August 2026", "QPGen made the gap between an idea and a product feel real", "A working feature involves more than the part people see. There’s authentication, data, errors, and a lot of small decisions in between.", "With QPGen, the idea of generating question papers with AI was only the starting point. Turning that idea into an application meant thinking about the API, the database, user authentication, and how the different pieces fit together. Those parts aren’t as exciting to describe as the main feature, but they’re what make a project usable beyond a quick demo. It changed how I look at software: the visible feature is only one part of the work, and the unglamorous details deserve attention too."],
    ["July 2026", "Messy data is usually where the real work starts", "Missing values, inconsistent labels, and awkward formats are not side quests. They’re often the first thing an analysis asks you to understand.", "A dataset can look ready to analyse until I start checking it closely. Then there are duplicates, empty fields, inconsistent categories, or values that don’t make sense together. It’s tempting to clean everything quickly and move on to the charts, but those decisions can change the result. I’m learning to pause and ask what a missing value means, whether two labels really refer to the same thing, and what I might lose by removing a row. Good analysis starts with understanding the data, not decorating it."],
    ["June 2026", "Debugging is a lesson in being less attached to my first guess", "When something breaks, my first explanation is only a hypothesis. The useful part is checking it instead of defending it.", "I’ve learned that staring at a bug and hoping the answer appears is not much of a debugging strategy. It helps more to narrow the problem down: reproduce it, read the error, check the inputs, and change one thing at a time. Sometimes the issue is much smaller than I imagined; sometimes my understanding of the code was wrong. Neither is a disaster. I’d rather learn to investigate calmly than pretend I should get everything right on the first attempt."],
    ["May 2026", "I don’t need my entire career figured out before I start", "I’m interested in data, Python, and building useful software. For now, doing the work is a better way to learn what fits than overthinking every possible path.", "I’ve spent time wondering which role I should aim for and which skills I should prioritise. Data analytics interests me because it combines problem-solving with making sense of information. Python also gives me a way to automate tasks and build things, while projects expose me to the engineering behind an idea. I don’t think I need to choose a permanent label for myself right now. I need a solid foundation, projects I can explain honestly, and enough experience to make the next decision with better information."],
    ["April 2026", "Consistency looks less impressive than a fresh start", "Making a perfect plan feels productive. Coming back to the same skill and practising it again is what actually builds familiarity.", "I can spend too much time organising what I’m going to learn: the roadmap, the resources, the order of topics. Planning has its place, but it can become a comfortable substitute for doing the work. With Python and SQL, I need to write queries, solve small problems, make mistakes, and return to concepts I’ve forgotten. I’m trying to care less about having the perfect routine and more about making steady progress I can actually sustain."],
    ["March 2026", "A chart is not the same thing as an insight", "A visual can make a result look convincing. I still need to know what it shows, what could explain it, and what it leaves out.", "Data analytics can make it tempting to jump straight from a dataset to a dashboard. But a clean chart is only useful if it answers a real question. I want to get better at looking beyond the obvious pattern, checking whether the comparison is fair, and being clear about uncertainty. Sometimes the honest conclusion is that the data isn’t enough to support a strong claim. That might sound less impressive, but it’s more useful than pretending the chart says more than it does."],
    ["February 2026", "AI is useful, but I still want to understand what I’m building", "Getting an AI feature to work is exciting. Being able to explain its limits and handle what happens around it matters just as much.", "AI tools make it easier to experiment with ideas that once felt out of reach. But adding an API call doesn’t automatically make an application thoughtful or reliable. I still need to understand the inputs and outputs, handle failures, think about the user experience, and check whether the result is actually useful. I don’t want to use AI just because it sounds impressive in a project description. I want to understand where it helps, where it can go wrong, and what the rest of the software needs to do around it."]
  ]
};

const $ = (selector) => document.querySelector(selector);
const cleanText = (text) => text.replace(/[,—–-]/g, "");
const render = () => {
  $("#snapshot-list").innerHTML = content.snapshots.map(([label, title, description]) => `<article class="snapshot-item"><span class="snapshot-label">${cleanText(label)}</span><h3 class="snapshot-title">${cleanText(title)}</h3><p>${cleanText(description)}</p></article>`).join("");
  $("#projects-list").innerHTML = content.projects.map(([number, name, summary, description, tech, url]) => `<article class="project"><div class="project-head"><span class="project-number">${number}</span><div><h3>${cleanText(name)}</h3><p class="project-summary">${cleanText(summary)}</p></div><span class="project-toggle" aria-hidden="true">+</span></div><div class="project-detail"><p>${cleanText(description)}</p><div class="tech-list">${tech.map(item => `<span>${cleanText(item)}</span>`).join("")}</div><a class="project-link" href="${url}" target="_blank" rel="noopener">View repository <span>↗</span></a></div></article>`).join("");
  $("#experience-list").innerHTML = content.experience.map(([title, summary, description]) => `<article class="experience-item"><div><h3>${cleanText(title)}</h3><p class="project-summary">${cleanText(summary)}</p></div><p>${cleanText(description)}</p></article>`).join("");
  $("#skills-list").innerHTML = content.skills.map(([label, list]) => `<div class="skill-group"><h3>${label}</h3><p>${list}</p></div>`).join("");
  $("#credential-list").innerHTML = content.credentials.map(([name, url]) => `<a class="credential" href="${url}" target="_blank" rel="noopener">${cleanText(name)}<span>View credential ↗</span></a>`).join("");
  $("#thoughts-list").innerHTML = content.thoughts.map(([date, title, preview, body], index) => `<article class="thought" tabindex="0" role="button" aria-expanded="false" aria-controls="thought-body-${index}"><time>${cleanText(date)}</time><div><h3>${cleanText(title)}</h3><p>${cleanText(preview)}</p></div><span class="thought-arrow" aria-hidden="true">↘</span><div class="thought-body" id="thought-body-${index}">${cleanText(body)}</div></article>`).join("");
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
  if (project && !event.target.closest("a")) project.classList.toggle("is-open");
  const thought = event.target.closest(".thought");
  if (thought) {
    const isOpen = thought.classList.toggle("is-open");
    thought.setAttribute("aria-expanded", isOpen);
  }
});
document.addEventListener("keydown", (event) => {
  if ((event.key === "Enter" || event.key === " ") && event.target.matches(".thought")) {
    event.preventDefault();
    event.target.click();
  }
});
$(".thoughts-toggle").addEventListener("click", (event) => {
  const toggle = event.currentTarget;
  const content = $("#thoughts-content");
  const isOpen = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", !isOpen);
  content.hidden = isOpen;
});
render();
const initialView = ["me", "work"].includes(location.hash.slice(1)) ? location.hash.slice(1) : "me";
if (initialView !== "me") switchView(initialView);
window.addEventListener("hashchange", () => {
  const view = location.hash.slice(1);
  if (["me", "work"].includes(view)) switchView(view);
});
$("#year").textContent = new Date().getFullYear();
$("#current-date").textContent = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric"
}).format(new Date());
