import PropTypes from "prop-types";
import Stats from "./Statistics.styled";

export default function Statistics({ options, totalFeedbak, positivFeedback }) {
  return (
    <>
      <Stats>
        {Object.entries(options).map((option) => (
          <li key={option[0]}>
            {option[0]}: {option[1]}
          </li>
        ))}
        <li>Total: {totalFeedbak}</li>
        <li>Positive feedback: {positivFeedback} %</li>
      </Stats>
    </>
  );
}

Statistics.propTypes = {
  options: PropTypes.object.isRequired,
  totalFeedbak: PropTypes.number.isRequired,
  positivFeedback: PropTypes.number.isRequired,
};
