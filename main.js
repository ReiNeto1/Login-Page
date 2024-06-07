document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const criarContaLink = document.getElementById("criarConta");
    const criarContaForm = document.getElementById("criarContaForm");
    const voltarLoginLink = document.getElementById("voltarLogin");
    const areaLogin = document.querySelector(".area-login");
    const areaCriarConta = document.querySelector(".area-criar-conta");
    const questionarioLogin = document.querySelector(".questionario-login");

    criarContaLink.addEventListener("click", function(event) {
        event.preventDefault();
        areaLogin.classList.add("hidden");
        questionarioLogin.classList.remove("hidden");
    });

    voltarLoginLink.addEventListener("click", function(event) {
        event.preventDefault();
        questionarioLogin.classList.add("hidden");
        areaLogin.classList.remove("hidden");
    });

    criarContaForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const senha = document.getElementById("senha").value;
        const confirmarSenha = document.querySelector("input[name='confirmarSenha']").value;
        if (senha !== confirmarSenha) {
            alert("As senhas não correspondem.");
        } else {
            alert("Nova conta criada!");
        }
    });
});
