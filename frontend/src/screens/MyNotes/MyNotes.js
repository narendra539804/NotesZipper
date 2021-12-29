import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Badge } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import notes from "../../components/data/data";
const MyNotes = () => {
  const deleteHandler = (id) => {
    console.log(id);
    if (window.confirm("Are you sure?")) {
      alert("delte");
    }
  };
  return (
    <MainScreen title="Welcome back Naren">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      {notes.map((e) => (
        <Card style={{ margin: 10 }}>
          <Card.Header style={{ display: "flex" }}>
            <span
              style={{
                color: "black",
                textDecoration: "none",
                flex: 1,
                cursor: "pointer",
                alignSelf: "center",
                fontSize: 20,
              }}
            >
              {e.title}
            </span>
            <div>
              <Button href={`/edit/${e._id}`}>Edit</Button>
              <Button
                onChange={() => deleteHandler(e._id)}
                className="mx-2"
                variant="danger"
              >
                Delete
              </Button>
            </div>
          </Card.Header>
          <Card.Body>
            <Badge variant="success">Category - {e.category} </Badge>
            <blockquote className="blockquote mb-0">
              <p>{e.content}</p>
              <footer className="blockquote-footer">Created On -date</footer>
            </blockquote>
          </Card.Body>
        </Card>
      ))}
      My Notes
    </MainScreen>
  );
};

export default MyNotes;
