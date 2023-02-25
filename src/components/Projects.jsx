import "../styles/Projects.css";

const Card = () => {
  return (
    <div className="project-card">
      <img src="/Frame 139.png" alt="image" />
      <h3>What our clients have been saying about us</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui illo
        maxime dolorum perspiciatis aperiam harum dolore odit earum enim,
        incidunt
      </p>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="projects-section">
      <div className="projects-heading">
        <h3>our projects</h3>
        <h2>The building we have designed & constructed</h2>
      </div>

      <div className="projects-showcase">
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Projects;
