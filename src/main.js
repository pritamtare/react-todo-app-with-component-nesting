import { useState } from "react";
import "./styles.css";
import ButtonComp from "./componenets/button";
import InputComp from "./componenets/input";
import WorkListComp from "./componenets/workList";
import ErrorComp from "./componenets/error";

import styled from "styled-components";

const WorkItem = styled.li`
  background: rgb(90, 15, 78);
  color: #fff;
  list-style: none;
  padding: 0.3rem 0.3rem 0.3rem 0.8rem;
  margin-bottom: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & span {
    background-color: #fdeefc;
    padding: 5px 10px;
    border-radius: 20px;
    color: #5a0f4e;
    margin-right: 1rem;
  }
`;
const Main = () => {
  const [workData, setWorkData] = useState([]);
  const [workItem, setWorkItem] = useState({
    title: "",
    id: ""
  });
  const [isValid, setIsValid] = useState(true);
  const handleWorkChange = (e) => {
    setWorkItem({ title: e.target.value, id: Math.random() * 0.5 });
  };

  console.log(workData.length)
  
  const noDataFound = <div className="noDataFound"><h3>No Work Items Found. Would You Like To Add Work Items?</h3> </div>

  const handleAddWorkItem = () => {
    if (workItem.title === "") {
      setIsValid(false);
      return false;
    }
    setWorkData([...workData, workItem]);

    setWorkItem({
      title: "",
      id: ""
    });
  };

  const onKeyDown = (e) => {
    
    if(e.keyCode===13){
      
    if (workItem.title === "") {
      setIsValid(false);
      return false;
    }
    setWorkData([...workData, workItem]);

    setWorkItem({
      title: "",
      id: ""
    });
  }
  };

  const handleInputFocus = () => {
    setIsValid(true);
  };
  const handleDeleteItem = (e, i) => {
    let updated = workData?.filter((event, index) => i !== index);
    setWorkData(updated);
  };

  const lsit = workData?.map((e, i) => {
    return (
      <WorkItem className="workItem" key={i}>
        <div>
          <span>{i + 1}</span> {e.title}
        </div>
        <ButtonComp
          children="Delete"
          className="delete-work-btn"
          onClick={(e) => handleDeleteItem(e, i)}
        />
      </WorkItem>
    );
  });

  return (
    <div className="App">
      <div className="app-comps">
        <InputComp
          setIsValid={setIsValid}
          isValid={isValid}
          onChange={handleWorkChange}
          value={workItem}
          onFocus={handleInputFocus}
          onKeyDown={onKeyDown}
        />
        <ButtonComp
          children="Add Work Item"
          className="add-work-item"
          onClick={handleAddWorkItem}
        />
      </div>
      {!isValid && <ErrorComp />}
      {
        workData.length === 0? noDataFound: <WorkListComp lsit={lsit} />
      }
      
    </div>
  );
};

export default Main;
