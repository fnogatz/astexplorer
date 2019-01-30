import PropTypes from 'prop-types';
import React from 'react';

export default class Prolog extends React.Component {
  render() {
    return (
      <div id="PrologEditor" className="container">
        <textarea value={this.props.ast.__source} readOnly={true} />
      </div>
    );
  }
}

Prolog.propTypes = {
  ast: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
};
