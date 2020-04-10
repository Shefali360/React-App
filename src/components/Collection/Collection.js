import React, { Component } from "react";
import Cases from "./CasesDiv/CasesDiv";
import { Row, Col, Container } from "react-bootstrap";
import CountrywiseCases from "../../containers/countrywiseCases/countrywiseCases";
import * as casesActions from "../../store/actions/index";
import { connect } from "react-redux";
import Graphs from "../../components/Collection/CasesDiv/Graphs/Graphs";
import styles from './Collection.module.css';
import Label from '../../components/Collection/CasesDiv/Label/Label';

class Collection extends Component {
  componentDidMount() {
    this.props.onFetchCases();
  }

  render() {
    let casesData = null;
    if (this.props.cases) {
      let data = [];
      let object = this.props.cases;
      for (let key in object) {
        let newObj = {};
        newObj[key] = object[key];
        data.push(newObj);
      }
      console.log(data);
      casesData = data.map((cases) => {
        for (let value in cases) {
          return (
            <Col key={value}>
              <div className={styles.Box}>
              <div>
              <Label class={styles.Label} label={value}/>
              <Cases label={value} casedata={cases[value]} /></div>
              <Graphs label={value} />
              </div>
            </Col>
          );
        }
      });
    }

    return (
      <Container>
        <Row>{casesData}</Row>
        <Row>
          <Col sm={5}>
            <CountrywiseCases />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state.coronaStats);
  return {
    cases: state.coronaStats,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCases: () => dispatch(casesActions.fetchCases()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Collection);
