import { useFetchMetrics } from "../../hooks/use-fetch-metrics";
import {
  MetricsContainer,
  StyledHeading,
  StyledLi,
  StyledLink,
  StyledUl,
} from "./MetricsList.styles";

const MetricsList = () => {
  const { data: metrics } = useFetchMetrics();
  return (
    <>
      {metrics?.length ? (
        <MetricsContainer>
          <StyledHeading> Available metrics</StyledHeading>
          <StyledUl>
            {metrics.map((metric) => {
              return (
                <StyledLi key={metric}>
                  <StyledLink to={`/${metric}`}>{metric}</StyledLink>
                </StyledLi>
              );
            })}
          </StyledUl>
        </MetricsContainer>
      ) : (
        <h1>No metrics</h1>
      )}
    </>
  );
};

export default MetricsList;
