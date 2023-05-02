import React from "react";
import MyNav from "@/components/MyNav";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {No_Image} from "@/lib";
import Link from "next/link";

export default function AboutUs(){

    let cols = []
    for (let i=0;i<5;i++){
        cols.push(
            <Col>
                <Card>
                    <Card.Img variant="top" src="https://bit.ly/3VnHhzC" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the cards content.
                        </Card.Text>
                        <Link href="https://reactjs.org" target="_blank">Read docs</Link>
                    </Card.Body>
                </Card>
            </Col>
        )
    }

    return (
        <>
            <Container>
                <Row xs={1} sm={2} md={3} lg={4} xl={5} className={"g-3"}>
                    {cols}
                </Row>
            </Container>
        </>
    )
}