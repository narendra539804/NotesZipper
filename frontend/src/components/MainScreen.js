import React from "react";
import { Container } from "react-bootstrap";

const MainScreen = ({ title, children }) => {
  return (
    <div className="mainback">
      <Container>
        <div className="page">
          {title && (
            <>
              <h1 className="heading">{title}</h1>
            </>
          )}
          <hr />
          {children}
        </div>
      </Container>
    </div>
  );
};
export default MainScreen;
