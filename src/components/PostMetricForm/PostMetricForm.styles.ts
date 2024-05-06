import styled from "styled-components";

export const StyledHeading = styled.h2`
  font-family: Roboto, sans-serif;
  font-size: 20px;
  font-weight: 700;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 500px;
  border-radius: 5px;
  border: 1px solid #f7d9ff;
  box-shadow: 1px 1px 5px #f7d9ff;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 700;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
`;

export const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const StyledButton = styled.button`
  background-color: #af4ca0;
  width: 100%;
  color: white;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
  &:enabled {
    opacity: 1;
  }
`;
