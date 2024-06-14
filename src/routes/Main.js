import { Link } from "react-router-dom";
import "./App.css";
import logo from "./logo.png";

const Main = () => {
  return (
    <div class="container">
      <center>
        <img src={logo} alt="CircuLit Logo" className="logo" />
        <h1>
          Welcome to CircuLit! Our{" "}
          <a href={{ Main }} rel="noreferrer">
            website
          </a>{" "}
          is under construction.
        </h1>
        <h2>
          You can check out our products on{" "}
          <a
            href="https://www.amazon.com/dp/B0CZFYS95J?ref=myi_il_dp"
            target="_blank"
            rel="noreferrer"
          >
            Amazon
          </a>{" "}
          and{" "}
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
