document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");
  

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = question.querySelector("span");

    question.addEventListener("click", () => {
      const isOpen = answer.classList.contains("active");

      // Sab band karo
      document.querySelectorAll(".faq-answer").forEach(a => a.classList.remove("active"));
      document.querySelectorAll(".faq-question span").forEach(s => s.textContent = "+");

      // Isko kholo agar band tha
      if (!isOpen) {
        answer.classList.add("active");
        icon.textContent = "x";
      }
    });
  });
});
// Get Started Button
const emailInput = document.querySelector(".email-input");
const getStartedBtn = document.querySelector(".get-started-btn");

getStartedBtn.addEventListener("click", () => {
  if(emailInput.value === ""){
    alert("Email daalo pehle!");
    emailInput.style.border = "1px solid red";
  } else {
    window.location.href = "browse.html";
  }
});