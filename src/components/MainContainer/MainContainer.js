import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Collection from '../../containers/Collection/Collection';
import RecoveryRatio from '../../containers/RecoveryRatio/RecoveryRatio';
import styles from './MainContainer.module.css';
import Search from '../../components/countrywiseCases/country/Search/Search';
import Twitter from '../../components/Tweets/Tweets';
import SpreadTrends from '../../containers/SpreadTrends/SpreadTrends';
import NewsAndUpdates from '../../components/NewsAndUpdates/NewsAndUpdates';
import Map from '../../components/Map/Map';
import Charts from '../../components/SpreadGraph/Chart/Chart';
import SpreadGraph from '../SpreadGraph/SpreadGraph';
// import Chart from '../../components/SpreadGraph/Chart/Chart';

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
            </Col>
            <Col sm={8}>
            <Map/>
            </Col>
            <Col sm={6}>
            <SpreadGraph/>
            </Col>
            <Col sm={6}>
            <NewsAndUpdates/>
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