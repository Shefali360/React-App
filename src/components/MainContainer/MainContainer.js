import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Collection from '../../containers/Collection/Collection';
import RecoveryRatio from '../../components/RecoveryRatio/RecoveryRatio';
import Country from '../../containers/country/country';
import styles from './MainContainer.module.css';
import Search from '../../components/countrywiseCases/country/Search/Search';
import Aux from '../../hoc/Aux/Aux';

const MainContainer=()=>{
return(
    <Container fluid>
        <Row noGutters={true}>
            <Col md={9}>
            <Row noGutters={true}>
            <Col md={12}>
            <Collection/>
            </Col>
            <Col className={styles.CountrywiseCases}sm={4}>
            <Search/>
            <Country/>
            </Col>
            </Row>
            </Col>
            <Col md={3}>
            <Col md={12}>
            <RecoveryRatio/>
            </Col>
            </Col>
        </Row>
        </Container>
)

}

export default MainContainer;