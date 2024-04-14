import React from "react";
import Card from "./Card";
import Data from "./Api";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="row my-4">
          <div className="col-xs-12 col-sm-6 col-md-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              enim omnis sed fugiat quod! Ducimus inventore explicabo sint,
              ullam voluptatibus reprehenderit magnam sapiente, facere
              repellendus nemo, illo quos tempore consequuntur!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              dicta rerum, accusantium expedita optio commodi quis quae cumque
              dignissimos veritatis totam nam nemo repudiandae quaerat, beatae
              temporibus soluta, veniam natus?
            </p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <img src="../Image/flower.png" className="homeim" alt="image" />
          </div>
        </div>
      </div>
      <h1 className="text-center text-info my-3">Meet Our Team</h1>
      {/* container */}
      <div className="container">
        <div className="row">
          {Data.map((values) => {
            return (
              <>
                <Card title={values.title} image={values.images} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default About;
