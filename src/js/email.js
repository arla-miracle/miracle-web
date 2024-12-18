const emailForm = document.getElementById("emailForm");
const pesan = document.getElementById("pesan");

const sendEmail = (e) => {
  e.preventDefault();
  //serverID - templateID - #form - publicKey
  emailjs.sendForm("service_jat5dc7", "template_epypufv", "#emailForm", "1hwom2IkO4L6afEd5").then(
    () => {
      pesan.textContent = "Message Sent Successfully! ✅";
      setTimeout(() => {
        pesan.textContent = "";
      }, 5000);
      emailForm.reset();
    },
    () => {
      pesan.textContent = "Message Failed to Send! ❌";
    }
  );
};

emailForm.addEventListener("submit", sendEmail);
