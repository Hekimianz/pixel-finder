import { Link } from "react-router-dom";
import "./Home.css";
export default function Home() {
  return (
    <div id="home--cont">
      <h1 id="home--title">Retro Finder</h1>
      <Link to="/1">
        <button className="button-82-pushable">
          <span className="button-82-shadow"></span>
          <span className="button-82-edge"></span>
          <span className="button-82-front text">Play</span>
        </button>
      </Link>
    </div>
  );
}
