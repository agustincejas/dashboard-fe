import styled from "styled-components";

export const MetricContainer = styled.div`
  display: grid;
  place-items: center;
`;

export const DatesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  margin-bottom: 16px;
`;

export const StyledButton = styled.button`
  background-color: #af4ca0;
  width: 100%;
  color: white;
  padding: 4px;
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
