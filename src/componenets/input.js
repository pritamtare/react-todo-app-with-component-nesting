import React from "react";

import styled from "styled-components";

const Input = styled.input`
  outline: none;
  padding: 0.5rem 1rem;
`;

const InputComp = ({ value, onChange, onFocus, isValid,onKeyDown }) => {
  return (
    <div>
      <Input
        className={!isValid && "invalid"}
        type="text"
        name="title"
        value={value.title}
        onChange={onChange}
        placeholder="Add Work Item Here"
        onFocus={onFocus}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default InputComp;
