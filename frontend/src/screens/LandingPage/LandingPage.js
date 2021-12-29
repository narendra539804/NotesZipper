import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Row } from "react-bootstrap";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className=" intro-text">
            <div>
              <h1 className="title">Welcome to Note Zipper</h1>
              <p className="subtitle">One Safe place for all your notes.</p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <button size="lg" style={{ width: 200, height: 55 }}>
                  Login
                </button>
              </a>
              <a href="/register">
                <button
                  variant="outline-primary"
                  size="lg"
                  style={{ width: 200, height: 55 }}
                >
                  Signup
                </button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
