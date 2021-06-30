const d = document,
  $form = d.getElementById("form"),
  $inputs = d.querySelectorAll("#form [required]"),
  $submit = d.querySelector("input[type='submit']");

//console.log($inputs);

d.addEventListener("keyup", (e) => {
  /* TODO: 
    - Detectar evento en inputs
    - Obtener patron por input
    - Valir patron
    - Agregar clase dependiendo si es valido o no.
 */
  if (e.target.matches("input")) {
    let regex = new RegExp(e.target.pattern);

    if (regex.exec(e.target.value.trim())) {
      e.target.classList.add("valid");
      e.target.classList.remove("invalid");
    } else {
      e.target.classList.remove("valid");
      e.target.classList.add("invalid");
    }
  }
});

d.addEventListener("submit", (e) => {
  e.preventDefault();

  $submit.focus();

  $inputs.forEach((input) => {
    input.value = "";
    input.classList.remove("valid");
  });
});
