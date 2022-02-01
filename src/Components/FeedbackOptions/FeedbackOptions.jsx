import { format } from "prettier";
import PropTypes from "prop-types";
import { Container, Button } from "./FeedbackOptions.styled";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Container>
      {Object.keys(options).map((option) => (
        <Button type="button" key={option} onClick={onLeaveFeedback}>
          {option}
        </Button>
      ))}
    </Container>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
