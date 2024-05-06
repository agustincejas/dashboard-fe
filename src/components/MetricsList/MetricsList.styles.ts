import { Link } from "react-router-dom";
import styled from "styled-components";

export const MetricsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
`;

export const StyledHeading = styled.h2`
  font-family: Roboto, sans-serif;
  font-size: 20px;
  font-weight: 700;
`;

export const StyledLi = styled.li`
  list-style: none;
  margin-bottom: 6px;
`;

export const StyledUl = styled.ul`
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 700;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
