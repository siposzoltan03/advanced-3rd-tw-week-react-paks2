import React from "react";
import { Divider, Statistic, Rate, Icon } from "antd";

export const City = props => {
  const name = 0;
  const score = 1;
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
            className="progress-bar bg-info"
            role="progress"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{
              width: `${Math.ceil(props.costOfLiving[score]) * 10}%`
            }}
          >
            {Math.ceil(props.costOfLiving[score])} /10
          </div>
        </span>
        <Divider>{props.travelConnectivity[name]}</Divider>
        <span className="progress">
          <div
            className="progress-bar bg-info"
            role="progress"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{
              width: `${Math.ceil(props.travelConnectivity[score]) * 10}%`
            }}
          >
            {Math.ceil(props.travelConnectivity[score])} /10
          </div>
        </span>
        <Divider>{props.safety[name]}</Divider>
        <span className="progress">
          <div
            className="progress-bar bg-info"
            role="progress"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{
              width: `${Math.ceil(props.safety[score]) * 10}%`
            }}
          >
            {Math.ceil(props.safety[score])} /10
          </div>
        </span>
        <Divider>{props.environmentalQuality[name]}</Divider>
        <span className="progress">
          <div
            className="progress-bar bg-info"
            role="progress"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{
              width: `${Math.ceil(props.environmentalQuality[score]) * 10}%`
            }}
          >
            {Math.ceil(props.environmentalQuality[score])} /10
          </div>
        </span>
        <Divider>{props.internetAccess[name]}</Divider>
        <span className="progress">
          <div
            className="progress-bar bg-info"
            role="progress"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{
              width: `${Math.ceil(props.internetAccess[score]) * 10}%`
            }}
          >
            {Math.ceil(props.internetAccess[score])} /10
          </div>
        </span>
        <Divider>{props.leisureAndCulture[name]}</Divider>
        <span className="progress">
          <div
            className="progress-bar bg-info"
            role="progress"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{
              width: `${Math.ceil(props.leisureAndCulture[score]) * 10}%`
            }}
          >
            {Math.ceil(props.leisureAndCulture[score])} /10
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
