import { Link } from "react-router-dom";
import img1 from "../1.jpeg";
import img2 from "../2.jpg";
import "./Home.css";
export default function Home() {
  return (
    <div id="home--cont">
      <h1 id="home--title">Retro Finder</h1>
      <div id="home--lvls">
        <div className="home--lvlCont">
          <img className="home--lvl" src={img1} alt="" />
          <Link to="/1">
            <button className="button-82-pushable">
              <span className="button-82-shadow"></span>
              <span className="button-82-edge"></span>
              <span className="button-82-front text">Play</span>
            </button>
          </Link>
        </div>
        <div className="home--lvlCont">
          <img className="home--lvl" src={img2} alt="" />
          <Link to="/2">
            <button className="button-82-pushable">
              <span className="button-82-shadow"></span>
              <span className="button-82-edge"></span>
              <span className="button-82-front text">Play</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
