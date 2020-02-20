import React from "react";
import { Divider, Statistic } from "antd";

export const City = props => {
  const name = 0;
  const score = 1;
  const greater = 2;
  if (props.cityName !== undefined && props.housing !== undefined) {
    return (
      <div className="city">
        <h2>{props.cityName}</h2>
        <p>{props.fullName}</p>
        <Divider>Population</Divider>
        <Statistic value={props.population} />
        <Divider>
          <strong>Results</strong>
        </Divider>
        {/*<Divider>{props.housing[name]}</Divider>*/}
        {/*<span className="progress">*/}
        {/*  <div*/}
        {/*    className="progress-bar bg-info"*/}
        {/*    role="progress"*/}
        {/*    aria-valuemin="0"*/}
        {/*    aria-valuemax="100"*/}
        {/*    style={{*/}
        {/*      width: `${Math.ceil(props.housing[score]) * 10}%`*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    {Math.ceil(props.housing[score])} /10*/}
        {/*  </div>*/}
        {/*</span>*/}
        <Divider>{props.costOfLiving[name]}</Divider>
        <span className="progress">
          <div
            className={
              props.costOfLiving[greater]
                ? "progress-bar bg-success"
                : props.costOfLiving[greater] === false
                ? "progress-bar bg-danger"
                : "progress-bar bg-info"
            }
            role="progress"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{
              width: `${props.costOfLiving[score] * 10}%`
            }}
          >
            {props.costOfLiving[score].toFixed(2)} /10
          </div>
        </span>
        <Divider>{props.travelConnectivity[name]}</Divider>
        <span className="progress">
          <div
            className={
              props.travelConnectivity[greater]
                ? "progress-bar bg-success"
                : props.travelConnectivity[greater] === false
                ? "progress-bar bg-danger"
                : "progress-bar bg-info"
            }
            role="progress"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{
              width: `${props.travelConnectivity[score] * 10}%`
            }}
          >
            {props.travelConnectivity[score].toFixed(2)} /10
          </div>
        </span>
        <Divider>{props.safety[name]}</Divider>
        <span className="progress">
          <div
            className={
              props.safety[greater]
                ? "progress-bar bg-success"
                : props.safety[greater] === false
                ? "progress-bar bg-danger"
                : "progress-bar bg-info"
            }
            role="progress"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{
              width: `${props.safety[score] * 10}%`
            }}
          >
            {props.safety[score].toFixed(2)} /10
          </div>
        </span>
        <Divider>{props.environmentalQuality[name]}</Divider>
        <span className="progress">
          <div
            className={
              props.environmentalQuality[greater]
                ? "progress-bar bg-success"
                : props.environmentalQuality[greater] === false
                ? "progress-bar bg-danger"
                : "progress-bar bg-info"
            }
            role="progress"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{
              width: `${props.environmentalQuality[score] * 10}%`
            }}
          >
            {props.environmentalQuality[score].toFixed(2)} /10
          </div>
        </span>
        <Divider>{props.internetAccess[name]}</Divider>
        <span className="progress">
          <div
            className={
              props.internetAccess[greater]
                ? "progress-bar bg-success"
                : props.internetAccess[greater] === false
                ? "progress-bar bg-danger"
                : "progress-bar bg-info"
            }
            role="progress"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{
              width: `${props.internetAccess[score] * 10}%`
            }}
          >
            {props.internetAccess[score].toFixed(2)} /10
          </div>
        </span>
        <Divider>{props.leisureAndCulture[name]}</Divider>
        <span className="progress">
          <div
            className={
              props.leisureAndCulture[greater]
                ? "progress-bar bg-success"
                : props.leisureAndCulture[greater] === false
                ? "progress-bar bg-danger"
                : "progress-bar bg-info"
            }
            role="progress"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{
              width: `${props.leisureAndCulture[score] * 10}%`
            }}
          >
            {props.leisureAndCulture[score].toFixed(2)} /10
          </div>
        </span>
      </div>
    );
  } else if (props.cityName !== undefined && props.housing === undefined) {
    return (
      <div className="city">
        <h2>{props.cityName}</h2>
        <p>{props.fullName}</p>
        <Divider>Population</Divider>
        <Statistic value={props.population} />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default City;
