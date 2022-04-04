import React from "react";
import dhomya from "../images/dhomya.jpeg";

const About = () => {
  return (
    <div className="container">
      <h1 className="p-3">About</h1>
      <div className="card" style={{ width: "25rem" }}>
        <img src={dhomya} className="card-img-top p-4" alt="..." />
        <div className="card-body">
          <p className="card-text">
            A growing full stack web developer, who specializes in building web
            applications for the best digital experiences. I am keenly focused
            on building impactful products which can create value in people's
            lives. Skilled in HTML, CSS, JavaScript , Express , Postman,
            ReactJS, MongoDB, MySQL and node.js. I'm looking forward to
            opportunities that will help me grow so that I keep contributing my
            part in this beautiful field of technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
