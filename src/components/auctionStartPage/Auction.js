document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:8080/api/auction/find/all")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((auction) => {
        const markup = `<p>${auction.title}</p>`;

        document.querySelector(`ul`).insertAdjacentHTML("beforeend", markup);
      });
    })
    .catch((error) => console.log(error));
});
