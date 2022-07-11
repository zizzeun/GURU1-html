document.getElementById("check").addEventListener("click", function () {
    if (document.getElementById("check").checked)
        document.getElementsByClassName("banner")[0].style.height = "0";
    else document.getElementsByClassName("banner")[0].style.height = "220px";
});
