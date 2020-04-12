import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Collection from '../../containers/Collection/Collection';
import RecoveryRatio from '../../containers/RecoveryRatio/RecoveryRatio';
import Country from '../../containers/country/country';
import styles from './MainContainer.module.css';
import Search from '../../components/countrywiseCases/country/Search/Search';
import Twitter from '../../components/Tweets/Tweets';
import SpreadTrends from '../../containers/SpreadTrends/SpreadTrends';
import SpreadGraph from '../SpreadGraph/SpreadGraph';
import News from '../News/News';
import Map from '../../components/Map/Map';

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
            <Col sm={8}>
            <Map/>
            </Col>
            <Col sm={6}>
            <SpreadTrends/>
            </Col>
            <Col sm={6}>
            <News/>
            </Col>
            </Row>
            </Col>
            <Col md={3}>
            <Row noGutters={true}>
            <Col md={12}>
            <RecoveryRatio/>
            </Col>
            <Col md={12}>
                <Twitter/>
            </Col>
            </Row>
            </Col>
        </Row>
        </Container>
)

}

export default MainContainer;