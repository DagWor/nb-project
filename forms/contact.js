document.addEventListener('DOMContentLoaded', function () {
  emailjs.init("YOUR_USER_ID"); // Replace with your actual EmailJS user ID

  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
      .then(() => {
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send email.");
      });
  });
});