import PropTypes from "prop-types";
import Message from "./NotificationFeedback.styled";

export default function NotificationFeedback({ message }) {
  return <Message>{message}</Message>;
}

NotificationFeedback.propTypes = {
  message: PropTypes.string.isRequired,
};
