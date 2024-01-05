document.addEventListener("DOMContentLoaded", () => {
  const code = document.querySelector(".auth__code");
  const path = document.querySelector(".auth__path");
  const field = document.querySelector(".auth__input");
  const btn = document.querySelector(".auth__btn");

  btn?.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(code.value);

    if (field?.value === code?.value) {
      window.location.href = path?.value;
    } else {
      alert("Введен неверный код");
    }
  });
});
