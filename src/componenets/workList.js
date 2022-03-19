import React from "react";
import styled from "styled-components";
const WorkItem = styled.div`
  width: 350px;
  margin: 1rem auto 0;
  text-transform: capitalize;

  & ul {
    padding: 0;
  }
`;

const WorkListComp = ({ lsit }) => {
  return (
    <WorkItem>
      <ul>{lsit}</ul>
    </WorkItem>
  );
};

export default WorkListComp;
