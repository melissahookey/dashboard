import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

// add a input field when user clicks plus sign button
// user types to do item and can save to local storage
// user can check off to do item and delete

export const Todocard = () => {
    return (
        <Form>
            <Form.Label>To Do</Form.Label>
            <Form.Group as={Row} className="mb-3">
                {/* checkbox starts hidden until styled */}
                <Col>
                    <Form.Check type="checkbox"></Form.Check>
                </Col>
                <Col>
                    <Form.Control id="taskInput" placeholder="enter task here"></Form.Control>
                </Col>
                <Col>
                    <Button type="submit" id="btn">+</Button>
                </Col>
            </Form.Group>
        </Form>
    )
}