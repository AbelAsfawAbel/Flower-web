import React from "react";
import Card from "./Card";
import Data from "./Api";
const Services = () => {
  return (
    <div>
      <h1 className="text-center text-info my-3">Oure Services</h1>

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
    </div>
  );
};

export default Services;
