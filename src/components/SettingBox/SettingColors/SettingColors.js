import "./settingColors.css";
import { Row, Col } from "react-bootstrap";

export default function SettingColors() {

  
  let allColorsLocalStorag = localStorage.getItem("colors_option");

  if (allColorsLocalStorag !== null) {
    document.documentElement.style.setProperty(
      "--main-color",
      allColorsLocalStorag
    );
  }

  function mainColors(e) {

    document.documentElement.style.setProperty("--main-color",e.target.dataset.color);

    document.querySelectorAll(".colorsList ul li").forEach(li => {

      li.classList.remove("active")

    })

    e.target.classList.add("active")

    localStorage.setItem("colors_option",e.target.dataset.color);
    
  }

  return (
    <Row className="settingColors">
      <Col xs={12} className="settingColorsTitle">
        <span>Sidenav Colors</span>
      </Col>

      <Col className="colorsList">
        <ul>
          <li
            className="active"
            onClick={(e) => mainColors(e)}
            data-color="linear-gradient(195deg, rgb(236, 64, 122), rgb(216, 27, 96))"
          ></li>
          <li
            onClick={(e) => mainColors(e)}
            data-color="linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))"
          ></li>
          <li
            onClick={(e) => mainColors(e)}
            data-color="linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))"
          ></li>
          <li
            onClick={(e) => mainColors(e)}
            data-color="linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))"
          ></li>
          <li
            onClick={(e) => mainColors(e)}
            data-color="linear-gradient(195deg, rgb(255, 167, 38), rgb(251, 140, 0))"
          ></li>
        </ul>
      </Col>
    </Row>
  );
}
