import React from "react";
import {Icon } from 'antd';

export const Spinner = () => {
    return(
    <Icon type="loading" style={{ fontSize: 32, position: "absolute", top: '50%', left: '50%' }} spin />
)};
