import TourCards from "./TourCards";
import { tourData } from "../../data";
import { useState } from "react";
function Tours() {
  const [tourCards,setTourcarsd] = useState(tourData);
  return (
    <div>
      <h2 className="mt-5 mb-2 ms-5">تور های لحظه آخری</h2>
      <div className="m-1 row row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        <TourCards {...tourCards[0]} />
        <TourCards {...tourCards[1]} />
        <TourCards {...tourCards[2]} />
        <TourCards {...tourCards[3]} />
      </div>
    </div>
  );
}
export default Tours;
