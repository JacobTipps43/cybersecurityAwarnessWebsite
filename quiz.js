document.addEventListener("DOMContentLoaded", () => {
  const questionEl = document.querySelector(".question");
  const optionButtons = Array.from(document.querySelectorAll(".option-btn"));
  const footerEl = document.querySelector(".quiz-footer");
  const nextBtn = document.getElementById("next-btn");

  if (!questionEl || optionButtons.length === 0 || !footerEl || !nextBtn) return;

  const questions = [
  {
    question: "Question 1 — You receive an email from your bank saying there’s suspicious activity and asking you to download an attached file to verify your account. What should you do?",
    options: [
      "Open the attachment to check what happened",
      "Reply to the email asking if it’s real",
      "Verify the sender and contact your bank through official channels",
      "Forward the email to friends to warn them"
    ],
    correctIndex: 2,
    explanation: "Banks rarely send attachments like this. Always verify through official websites or phone numbers."
  },
  {
    question: "Question 2 — You need to create a password for an important account. Which option is the most secure?",
    options: [
      "Your pet’s name and birth year",
      "A long passphrase with symbols and randomness",
      "The same password you use everywhere else",
      "A short but complex-looking password like 'Xy9!'"
    ],
    correctIndex: 1,
    explanation: "Long, unique passphrases are much harder to crack than short or reused passwords."
  },
  {
    question: "Question 3 — While browsing, a pop-up appears saying 'Your computer is infected! Click here to fix it now!' What is the safest action?",
    options: [
      "Click the pop-up immediately",
      "Download the recommended software",
      "Close the browser tab or window",
      "Call the support number shown"
    ],
    correctIndex: 2,
    explanation: "These are usually scare tactics. Close the browser and avoid interacting with the pop-up."
  },
  {
    question: "Question 4 — You receive a message from a coworker urgently asking for login credentials to fix a system issue. What should you do?",
    options: [
      "Send your credentials to help quickly",
      "Ignore it completely",
      "Verify the request through another method before responding",
      "Post the credentials in a shared document"
    ],
    correctIndex: 2,
    explanation: "This could be social engineering. Always verify unusual requests through a trusted channel."
  },
  {
    question: "Question 5 — You’re logging into a website and notice the URL looks slightly different (e.g., 'amaz0n.com'). What should you do?",
    options: [
      "Continue logging in",
      "Refresh the page and try again",
      "Leave the site and go to the correct official URL",
      "Turn off your antivirus"
    ],
    correctIndex: 2,
    explanation: "Fake websites often mimic real ones. Always double-check the URL before entering information."
  },
  {
    question: "Question 6 — A website asks for personal information that doesn’t seem necessary (like your Social Security number). What should you do?",
    options: [
      "Provide the information to continue",
      "Give fake information",
      "Stop and question why it’s needed before proceeding",
      "Share the site with others"
    ],
    correctIndex: 2,
    explanation: "Only provide sensitive information when absolutely necessary and to trusted sources."
  },
  {
    question: "Question 7 — You get a link in a text message from an unknown number saying you’ve won a prize. What’s the safest action?",
    options: [
      "Click the link to claim it",
      "Reply asking for more details",
      "Ignore and delete the message",
      "Forward it to friends"
    ],
    correctIndex: 2,
    explanation: "Unexpected prize messages are a common scam tactic. Do not engage."
  },
  {
    question: "Question 8 — Your device prompts you to install a software update. What should you do?",
    options: [
      "Ignore it indefinitely",
      "Install it as soon as possible",
      "Delete the update notification",
      "Turn off updates permanently"
    ],
    correctIndex: 1,
    explanation: "Updates often include important security patches that protect your device."
  },
  {
    question: "Question 9 — You are using public Wi-Fi at a coffee shop. Which action is safest?",
    options: [
      "Access sensitive accounts freely",
      "Use a VPN or avoid sensitive transactions",
      "Turn off your firewall",
      "Share files with others on the network"
    ],
    correctIndex: 1,
    explanation: "Public Wi-Fi is less secure. Use a VPN or avoid logging into sensitive accounts."
  },
  {
    question: "Question 10 — You suspect an email is a phishing attempt. What should you do?",
    options: [
      "Click links to confirm",
      "Reply asking if it’s legitimate",
      "Report it and delete it",
      "Forward it to everyone"
    ],
    correctIndex: 2,
    explanation: "Reporting helps prevent attacks on others and keeps systems secure."
  }
];

  let currentQuestion = 0;
  let score = 0;
  let answered = false;

  function setFooter(msg, cls="") {
    footerEl.textContent = msg;
    footerEl.className = `quiz-footer ${cls}`;
  }

  function renderQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;

    optionButtons.forEach((btn, i) => {
      btn.textContent = q.options[i];
      btn.disabled = false;
      btn.classList.remove("correct", "wrong");
    });

    setFooter(`Question ${currentQuestion + 1} of ${questions.length}`);
    nextBtn.style.display = "none";
    answered = false;
  }

  function showFinal() {
    questionEl.textContent = "Quiz Complete!";

    optionButtons.forEach(btn => {
      btn.textContent = "";
      btn.disabled = true;
    });

    setFooter(`Final Score: ${score} / ${questions.length}`);
    nextBtn.textContent = "Restart";
    nextBtn.style.display = "inline-block";
  }

  optionButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      if (answered) return;
      answered = true;

      const q = questions[currentQuestion];
      const correctBtn = optionButtons[q.correctIndex];

      optionButtons.forEach(b => b.disabled = true);

      if (index === q.correctIndex) {
        btn.classList.add("correct");
        score++;
        setFooter(q.explanation, "feedback correct");
      } else {
        btn.classList.add("wrong");
        correctBtn.classList.add("correct");
        setFooter("Incorrect. " + q.explanation, "feedback wrong");
      }

      nextBtn.style.display = "inline-block";
    });
  });

  nextBtn.addEventListener("click", () => {
    if (!answered && currentQuestion < questions.length) return;

    currentQuestion++;

    if (currentQuestion < questions.length) {
      renderQuestion();
    } else if (currentQuestion === questions.length) {
      showFinal();
    } else {
      // restart
      currentQuestion = 0;
      score = 0;
      nextBtn.textContent = "Next";
      renderQuestion();
    }
  });

  renderQuestion();
});