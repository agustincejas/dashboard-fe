import MetricsList from "../../components/MetricsList/MetricsList";
import PostMetricForm from "../../components/PostMetricForm/PostMetricForm";
import { StyledHeading, StyledHome } from "./Home.styles";

const Home = () => {
  return (
    <StyledHome>
      <StyledHeading>Dashboard</StyledHeading>
      <PostMetricForm />
      <MetricsList />
    </StyledHome>
  );
};

export default Home;
