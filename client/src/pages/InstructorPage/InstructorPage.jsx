import { Component } from "react";
import InstructorCard from "../../components/InstructorCard/InstructorCard";
import InstructorClassCard from "../../components/InstructorClassCard/InstructorClassCard";
import axios from "axios";
import "./InstructorPage.scss";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

export default class InstructorPage extends Component {
  state = {
    instructor: null,
    classes: null,
  };

  async componentDidMount() {
    const instructorId = this.props.match.params.id;
    const instructor = await axios(`${API_URL}/instructors/${instructorId}`);
    const classes = await axios(
      `${API_URL}/instructors/${instructorId}/classes`
    );

    this.setState({
      instructor: instructor.data,
      classes: classes.data,
    });
  }

  render() {
    const { instructor, classes } = this.state;
    return (
      instructor && (
        <main className="instructor">
          <section className="instructor__side">
            <InstructorCard
              title={instructor.instructorName}
              classes={instructor.classes}
              message={instructor.message}
            />
            <button className="instructor__cta">Join Open Air Classes</button>
            <button className="instructor__cta">Join Online Classes</button>
          </section>
          <section className="instuctor__classes">
            {classes &&
              classes.map(
                ({ id, classTitle, detailedDescription, available }) => (
                  <InstructorClassCard
                    key={id}
                    title={classTitle}
                    description={detailedDescription}
                    available={available}
                  />
                )
              )}
          </section>
        </main>
      )
    );
  }
}
