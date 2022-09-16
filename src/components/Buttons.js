import React from 'react';
import PropTypes from 'prop-types';

class Buttons extends React.PureComponent {
  render() {
    const { value, eventHandlerFunc, styles } = this.props;
    return (
      <button onClick={eventHandlerFunc} className={styles} type="button">{value}</button>
    );
  }
}

Buttons.propTypes = {
  value: PropTypes.string.isRequired,
  eventHandlerFunc: PropTypes.func.isRequired,
  styles: PropTypes.string.isRequired,
};

export default Buttons;
