import { Component } from "react";
import GymCard from "../../components/GymCard/GymCard";
import axios from "axios";
import map from "../../assets/Map.png";
import filters from "../../assets/Filter Buttons.png";
import "./MainPage.scss";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

export default class MainPage extends Component {
  state = {
    gyms: null,
  };

  async componentDidMount() {
    const gyms = await axios(`${API_URL}/gyms`);
    this.setState({
      gyms: gyms.data,
    });
  }

  //   handleChange = (e) => {
  //     const query = e.target.value.toLowerCase();
  //     const results = this.state.gyms.filter((gym) => {
  //       if (gym.name.toLowerCase().includes(query)) {
  //         return gym;
  //       }
  //     });

  //     console.log(query, this.state.gyms);

  //     this.setState({ inventories: results });
  //   };

  render() {
    const { gyms } = this.state;

    return (
      <main className="main">
        <div className="main__configs">
          <img src={filters} alt="filters" className="main__filters" />
        </div>
        <div className="main__container">
          <section className="main__side-nav">
            <div className="main__results">
              <h1 className="main__title">
                {gyms && gyms.length} fitness studios in Your Location
              </h1>
            </div>
            {gyms &&
              gyms.map((gym) => (
                <GymCard key={gym.id} {...gym} history={this.props.history} />
              ))}
          </section>
          <img src={map} alt="map" className="main__map" />
        </div>
      </main>
    );
  }
}
