import React, {useEffect} from "react";
import L from "leaflet";
import SideBar from "./SideBar";
import '../Map.css'

function Map() {
    useEffect(() => {
        // create map
        L.map("map", {
            center: [49.8419, 24.0315],
            zoom: 4,
            layers: [
                L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
                    attribution:
                        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                })
            ]
        });
    }, []);

    return <div id="map">
            <SideBar/>
    </div>;
}


export default Map;
