const btn = document.getElementById("button");

(function () {
  emailjs.init({
    publicKey: "Cj2rHe8sFqi1_cXBY",
  });
})();

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "service_660hjzb";
  const templateID = "template_exa25il";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alert("Sent!");
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});
