import { Col, Container, Row } from "react-bootstrap";
function Footer() {
  return (
    <footer>
      <Container fluid className="mt-5" style={{ backgroundColor: "#bab5fd" }}>
        <Row className="p-2 align-items-center">
          <Col>
            <h2>تور های کویر گردی به زودی</h2>
            <p>سفرهای ناتمام، مقصدهای تازه؛ همراه ما بمان.</p>
          </Col>
          <Col style={{ textAlign: "left" }}>
            <img src="https://cdn.zarinpal.com/badges/trustLogo/1.png" alt="" />
          </Col>
        </Row>
       
      </Container>
    </footer>
  );
}
export default Footer;
