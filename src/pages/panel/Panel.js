
import MyNavbar from "../../components/navbar/Navbar";
import "./Panel.css";
import TourCards from "../../components/tours/TourCards";
import { tourData } from "../../data";
import { useState } from "react";

function Panel() {
  const [tourCards,setTourcarsd] = useState(tourData);
  return (
    <div>
      <MyNavbar />
      <h1 style={{textAlign:"center"}}>وارد پنل ویژه شدی</h1>
      <div>
      <h2 className="mt-5 mb-2 ms-5" style={{textAlign:"center"}}>تور های لحظه آخری مخصوص کاربران ویژه</h2>
      <div className="m-1 row row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        <TourCards {...tourCards[0]} />
        <TourCards {...tourCards[1]} />
        <TourCards {...tourCards[2]} />
        <TourCards {...tourCards[3]} />
      </div>
    </div>
    </div>
  );
}
export default Panel;
