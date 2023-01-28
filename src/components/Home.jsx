import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DropDownApi from "./DropDownApi";
import SelectId from "./SelectId";
import { useState } from "react";
import axios from "axios";
import ShowData from "./ShowData";

function Home() {
  const [request, setRequest] = useState({
    type: "",
    id: "",
    response: "",
    error: "",
  });

  const handleRequestType = (type) => {
    setRequest({ ...request, type: type });
  };

  const handleRequestId = (id) => {
    setRequest({ ...request, id: id });
  };

  const getRequest = (type, id) => {
    axios
      .get(`https://swapi.dev/api/${type}/${id}`)
      .then((response) => {
        setRequest({ ...request, response: response, error: '' });
      })
      .catch(() => {
        setRequest({
          ...request,
          error: "Estos no son los droides que está buscando",
        });
      });
  };

  return (
    <div className="App">
      <div className="principal">
        <div className="d-flex align-items-baseline contenido">
          <p>Search for:</p>
          <DropDownApi setRequestType={handleRequestType}></DropDownApi>
        </div>
        <div className="d-flex align-items-baseline contenido">
          <SelectId
            getRequest={getRequest}
            setRequestId={handleRequestId}
            request={request}
          />
        </div>
      </div>
      <ShowData data={request} />
    </div>
  );
}

export default Home;
