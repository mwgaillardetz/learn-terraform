// Theme Management
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);

    // Update theme icon
    const themeIcon = document.querySelector('.theme-icon');
    themeIcon.textContent = newTheme === 'light' ? '☀️' : '🌙';

    // Save theme preference
    localStorage.setItem('theme', newTheme);
}

// Initialize theme from localStorage or default to dark
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Update theme icon
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = savedTheme === 'light' ? '☀️' : '🌙';
    }
}

// Initialize theme when page loads
document.addEventListener('DOMContentLoaded', initializeTheme);

// Enhanced Terraform Associate Practice Platform
class TerraformExamPlatform {
    constructor() {
        this.currentScreen = 'welcome-screen';
        this.currentObjective = null;
        this.examType = null;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.examQuestions = [];
        this.reviewIndex = 0;
        this.timer = null;
        this.timeRemaining = 0;
        this.recentQuestions = this.loadRecentQuestions();

        this.init();
    }

    init() {
        this.populateStudyGuide();
        this.populateCategoryExams();
    }

    // Navigation methods
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
        this.currentScreen = screenId;
    }

    goHome() {
        this.showScreen('welcome-screen');
        this.resetExam();
    }

    showStudyGuide() {
        this.showScreen('study-guide-screen');
    }

    showExamOptions() {
        this.showScreen('exam-options-screen');
    }

    showCategoryExams() {
        this.showScreen('category-exams-screen');
    }

    // Study Guide methods
    populateStudyGuide() {
        const grid = document.getElementById('objectives-grid');
        if (!grid) {
            console.error('objectives-grid element not found');
            return;
        }
        grid.innerHTML = '';

        // Convert studyGuide object to array and iterate
        Object.keys(studyGuide).forEach(objectiveId => {
            const objective = studyGuide[objectiveId];
            const card = document.createElement('div');
            card.className = 'objective-card';
            card.onclick = () => this.showObjectiveDetail(parseInt(objectiveId));

            card.innerHTML = `
                <div class="objective-number">Objective ${objectiveId}</div>
                <h3>${objective.title}</h3>
                <div class="topic-count">${objective.content.length} Topics</div>
            `;

            grid.appendChild(card);
        });
    }

    showObjectiveDetail(objectiveId) {
        const objective = studyGuide[objectiveId];
        if (!objective) {
            console.error('Objective not found:', objectiveId);
            return;
        }

        this.currentObjective = objectiveId;

        document.getElementById('objective-title').innerHTML = `
            <span class="objective-number">Objective ${objectiveId}</span>
            <h1>${objective.title}</h1>
        `;

        const content = document.getElementById('objective-content');
        content.innerHTML = '';

        objective.content.forEach(item => {
            const section = document.createElement('div');
            section.className = 'content-section';
            section.innerHTML = `
                <h3>${item.topic}</h3>
                <p>${item.details}</p>
            `;
            content.appendChild(section);
        });

        this.showScreen('objective-detail-screen');
    }

    // Category Exams methods
    populateCategoryExams() {
        const grid = document.getElementById('category-grid');
        if (!grid) {
            console.error('category-grid element not found');
            return;
        }
        grid.innerHTML = '';

        Object.keys(studyGuide).forEach(objectiveId => {
            const objective = studyGuide[objectiveId];
            const questionsForObjective = examQuestions.filter(q => q.objective === parseInt(objectiveId));

            const card = document.createElement('div');
            card.className = 'category-card';
            card.onclick = () => this.startCategoryExam(parseInt(objectiveId));

            card.innerHTML = `
                <div class="category-number">Objective ${objectiveId}</div>
                <h3>${objective.title}</h3>
                <div class="category-stats">
                    <span>${questionsForObjective.length} Questions</span>
                    <span>Untimed Study Mode</span>
                </div>
            `;

            grid.appendChild(card);
        });
    }

    // Exam methods
    startFullExam() {
        this.examType = 'full';
        this.setupExam(this.getRandomQuestions(57)); // Match real exam question count
        this.timeRemaining = 60 * 60; // 60 minutes to match real exam
        this.startExam();
    }

    startCategoryExam(objectiveId) {
        this.examType = 'category';
        this.currentObjective = objectiveId;
        const questionsForObjective = examQuestions.filter(q => q.objective === objectiveId);
        const availableQuestions = this.filterRecentQuestions(questionsForObjective);
        const shuffledQuestions = this.shuffleArray([...availableQuestions]);
        this.trackRecentQuestions(shuffledQuestions);
        this.setupExam(shuffledQuestions);
        this.timeRemaining = 0;
        this.startExam();
    }

    startObjectiveExam() {
        this.startCategoryExam(this.currentObjective);
    }

    getRandomQuestions(count) {
        // For full exam, ensure balanced distribution across objectives
        if (this.examType === 'full') {
            return this.getBalancedRandomQuestions(count);
        }

        // For other cases, use pure randomization
        const shuffled = this.shuffleArray([...examQuestions]);
        return shuffled.slice(0, count);
    }

    getBalancedRandomQuestions(count) {
        const questionsByObjective = {};
        const questionsPerObjective = Math.floor(count / 9);
        const remainder = count % 9;

        examQuestions.forEach(question => {
            if (!questionsByObjective[question.objective]) {
                questionsByObjective[question.objective] = [];
            }
            questionsByObjective[question.objective].push(question);
        });

        const selectedQuestions = [];

        for (let objective = 1; objective <= 9; objective++) {
            const objectiveQuestions = questionsByObjective[objective] || [];
            const availableQuestions = this.filterRecentQuestions(objectiveQuestions);
            const shuffled = this.shuffleArray([...availableQuestions]);
            const numToTake = questionsPerObjective + (objective <= remainder ? 1 : 0);

            for (let i = 0; i < numToTake; i++) {
                if (shuffled.length > 0) {
                    selectedQuestions.push(shuffled[i % shuffled.length]);
                }
            }
        }

        const finalQuestions = this.shuffleArray(selectedQuestions);
        this.trackRecentQuestions(finalQuestions);
        return finalQuestions;
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    setupExam(questions) {
        this.examQuestions = questions;
        this.currentQuestionIndex = 0;
        this.userAnswers = new Array(questions.length).fill(null);
    }

    startExam() {
        this.showScreen('exam-screen');

        // Show/hide timer based on exam type
        const timerElement = document.getElementById('timer');
        if (this.timeRemaining > 0) {
            timerElement.style.display = 'inline-block';
            this.startTimer();
        } else {
            timerElement.style.display = 'none';
        }

        this.displayQuestion();
    }

    startTimer() {
        this.updateTimer();
        this.timer = setInterval(() => {
            this.timeRemaining--;
            this.updateTimer();

            if (this.timeRemaining <= 0) {
                this.finishExam();
            }
        }, 1000);
    }

    updateTimer() {
        if (this.timeRemaining > 0) {
            const minutes = Math.floor(this.timeRemaining / 60);
            const seconds = this.timeRemaining % 60;
            document.getElementById('timer').textContent =
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
    }

    displayQuestion() {
        const question = this.examQuestions[this.currentQuestionIndex];

        // Update progress
        document.getElementById('questionCounter').textContent =
            `Question ${this.currentQuestionIndex + 1} of ${this.examQuestions.length}`;

        const progressPercent = ((this.currentQuestionIndex + 1) / this.examQuestions.length) * 100;
        document.getElementById('progressFill').style.width = `${progressPercent}%`;

        // Update question content
        document.getElementById('questionText').textContent = question.question;
        document.getElementById('difficultyBadge').textContent = question.difficulty;
        document.getElementById('difficultyBadge').className = `difficulty-badge ${question.difficulty.toLowerCase()}`;
        document.getElementById('objectiveBadge').textContent = `Objective ${question.objective}`;

        // Show/hide code block
        const codeBlock = document.getElementById('codeBlock');
        if (question.code) {
            codeBlock.style.display = 'block';
            document.getElementById('codeContent').textContent = question.code;
        } else {
            codeBlock.style.display = 'none';
        }

        // Clear any existing explanation
        this.hideInstantExplanation();
        
        // Display options
        this.displayOptions(question);
    }

    displayOptions(question) {
        const container = document.getElementById('optionsContainer');
        container.innerHTML = '';

        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.onclick = () => this.selectOption(index);

            const isSelected = this.userAnswers[this.currentQuestionIndex] === index;
            if (isSelected) {
                optionDiv.classList.add('selected');
            }

            optionDiv.innerHTML = `
                <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                <div class="option-text">${option}</div>
            `;

            container.appendChild(optionDiv);
        });
    }

    selectOption(optionIndex) {
        this.userAnswers[this.currentQuestionIndex] = optionIndex;

        // For untimed exams, show instant feedback
        if (this.timeRemaining === 0) {
            const question = this.examQuestions[this.currentQuestionIndex];
            const isCorrect = optionIndex === question.correctAnswer;
            
            document.querySelectorAll('.option').forEach((option, index) => {
                option.classList.remove('selected', 'correct-feedback', 'incorrect-feedback');
                
                if (index === question.correctAnswer) {
                    option.classList.add('correct-feedback');
                } else if (index === optionIndex && !isCorrect) {
                    option.classList.add('incorrect-feedback');
                }
            });
            
            // Show explanation after a brief delay
            setTimeout(() => {
                this.showInstantExplanation(question, isCorrect);
            }, 500);
        } else {
            // Timed exam - just show selection
            document.querySelectorAll('.option').forEach((option, index) => {
                option.classList.toggle('selected', index === optionIndex);
            });
        }
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.examQuestions.length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion();
        } else {
            this.finishExam();
        }
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayQuestion();
        }
    }

    exitExam() {
        if (confirm('Are you sure you want to exit the exam? Your progress will be lost.')) {
            this.resetExam();
            this.goHome();
        }
    }

    finishExam() {
        clearInterval(this.timer);
        this.calculateResults();
        this.showResults();
    }

    calculateResults() {
        let correctAnswers = 0;
        const objectiveScores = {};

        // Initialize objective scores
        for (let i = 1; i <= 9; i++) {
            objectiveScores[i] = { correct: 0, total: 0 };
        }

        this.examQuestions.forEach((question, index) => {
            const userAnswer = this.userAnswers[index];
            const isCorrect = userAnswer === question.correctAnswer;

            if (isCorrect) {
                correctAnswers++;
            }

            // Track by objective
            objectiveScores[question.objective].total++;
            if (isCorrect) {
                objectiveScores[question.objective].correct++;
            }
        });

        this.results = {
            totalQuestions: this.examQuestions.length,
            correctAnswers,
            percentage: Math.round((correctAnswers / this.examQuestions.length) * 100),
            objectiveScores
        };
    }

    showResults() {
        this.showScreen('results-screen');

        // Display score
        document.getElementById('scorePercentage').textContent = `${this.results.percentage}%`;

        // Display performance stats
        const statsContainer = document.getElementById('performanceStats');
        statsContainer.innerHTML = `
            <div class="stat-item">
                <span class="stat-label">Correct Answers:</span>
                <span class="stat-value">${this.results.correctAnswers} / ${this.results.totalQuestions}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Passing Score:</span>
                <span class="stat-value">${this.results.percentage >= 70 ? '✅ PASS' : '❌ FAIL'}</span>
            </div>
        `;

        // Display objective breakdown
        this.displayObjectiveBreakdown();
    }

    displayObjectiveBreakdown() {
        const container = document.getElementById('objectiveBreakdown');
        container.innerHTML = '';

        Object.entries(this.results.objectiveScores).forEach(([objectiveId, scores]) => {
            if (scores.total === 0) return;

            const objective = studyGuide[objectiveId];
            if (!objective) return;

            const percentage = scores.total > 0 ? Math.round((scores.correct / scores.total) * 100) : 0;

            const objectiveDiv = document.createElement('div');
            objectiveDiv.className = 'objective-score';
            objectiveDiv.innerHTML = `
                <div class="objective-info">
                    <span class="objective-name">Objective ${objectiveId}: ${objective.title}</span>
                    <span class="objective-score-text">${scores.correct}/${scores.total} (${percentage}%)</span>
                </div>
                <div class="score-bar">
                    <div class="score-fill" style="width: ${percentage}%"></div>
                </div>
                <div class="recommendation">
                    ${percentage < 70 ? '📚 Review this objective' : '✅ Strong performance'}
                </div>
            `;

            container.appendChild(objectiveDiv);
        });
    }

    // Review methods
    reviewAnswers() {
        this.reviewIndex = 0;
        this.showScreen('review-screen');
        this.displayReviewQuestion();
    }

    displayReviewQuestion() {
        const question = this.examQuestions[this.reviewIndex];
        const userAnswer = this.userAnswers[this.reviewIndex];
        const isCorrect = userAnswer === question.correctAnswer;

        // Update navigation
        document.getElementById('reviewCounter').textContent =
            `Question ${this.reviewIndex + 1} of ${this.examQuestions.length}`;

        // Update question content
        document.getElementById('reviewQuestionText').textContent = question.question;
        document.getElementById('reviewDifficultyBadge').textContent = question.difficulty;
        document.getElementById('reviewDifficultyBadge').className = `difficulty-badge ${question.difficulty.toLowerCase()}`;
        document.getElementById('reviewObjectiveBadge').textContent = `Objective ${question.objective}`;

        // Update result badge
        const resultBadge = document.getElementById('resultBadge');
        resultBadge.textContent = isCorrect ? 'Correct' : 'Incorrect';
        resultBadge.className = `result-badge ${isCorrect ? 'correct' : 'incorrect'}`;

        // Show/hide code block
        const codeBlock = document.getElementById('reviewCodeBlock');
        if (question.code) {
            codeBlock.style.display = 'block';
            document.getElementById('reviewCodeContent').textContent = question.code;
        } else {
            codeBlock.style.display = 'none';
        }

        // Display answers
        document.getElementById('userAnswer').textContent =
            userAnswer !== null ? `${String.fromCharCode(65 + userAnswer)}. ${question.options[userAnswer]}` : 'Not answered';
        document.getElementById('correctAnswer').textContent =
            `${String.fromCharCode(65 + question.correctAnswer)}. ${question.options[question.correctAnswer]}`;

        // Display explanation
        document.getElementById('answerExplanation').textContent = question.explanation;

        // Update answer styling
        const userAnswerEl = document.getElementById('userAnswer');
        userAnswerEl.className = `answer-option ${isCorrect ? 'correct-answer' : 'incorrect-answer'}`;
    }

    nextReviewQuestion() {
        if (this.reviewIndex < this.examQuestions.length - 1) {
            this.reviewIndex++;
            this.displayReviewQuestion();
        }
    }

    previousReviewQuestion() {
        if (this.reviewIndex > 0) {
            this.reviewIndex--;
            this.displayReviewQuestion();
        }
    }

    showResults() {
        this.showScreen('results-screen');
    }

    startNewExam() {
        this.resetExam();
        this.showExamOptions();
    }

    resetExam() {
        clearInterval(this.timer);
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.examQuestions = [];
        this.reviewIndex = 0;
        this.timeRemaining = 0;
        this.results = null;
        this.hideInstantExplanation();
    }

    showInstantExplanation(question, isCorrect) {
        let explanationDiv = document.getElementById('instantExplanation');
        if (!explanationDiv) {
            explanationDiv = document.createElement('div');
            explanationDiv.id = 'instantExplanation';
            explanationDiv.className = 'instant-explanation';
            document.querySelector('.question-container').appendChild(explanationDiv);
        }
        
        explanationDiv.innerHTML = `
            <div class="feedback-header ${isCorrect ? 'correct' : 'incorrect'}">
                <span class="feedback-icon">${isCorrect ? '✅' : '❌'}</span>
                <span class="feedback-text">${isCorrect ? 'Correct!' : 'Incorrect'}</span>
            </div>
            <div class="explanation-text">
                <strong>Explanation:</strong> ${question.explanation}
            </div>
        `;
        
        explanationDiv.style.display = 'block';
    }

    hideInstantExplanation() {
        const explanationDiv = document.getElementById('instantExplanation');
        if (explanationDiv) {
            explanationDiv.style.display = 'none';
        }
    }

    loadRecentQuestions() {
        try {
            return JSON.parse(localStorage.getItem('terraform_recent_questions') || '[]');
        } catch {
            return [];
        }
    }

    saveRecentQuestions() {
        localStorage.setItem('terraform_recent_questions', JSON.stringify(this.recentQuestions));
    }

    trackRecentQuestions(questions) {
        const questionIds = questions.map(q => q.id);
        this.recentQuestions = [...questionIds, ...this.recentQuestions].slice(0, 30);
        this.saveRecentQuestions();
    }

    filterRecentQuestions(questions) {
        const filtered = questions.filter(q => !this.recentQuestions.includes(q.id));
        return filtered.length >= Math.min(10, questions.length * 0.5) ? filtered : questions;
    }
}

// Initialize the platform when the page loads
let platform;
document.addEventListener('DOMContentLoaded', () => {
    try {
        console.log('Initializing platform...');
        platform = new TerraformExamPlatform();
        console.log('Platform initialized successfully');
    } catch (error) {
        console.error('Failed to initialize platform:', error);
        // Show error message to user
        document.body.innerHTML = `
            <div style="padding: 20px; background: #ffebee; border: 1px solid #f44336; border-radius: 4px; margin: 20px;">
                <h2 style="color: #d32f2f;">Platform Initialization Error</h2>
                <p>Failed to initialize the Terraform Practice Platform:</p>
                <pre style="background: #fff; padding: 10px; overflow: auto;">${error.message}</pre>
                <p>Please refresh the page or check the browser console for more details.</p>
            </div>
        `;
    }
});

// Global functions for onclick handlers
function showStudyGuide() {
    try {
        if (!platform) throw new Error('Platform not initialized');
        platform.showStudyGuide();
    } catch (error) {
        console.error('Error in showStudyGuide:', error);
        alert('Error: ' + error.message);
    }
}

function showExamOptions() {
    try {
        if (!platform) throw new Error('Platform not initialized');
        platform.showExamOptions();
    } catch (error) {
        console.error('Error in showExamOptions:', error);
        alert('Error: ' + error.message);
    }
}

function showCategoryExams() {
    try {
        if (!platform) throw new Error('Platform not initialized');
        platform.showCategoryExams();
    } catch (error) {
        console.error('Error in showCategoryExams:', error);
        alert('Error: ' + error.message);
    }
}

function goHome() {
    try {
        if (!platform) throw new Error('Platform not initialized');
        platform.goHome();
    } catch (error) {
        console.error('Error in goHome:', error);
        alert('Error: ' + error.message);
    }
}

function startFullExam() {
    platform.startFullExam();
}

function startObjectiveExam() {
    platform.startObjectiveExam();
}

function nextQuestion() {
    platform.nextQuestion();
}

function previousQuestion() {
    platform.previousQuestion();
}

function exitExam() {
    platform.exitExam();
}

function reviewAnswers() {
    platform.reviewAnswers();
}

function nextReviewQuestion() {
    platform.nextReviewQuestion();
}

function previousReviewQuestion() {
    platform.previousReviewQuestion();
}

function showResults() {
    platform.showResults();
}

function startNewExam() {
    platform.startNewExam();
}
