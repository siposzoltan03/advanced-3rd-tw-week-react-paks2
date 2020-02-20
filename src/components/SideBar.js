import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import useMeasure from "./useMeasure";
import "../style.css";
import { CityProvider } from "../contexts/CityContext";
import Cities from "../components/Cities";
// import 'fontawesome';

export function SideBar() {
  console.log("SIDEBAAAAAAAAAAAAAAAAAAAAAR");
  const [open, toggle] = useState(false);
  const [bind, { width }] = useMeasure();
  const props = useSpring({ width: open ? width : 20 });
  const mainProps = { width: open ? "50%" : "20px" };

  return (
    <div
      {...bind}
      className="main"
      onClick={() => toggle(!open)}
      style={mainProps}
    >
      <animated.div className="fill" style={props}>
        <div className="arrow">
          <i className={arrowDirection()} />
        </div>
      </animated.div>
      <animated.div className="content">
        <Cities />
      </animated.div>
    </div>
  );
  function arrowDirection() {
    return open ? "fa fa-chevron-left" : "fa fa-chevron-right";
  }
}

export default SideBar;
