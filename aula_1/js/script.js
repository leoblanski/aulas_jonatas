
function testeClick(parametro) {
    var name = document.getElementById("name").value;

    if (name == null || name == "") {
        alert("Nome é vazio");
        return false;
    }

    //alert(name.val());
}

function completeFields () {
    document.getElementById("name").value = "Jonatas";
    document.getElementById("phone").value = "479999999999";
    document.getElementById("uf").value = "SC";
    document.getElementById("city").value = "Joinville";
}