import React, { Component } from 'react';
import axios from 'axios';
import { Card, Row, Col, Container, ListGroup } from 'react-bootstrap';

class PersonList extends Component {
  // Define state default values
  state = {
    persons: [],
  };

  // Component Lifecycle Callback
  componentDidMount() {
    axios
      .get(`https://randomuser.me/api/?results=10`)
      .then((res) => {
        console.log(res.data);
        const persons = res.data.results;
        this.setState({ persons });
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }

  render() {

    const { persons } = this.state;

    return (
      <Container>
        <h1 className="my-4">Person Details</h1>
        <Row>
          {persons.map((person, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <Card>

                <Card.Img variant="top" src={person.picture.large} alt="Profile" />
                <Card.Body>

                  <Card.Title>{person.name.title} {person.name.first} {person.name.last}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Username: {person.login.username}</Card.Subtitle>
                  <Card.Text>
                    <strong>Email:</strong> {person.email}
                  </Card.Text>
                  <Card.Text>
                    <strong>Location:</strong> {person.location.city}, {person.location.state}, {person.location.country}
                  </Card.Text>
                </Card.Body>


                <ListGroup variant="flush">
                  <ListGroup.Item><strong>Phone:</strong> {person.phone}</ListGroup.Item>
                  <ListGroup.Item><strong>Cell:</strong> {person.cell}</ListGroup.Item>
                  <ListGroup.Item><strong>Age:</strong> {person.dob.age}</ListGroup.Item>
                  <ListGroup.Item><strong>Registered:</strong> {new Date(person.registered.date).toLocaleDateString()}</ListGroup.Item>
                  <ListGroup.Item><strong>Description:</strong> {person.location.timezone.description}</ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default PersonList;