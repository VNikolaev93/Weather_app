import React from 'react';
import Info from "./Components/info";
import Form from "./Components/form";
import Weather from "./Components/weather";

const API_KEY = "4b8c4084a4a690e55a8fbc77fb37ce5d";

class App extends React.Component {

    state = {
        temperature: undefined,
        temperature_max: undefined,
        temperature_min: undefined,
        humidity: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: undefined
    }

    gettingWeather = async (event) => {
        event.preventDefault(); //Перезагрузка страницы будет уничтожена.
        let city = event.target.elements.city.value;

        if (city) {
            //Fetch - позволяет прочитать URL-адрес и Получить из него данные
            const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await api_url.json();

            let sunset = data.sys.sunset;
            let date = new Date();
            date.setTime(sunset);
            let sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

            this.setState({
                temperature: data.main.temp,
                temperature_max: data.main.temp_max,
                temperature_min: data.main.temp_min,
                humidity: data.main.humidity,
                city: data.name,
                country: data.sys.country,
                pressure: data.main.pressure,
                sunset: sunset_date,
                error: undefined
            });
            console.log(data);
        } else {
            this.setState({
                temperature: undefined,
                temperature_max: undefined,
                temperature_min: undefined,
                humidity: undefined,
                city: undefined,
                country: undefined,
                pressure: undefined,
                sunset: undefined,
                error: "Введите название города"
            });
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-5 info">
                                <Info/>
                            </div>
                            <div className="col-sm-7 form">
                                <Form weatherMethod={this.gettingWeather}/>
                                <Weather
                                    temperature={this.state.temperature}
                                    temperature_max={this.state.temperature_max}
                                    temperature_min={this.state.temperature_min}
                                    humidity={this.state.humidity}
                                    city={this.state.city}
                                    country={this.state.country}
                                    pressure={this.state.pressure}
                                    sunset={this.state.sunset}
                                    error={this.state.error}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default App;