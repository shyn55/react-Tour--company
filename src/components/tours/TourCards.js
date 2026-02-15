import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './TourCards.css'
function TourCards(props){
    return(
       <div>
         <div className="container border rounded p-3 mt-2">
            <img className="img-fluid" src={props.imagepic} alt="" />
            <h3>{props.location}</h3>
            <p>{props.desc}</p>
             <Button variant="outline-dark" className='by-btn-container'>
               <Link to={`/tour/${props.id}`} className='buy-btn'>خرید</Link>
             </Button>
        </div>
       </div>
    )
}
export default TourCards