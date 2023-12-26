const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  btn.value = 'Sending...';

  const serviceID = 'default_service';
  const templateID = 'template_wudf80r';

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = 'Send Message';
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Your message has been sent",
        showConfirmButton: false,
        timer: 1500
      });

      // Resetear el formulario después de enviar el mensaje
      this.reset();
    },
    (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  );
});


    
     
