document
  .getElementById("emailForm")
  .addEventListener("submit", function (event) {
    const email = document.getElementById("email").value;
    const regex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

    if (!regex.test(email)) {
      document.getElementById("emailAlert").style.display = "block";
      document.getElementById("emailAlert").style.color = "red";
      document.getElementById("email").style.color = "red";
      document.getElementById("email").style.backgroundColor = "#c46560";
      event.preventDefault();
    }
  });
