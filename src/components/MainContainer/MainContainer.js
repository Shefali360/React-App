import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Collection from '../Collection/Collection';
import RecoveryRatio from '../../containers/RecoveryRatio/RecoveryRatio';

const MainContainer=()=>{
return(
    <Container fluid>
        <Row >
            <Col sm={9}>
            <Collection/>
            </Col>
            <Col sm={3}>
            <RecoveryRatio/>
            </Col>
        </Row>
    </Container>
)

}

export default MainContainer;