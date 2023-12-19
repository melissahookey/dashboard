import React from "react";
import { Form, Button } from "react-bootstrap";

// add a input field when user clicks plus sign button
// user types to do item and can save to local storage
// user can check off to do item and delete

export const Todocard = () => {
    return (
        <Form>
            <Form.Label>To Do</Form.Label>
            <Form.Group>
                {/* checkbox starts hidden until styled */}
                <Form.Check type="checkbox"></Form.Check>
                <Form.Control id="taskInput" placeholder="enter task here"></Form.Control>
                <Button type="submit">X</Button>
            </Form.Group>
            <Form.Group>
                <Button type="submit">+</Button>
            </Form.Group>
        </Form>
    )
}