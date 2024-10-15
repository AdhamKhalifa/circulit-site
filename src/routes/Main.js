import { Link } from "react-router-dom";
import "../App.css";
import logo from "../logo.png";

const Main = () => {
  return (
    <div class="container">
      <center>
        <img src={logo} alt="CircuLit Logo" className="logo" />
        <h1>Welcome to CircuLit! Our website is under construction.</h1>
        <h2>
          You can check some of our e-commerce products on{" "}
          <a href="https://circulit.etsy.com" target="_blank" rel="noreferrer">
            Etsy
          </a>
          .
        </h2>
      </center>
    </div>
  );
};
export default Main;
