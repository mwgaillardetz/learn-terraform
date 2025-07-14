// Terraform Associate Practice Exam Application
class TerraformExam {
    constructor() {
        this.questions = examQuestions;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.startTime = null;
        this.endTime = null;
        this.timerInterval = null;
        this.timeLimit = 60 * 60; // 60 minutes in seconds
        this.timeRemaining = this.timeLimit;

        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Start exam button
        document.getElementById('startExam').addEventListener('click', () => {
            this.startExam();
        });

        // Submit answer button
        document.getElementById('submitAnswer').addEventListener('click', () => {
            this.submitAnswer();
        });

        // Next question button
        document.getElementById('nextQuestion').addEventListener('click', () => {
            this.nextQuestion();
        });

        // Retake exam button
        document.getElementById('retakeExam').addEventListener('click', () => {
            this.resetExam();
        });

        // Review answers button
        document.getElementById('reviewAnswers').addEventListener('click', () => {
            this.reviewAnswers();
        });
    }

    startExam() {
        this.startTime = new Date();
        this.shuffleQuestions();
        this.showScreen('questionScreen');
        this.startTimer();
        this.displayQuestion();
    }

    shuffleQuestions() {
        // Shuffle questions for variety
        for (let i = this.questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
        }
    }

    startTimer() {
        this.timerInterval = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();

            if (this.timeRemaining <= 0) {
                this.endExam();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        document.getElementById('timer').textContent = display;

        // Change color when time is running low
        const timerElement = document.getElementById('timer');
        if (this.timeRemaining <= 300) { // 5 minutes
            timerElement.style.background = 'rgba(239, 68, 68, 0.2)';
            timerElement.style.color = '#dc2626';
        } else if (this.timeRemaining <= 600) { // 10 minutes
            timerElement.style.background = 'rgba(245, 158, 11, 0.2)';
            timerElement.style.color = '#d97706';
        }
    }

    displayQuestion() {
        const question = this.questions[this.currentQuestionIndex];

        // Update progress
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        document.getElementById('progressFill').style.width = `${progress}%`;
        document.getElementById('questionCounter').textContent = `${this.currentQuestionIndex + 1} / ${this.questions.length}`;

        // Display question content
        document.getElementById('questionType').textContent = question.type;
        document.getElementById('questionDifficulty').textContent = question.difficulty;
        document.getElementById('questionDifficulty').className = `question-difficulty ${question.difficulty.toLowerCase()}`;
        document.getElementById('questionText').textContent = question.question;

        // Handle code block
        const codeBlock = document.getElementById('codeBlock');
        if (question.code) {
            codeBlock.style.display = 'block';
            document.getElementById('codeContent').textContent = question.code;
            Prism.highlightElement(document.getElementById('codeContent'));
        } else {
            codeBlock.style.display = 'none';
        }

        // Display options
        this.displayOptions(question.options);

        // Reset UI state
        document.getElementById('feedback').style.display = 'none';
        document.getElementById('submitAnswer').style.display = 'inline-block';
        document.getElementById('submitAnswer').disabled = true;
        document.getElementById('nextQuestion').style.display = 'none';
    }

    displayOptions(options) {
        const optionsContainer = document.getElementById('options');
        optionsContainer.innerHTML = '';

        options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.innerHTML = `
                <span class="option-label">${String.fromCharCode(65 + index)}. ${option}</span>
                <span class="option-icon"></span>
            `;

            optionElement.addEventListener('click', () => {
                this.selectOption(index);
            });

            optionsContainer.appendChild(optionElement);
        });
    }

    selectOption(selectedIndex) {
        // Remove previous selections
        document.querySelectorAll('.option').forEach(option => {
            option.classList.remove('selected');
        });

        // Select current option
        document.querySelectorAll('.option')[selectedIndex].classList.add('selected');

        // Enable submit button
        document.getElementById('submitAnswer').disabled = false;

        // Store selection
        this.currentSelection = selectedIndex;
    }

    submitAnswer() {
        const question = this.questions[this.currentQuestionIndex];
        const isCorrect = this.currentSelection === question.correctAnswer;

        // Store answer
        this.userAnswers[this.currentQuestionIndex] = {
            questionId: question.id,
            selectedAnswer: this.currentSelection,
            correctAnswer: question.correctAnswer,
            isCorrect: isCorrect,
            question: question.question,
            explanation: question.explanation
        };

        // Show feedback
        this.showFeedback(isCorrect, question.explanation);

        // Update UI
        this.highlightAnswers();
        document.getElementById('submitAnswer').style.display = 'none';
        document.getElementById('nextQuestion').style.display = 'inline-block';

        // Disable option selection
        document.querySelectorAll('.option').forEach(option => {
            option.classList.add('disabled');
        });
    }

    showFeedback(isCorrect, explanation) {
        const feedbackElement = document.getElementById('feedback');
        feedbackElement.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
        feedbackElement.innerHTML = `
            <h4>${isCorrect ? '✅ Correct!' : '❌ Incorrect'}</h4>
            <p>${explanation}</p>
        `;
        feedbackElement.style.display = 'block';

        // Scroll to feedback
        feedbackElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    highlightAnswers() {
        const question = this.questions[this.currentQuestionIndex];
        const options = document.querySelectorAll('.option');

        options.forEach((option, index) => {
            const icon = option.querySelector('.option-icon');

            if (index === question.correctAnswer) {
                option.classList.add('correct');
                icon.textContent = '✓';
            } else if (index === this.currentSelection && index !== question.correctAnswer) {
                option.classList.add('incorrect');
                icon.textContent = '✗';
            }
        });
    }

    nextQuestion() {
        this.currentQuestionIndex++;

        if (this.currentQuestionIndex < this.questions.length) {
            this.displayQuestion();
        } else {
            this.endExam();
        }
    }

    endExam() {
        this.endTime = new Date();
        clearInterval(this.timerInterval);
        this.calculateResults();
        this.showResults();
    }

    calculateResults() {
        const correctAnswers = this.userAnswers.filter(answer => answer && answer.isCorrect).length;
        const totalQuestions = this.questions.length;
        const percentage = Math.round((correctAnswers / totalQuestions) * 100);

        this.results = {
            correct: correctAnswers,
            incorrect: totalQuestions - correctAnswers,
            percentage: percentage,
            timeTaken: this.getTimeTaken(),
            passed: percentage >= 70 // Typical passing score for certification exams
        };
    }

    getTimeTaken() {
        if (!this.startTime || !this.endTime) return '0:00';

        const timeDiff = this.endTime - this.startTime;
        const minutes = Math.floor(timeDiff / 60000);
        const seconds = Math.floor((timeDiff % 60000) / 1000);

        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    showResults() {
        this.showScreen('resultsScreen');

        // Update score display
        document.getElementById('finalScore').textContent = `${this.results.percentage}%`;
        document.getElementById('correctCount').textContent = this.results.correct;
        document.getElementById('incorrectCount').textContent = this.results.incorrect;
        document.getElementById('timeTaken').textContent = this.results.timeTaken;

        // Update status message
        const statusElement = document.getElementById('scoreStatus');
        const messageElement = document.getElementById('scoreMessage');

        if (this.results.percentage >= 90) {
            statusElement.textContent = 'Excellent!';
            messageElement.textContent = 'Outstanding performance! You\'re well prepared for the certification exam.';
            statusElement.style.color = '#059669';
        } else if (this.results.percentage >= 70) {
            statusElement.textContent = 'Well Done!';
            messageElement.textContent = 'Good job! You\'re on track for certification success.';
            statusElement.style.color = '#0891b2';
        } else if (this.results.percentage >= 50) {
            statusElement.textContent = 'Keep Studying';
            messageElement.textContent = 'You\'re making progress! Review the areas you missed and try again.';
            statusElement.style.color = '#d97706';
        } else {
            statusElement.textContent = 'Needs Improvement';
            messageElement.textContent = 'Keep studying and practicing. Focus on the fundamentals and try again.';
            statusElement.style.color = '#dc2626';
        }

        // Animate score circle
        this.animateScoreCircle();
    }

    animateScoreCircle() {
        const circle = document.getElementById('scoreCircle');
        const percentage = this.results.percentage;
        const circumference = 2 * Math.PI * 45; // radius is 45
        const offset = circumference - (percentage / 100) * circumference;

        // Set color based on score
        let color = '#dc2626'; // red
        if (percentage >= 70) color = '#059669'; // green
        else if (percentage >= 50) color = '#d97706'; // yellow

        circle.style.stroke = color;
        circle.style.strokeDashoffset = offset;
        circle.style.transition = 'stroke-dashoffset 2s ease-in-out';
    }

    reviewAnswers() {
        // Create a detailed review modal or page
        this.showReviewModal();
    }

    showReviewModal() {
        // Create modal overlay
        const modal = document.createElement('div');
        modal.className = 'review-modal';
        modal.innerHTML = `
            <div class="review-content">
                <div class="review-header">
                    <h2>Answer Review</h2>
                    <button class="close-review" onclick="this.parentElement.parentElement.parentElement.remove()">×</button>
                </div>
                <div class="review-body">
                    ${this.generateReviewContent()}
                </div>
            </div>
        `;

        // Add modal styles
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        `;

        const content = modal.querySelector('.review-content');
        content.style.cssText = `
            background: white;
            border-radius: 12px;
            max-width: 800px;
            max-height: 80vh;
            overflow-y: auto;
            margin: 2rem;
        `;

        const header = modal.querySelector('.review-header');
        header.style.cssText = `
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem;
            border-bottom: 1px solid #e2e8f0;
        `;

        const body = modal.querySelector('.review-body');
        body.style.cssText = `
            padding: 1.5rem;
        `;

        const closeBtn = modal.querySelector('.close-review');
        closeBtn.style.cssText = `
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #64748b;
        `;

        document.body.appendChild(modal);
    }

    generateReviewContent() {
        return this.userAnswers.map((answer, index) => {
            if (!answer) return '';

            const question = this.questions.find(q => q.id === answer.questionId);
            const statusIcon = answer.isCorrect ? '✅' : '❌';
            const statusClass = answer.isCorrect ? 'correct' : 'incorrect';

            return `
                <div class="review-item" style="margin-bottom: 2rem; padding: 1rem; border: 1px solid #e2e8f0; border-radius: 8px;">
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
                        <span>${statusIcon}</span>
                        <strong>Question ${index + 1}</strong>
                        <span class="badge ${statusClass}" style="padding: 0.25rem 0.5rem; border-radius: 12px; font-size: 0.75rem; ${answer.isCorrect ? 'background: #dcfce7; color: #166534;' : 'background: #fef2f2; color: #dc2626;'}">${answer.isCorrect ? 'Correct' : 'Incorrect'}</span>
                    </div>
                    <p style="margin-bottom: 1rem; font-weight: 500;">${question.question}</p>
                    <div style="margin-bottom: 1rem;">
                        <p style="margin-bottom: 0.5rem;"><strong>Your answer:</strong> ${String.fromCharCode(65 + answer.selectedAnswer)}. ${question.options[answer.selectedAnswer]}</p>
                        ${!answer.isCorrect ? `<p style="margin-bottom: 0.5rem;"><strong>Correct answer:</strong> ${String.fromCharCode(65 + answer.correctAnswer)}. ${question.options[answer.correctAnswer]}</p>` : ''}
                    </div>
                    <div style="background: #f8fafc; padding: 1rem; border-radius: 6px; border-left: 4px solid #623CE4;">
                        <p style="margin: 0; color: #4a5568;"><strong>Explanation:</strong> ${answer.explanation}</p>
                    </div>
                </div>
            `;
        }).join('');
    }

    resetExam() {
        // Reset all state
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.currentSelection = null;
        this.startTime = null;
        this.endTime = null;
        this.timeRemaining = this.timeLimit;
        this.results = null;

        // Clear timer
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }

        // Reset timer display
        document.getElementById('timer').textContent = '60:00';
        document.getElementById('timer').style.background = 'rgba(255, 255, 255, 0.2)';
        document.getElementById('timer').style.color = 'white';

        // Show welcome screen
        this.showScreen('welcomeScreen');
    }

    showScreen(screenId) {
        // Hide all screens
        document.getElementById('welcomeScreen').style.display = 'none';
        document.getElementById('questionScreen').style.display = 'none';
        document.getElementById('resultsScreen').style.display = 'none';

        // Show target screen
        document.getElementById(screenId).style.display = 'block';

        // Update header visibility
        const examInfo = document.querySelector('.exam-info');
        if (screenId === 'welcomeScreen') {
            examInfo.style.opacity = '0.5';
        } else {
            examInfo.style.opacity = '1';
        }
    }
}

// Initialize the exam when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.terraformExam = new TerraformExam();
});

// Add some utility functions for better UX
document.addEventListener('keydown', (e) => {
    // Allow navigation with keyboard
    if (e.key >= '1' && e.key <= '4') {
        const optionIndex = parseInt(e.key) - 1;
        const options = document.querySelectorAll('.option');
        if (options[optionIndex] && !options[optionIndex].classList.contains('disabled')) {
            options[optionIndex].click();
        }
    }

    // Submit with Enter key
    if (e.key === 'Enter') {
        const submitBtn = document.getElementById('submitAnswer');
        const nextBtn = document.getElementById('nextQuestion');

        if (submitBtn.style.display !== 'none' && !submitBtn.disabled) {
            submitBtn.click();
        } else if (nextBtn.style.display !== 'none') {
            nextBtn.click();
        }
    }
});

// Prevent accidental page refresh during exam
window.addEventListener('beforeunload', (e) => {
    if (window.terraformExam && window.terraformExam.startTime && !window.terraformExam.endTime) {
        e.preventDefault();
        e.returnValue = '';
        return 'Are you sure you want to leave? Your exam progress will be lost.';
    }
});
