import { PropTypes } from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return options.map(option => (
    <button key={option} type="button" name={option} onClick={onLeaveFeedback}>
      {option}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
