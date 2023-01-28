import React from "react";
import { Button } from "react-bootstrap";

const SelectId = ({ setRequestId, getRequest, request }) => {
  return (
    <>
      <p>ID:</p>
      <input onChange={(e) => setRequestId(e.target.value)} type="number" />
      <Button onClick={() => getRequest(request.type, request.id)} >Search</Button>
    </>
  );
};

export default SelectId;