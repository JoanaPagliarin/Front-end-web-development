var btnEnviar = document.querySelector("#btnEnviar");

btnEnviar.addEventListener("click", function (event) {
    event.preventDefault();

    var frmCadastro = document.querySelector("#frmCadastro");

    // VERIFICA SE NOME É VAZIO
    if (frmCadastro.fullname.value.length == 0) {
        document.getElementById("emptyname").innerHTML = "Campo nome não pode ser vazio!";
    }
    else {
        document.getElementById("emptyname").innerHTML = "";
    }

    // VERIFICA SE CAMPO IDADE É VAZIO 
    if (frmCadastro.age.value.length == 0) {
        document.getElementById("emptyage").innerHTML = "Campo idade não pode ser vazio!";
    }
    else{
        document.getElementById("emptyage").innerHTML = "";
    }

});

// VERIFICA SE CAMPO NOME POSSUI ALGO ALÉM DE LETRAS
frmCadastro.fullname.addEventListener("keypress", function (e) {
    const keyCode = (e.keyCode ? e.keyCode : e.wich);
    if (keyCode < 65 && keyCode != 32 || keyCode > 90 && keyCode < 97 || keyCode > 122) {
        e.preventDefault();
        document.getElementById("invalidname").innerHTML = "Digite apenas letras!";
    }
    else{
        document.getElementById("invalidname").innerHTML = "";
        document.getElementById("emptyname").innerHTML = "";
    }
});

// VERIFICA SE CAMPO IDADE POSSUI ALGO ALÉM DE NÚMEROS 
frmCadastro.age.addEventListener("keypress", function (e) {
    const keyCode = (e.keyCode ? e.keyCode : e.wich);
    if (keyCode < 48 || keyCode > 57) {
        e.preventDefault();
        document.getElementById("invalidage").innerHTML = "Digite apenas números!";
        return false;
    }
    else{
        document.getElementById("invalidage").innerHTML = "";
        document.getElementById("emptyage").innerHTML = "";
    }
});

