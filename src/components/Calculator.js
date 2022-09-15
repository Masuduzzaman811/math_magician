import React from 'react';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="calc-container">
        <div className="screen">0</div>
        <div className="calc-btn grey">AC</div>
        <div className="calc-btn grey">+/-</div>
        <div className="calc-btn grey">%</div>
        <div className="calc-btn orange">&divide;</div>
        <div className="calc-btn grey">7</div>
        <div className="calc-btn grey">8</div>
        <div className="calc-btn grey">9</div>
        <div className="calc-btn orange">&times;</div>
        <div className="calc-btn grey">4</div>
        <div className="calc-btn grey">5</div>
        <div className="calc-btn grey">6</div>
        <div className="calc-btn orange">-</div>
        <div className="calc-btn grey">1</div>
        <div className="calc-btn grey">2</div>
        <div className="calc-btn grey">3</div>
        <div className="calc-btn orange">+</div>
        <div className="calc-btn zero grey">0</div>
        <div className="calc-btn grey">.</div>
        <div className="calc-btn orange">=</div>
      </div>
    );
  }
}

export default Calculator;
