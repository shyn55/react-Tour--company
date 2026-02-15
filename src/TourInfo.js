// TourInfo.jsx
import { Container, Row, Col } from "react-bootstrap";

function TourInfo({ tour }) {
  if (!tour) return null;

  return (
    <Container className="mt-4">
      <Row className="align-items-center">
        <Col md={5}>
          <img src={tour.imagepic} alt={tour.location} className="img-fluid" />
        </Col>
        <Col md={7}>
          <h2>{tour.location}</h2>
          <p>نام تور لیدر : شایان میرداودی</p>
          <h4>همه روزه و با تخفیف ، تور های لحظه آخری باحال</h4>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
            در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
            نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای ابزارهای کاربردی می باشد.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default TourInfo;