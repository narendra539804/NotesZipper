//jshint esversion:8
import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginPage from "./screens/LoginPage/LoginPage";
import RegisterPage from "./screens/RegisterPage/RegisterPage";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/mynotes" element={<MyNotes />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
};

export default App;
