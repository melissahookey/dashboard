import React, { useEffect } from "react";
import { Card } from "react-bootstrap";

// var KEY = "a434fb7108d1c9d1a73fc8909da81555";
// var lat = "30.30484";
// var lon = "-97.99669";

function Fetchweather() {
    // const [city] =useState('')
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=30.30484&lon=-97.99669&units=imperial&appid=a434fb7108d1c9d1a73fc8909da81555`) 
            .then(response => response.json())
            .then(json => console.log(json))
    }, []);
    return (
        <Card>
        </Card>
    )
}

export default Fetchweather;
