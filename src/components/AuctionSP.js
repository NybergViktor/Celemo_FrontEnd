document.addEventListener("DOMContentLoaded", function () {


    fetch ("http://localhost:8080/api/auction/find/all")
    document.getElementById(“content”).innerHTML +=`<p>This is my auction</p>`;
}
};