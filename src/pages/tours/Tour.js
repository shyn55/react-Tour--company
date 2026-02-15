import { useParams } from "react-router-dom";
import MyNavbar from "../../components/navbar/Navbar";
import { tourData } from "../../data";
import "./Tour.css";
import { Container, Row, Col } from "react-bootstrap";

function Tour() {
  const tourId = useParams().tourId;
  const tourInfo = tourData.find((tour) => tour.id == tourId);
  console.log(tourInfo);
  return (
    <div>
      <MyNavbar />
      <Container>
        <Row className="align-items-center">
          <Col md={5}>
            <img src={tourInfo.imagepic} alt="s" className="img-fluid"  />
          </Col>
          <Col md={7}>
            <h2>{tourInfo.location}</h2>
            <p>نام تور لیدر : شایان میرداودی</p>
            <h4>همه روزه و با تخفیف ، تور های لحظه آخری باحال</h4>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}
export default Tour;
