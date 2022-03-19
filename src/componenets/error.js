import React from "react";
import styled from "styled-components";

const Error = styled.p`
  text-align: center;
  color: red;
  width: 319px;
  padding: 0.7rem 1rem;
  background-color: #fdeefc;
  margin: 1rem auto;
`;
const ErrorComp = () => {
  return (
    <div>
      <Error>Please Enter The Work Item !</Error>
    </div>
  );
};

export default ErrorComp;
