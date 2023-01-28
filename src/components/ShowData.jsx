import React from "react";
import "./ShowData.css";

const ShowData = ({ data }) => {
  return (
    <div className="data-container">
      {data.error ? (
        <h2>{data.error}</h2>
      ) : (
        <div>
          {data.response.data &&
            Object.entries(data.response.data).map(([key, value]) => (
              <div key={key}>
                <p>
                  {key}: {value}
                </p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default ShowData;
