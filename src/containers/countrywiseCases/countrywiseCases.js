import React from "react";
import Country from "../countrywiseCases/country/country";
import styles from "./countrywiseCases.module.css";
import { Container, Row, Col} from "react-bootstrap";

const CountrywiseCases = () => {
  return (
    <Container className={styles.CountrywiseCases}>
      <Row>
        <Col>
          <span className={styles.Search}><i className="fa fa-search"></i><input
            className={styles.Input}
            type="search"
            name="name"
            placeholder="Search Location"
          /></span>
          <ul className={styles.List}>
            <li>
              <Country/>
              <Country/>
              <Country/>
              <Country/>
              <Country/>
              <Country/>
          </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default CountrywiseCases;
