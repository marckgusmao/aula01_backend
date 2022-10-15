var modallogin = document.getElementById("myModallogin");
var btnlogin = document.getElementById("myBtnlogin");
var spanlogin = document.getElementsByClassName("closelogin")[0];


btnlogin.onclick = function () {

    modallogin.style.display = "block";
}

spanlogin.onclick = function () {

    modallogin.style.display = "none"
    
}

window.onclick = function (event) {

    if (event.target == modallogin) {

        modallogin.style.display = "none";
    }
}

