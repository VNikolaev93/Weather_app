import React from "react";

const Weather = (props) => {
    return (
        <div className="infoWeath">
            {props.city &&
            <div>
                <p>Месторасположение: {props.city}, {props.country}</p>
                <p>Температура: {props.temperature}°C </p>
                <p>Мин. температура: {props.temperature_min}°C</p>
                <p>Макс. температура: {props.temperature_max}°C</p>
                <p>Влажность: {props.humidity}</p>
                <p>Давление: {props.pressure}</p>
                <p>Заход солнца: {props.sunset}</p>
            </div>
            }
            <p className="error">{props.error}</p>
        </div>
    );

}

//
// class Weather extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.city &&
//                 <div>
//                     <p>Месторасположение: {this.props.city}, {this.props.country}</p>
//                     <p>Температура(min, max): {this.props.temperature}°C </p>
//                     <p>Макс. температура: {this.props.temperature_max}°C</p>
//                     <p>Мин. температура: {this.props.temperature_min}°C</p>
//                     <p>Влажность: {this.props.humidity}</p>
//                     <p>Давление: {this.props.pressure}</p>
//                     <p>Заход солнца: {this.props.sunset}</p>
//                 </div>
//                 }
//                 <p>{this.props.error}</p>
//             </div>
//         );
//     }
// }

export default Weather;