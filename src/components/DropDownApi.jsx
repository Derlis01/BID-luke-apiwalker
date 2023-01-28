import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";

function DropDownApi({ setRequestType }) {
  const [itemName, setItemName] = useState("Choose");

  const handleSelect = (eventKey) => {
    setItemName(eventKey);
  };

  return (
    <Dropdown onSelect={eventKey => {
      handleSelect(eventKey);
      setRequestType(eventKey)
    }}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {itemName}
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item eventKey={"people"}>
          <div>
            <img
              src={require("./user.png")}
              alt="image1"
              width="30"
              height="30"
              style={{ marginRight: "10px" }}
            />
            People
          </div>
        </Dropdown.Item>
        <Dropdown.Item eventKey={"films"}>
          <div>
            <img
              src={require("./user.png")}
              alt="image1"
              width="30"
              height="30"
              style={{ marginRight: "10px" }}
            />
            Films
          </div>
        </Dropdown.Item>
        <Dropdown.Item eventKey={"starships"}>
          <div>
            <img
              src={require("./user.png")}
              alt="image1"
              width="30"
              height="30"
              style={{ marginRight: "10px" }}
            />
            Starships
          </div>
        </Dropdown.Item>
        <Dropdown.Item eventKey={"vehicles"}>
          <div>
            <img
              src={require("./user.png")}
              alt="image1"
              width="30"
              height="30"
              style={{ marginRight: "10px" }}
            />
            Vehicles
          </div>
        </Dropdown.Item>
        <Dropdown.Item eventKey={"species"}>
          <div>
            <img
              src={require("./user.png")}
              alt="image1"
              width="30"
              height="30"
              style={{ marginRight: "10px" }}
            />
            Species
          </div>
        </Dropdown.Item>
        <Dropdown.Item eventKey={"planets"}>
          <div>
            <img
              src={require("./user.png")}
              alt="image1"
              width="30"
              height="30"
              style={{ marginRight: "10px" }}
            />
            Planets
          </div>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDownApi;
