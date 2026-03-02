document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     DARK MODE COM LOCALSTORAGE
  ========================== */

  const btn = document.querySelector(".toggle-btn");

  // Quando a página carregar, verifica se já estava em dark
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark");
    if (btn) btn.textContent = "☀️";
  }

  if (btn) {
    btn.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      if (document.body.classList.contains("dark")) {
        localStorage.setItem("darkMode", "enabled");
        btn.textContent = "☀️";
      } else {
        localStorage.setItem("darkMode", "disabled");
        btn.textContent = "🌙";
      }
    });
  }

  /* =========================
        LOGIN
  ========================== */

  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("loginEmail");
      const senha = document.getElementById("loginSenha");
      const error = document.getElementById("loginError");

      if (!email.value.trim() || !senha.value.trim()) {
        error.style.display = "block";
        return;
      }

      error.style.display = "none";
      alert("Login realizado com sucesso! 🎉");
      window.location.href = "index.html";
    });
  }

  /* =========================
        CADASTRO
  ========================== */

  const cadastroForm = document.getElementById("cadastroForm");

  if (cadastroForm) {
    cadastroForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const nome = document.getElementById("nome");
      const cpf = document.getElementById("cpf");
      const email = document.getElementById("email");
      const senha = document.getElementById("senha");
      const confirmar = document.getElementById("confirmar");
      const error = document.getElementById("cadastroError");

      if (!nome.value || !cpf.value || !email.value || !senha.value || !confirmar.value) {
        error.style.display = "block";
        error.textContent = "⚠️ Preencha todos os campos.";
        return;
      }

      if (senha.value !== confirmar.value) {
        error.style.display = "block";
        error.textContent = "⚠️ As senhas não coincidem.";
        return;
      }

      error.style.display = "none";
      alert("Cadastro realizado com sucesso! 🎉");
      window.location.href = "login.html";
    });
  }

});