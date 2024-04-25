document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:8080/api/auction/find/all")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((auction) => {
        const markup = `

        <main className="mainContainer" style="height: 100%;
        width: 90vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 1rem;">

      <button className="auctionContainer" href="#" style"width: 90%;
      height: 15rem;
      border-radius: 20px;
      flex-direction: column;
      box-shadow: 1px 1px 5px gray;">

        <div className="imgContainer" style"width: 100%;
        height: 9rem;
        border-bottom: 1px solid rgb(180, 180, 180);
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        background-color: rgb(187, 187, 187);">

          <img src="#" alt="#" />

        </div>

        <div className="descriptionContainer" style="background-color: white;
        box-shadow: 1px 1px 5px gray;
      display: grid;
      width: 100%;
      height: 6rem;
      grid-template-columns: repeat (2,0.5fr);
      grid-template-rows: repeat (2, 0.5fr);
      grid-template-areas:
        "one two"
        "three four";">

          <div className="title" style"grid-area: "one";
          display: flex;
          align-items: center;">

          <p style"margin-left: 5%;">${auction.title}</p>

          </div>

          <div className="box" style"grid-area: "two";"></div>

          <div className="category" style"grid-area: "three";
          display: flex;
          align-items: center;">

          <p style"margin-left: 5%;">${auction.categoryList}</p>

          </div>

          <div className="bidButtonContainer" style="grid-area: "four";
          display: flex;
          justify-content: center;
          align-items: center;">

            <button className="bidButton" style="margin: auto;
            background-color: #F19D6F;
            border-radius: 15px;
            height: 60%;
            width: 60%;
            display: flex;
            align-items: center;
            justify-content: center;
            border-style: none;
            box-shadow: 1px 1px 5px gray;">

              <p style="margin: auto;" >Place Bid</p>

            </button>

          </div>

        </div>

        <script src="Auction.js"></script>

      </button>
    </main>

        `;

        document.querySelector(`div`).insertAdjacentHTML("beforeend", markup);
      });
    })
    .catch((error) => console.log(error));
});
