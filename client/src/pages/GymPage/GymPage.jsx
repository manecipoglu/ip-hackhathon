import { Component } from "react";
import Reviews from "../../components/Reviews/Reviews";
import Description from "../../components/Description/Description";
import About from "../../components/About/About";
import OurClasses from "../../components/OurClasses/OurClasses";
import OurInstructors from "../../components/OurInstructors/OurInstructors";
import axios from "axios";
import "./GymPage.scss";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

export default class GymPage extends Component {
  state = {
    classes: null,
    instructors: null,
    reviews: null,
    about: null,
  };

  async componentDidMount() {
    const gymId = this.props.match.params.id;
    const about = await axios(`${API_URL}/gyms/${gymId}`);
    const classes = await axios(`${API_URL}/gyms/${gymId}/classes`);
    const instructors = await axios(`${API_URL}/instructors/gyms/${gymId}`);
    const reviews = await axios(`${API_URL}/gyms/${gymId}/reviews`);

    this.setState({
      classes: classes.data,
      instructors: instructors.data,
      about: about.data,
      reviews: reviews.data,
    });
  }

  render() {
    const { classes, instructors, reviews, about } = this.state;
    return (
      <main className="gym-page">
        {about && <About about={about} />}
        {classes && <OurClasses classes={classes} />}
        {instructors && <OurInstructors instructors={instructors} />}
        {about && <Description description={about.about} />}
        {reviews && <Reviews reviews={reviews} />}
      </main>
    );
  }
}
