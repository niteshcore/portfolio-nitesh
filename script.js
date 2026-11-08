const content = {
  snapshots: [
    ["Building", "LearnAlaya & QPGen", "A four-portal coaching institute platform for a client, and an AI question paper generator."],
    ["Learning", "SQL & the fundamentals", "Writing queries by hand every day and getting better at explaining the code my agents write."],
    ["Interested in", "AI products & data", "How AI agents and good data can help small teams build and decide faster."]
  ],
  // [number, name, summary, description, tech, links: [label, url][], images: [src, caption, alt][]]
  projects: [
    ["01", "LearnAlaya", "Coaching institute platform · client project, in progress", "A platform for a coaching institute with four role-based portals: admin, teacher, student and parent. It covers attendance, timetable, exams and results, fees, leave requests, notes, announcements and chat. Security lives in the database: a 30+ table PostgreSQL schema with 60+ row-level security policies, mandatory two-factor login for admins, a forced password change on first login and automatic sign-out when idle.", ["React", "Supabase", "PostgreSQL", "Row-Level Security", "Edge Functions", "Netlify"], [["View repository", "https://github.com/niteshcore/LearnAlaya"]], [
      ["images/learnalaya/hero_preview1.png", "Landing page", "LearnAlaya landing page with the headline Make learning click"],
      ["images/learnalaya/hero_preview2.png", "Courses section", "LearnAlaya courses section with cards for School Foundations, Maths and Science, and Commerce Track"],
      ["images/learnalaya/admin.png", "Admin portal", "LearnAlaya admin portal sign-in on the two-step verification code screen"],
      ["images/learnalaya/teacher.png", "Teacher portal", "LearnAlaya teacher dashboard with a workspace menu, class stats and open notifications"],
      ["images/learnalaya/student.png", "Student portal", "LearnAlaya student dashboard with attendance, the next class and open notifications"],
      ["images/learnalaya/parent.png", "Parent portal", "LearnAlaya parent dashboard with a child's attendance, fees to pay and next class"]
    ]],
    ["02", "QPGen", "AI question paper generator", "A question bank and paper generator for teachers, with 400+ questions across 10 subjects tagged by Bloom's level and difficulty. Teachers upload a syllabus PDF and Gemini generates questions only from the retrieved passages, with verified page citations (RAG). Semantic search and duplicate detection run on Gemini embeddings in pgvector. It also has role-based access with 20 permissions, an audit log, PDF export, CI tests and a daily job that fills a public paper library.", ["Python", "Flask", "Google Gemini API", "RAG", "pgvector", "Supabase", "Vanilla JS", "GitHub Actions"], [["View repository", "https://github.com/niteshcore/qpgen-ai"]], [
      ["images/qpgen/hero_preview.png", "Landing page", "QPGen landing page with the headline Generate Question Papers the Smart Way beside a sample generated paper"],
      ["images/qpgen/features_preview.png", "Features", "QPGen features section with six cards, including AI question generation and Bloom's Taxonomy alignment"]
    ]],
    ["03", "Certificate Verification Portal", "Freelance project for The Future Animations", "A live portal where anyone can check if an internship certificate is genuine. Each certificate gets a unique ID and QR code; scanning it opens a public verification page, and every check is logged. Admins issue and manage certificates from a JWT-protected panel with a stats dashboard.", ["React", "Tailwind CSS", "Flask", "PostgreSQL", "JWT", "Vercel", "Render"], [["View repository", "https://github.com/niteshcore/verify.futureanimations.in"], ["Live site", "https://verify.futureanimations.in"]]],
    ["04", "Netflix Movies & TV Shows Analysis", "Exploring 8,800+ titles", "Cleaned and analyzed the Netflix titles dataset to find trends across genres, ratings, release years and content type. Key findings: about 70% movies vs 30% TV shows, a sharp rise in content after 2015, and TV-MA as the most common rating. Communicated them through heatmaps, trend charts, distribution plots and a word cloud.", ["Python", "Pandas", "NumPy", "EDA", "Matplotlib", "Seaborn", "WordCloud"], [["View repository", "https://github.com/niteshcore/Netflix-Eda-Project"]]],
    ["05", "MedPoint", "Medical appointment booking prototype", "A responsive healthcare prototype where users can book appointments, view the clinic schedule, check doctor availability and get a specialist suggestion based on their symptoms. Demo data is stored in localStorage.", ["HTML", "Tailwind CSS", "JavaScript", "LocalStorage"], [["View repository", "https://github.com/niteshcore/MedPoint"]]],
    ["06", "The Indus Group", "Corporate website for a global trade group", "A 12-page corporate website covering The Indus Group's work in logistics, enterprise solutions, skill development and real estate, including a logistics CBM calculator.", ["HTML", "CSS", "JavaScript", "Responsive Design"], [["View repository", "https://github.com/niteshcore/theindusgroupweb"]]]
  ],
  skills: [
    ["AI Tools", "Claude Code · Codex · VS Code Chat · Antigravity · Google Gemini API"],
    ["Web Stack", "React · Flask · Tailwind CSS · REST APIs · JWT"],
    ["Databases", "PostgreSQL · Supabase · Row-Level Security · pgvector"],
    ["Data", "Python · SQL · Pandas · Matplotlib · Seaborn · Power BI · Excel"],
    ["DevOps", "Git · GitHub Actions · Render · Vercel · Netlify"]
  ],
  // [role, company and meta, bullet points], newest first
  experience: [
    ["Freelance Full-Stack Developer", "LearnAlaya (client project) · Oct 2026 – Present · Remote", ["Building, solo and end to end, a coaching institute platform with four role-based portals: admin, teacher, student and parent.", "Designed a 30+ table PostgreSQL schema protected by 60+ row-level security policies, plus mandatory two-factor login for admins."]],
    ["Freelance Full-Stack Developer", "The Future Animations · Aug 2026 – Sep 2026 · Remote", ["Built and deployed a certificate verification portal with unique certificate IDs and QR codes.", "Built a JWT-protected admin panel to issue and manage certificates, with a stats dashboard."]],
    ["Data & Operations Intern", "The Future Animations · Jun 2026 – Aug 2026 · Hybrid", ["Coordinated animator workflows, tracked task progress and followed up on project deadlines.", "Maintained project records and organized operational data using Microsoft Excel and Google Sheets.", "Tracked pending tasks and prepared progress reports to support day-to-day operations."]]
  ],
  credentials: [
    ["Microsoft Certified: Azure Data Fundamentals", "https://www.credly.com/badges/d698cd3e-2291-481b-ad99-45617f66b66c/linked_in_profile"],
    ["Preparing Data for Analysis with Microsoft Excel", "https://www.coursera.org/account/accomplishments/verify/A6F6GP9YXWWZ"],
    ["Harnessing the Power of Data with Power BI", "https://www.coursera.org/account/accomplishments/verify/NR2KFRHSVC7Y"],
    ["Accenture North America. Data Analytics and Visualization Job Simulation", "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/T6kdcdKSTfg2aotxT/hzmoNKtzvAzXsEqx8_T6kdcdKSTfg2aotxT_hanZPhBAq6biw4tX2_1748104760288_completion_certificate.pdf"],
    ["Deloitte Australia. Data Analytics Job Simulation", "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_hanZPhBAq6biw4tX2_1747475955514_completion_certificate.pdf"]
  ],
  thoughts: [
    ["November 2026", "AI writes my code. I still own what it does.", "Using coding agents made me faster. It also made me more careful about the parts an agent can't be trusted with.", "Most of what I've shipped this year was written by AI agents like Claude Code and Codex. That changed what my job is. I spend less time typing code and more time deciding what to build, designing the data and checking the result. I've learned not to trust generated code by default. In LearnAlaya, I put the access rules inside the database itself, so even a buggy screen can't show a parent another child's fees. I keep secrets out of the code, test every role by hand, and ask the agent to review its own work for security holes. The agent is fast. Being responsible for what it ships is still my job."],
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
const render = () => {
  $("#snapshot-list").innerHTML = content.snapshots.map(([label, title, description]) => `<article class="snapshot-item"><span class="snapshot-label">${label}</span><h3 class="snapshot-title">${title}</h3><p>${description}</p></article>`).join("");
  $("#projects-list").innerHTML = content.projects.map(([number, name, summary, description, tech, links, images = []]) => `<article class="project"><div class="project-head"><span class="project-number">${number}</span><div><h3>${name}</h3><p class="project-summary">${summary}</p></div><span class="project-toggle" aria-hidden="true">+</span></div><div class="project-detail"><p>${description}</p><div class="tech-list">${tech.map(item => `<span>${item}</span>`).join("")}</div>${images.length ? `<div class="project-gallery">${images.map(([src, caption, alt]) => `<figure class="gallery-item"><button class="gallery-thumb" type="button" aria-label="Enlarge image: ${caption}"><img src="${src}" alt="${alt}" loading="lazy" /></button><figcaption>${caption}</figcaption></figure>`).join("")}</div>` : ""}<div class="project-links">${links.map(([label, url]) => `<a class="project-link" href="${url}" target="_blank" rel="noopener">${label} <span>↗</span></a>`).join("")}</div></div></article>`).join("");
  $("#experience-list").innerHTML = content.experience.map(([role, meta, points]) => `<article class="experience-item"><div><h3>${role}</h3><p class="project-summary">${meta}</p></div><ul>${points.map(point => `<li>${point}</li>`).join("")}</ul></article>`).join("");
  $("#skills-list").innerHTML = content.skills.map(([label, list]) => `<div class="skill-group"><h3>${label}</h3><p>${list}</p></div>`).join("");
  $("#credential-list").innerHTML = content.credentials.map(([name, url]) => `<a class="credential" href="${url}" target="_blank" rel="noopener">${name}<span>View credential ↗</span></a>`).join("");
  $("#thoughts-list").innerHTML = content.thoughts.slice(0, 3).map(([date, title, preview, body], index) => `<article class="thought" tabindex="0" role="button" aria-expanded="false" aria-controls="thought-body-${index}"><time>${date}</time><div><h3>${title}</h3><p>${preview}</p></div><span class="thought-arrow" aria-hidden="true">↘</span><div class="thought-body" id="thought-body-${index}">${body}</div></article>`).join("");
};
const lightbox = $("#lightbox");
const lightboxImage = $("#lightbox-image");
let lightboxTrigger = null;
const openLightbox = (thumb) => {
  const image = thumb.querySelector("img");
  lightboxImage.src = image.getAttribute("src");
  lightboxImage.alt = image.alt;
  lightbox.hidden = false;
  document.body.classList.add("lightbox-open");
  lightboxTrigger = thumb;
  $(".lightbox-close").focus();
};
const closeLightbox = () => {
  lightbox.hidden = true;
  lightboxImage.removeAttribute("src");
  document.body.classList.remove("lightbox-open");
  if (lightboxTrigger) lightboxTrigger.focus();
  lightboxTrigger = null;
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
  if (!lightbox.hidden && event.target !== lightboxImage) closeLightbox();
  const thumb = event.target.closest(".gallery-thumb");
  if (thumb) openLightbox(thumb);
  const project = event.target.closest(".project");
  if (project && !event.target.closest("a, .project-gallery")) project.classList.toggle("is-open");
  const thought = event.target.closest(".thought");
  if (thought) {
    const isOpen = thought.classList.toggle("is-open");
    thought.setAttribute("aria-expanded", isOpen);
  }
});
document.addEventListener("keydown", (event) => {
  if (!lightbox.hidden && event.key === "Escape") closeLightbox();
  if (!lightbox.hidden && event.key === "Tab") event.preventDefault();
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
