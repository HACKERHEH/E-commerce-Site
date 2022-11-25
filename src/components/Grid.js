import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../images/img.jpg";
import Counter from "./button";
import products from "./products";

function ResponsiveExample() {
  return (
    <Container>
      <Row>
        <Col xs={12} lg={6} md={6}>
          <img className="image" src={img}></img>
        </Col>
        <Col xs={12} lg={6} md={6}>
          <div className="col2">
            <h5 className="grid-right-h1">{products[0].logo}</h5>
            <h1 className="grid-right-heading">{products[0].heading}</h1>
            <p className="grid-right-para">{products[0].description}</p>
            <div className="price-section">
              <h3 className="grid-right-price">{products[0].discountprice}</h3>
              <h5 className="grid-right-price-discount-per">
                {products[0].discountper}
              </h5>
              <h6 className="grid-right-price-discount">{products[0].price}</h6>
            </div>
            <Counter products />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ResponsiveExample;
