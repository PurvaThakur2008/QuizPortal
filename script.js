/**
 * ============================================================================
 * DEVQUIZ PRO - INTERACTIVE QUIZ & TEACHER PORTAL JAVASCRIPT
 * ============================================================================
 */

// 1. DEFAULT QUESTION BANK (Comprehensive set across HTML, CSS, JavaScript)
const DEFAULT_QUESTIONS = [
    // --- HTML QUESTIONS ---
    {
        id: "html-e1",
        category: "html",
        difficulty: "easy",
        question: "What does HTML stand for in web development?",
        options: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Hyperlink and Text Management Language",
            "Home Tool Markup Logic"
        ],
        correct: 0,
        explanation: "HTML stands for Hyper Text Markup Language. It provides the core semantic structure of web pages."
    },
    {
        id: "html-e2",
        category: "html",
        difficulty: "easy",
        question: "Which HTML element is used to create an interactive hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        correct: 1,
        explanation: "The <a> (anchor) tag with the 'href' attribute creates hyperlinks to other pages or files."
    },
    {
        id: "html-e3",
        category: "html",
        difficulty: "easy",
        question: "Which attribute specifies alternate text for an image if it cannot be displayed?",
        options: ["title", "src", "alt", "description"],
        correct: 2,
        explanation: "The 'alt' attribute provides alternative text for accessibility (screen readers) and when images fail to load."
    },
    {
        id: "html-m1",
        category: "html",
        difficulty: "medium",
        question: "Which HTML5 semantic element is best suited for self-contained, syndicate-able content like a blog post or news story?",
        options: ["<section>", "<article>", "<aside>", "<div>"],
        correct: 1,
        explanation: "The <article> element is intended to encapsulate independent, self-contained content that makes sense on its own."
    },
    {
        id: "html-m2",
        category: "html",
        difficulty: "medium",
        question: "What is the difference between the 'id' and 'class' attributes?",
        options: [
            "'id' can be used on multiple elements; 'class' must be unique per page",
            "'id' must be unique on the page; 'class' can be shared across multiple elements",
            "There is no difference between them",
            "'id' is only for JavaScript, 'class' is only for CSS"
        ],
        correct: 1,
        explanation: "An 'id' must be unique within an HTML document, while 'class' can apply styling or behavior to multiple elements."
    },
    {
        id: "html-h1",
        category: "html",
        difficulty: "hard",
        question: "What does the 'defer' attribute in a `<script defer src='...'>` tag do?",
        options: [
            "Downloads the script asynchronously and executes it immediately when downloaded",
            "Pauses HTML parsing until the script finishes downloading and running",
            "Downloads the script in the background and executes it in order after HTML parsing is complete",
            "Prevents the script from executing until the user clicks the page"
        ],
        correct: 2,
        explanation: "'defer' downloads the external script while HTML parsing continues, then executes it in document order after the DOM is ready (before DOMContentLoaded)."
    },
    {
        id: "html-h2",
        category: "html",
        difficulty: "hard",
        question: "Which HTML element represents the calculated output of an expression or user action?",
        options: ["<data>", "<output>", "<result>", "<calc>"],
        correct: 1,
        explanation: "The <output> tag represents the result of a calculation (like one performed by a script) or user interaction."
    },

    // --- CSS QUESTIONS ---
    {
        id: "css-e1",
        category: "css",
        difficulty: "easy",
        question: "What does CSS stand for?",
        options: [
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Computer Styling System",
            "Colorful Syntax Sheets"
        ],
        correct: 1,
        explanation: "CSS stands for Cascading Style Sheets, defining how HTML elements are styled and laid out."
    },
    {
        id: "css-e2",
        category: "css",
        difficulty: "easy",
        question: "Which symbol is used to target an HTML class in a CSS selector?",
        options: [". (dot)", "# (hash)", "@ (at)", "* (asterisk)"],
        correct: 0,
        explanation: "A dot prefix (e.g. .btn) selects elements with that class name, while # selects an element by id."
    },
    {
        id: "css-e3",
        category: "css",
        difficulty: "easy",
        question: "Which CSS property is used to change the text color of an element?",
        options: ["font-color", "text-color", "color", "background-color"],
        correct: 2,
        explanation: "The 'color' property sets the foreground color of text content."
    },
    {
        id: "css-m1",
        category: "css",
        difficulty: "medium",
        question: "What does setting `box-sizing: border-box;` achieve in modern CSS?",
        options: [
            "Padding and borders are included within the specified width and height",
            "Adds a decorative 3D border around all box elements",
            "Excludes padding from the total dimensions",
            "Enforces a fixed 100px square box layout"
        ],
        correct: 0,
        explanation: "With border-box, the width and height include content, padding, and border, making responsive sizing much more intuitive."
    },
    {
        id: "css-m2",
        category: "css",
        difficulty: "medium",
        question: "In CSS Flexbox, which property is used to align items along the cross-axis?",
        options: ["justify-content", "align-items", "flex-direction", "place-content"],
        correct: 1,
        explanation: "'justify-content' aligns along the main axis, whereas 'align-items' aligns items along the cross-axis."
    },
    {
        id: "css-h1",
        category: "css",
        difficulty: "hard",
        question: "Which CSS selector has the highest specificity?",
        options: [
            "#nav .item",
            "nav ul.menu li a.active",
            "#main-header",
            "div#content p.text:hover"
        ],
        correct: 3,
        explanation: "div#content p.text:hover has 1 ID, 2 Classes/pseudo-classes, and 2 Elements (Specificity: 0,1,2,2), which beats the others."
    },
    {
        id: "css-h2",
        category: "css",
        difficulty: "hard",
        question: "What is the default value of the CSS `position` property?",
        options: ["relative", "absolute", "static", "fixed"],
        correct: 2,
        explanation: "HTML elements are positioned 'static' by default, meaning they flow into the normal page document order."
    },

    // --- JAVASCRIPT QUESTIONS ---
    {
        id: "js-e1",
        category: "javascript",
        difficulty: "easy",
        question: "Which keyword is used to declare a variable that cannot be reassigned in JavaScript?",
        options: ["var", "let", "const", "static"],
        correct: 2,
        explanation: "'const' creates an immutable variable binding in block scope (though properties of objects can still be modified)."
    },
    {
        id: "js-e2",
        category: "javascript",
        difficulty: "easy",
        question: "Which JavaScript operator checks for equality of both value AND data type?",
        options: ["==", "===", "!=", "="],
        correct: 1,
        explanation: "The strict equality operator (===) checks that both value and type match without implicit type coercion."
    },
    {
        id: "js-e3",
        category: "javascript",
        difficulty: "easy",
        question: "Which built-in method adds one or more elements to the end of an array?",
        options: ["push()", "unshift()", "append()", "concat()"],
        correct: 0,
        explanation: "'push()' appends items to the end of an array and returns the new array length."
    },
    {
        id: "js-m1",
        category: "javascript",
        difficulty: "medium",
        question: "What is the return value of evaluating `typeof null` in standard JavaScript?",
        options: ["'null'", "'undefined'", "'object'", "'boolean'"],
        correct: 2,
        explanation: "In JavaScript, 'typeof null' historically evaluates to 'object' due to a legacy bug in the initial JS engine design."
    },
    {
        id: "js-m2",
        category: "javascript",
        difficulty: "medium",
        question: "What does the array method `.map()` return?",
        options: [
            "The same original array modified in place",
            "A brand new array containing the results of calling the function on every element",
            "A single aggregated numeric value",
            "A boolean indicating if all elements passed"
        ],
        correct: 1,
        explanation: "'.map()' creates a new array populated with the results of calling a provided callback function on every item in the calling array."
    },
    {
        id: "js-h1",
        category: "javascript",
        difficulty: "hard",
        question: "What is a 'closure' in JavaScript?",
        options: [
            "A syntax construct to close an open database connection",
            "A function bundled with references to its surrounding lexical environment",
            "The final function executed in a Promise chain",
            "A method to seal an object from being modified"
        ],
        correct: 1,
        explanation: "A closure is the combination of a function bundled together with its lexical scope, allowing inner functions to access outer variables even after the outer function has returned."
    },
    {
        id: "js-h2",
        category: "javascript",
        difficulty: "hard",
        question: "What will `console.log(0.1 + 0.2 === 0.3)` output in JavaScript?",
        options: ["true", "false", "undefined", "NaN"],
        correct: 1,
        explanation: "Because JavaScript uses IEEE 754 standard double-precision floating-point arithmetic, 0.1 + 0.2 equals 0.30000000000000004, so the comparison evaluates to false."
    }
];

// Initial mock leaderboard entries for rich first-run display
const INITIAL_LEADERBOARD = [
    { id: "lb-1", name: "Sarah Chen", avatar: "👩‍💻", category: "javascript", difficulty: "hard", score: 10, total: 10, percent: 100, date: "2026-10-02" },
    { id: "lb-2", name: "Marco Rossi", avatar: "⚡", category: "all", difficulty: "medium", score: 9, total: 10, percent: 90, date: "2026-10-03" },
    { id: "lb-3", name: "Aria Thorne", avatar: "🚀", category: "css", difficulty: "hard", score: 8, total: 10, percent: 80, date: "2026-10-04" },
    { id: "lb-4", name: "Liam Patel", avatar: "👨‍💻", category: "html", difficulty: "medium", score: 8, total: 10, percent: 80, date: "2026-10-04" },
    { id: "lb-5", name: "Elena Rostova", avatar: "🦊", category: "javascript", difficulty: "medium", score: 7, total: 10, percent: 70, date: "2026-10-05" }
];

// 2. STORAGE MANAGEMENT
const STORAGE = {
    KEYS: {
        QUESTIONS: "devquiz_questions_v2",
        USER: "devquiz_user_v2",
        LEADERBOARD: "devquiz_leaderboard_v2",
        HISTORY: "devquiz_history_v2",
        SOUND: "devquiz_sound_v2"
    },

    getQuestions() {
        try {
            const data = localStorage.getItem(this.KEYS.QUESTIONS);
            if (data) return JSON.parse(data);
        } catch (e) {
            console.error("Storage error:", e);
        }
        // Initialize defaults
        localStorage.setItem(this.KEYS.QUESTIONS, JSON.stringify(DEFAULT_QUESTIONS));
        return [...DEFAULT_QUESTIONS];
    },

    saveQuestions(questions) {
        localStorage.setItem(this.KEYS.QUESTIONS, JSON.stringify(questions));
    },

    getUser() {
        try {
            const data = localStorage.getItem(this.KEYS.USER);
            if (data) return JSON.parse(data);
        } catch (e) { }
        const defaultUser = { role: "student", name: "Alex Dev", avatar: "👨‍💻" };
        localStorage.setItem(this.KEYS.USER, JSON.stringify(defaultUser));
        return defaultUser;
    },

    saveUser(user) {
        localStorage.setItem(this.KEYS.USER, JSON.stringify(user));
    },

    getLeaderboard() {
        try {
            const data = localStorage.getItem(this.KEYS.LEADERBOARD);
            if (data) return JSON.parse(data);
        } catch (e) { }
        localStorage.setItem(this.KEYS.LEADERBOARD, JSON.stringify(INITIAL_LEADERBOARD));
        return [...INITIAL_LEADERBOARD];
    },

    saveLeaderboard(list) {
        localStorage.setItem(this.KEYS.LEADERBOARD, JSON.stringify(list));
    },

    getHistory() {
        try {
            const data = localStorage.getItem(this.KEYS.HISTORY);
            if (data) return JSON.parse(data);
        } catch (e) { }
        return [];
    },

    saveHistory(history) {
        localStorage.setItem(this.KEYS.HISTORY, JSON.stringify(history));
    },

    getSoundEnabled() {
        const s = localStorage.getItem(this.KEYS.SOUND);
        return s === null ? true : s === "true";
    },

    setSoundEnabled(val) {
        localStorage.setItem(this.KEYS.SOUND, val ? "true" : "false");
    }
};

// 3. SYNTHESIZED SOUND EFFECTS (Web Audio API - zero lag, no audio files needed)
class SoundFX {
    constructor() {
        this.ctx = null;
        this.enabled = STORAGE.getSoundEnabled();
    }

    init() {
        if (!this.ctx) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (AudioCtx) this.ctx = new AudioCtx();
        }
    }

    playTone(freq, type = "sine", duration = 0.15, delay = 0) {
        if (!this.enabled) return;
        try {
            this.init();
            if (this.ctx && this.ctx.state === "suspended") {
                this.ctx.resume();
            }
            setTimeout(() => {
                if (!this.ctx) return;
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = type;
                osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
                gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start();
                osc.stop(this.ctx.currentTime + duration);
            }, delay * 1000);
        } catch (e) { }
    }

    playCorrect() {
        this.playTone(523.25, "triangle", 0.12, 0);       // C5
        this.playTone(659.25, "triangle", 0.22, 0.1);     // E5
        this.playTone(783.99, "triangle", 0.35, 0.2);     // G5
    }

    playWrong() {
        this.playTone(220, "sawtooth", 0.2, 0);           // A3
        this.playTone(185, "sawtooth", 0.25, 0.12);       // F#3
    }

    playVictory() {
        this.playTone(523.25, "triangle", 0.15, 0);
        this.playTone(659.25, "triangle", 0.15, 0.15);
        this.playTone(783.99, "triangle", 0.18, 0.3);
        this.playTone(1046.50, "triangle", 0.45, 0.45);
    }

    playClick() {
        this.playTone(800, "sine", 0.04, 0);
    }
}

const sound = new SoundFX();

// 4. CONFETTI EFFECT
function launchConfetti() {
    const canvas = document.getElementById("confetti-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ["#6366f1", "#8b5cf6", "#ec4899", "#10b981", "#fbbf24", "#38bdf8"];
    const particleCount = 75;

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: canvas.width / 2 + (Math.random() - 0.5) * 200,
            y: canvas.height * 0.4,
            vx: (Math.random() - 0.5) * 12,
            vy: Math.random() * -10 - 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 8 + 4,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10,
            opacity: 1
        });
    }

    let animationFrame;
    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let activeParticles = 0;

        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.3; // gravity
            p.vx *= 0.99;
            p.rotation += p.rotationSpeed;
            p.opacity -= 0.009;

            if (p.opacity > 0 && p.y < canvas.height) {
                activeParticles++;
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate((p.rotation * Math.PI) / 180);
                ctx.globalAlpha = Math.max(p.opacity, 0);
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
                ctx.restore();
            }
        });

        if (activeParticles > 0) {
            animationFrame = requestAnimationFrame(update);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            cancelAnimationFrame(animationFrame);
        }
    }

    update();
}

// 5. TOAST NOTIFICATIONS
function showToast(message, type = "info") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    const icon = type === "success" ? "✅" : type === "danger" ? "⚠️" : "ℹ️";
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateX(40px)";
        toast.style.transition = "all 0.3s ease";
        setTimeout(() => toast.remove(), 300);
    }, 3200);
}

// 6. GLOBAL STATE
const state = {
    user: STORAGE.getUser(),
    questions: STORAGE.getQuestions(),
    hubConfig: {
        category: "all",
        difficulty: "all",
        count: 5,
        timer: 15
    },
    activeQuiz: {
        questions: [],
        currentIndex: 0,
        userAnswers: [], // { question, selectedIndex, correctIndex, isCorrect, timeSpent }
        score: 0,
        startTime: 0,
        timerInterval: null,
        timeLeft: 15
    },
    teacherAuthenticated: false,
    leaderboardCategory: "all"
};

// 7. VIEW MANAGEMENT
function switchView(viewName) {
    sound.playClick();
    const views = ["hub", "quiz", "results", "leaderboard", "history", "teacher"];
    views.forEach(v => {
        const el = document.getElementById(`view-${v}`);
        if (el) el.classList.remove("active");
    });

    const targetView = document.getElementById(`view-${viewName}`);
    if (targetView) targetView.classList.add("active");

    // Update navbar active state
    document.querySelectorAll(".nav-tab-btn").forEach(btn => {
        if (btn.getAttribute("data-view") === viewName) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // Render view data if needed
    if (viewName === "hub") renderHub();
    if (viewName === "leaderboard") renderLeaderboard();
    if (viewName === "history") renderHistory();
    if (viewName === "teacher") renderTeacherPortal();
}

// 8. HUB VIEW CONTROLLER
function renderHub() {
    // Update welcome header
    const titleEl = document.getElementById("hub-welcome-title");
    if (titleEl) {
        titleEl.innerText = `Welcome back, ${state.user.name}! 👋`;
    }

    // Update header badges
    document.getElementById("header-user-name").innerText = state.user.name;
    document.getElementById("header-user-role").innerText = state.user.role === "teacher" ? "Teacher" : "Student";
    document.getElementById("header-user-avatar").innerText = state.user.avatar || "👨‍💻";

    // Calculate hub statistics
    const history = STORAGE.getHistory();
    const totalQuizzes = history.length;
    let avgAccuracy = 0;
    if (totalQuizzes > 0) {
        const sum = history.reduce((acc, h) => acc + h.accuracy, 0);
        avgAccuracy = Math.round(sum / totalQuizzes);
    }

    document.getElementById("hub-stat-quizzes").innerText = totalQuizzes;
    document.getElementById("hub-stat-score").innerText = `${avgAccuracy}%`;
    document.getElementById("hub-stat-streak").innerText = `🔥 ${Math.min(totalQuizzes, 7)}`;

    // Question counts per category
    const allQs = state.questions;
    const countAll = allQs.length;
    const countHtml = allQs.filter(q => q.category === "html").length;
    const countCss = allQs.filter(q => q.category === "css").length;
    const countJs = allQs.filter(q => q.category === "javascript").length;

    document.getElementById("count-all").innerText = `${countAll} Qs`;
    document.getElementById("count-html").innerText = `${countHtml} Qs`;
    document.getElementById("count-css").innerText = `${countCss} Qs`;
    document.getElementById("count-js").innerText = `${countJs} Qs`;
}

// Hub Event Listeners
function setupHubEvents() {
    // Category selection cards
    document.querySelectorAll(".cat-card").forEach(card => {
        card.addEventListener("click", () => {
            sound.playClick();
            document.querySelectorAll(".cat-card").forEach(c => c.classList.remove("active"));
            card.classList.add("active");
            state.hubConfig.category = card.getAttribute("data-category");
        });
    });

    // Difficulty selection buttons
    document.querySelectorAll(".diff-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            sound.playClick();
            document.querySelectorAll(".diff-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            state.hubConfig.difficulty = btn.getAttribute("data-diff");
        });
    });

    // Question Count Group
    document.querySelectorAll("#question-count-group .pill-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            sound.playClick();
            document.querySelectorAll("#question-count-group .pill-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const val = btn.getAttribute("data-count");
            state.hubConfig.count = val === "all" ? "all" : parseInt(val, 10);
        });
    });

    // Timer Group
    document.querySelectorAll("#timer-mode-group .pill-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            sound.playClick();
            document.querySelectorAll("#timer-mode-group .pill-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            state.hubConfig.timer = parseInt(btn.getAttribute("data-timer"), 10);
        });
    });

    // Start Quiz Button
    const startBtn = document.getElementById("start-quiz-btn");
    if (startBtn) {
        startBtn.addEventListener("click", () => {
            startQuiz();
        });
    }
}

// 9. QUIZ ENGINE
function startQuiz() {
    sound.playClick();
    const { category, difficulty, count, timer } = state.hubConfig;

    // Filter questions
    let pool = state.questions.filter(q => {
        const matchCat = category === "all" || q.category === category;
        const matchDiff = difficulty === "all" || q.difficulty === difficulty;
        return matchCat && matchDiff;
    });

    if (pool.length === 0) {
        showToast("No questions match this filter combination! Please choose another.", "danger");
        return;
    }

    // Shuffle pool using Fisher-Yates
    const shuffled = [...pool];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    const takeCount = count === "all" ? shuffled.length : Math.min(count, shuffled.length);
    const selectedQuestions = shuffled.slice(0, takeCount);

    state.activeQuiz = {
        questions: selectedQuestions,
        currentIndex: 0,
        userAnswers: [],
        score: 0,
        startTime: Date.now(),
        timerInterval: null,
        timeLeft: timer
    };

    switchView("quiz");
    loadQuizQuestion();
}

function loadQuizQuestion() {
    const quiz = state.activeQuiz;
    const currentQ = quiz.questions[quiz.currentIndex];
    if (!currentQ) return;

    // Reset Timer
    clearInterval(quiz.timerInterval);
    const timerPill = document.getElementById("quiz-timer-pill");
    const timerText = document.getElementById("quiz-timer-text");

    if (state.hubConfig.timer > 0) {
        quiz.timeLeft = state.hubConfig.timer;
        timerPill.style.display = "flex";
        timerPill.classList.remove("warning");
        timerText.innerText = `${quiz.timeLeft}s`;

        quiz.timerInterval = setInterval(() => {
            quiz.timeLeft--;
            timerText.innerText = `${quiz.timeLeft}s`;
            if (quiz.timeLeft <= 5) {
                timerPill.classList.add("warning");
            }
            if (quiz.timeLeft <= 0) {
                clearInterval(quiz.timerInterval);
                handleQuestionTimeout();
            }
        }, 1000);
    } else {
        timerPill.style.display = "none";
    }

    // Update Meta Badges
    const catBadge = document.getElementById("quiz-cat-badge");
    catBadge.innerText = currentQ.category.toUpperCase();
    catBadge.className = `badge badge-${currentQ.category}`;

    const diffBadge = document.getElementById("quiz-diff-badge");
    diffBadge.innerText = currentQ.difficulty.toUpperCase();
    diffBadge.className = `badge badge-${currentQ.difficulty}`;

    // Update Counter and Progress Bar
    const total = quiz.questions.length;
    const currNum = quiz.currentIndex + 1;
    document.getElementById("quiz-q-counter").innerText = `Question ${currNum} of ${total}`;
    const progressPercent = ((currNum - 1) / total) * 100;
    document.getElementById("quiz-progress-fill").style.width = `${progressPercent}%`;

    // Question Title
    document.getElementById("quiz-q-title").innerText = currentQ.question;

    // Hide Explanation and Next Button
    const expBox = document.getElementById("quiz-explanation-box");
    expBox.classList.remove("show");
    const nextBtn = document.getElementById("quiz-next-btn");
    nextBtn.style.display = "none";
    nextBtn.innerText = currNum === total ? "Finish & View Results 🏆" : "Next Question ➔";

    // Build Options
    const container = document.getElementById("quiz-options-container");
    container.innerHTML = "";
    const optKeys = ["A", "B", "C", "D"];

    currentQ.options.forEach((optText, idx) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerHTML = `
      <span class="opt-key">${optKeys[idx]}</span>
      <span class="opt-text">${optText}</span>
      <span class="opt-icon"></span>
    `;

        btn.addEventListener("click", () => {
            handleAnswerSelection(idx);
        });

        container.appendChild(btn);
    });
}

function handleAnswerSelection(selectedIndex) {
    const quiz = state.activeQuiz;
    const currentQ = quiz.questions[quiz.currentIndex];

    // Stop timer
    clearInterval(quiz.timerInterval);

    const container = document.getElementById("quiz-options-container");
    const optionButtons = container.querySelectorAll(".option-btn");

    // Disable all options
    optionButtons.forEach(btn => btn.disabled = true);

    const isCorrect = selectedIndex === currentQ.correct;

    if (isCorrect) {
        sound.playCorrect();
        quiz.score++;
        if (optionButtons[selectedIndex]) {
            optionButtons[selectedIndex].classList.add("correct");
            optionButtons[selectedIndex].querySelector(".opt-icon").innerText = "✓";
        }
    } else {
        sound.playWrong();
        if (selectedIndex !== null && optionButtons[selectedIndex]) {
            optionButtons[selectedIndex].classList.add("wrong");
            optionButtons[selectedIndex].querySelector(".opt-icon").innerText = "✗";
        }
        // Highlight correct answer
        if (optionButtons[currentQ.correct]) {
            optionButtons[currentQ.correct].classList.add("correct");
            optionButtons[currentQ.correct].querySelector(".opt-icon").innerText = "✓";
        }
    }

    // Record Answer Details
    quiz.userAnswers.push({
        question: currentQ,
        selectedIndex,
        correctIndex: currentQ.correct,
        isCorrect,
        timeSpent: state.hubConfig.timer > 0 ? (state.hubConfig.timer - quiz.timeLeft) : 0
    });

    // Reveal Explanation
    const expBox = document.getElementById("quiz-explanation-box");
    const expText = document.getElementById("quiz-explanation-text");
    expText.innerText = currentQ.explanation || "Great effort! Review the core concept above.";
    expBox.classList.add("show");

    // Show Next Button
    const nextBtn = document.getElementById("quiz-next-btn");
    nextBtn.style.display = "inline-flex";
}

function handleQuestionTimeout() {
    showToast("Time's up for this question!", "danger");
    handleAnswerSelection(null);
}

function advanceQuizQuestion() {
    sound.playClick();
    const quiz = state.activeQuiz;
    quiz.currentIndex++;
    if (quiz.currentIndex < quiz.questions.length) {
        loadQuizQuestion();
    } else {
        finishQuiz();
    }
}

// 10. RESULTS CONTROLLER
function finishQuiz() {
    clearInterval(state.activeQuiz.timerInterval);
    const quiz = state.activeQuiz;
    const total = quiz.questions.length;
    const score = quiz.score;
    const accuracy = Math.round((score / total) * 100);
    const timeTaken = Math.max(1, Math.round((Date.now() - quiz.startTime) / 1000));
    const avgSpeed = (timeTaken / total).toFixed(1);

    // Victory Sound & Confetti if good score
    if (accuracy >= 60) {
        sound.playVictory();
        launchConfetti();
    } else {
        sound.playClick();
    }

    switchView("results");

    // Animate Circular Progress Bar
    const circleBar = document.getElementById("score-circle-bar");
    const circumference = 2 * Math.PI * 70; // 440
    const offset = circumference - (circumference * accuracy) / 100;
    if (circleBar) {
        circleBar.style.strokeDashoffset = offset;
    }

    document.getElementById("res-score-percent").innerText = `${accuracy}%`;
    document.getElementById("res-score-fraction").innerText = `${score} of ${total} correct`;

    // Title & description feedback
    const titleEl = document.getElementById("res-title");
    const descEl = document.getElementById("res-desc");

    if (accuracy === 100) {
        titleEl.innerText = "Master Level! Flawless! 🏆";
        descEl.innerText = "You answered every single question with pinpoint accuracy!";
    } else if (accuracy >= 80) {
        titleEl.innerText = "Outstanding Performance! 🌟";
        descEl.innerText = "Great command of web technologies! Keep up the momentum.";
    } else if (accuracy >= 50) {
        titleEl.innerText = "Good Job! Solid Foundation 👍";
        descEl.innerText = "You're making great progress. Review the questions below to level up.";
    } else {
        titleEl.innerText = "Keep Practicing! 💡";
        descEl.innerText = "Every master was once a beginner. Check the explanations and try again!";
    }

    // Stat metrics
    document.getElementById("res-stat-correct").innerText = score;
    document.getElementById("res-stat-wrong").innerText = total - score;
    document.getElementById("res-stat-time").innerText = `${timeTaken}s`;
    document.getElementById("res-stat-speed").innerText = `${avgSpeed}s`;

    // Render detailed question review
    const reviewList = document.getElementById("res-review-list");
    reviewList.innerHTML = "";
    const optKeys = ["A", "B", "C", "D"];

    quiz.userAnswers.forEach((ans, i) => {
        const item = document.createElement("div");
        item.className = `review-item ${ans.isCorrect ? "is-correct" : "is-wrong"}`;

        const userAnsText = ans.selectedIndex !== null
            ? `${optKeys[ans.selectedIndex]}. ${ans.question.options[ans.selectedIndex]}`
            : "Timed out / Not answered";

        const correctAnsText = `${optKeys[ans.correctIndex]}. ${ans.question.options[ans.correctIndex]}`;

        item.innerHTML = `
      <div class="review-q-header">
        <div class="review-q-text">
          <span>${i + 1}. ${ans.question.question}</span>
        </div>
        <span class="badge ${ans.isCorrect ? "badge-easy" : "badge-hard"}">
          ${ans.isCorrect ? "CORRECT (+1)" : "INCORRECT (0)"}
        </span>
      </div>
      <div class="review-answers">
        <div class="review-user-ans">Your answer: <strong>${userAnsText}</strong></div>
        ${!ans.isCorrect ? `<div class="review-correct-ans">Correct answer: ${correctAnsText}</div>` : ""}
      </div>
      <div style="font-size: 12px; color: var(--text-muted); margin-top: 6px;">
        💡 <em>${ans.question.explanation}</em>
      </div>
    `;
        reviewList.appendChild(item);
    });

    // Save Attempt to History
    const historyEntry = {
        id: "hist-" + Date.now(),
        date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }),
        category: state.hubConfig.category,
        difficulty: state.hubConfig.difficulty,
        score,
        total,
        accuracy,
        duration: `${timeTaken}s`
    };
    const history = STORAGE.getHistory();
    history.unshift(historyEntry);
    STORAGE.saveHistory(history.slice(0, 50)); // keep last 50

    // Post to Leaderboard
    const lbEntry = {
        id: "lb-" + Date.now(),
        name: state.user.name,
        avatar: state.user.avatar,
        category: state.hubConfig.category,
        difficulty: state.hubConfig.difficulty,
        score,
        total,
        percent: accuracy,
        date: new Date().toISOString().split("T")[0]
    };
    const leaderboard = STORAGE.getLeaderboard();
    leaderboard.push(lbEntry);
    // Sort descending by percentage, then by total score
    leaderboard.sort((a, b) => b.percent - a.percent || b.score - a.score);
    STORAGE.saveLeaderboard(leaderboard.slice(0, 30));
}

// 11. LEADERBOARD VIEW CONTROLLER
function renderLeaderboard() {
    const currentCat = state.leaderboardCategory;
    const allLb = STORAGE.getLeaderboard();

    // Filter by category
    const filtered = allLb.filter(item => {
        if (currentCat === "all") return true;
        return item.category === currentCat;
    });

    // Render Podium for Top 3
    const podiumEl = document.getElementById("leaderboard-podium");
    podiumEl.innerHTML = "";

    const top3 = filtered.slice(0, 3);
    if (top3.length > 0) {
        top3.forEach((user, idx) => {
            const rank = idx + 1;
            const slot = document.createElement("div");
            slot.className = `podium-slot rank-${rank}`;
            slot.innerHTML = `
        <div class="podium-avatar">${user.avatar || "👤"}</div>
        <div class="podium-name">${user.name}</div>
        <div class="podium-score">${user.percent}% (${user.score}/${user.total})</div>
        <div class="podium-block">#${rank}</div>
      `;
            podiumEl.appendChild(slot);
        });
    }

    // Render Table
    const tbody = document.getElementById("leaderboard-tbody");
    tbody.innerHTML = "";

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 30px;">No ranking entries found for this category yet!</td></tr>`;
        return;
    }

    filtered.forEach((entry, idx) => {
        const rank = idx + 1;
        let rankPillClass = "";
        if (rank === 1) rankPillClass = "gold";
        else if (rank === 2) rankPillClass = "silver";
        else if (rank === 3) rankPillClass = "bronze";

        const tr = document.createElement("tr");
        tr.innerHTML = `
      <td><span class="rank-pill ${rankPillClass}">${rank}</span></td>
      <td>
        <div style="display: flex; align-items: center; gap: 8px; font-weight: 700;">
          <span>${entry.avatar || "👤"}</span>
          <span>${entry.name}</span>
        </div>
      </td>
      <td><span class="badge badge-${entry.category || 'all'}">${(entry.category || 'all').toUpperCase()}</span></td>
      <td><span class="badge badge-${entry.difficulty || 'all'}">${(entry.difficulty || 'all').toUpperCase()}</span></td>
      <td style="font-weight: 700;">${entry.score} / ${entry.total}</td>
      <td style="font-weight: 800; color: ${entry.percent >= 80 ? '#34d399' : '#fbbf24'};">${entry.percent}%</td>
      <td style="color: var(--text-muted); font-size: 13px;">${entry.date || "Recent"}</td>
    `;
        tbody.appendChild(tr);
    });
}

// 12. HISTORY VIEW CONTROLLER
function renderHistory() {
    const history = STORAGE.getHistory();
    const tbody = document.getElementById("history-tbody");
    const emptyBox = document.getElementById("history-empty");

    const totalAttempts = history.length;
    let avgAccuracy = 0;
    let bestScore = 0;

    if (totalAttempts > 0) {
        const sum = history.reduce((acc, h) => acc + h.accuracy, 0);
        avgAccuracy = Math.round(sum / totalAttempts);
        bestScore = Math.max(...history.map(h => h.accuracy));
    }

    document.getElementById("h-total-attempts").innerText = totalAttempts;
    document.getElementById("h-avg-accuracy").innerText = `${avgAccuracy}%`;
    document.getElementById("h-best-score").innerText = `${bestScore}%`;

    tbody.innerHTML = "";
    if (totalAttempts === 0) {
        emptyBox.style.display = "block";
        return;
    }
    emptyBox.style.display = "none";

    history.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
      <td style="font-size: 13px; color: var(--text-secondary);">${item.date}</td>
      <td><span class="badge badge-${item.category}">${item.category.toUpperCase()}</span></td>
      <td><span class="badge badge-${item.difficulty}">${item.difficulty.toUpperCase()}</span></td>
      <td style="font-weight: 700;">${item.score} / ${item.total}</td>
      <td style="font-weight: 800; color: ${item.accuracy >= 70 ? '#34d399' : '#f87171'};">${item.accuracy}%</td>
      <td style="color: var(--text-muted); font-size: 13px;">${item.duration}</td>
    `;
        tbody.appendChild(tr);
    });
}

// 13. TEACHER PORTAL CONTROLLER
function renderTeacherPortal() {
    const isTeacher = state.user.role === "teacher" || state.teacherAuthenticated;
    const lockedCard = document.getElementById("teacher-locked-card");
    const unlockedContent = document.getElementById("teacher-unlocked-content");

    if (!isTeacher) {
        lockedCard.style.display = "block";
        unlockedContent.style.display = "none";
        return;
    }

    lockedCard.style.display = "none";
    unlockedContent.style.display = "block";

    // Update statistics
    const total = state.questions.length;
    const customCount = state.questions.filter(q => q.isCustom).length;
    document.getElementById("teacher-total-qs").innerText = total;
    document.getElementById("teacher-custom-qs").innerText = customCount;
    document.getElementById("bank-count-indicator").innerText = total;

    renderTeacherQuestionList();
}

function renderTeacherQuestionList() {
    const search = (document.getElementById("bank-search-input").value || "").toLowerCase().trim();
    const cat = document.getElementById("bank-filter-cat").value;
    const diff = document.getElementById("bank-filter-diff").value;

    const filtered = state.questions.filter(q => {
        const matchSearch = q.question.toLowerCase().includes(search);
        const matchCat = cat === "all" || q.category === cat;
        const matchDiff = diff === "all" || q.difficulty === diff;
        return matchSearch && matchCat && matchDiff;
    });

    const listContainer = document.getElementById("bank-items-list");
    listContainer.innerHTML = "";

    if (filtered.length === 0) {
        listContainer.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 30px;">No questions found matching your filter criteria.</div>`;
        return;
    }

    filtered.forEach(q => {
        const card = document.createElement("div");
        card.className = "bank-item-card";

        let optionsHtml = "";
        q.options.forEach((opt, idx) => {
            const isCorr = idx === q.correct;
            optionsHtml += `
        <div class="bank-item-opt ${isCorr ? "is-correct" : ""}">
          ${isCorr ? "✓ " : ""}${String.fromCharCode(65 + idx)}. ${opt}
        </div>
      `;
        });

        card.innerHTML = `
      <div class="bank-item-top">
        <div class="bank-item-title">${q.question}</div>
        <button class="btn btn-danger btn-sm" title="Delete Question" data-qid="${q.id}">Delete</button>
      </div>
      <div style="display: flex; gap: 8px; margin-bottom: 8px;">
        <span class="badge badge-${q.category}">${q.category.toUpperCase()}</span>
        <span class="badge badge-${q.difficulty}">${q.difficulty.toUpperCase()}</span>
        ${q.isCustom ? `<span class="badge badge-all">CUSTOM</span>` : ""}
      </div>
      <div class="bank-item-options">
        ${optionsHtml}
      </div>
      <div style="font-size: 12px; color: var(--text-muted); margin-top: 6px;">
        💡 <em>${q.explanation || "No explanation provided."}</em>
      </div>
    `;

        // Delete handler
        card.querySelector("button").addEventListener("click", () => {
            deleteQuestionFromBank(q.id);
        });

        listContainer.appendChild(card);
    });
}

function handleAddQuestionSubmit(e) {
    e.preventDefault();
    sound.playClick();

    const prompt = document.getElementById("q-input-text").value.trim();
    const category = document.getElementById("q-input-category").value;
    const difficulty = document.getElementById("q-input-diff").value;

    const opt0 = document.getElementById("q-opt-0").value.trim();
    const opt1 = document.getElementById("q-opt-1").value.trim();
    const opt2 = document.getElementById("q-opt-2").value.trim();
    const opt3 = document.getElementById("q-opt-3").value.trim();

    const correctRadio = document.querySelector('input[name="correctOption"]:checked');
    const correct = correctRadio ? parseInt(correctRadio.value, 10) : 0;
    const explanation = document.getElementById("q-input-explanation").value.trim();

    if (!prompt || !opt0 || !opt1 || !opt2 || !opt3) {
        showToast("Please fill in the question and all 4 options.", "danger");
        return;
    }

    const newQuestion = {
        id: "q-custom-" + Date.now(),
        category,
        difficulty,
        question: prompt,
        options: [opt0, opt1, opt2, opt3],
        correct,
        explanation: explanation || "Created by instructor.",
        isCustom: true
    };

    state.questions.unshift(newQuestion);
    STORAGE.saveQuestions(state.questions);

    // Reset form
    document.getElementById("add-question-form").reset();
    showToast("Question successfully added to question bank!", "success");

    // Re-render
    renderTeacherPortal();
    renderHub();
}

function deleteQuestionFromBank(id) {
    if (!confirm("Are you sure you want to delete this question?")) return;
    sound.playClick();
    state.questions = state.questions.filter(q => q.id !== id);
    STORAGE.saveQuestions(state.questions);
    showToast("Question removed from bank.", "info");
    renderTeacherPortal();
    renderHub();
}

function resetDefaultQuestions() {
    if (!confirm("Reset question bank to initial default questions? Any custom additions will be cleared.")) return;
    sound.playClick();
    state.questions = [...DEFAULT_QUESTIONS];
    STORAGE.saveQuestions(state.questions);
    showToast("Question bank restored to default set.", "success");
    renderTeacherPortal();
    renderHub();
}

// 14. AUTH & ROLE MODAL CONTROLLER
function openAuthModal() {
    sound.playClick();
    const modal = document.getElementById("auth-modal");
    modal.classList.add("active");
    document.getElementById("student-name-input").value = state.user.name;

    // Set active role tab
    if (state.user.role === "teacher") {
        switchModalRole("teacher");
    } else {
        switchModalRole("student");
    }
}

function closeAuthModal() {
    const modal = document.getElementById("auth-modal");
    modal.classList.remove("active");
}

function switchModalRole(role) {
    sound.playClick();
    const tabStudent = document.getElementById("modal-tab-student");
    const tabTeacher = document.getElementById("modal-tab-teacher");
    const studentForm = document.getElementById("modal-student-form");
    const teacherForm = document.getElementById("modal-teacher-form");

    if (role === "student") {
        tabStudent.classList.add("active");
        tabTeacher.classList.remove("active");
        studentForm.style.display = "block";
        teacherForm.style.display = "none";
    } else {
        tabTeacher.classList.add("active");
        tabStudent.classList.remove("active");
        studentForm.style.display = "none";
        teacherForm.style.display = "block";
    }
}

// 15. INITIALIZATION & GLOBAL EVENT BINDINGS
document.addEventListener("DOMContentLoaded", () => {
    // Navigation tabs
    document.querySelectorAll(".nav-tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const view = btn.getAttribute("data-view");
            switchView(view);
        });
    });

    // Brand Logo clicks return to Hub
    document.getElementById("brand-logo").addEventListener("click", () => {
        switchView("hub");
    });

    // Sound toggle button
    const soundBtn = document.getElementById("sound-toggle-btn");
    const soundIcon = document.getElementById("sound-icon");
    soundIcon.innerText = sound.enabled ? "🔊" : "🔇";

    soundBtn.addEventListener("click", () => {
        sound.enabled = !sound.enabled;
        STORAGE.setSoundEnabled(sound.enabled);
        soundIcon.innerText = sound.enabled ? "🔊" : "🔇";
        showToast(sound.enabled ? "Sound effects enabled" : "Sound effects muted", "info");
        if (sound.enabled) sound.playClick();
    });

    // User profile badge click opens Auth Modal
    document.getElementById("user-profile-badge").addEventListener("click", openAuthModal);
    document.getElementById("modal-close-btn").addEventListener("click", closeAuthModal);

    // Close modal when clicking outside
    document.getElementById("auth-modal").addEventListener("click", (e) => {
        if (e.target.id === "auth-modal") closeAuthModal();
    });

    // Modal Role Tabs
    document.getElementById("modal-tab-student").addEventListener("click", () => switchModalRole("student"));
    document.getElementById("modal-tab-teacher").addEventListener("click", () => switchModalRole("teacher"));

    // Avatar Selection in Modal
    document.querySelectorAll(".avatar-choice").forEach(btn => {
        btn.addEventListener("click", () => {
            sound.playClick();
            document.querySelectorAll(".avatar-choice").forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");
        });
    });

    // Student Login Submit
    document.getElementById("student-login-submit").addEventListener("click", () => {
        const nameInput = document.getElementById("student-name-input").value.trim();
        const selAvatar = document.querySelector(".avatar-choice.selected");
        const avatar = selAvatar ? selAvatar.getAttribute("data-avatar") : "👨‍💻";

        state.user = {
            role: "student",
            name: nameInput || "Alex Dev",
            avatar
        };
        STORAGE.saveUser(state.user);
        state.teacherAuthenticated = false;
        closeAuthModal();
        renderHub();
        showToast(`Welcome, ${state.user.name}! Ready to test your skills?`, "success");
        sound.playClick();
    });

    // Teacher Login Submit
    document.getElementById("teacher-login-submit").addEventListener("click", () => {
        const pin = document.getElementById("modal-teacher-pin").value.trim();
        const teacherName = document.getElementById("teacher-name-input").value.trim() || "Prof. Alan";

        if (pin === "teacher123" || pin === "") {
            state.user = {
                role: "teacher",
                name: teacherName,
                avatar: "👩‍🏫"
            };
            STORAGE.saveUser(state.user);
            state.teacherAuthenticated = true;
            closeAuthModal();
            renderHub();
            showToast(`Welcome Teacher ${teacherName}! You have full question bank access.`, "success");
            sound.playVictory();
            switchView("teacher");
        } else {
            showToast("Invalid passcode! Default is 'teacher123'", "danger");
            sound.playWrong();
        }
    });

    // Teacher Unlock Gate in view
    document.getElementById("teacher-unlock-btn").addEventListener("click", () => {
        const pin = document.getElementById("teacher-pin-input").value.trim();
        if (pin === "teacher123" || pin === "") {
            state.teacherAuthenticated = true;
            renderTeacherPortal();
            showToast("Teacher portal unlocked!", "success");
            sound.playVictory();
        } else {
            showToast("Incorrect passcode! Try: teacher123", "danger");
            sound.playWrong();
        }
    });

    // Setup Hub & Quiz Events
    setupHubEvents();

    // Quiz Next Button
    document.getElementById("quiz-next-btn").addEventListener("click", advanceQuizQuestion);

    // Quiz Quit Button
    document.getElementById("quiz-quit-btn").addEventListener("click", () => {
        if (confirm("Are you sure you want to quit this quiz? Your progress will not be saved.")) {
            clearInterval(state.activeQuiz.timerInterval);
            sound.playClick();
            switchView("hub");
        }
    });

    // Result Screen Actions
    document.getElementById("res-retry-btn").addEventListener("click", () => switchView("hub"));
    document.getElementById("res-leaderboard-btn").addEventListener("click", () => switchView("leaderboard"));
    document.getElementById("res-history-btn").addEventListener("click", () => switchView("history"));

    // Leaderboard Category Filter Pills
    document.querySelectorAll("#leaderboard-filters .filter-pill").forEach(pill => {
        pill.addEventListener("click", () => {
            sound.playClick();
            document.querySelectorAll("#leaderboard-filters .filter-pill").forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            state.leaderboardCategory = pill.getAttribute("data-cat");
            renderLeaderboard();
        });
    });

    // Clear History Button
    document.getElementById("clear-history-btn").addEventListener("click", () => {
        if (confirm("Clear all your previous quiz attempt records? This action cannot be undone.")) {
            sound.playClick();
            STORAGE.saveHistory([]);
            renderHistory();
            renderHub();
            showToast("Quiz history cleared.", "info");
        }
    });

    // Teacher Question Bank Controls
    document.getElementById("add-question-form").addEventListener("submit", handleAddQuestionSubmit);
    document.getElementById("reset-bank-btn").addEventListener("click", resetDefaultQuestions);

    document.getElementById("bank-search-input").addEventListener("input", renderTeacherQuestionList);
    document.getElementById("bank-filter-cat").addEventListener("change", renderTeacherQuestionList);
    document.getElementById("bank-filter-diff").addEventListener("change", renderTeacherQuestionList);

    // Keyboard Shortcuts (1-4 for answers during quiz, Esc to close modal)
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeAuthModal();
        }

        const quizView = document.getElementById("view-quiz");
        if (quizView && quizView.classList.contains("active")) {
            const nextBtn = document.getElementById("quiz-next-btn");
            if (nextBtn.style.display !== "none" && e.key === "Enter") {
                advanceQuizQuestion();
                return;
            }

            const key = e.key.toUpperCase();
            let index = -1;
            if (key === "1" || key === "A") index = 0;
            else if (key === "2" || key === "B") index = 1;
            else if (key === "3" || key === "C") index = 2;
            else if (key === "4" || key === "D") index = 3;

            if (index !== -1) {
                const optionBtns = document.querySelectorAll("#quiz-options-container .option-btn");
                if (optionBtns[index] && !optionBtns[index].disabled) {
                    handleAnswerSelection(index);
                }
            }
        }
    });

    // Initial render
    renderHub();
});