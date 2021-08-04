import './App.css';
import Header from "./Project/Header";
import CardPage from "./Project/CardPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDescription from "./Project/CardDescription";
import React from "react";
import {Col, Container} from "react-bootstrap";
import Like from "./Project/Like";

function App() {
    return (
        <Container className="App mt-3">
            <Col className={"m-auto"}>
                <Header/>
            </Col>
            <Col>
                <CardPage/>
                <div className={"rounded-bottom m-auto border p-2 sizeCardD"}>
                    <CardDescription/>
                </div>
            </Col>
            <Col>
                <Like/>
            </Col>
        </Container>
    );
}

export default App;
