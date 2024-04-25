import "../auctionCreationContainer/AuctionSelectionDropdowns.css";

function AuctionSelectionDropdowns() {
    return (
        <div className="main-container">

            <div className="selection-container-top">

                <div className="selection-dropdown-top">

                    <select className="category" id="category">
                        <option value="" disabled hidden>Category</option>
                        <option value="hockey">Hockey</option>
                        <option value="football">Football</option>
                        <option value="ufc">UFC</option>
                        <option value="boxing">Boxing</option>
                        <option value="golf">Golf</option>
                        <option value="nba">NBA</option>
                        <option value="music">Music</option>
                        <option value="movies">Movies</option>
                        <option value="motorsports">Motorsports</option>
                        <option value="other">Other</option>
                    </select>

                    <select className="sub-category" id="sub-category">
                        <option value="" disabled hidden>Sub Category</option>
                        <option value="maintenance">ongoing maintenance</option>
                    </select>

                    <select className="celebrity-category" id="celebrity-category">
                        <option value="" disabled hidden>Celebrities</option>
                        <option value="music" disabled>MUSIC CATEGORY</option>
                        <option value="beyoné">Beyoné</option>
                        <option value="eminem">Eminem</option>
                        <option value="taylor-swift">Taylor Swift</option>
                        <option value="justing-beiber">Justin Beiber</option>
                        <option value="rihanna">Rihanna</option>
                        <option value="movies" disabled>MOVIES CATEGORY</option>
                        <option value="tom-hanks">Tom Hanks</option>
                        <option value="jennifer-lawrence">Jennifer Lawrence</option>
                        <option value="leonardo-dicaprio">Leonardo DiCaprio</option>
                        <option value="scarlett-johansson">Scarlett Johansson</option>
                        <option value="dwayne-johnson">Dwayne"The Rock" Johnson</option>
                        <option value="football" disabled>FOOTBALL CATEGORY</option>
                        <option value="lionel-messi">Lionel Messi</option>
                        <option value="cristiano-ronaldo">Cristiano Ronaldo</option>
                        <option value="neymar-jr">Neymar Jr.</option>
                        <option value="megan-rapinoe">Megan Rapinoe</option>
                        <option value="alex-morgan">Alex Morgan</option>
                        <option value="boxing" disabled>BOXING CATEGORY</option>
                        <option value="muhammad-ali">Muhammad Ali</option>
                        <option value="mike-tyson">Mike Tyson</option>
                        <option value="floyd-mayweather-jr">Floyd Mayweather Jr.</option>
                        <option value="manny-pacquiao">Manny Pacquiao</option>
                        <option value="canelo-álvares">Canelo Álvares</option>
                    </select>
                </div>
                {/* cut out and put in new file to break it down better */}
                <div className="selection-dropdown-bottom"></div>
            </div>
        </div>
    );
};

export default AuctionSelectionDropdowns;