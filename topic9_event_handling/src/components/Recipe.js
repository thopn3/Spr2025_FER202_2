import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
function Recipe() {
    const [recipes, setRecipes] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/recipes")
            .then(res => res.json())
            .then(data => {
                setRecipes(data.recipes);
            })
            .catch(err => console.error(err.message));

        fetch("https://dummyjson.com/users")
            .then(res => res.json())
            .then(data => {
                setUsers(data.users);
            })
            .catch(err => console.error(err.message));
    }, []);
    return (
        <Container fluid>
            <Row>
                <Col>Header</Col>
            </Row>
            <Row>
                <Col md={2} style={{ border: "1px solid gray" }}>Left</Col>
                <Col md={8} style={{ border: "1px solid gray" }}>
                    <Container>
                        <Row>
                            {
                                recipes?.map(r => (
                                    <Col md={3} className="mb-3">
                                        <Card>
                                            <Card.Img src={r?.image} />
                                            <Card.Body>
                                                <Card.Title style={{ minHeight: "50px" }}>{r?.name}</Card.Title>
                                                <Card.Text>Instructor: 
                                                    {
                                                        (users.find(u=>u.id === r.userId))?.firstName
                                                    }
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Container>
                </Col>
                <Col md={2} style={{ border: "1px solid gray" }}>Right</Col>
            </Row>
            <Row>
                <Col>Footer</Col>
            </Row>
        </Container>
    )
}

export default Recipe;