// Article.jsx
import { Link, Outlet, useNavigate } from 'react-router-dom'
import MyNavbar from '../../components/navbar/Navbar'
import { tourData } from '../../data'  // ایمپورت کن
import './Article.css'
import TourInfo from '../../TourInfo'
import { useState } from 'react'

function Article() {
  const [selectedTour, setSelectedTour] = useState(null)

  return (
    <div>
      <MyNavbar />
      <h2 className='article-title'>تور های لحظه آخری موجود :</h2>
      <hr />
      
      <div className="btn">
        {tourData.map(tour => (
          <button
            key={tour.id}
            onClick={() => setSelectedTour(tour)}
            className='linkBtn'
          >
            {tour.location}
          </button>
        ))}
      </div>
      
      <hr />
      
      {/* نمایش اطلاعات تور انتخاب شده */}
      {selectedTour && <TourInfo tour={selectedTour} />}
    </div>
  )
}

export default Article