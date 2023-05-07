import levelImg from "../1.jpeg";
import hat from "../hat.png";
import gollum from "../gollum.png";
import mirror from "../Mirror.png";
import jake from "../Jake.png";
import mojo from "../mojo jojo.png";
import "./Level1.css";
export default function Level1() {
  function imgClickHandler(e) {
    const div = document.getElementById("menu");
    if (div.style.display === "") {
      div.style.display = "flex";
      let left = e.clientX + 10 + "px";
      let top = e.clientY + "px";
      div.style.left = left;
      div.style.top = top;
    } else {
      div.style.display = "";
    }
  }

  function selectionClickHandler() {
    const div = document.getElementById("menu");
    div.style.display = "";
  }

  return (
    <div id="lvl1--cont">
      <nav>
        <div className="selectionPrev">
          <img className="selectionPrevImg" src={hat} alt="" />
          <span className="selectionPrevName">Beanie</span>
        </div>
        <div className="selectionPrev">
          <img className="selectionPrevImg" src={mojo} alt="" />
          <span className="selectionPrevName">Mojo Jojo</span>
        </div>
        <div className="selectionPrev">
          <img className="selectionPrevImg" src={gollum} alt="" />
          <span className="selectionPrevName">Gollum</span>
        </div>
        <div className="selectionPrev">
          <img className="selectionPrevImg" src={jake} alt="" />
          <span className="selectionPrevName">Jake</span>
        </div>
        <div className="selectionPrev">
          <img className="selectionPrevImg" src={mirror} alt="" />
          <span className="selectionPrevName">Mirror</span>
        </div>
      </nav>
      <section id="menu">
        <span onClick={selectionClickHandler} className="selection">
          Beanie
        </span>
        <span onClick={selectionClickHandler} className="selection">
          Mojo Jojo
        </span>
        <span onClick={selectionClickHandler} className="selection">
          Gollum
        </span>
        <span onClick={selectionClickHandler} className="selection">
          Jake
        </span>
        <span onClick={selectionClickHandler} className="selection">
          Mirror
        </span>
      </section>
      <img
        onClick={(e) => imgClickHandler(e)}
        id="lvl1--img"
        alt=""
        src={levelImg}
      />
    </div>
  );
}
