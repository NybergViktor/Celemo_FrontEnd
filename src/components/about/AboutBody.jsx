import React from "react";
import "./AboutBody.css";

function AboutBody() {
  return (
    <div className="AboutContainerPage">
      <div className="side-cotainer">
        <div className="side-content">
          <div className="celemo">
            <h1 className="omTeam">Meet Our Team</h1>
          </div>
          <div className="card-wrapper">
            <div className="cards">
              <div className="img-content">
                <span className="overlay"></span>
                <div className="crad-imge">
                  <img
                    src="src/assets/pr.img/Matti.jpg"
                    alt="Matti"
                    className="crad-img"
                  />
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">Matti Yaqoob</h2>
                <p className="dexription">
                  {" "}
                  My name is Matti, and I am passionate about programming. I am
                  dedicated to pursuing a career in programming because it
                  excites and challenges me. I love what I am doing and am
                  committed to honing my skills every day.
                </p>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="cards">
              <div className="img-content">
                <span className="overlay"></span>
                <div className="crad-imge">
                  <img
                    src="src/assets/pr.img/jag_ny.jpg"
                    alt="Joahn"
                    className="crad-img"
                  />
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">Johan</h2>
                <p className="dexription">
                  My name is Johan and I'm 39 years old. I'm learning
                  programming because I want to try something new after I have
                  been a industrial worker my whole life. My hobbies are
                  computers, games, old cars and I enjoy the simple life of the
                  country.
                </p>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="cards">
              <div className="img-content">
                <span className="overlay"></span>
                <div className="crad-imge">
                  <img
                    src="src/assets/pr.img/image.png"
                    alt="Tommy"
                    className="crad-img"
                  />
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">Tommy Dahlin</h2>
                <p className="dexription">
                  I am just trying to do my best with what i have and if i cant
                  do what i should i do what i can.
                </p>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="cards">
              <div className="img-content">
                <span className="overlay"></span>
                <div className="crad-imge">
                  <img
                    src="src/assets/pr.img/sss.jpg"
                    alt="John"
                    className="crad-img"
                  />
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">John</h2>
                <p className="dexription">
                  I'm 28 years old and a father. With a background in the restaurant
                  industry. Recently, I've discovered a passion for coding
                  and enjoy solving complex problems through programming. This
                  new interest has opened up exciting opportunities for me to
                  combine creativity with logical thinking, making each coding
                  challenge a rewarding experience.
                </p>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="cards">
              <div className="img-content">
                <span className="overlay"></span>
                <div className="crad-imge">
                  <img
                    src="src/assets/pr.img/Viktor.jpeg"
                    alt="viktor"
                    className="crad-img"
                  />
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">Viktor Nyberg</h2>
                <p className="dexription">
                  I am 24 years old and currently studying Java programming.
                  Previously, I worked in the industrial sector, but now I am
                  looking for a new career. I have discovered that I really
                  enjoy programming and I am excited to develop my skills in
                  this field.
                </p>
              </div>
            </div>
          </div>
          <div className="celemo">
            <div className="celemPdiv">
              <h1 className="omCelemo">About CELEMO</h1>
              <p className="CelemoP">
                Celemo is a cutting-edge auction platform dedicated to celebrity
                memorabilia, offering fans a unique opportunity to own a piece
                of their favorite stars' history. With an intuitive and
                user-friendly interface, Celemo makes it easy to browse and bid
                on a wide range of items, from autographed photos and personal
                artifacts to exclusive movie props and stage costumes. Each item
                comes with a certificate of authenticity, ensuring that every
                purchase is genuine. Whether you're a seasoned collector or a
                casual fan, Celemo provides a secure and exciting environment to
                connect with the glamour and nostalgia of the entertainment
                world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBody;
