import React from "react";
import axios from "axios";
import "./OurClasses.scss";
import ClassCard from "../ClassCard/ClassCard";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

export default class OurClasses extends React.Component {
  state = {
    classes: null,
  };

  async componentDidMount() {
    const gymId = this.props.match.params.id;
    const classes = await axios(`${API_URL}/gyms/${gymId}/classes`);
    console.log(classes.data);
    this.setState({ classes: classes.data });
  }

  render() {
    const { classes } = this.state;
    return (
      <section className="our-classes">
        <div className="class-name">
          <h2 className="class-name__title">Our Classes</h2>
        </div>
        <div className="class-cards">
          {classes &&
            classes.map((eachClass) => (
              <ClassCard
                title={eachClass.classTitle}
                text={eachClass.description}
                key={eachClass.id}
              />
            ))}
        </div>
        <div className="card-button">
          <button className="card-button__name">See All Classes </button>
        </div>
      </section>
    );
  }
}
