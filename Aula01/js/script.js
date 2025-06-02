 document.getElementById("demo").innerHTML = "Roma"

    function aumentar(){
        document.getElementById("demo").style.fontSize = "35px";
    }
    function diminuir(){
        document.getElementById("demo").style.fontSize = "15px";
    }

    function desligar(){
        document.getElementById("lampada").src = "img/apagada.jpg";
    }

    function ligar(){
        document.getElementById("lampada").src = "img/acesa.jpg";
    }