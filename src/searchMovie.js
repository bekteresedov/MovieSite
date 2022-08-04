import React from "react";

export default function SearchMovie() {
  return (
    <div>
      <div className="searchBar">
        <div className="mainSearchBar">
          <h2>Search Movie</h2>
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      <div className="mainMovie">
        <div className="mainBoxs">
          <div className="boxs">
            <img src="https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQbqiOAwdYv-BxYmsb3M3KhbVIwua4rAqtfGEvgtXDq1J2S-DM6-TBmZOC1RcZWisKNYpEX1V7MWNo5HXPmb7D9N3CcIbIepDtnmD2nnjjPnh-yJV4ymbv8z0vOsrdLra3ljvFmvne11oDrQg9GnPATyt.jpg?r=52d" />
            <div className="movieInfo"> Peaky Blinders</div>
          </div>
          <div className="boxs">
            <img src="https://pbs.twimg.com/media/EDEsh0gU4AUTO3P?format=jpg&name=900x900" />
            <div className="movieInfo">Joker</div>
          </div>
          <div className="boxs">
            <img src="https://upload.wikimedia.org/wikipedia/tr/thumb/1/1f/Kurtlar-vadisi-eski.jpg/250px-Kurtlar-vadisi-eski.jpg" />
            <div className="movieInfo">Kurtlar Vadisi</div>
          </div>  <div className="boxs">
            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT8cP-DyjEMJ0DvsVZ8R715RXfo769dRLbtmheTIn5ha1jNoLRd" />
            <div className="movieInfo">Ezel</div>
          </div>  <div className="boxs">
            <img src="https://scontent.fgyd7-2.fna.fbcdn.net/v/t1.6435-9/89652958_2447666085335434_1901448512327909376_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=MfoqXuMuHPYAX_LYxHA&_nc_ht=scontent.fgyd7-2.fna&oh=00_AT-Luh3VPTTLr1Ft-ssWekDgzo-uGOFpGc8qP0yJxAsN-g&oe=62E5A432" />
            <div className="movieInfo">La casa de papel</div>
          </div>
          <div className="boxs">
            <img src="https://static.hdrezka.ac/i/2014/12/19/u8dea6f09efe3ap88z90k.jpg" />
            <div className="movieInfo">Om Shanti Om</div>
          </div><div className="boxs">
            <img src="https://m.media-amazon.com/images/I/51vjgi4PjeL._AC_SY445_.jpg" />
            <div className="movieInfo">Taxi</div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
