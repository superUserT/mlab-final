document.addEventListener("DOMContentLoaded", function () {
  const emailForm = document.getElementById("emailForm");
  const emailInput = document.getElementById("email");
  const emailAlert = document.getElementById("emailAlert");
  const modal = document.getElementById("thankYouModal");
  const confirmedEmail = document.getElementById("confirmedEmail");
  const dismissButton = document.getElementById("dismissButton");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

  emailForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();

    if (emailRegex.test(email)) {
      emailAlert.style.display = "none";
      emailInput.style.color = "black";
      emailInput.style.backgroundColor = "#f0e9e9";
      confirmedEmail.textContent = email;

      modal.style.display = "flex";
    } else {
      emailAlert.style.display = "block";
      emailAlert.style.color = "red";
      emailInput.style.color = "red";
      emailInput.style.backgroundColor = "#d9a9a7";
    }
  });

  dismissButton.addEventListener("click", () => {
    modal.style.display = "none";
    emailForm.reset();
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
