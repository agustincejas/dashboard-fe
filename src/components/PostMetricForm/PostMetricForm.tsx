import { FormEvent } from "react";
import {
  StyledButton,
  StyledForm,
  StyledHeading,
  StyledInput,
  StyledLabel,
} from "./PostMetricForm.styles";
import { usePostMetric } from "../../hooks/use-post-metric";

const PostMetricForm = () => {
  const { mutateAsync: postMetric } = usePostMetric();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const value = +data.get("value")!;
    const name = data.get("name")!.toString();
    const timestamp = new Date().getTime();
    await postMetric({ value, name, timestamp });
  };
  return (
    <>
      <StyledHeading>Post metric</StyledHeading>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="name">Name:</StyledLabel>
        <StyledInput
          id="name"
          name="name"
          type="text"
          autoComplete="off"
          required
        />
        <StyledLabel htmlFor="value">Value:</StyledLabel>
        <StyledInput id="value" name="value" autoComplete="off" required />
        <StyledButton>Post Metric</StyledButton>
      </StyledForm>
    </>
  );
};

export default PostMetricForm;
