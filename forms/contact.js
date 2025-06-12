document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Show loading message
  const loading = this.querySelector('.loading');
  const errorMessage = this.querySelector('.error-message');
  const sentMessage = this.querySelector('.sent-message');

  loading.style.display = 'block';
  errorMessage.textContent = '';
  sentMessage.style.display = 'none';

  // Prepare email params
  const templateParams = {
    from_name: this.name.value,
    from_email: this.email.value,
    subject: this.subject.value,
    message: this.message.value,
  };

  emailjs.send('service_ws5ah9u', 'template_qcoyk77', templateParams)
    .then(() => {
      loading.style.display = 'none';
      sentMessage.style.display = 'block';
      this.reset();
    }, (err) => {
      loading.style.display = 'none';
      errorMessage.textContent = "Oops! Something went wrong: " + JSON.stringify(err);
    });
});
