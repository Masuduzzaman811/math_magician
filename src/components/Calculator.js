import React from 'react';
import Buttons from './Buttons';
import calculate from '../logic/calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { total: 0, next: null, operation: null };
  }

    componentDidMount = () => {
      this.setState({
        total: 0,
        next: null,
        operation: null,
      });
    }

    render() {
      const eventHandlerFunc = (e) => {
        const calcObject = calculate(this.state, e.target.textContent);
        this.setState(calcObject);
      };

      const { total, operation, next } = this.state;
      const oprnd = operation === '%' ? 'mod' : operation;
      let result = '';
      if (total) {
        result = `${total} ${oprnd || ''} ${next || ''}`;
      } else if (next) {
        result = `${next} ${oprnd || ''}`;
      }
      return (
        <div className="calc-container">

          <div className="screen">{result || 0 }</div>
          <Buttons styles="calc-btn grey" eventHandlerFunc={(e) => eventHandlerFunc(e)} value="AC" />
          <Buttons styles="calc-btn grey" eventHandlerFunc={(e) => eventHandlerFunc(e)} value="+/-" />
          <Buttons styles="calc-btn grey" eventHandlerFunc={(e) => eventHandlerFunc(e)} value="%" />
          <Buttons styles="calc-btn orange" eventHandlerFunc={(e) => eventHandlerFunc(e)} value="÷" />
          <Buttons styles="calc-btn grey" eventHandlerFunc={(e) => eventHandlerFunc(e)} value="7" />
          <Buttons styles="calc-btn grey" eventHandlerFunc={(e) => eventHandlerFunc(e)} value="8" />
          <Buttons styles="calc-btn grey" eventHandlerFunc={(e) => eventHandlerFunc(e)} value="9" />
          <Buttons styles="calc-btn orange" eventHandlerFunc={(e) => eventHandlerFunc(e)} value="x" />
          <Buttons styles="calc-btn grey" eventHandlerFunc={(e) => eventHandlerFunc(e)} value="4" />
          <Buttons styles="calc-btn grey" eventHandlerFunc={(e) => eventHandlerFunc(e)} value="5" />
          <Buttons styles="calc-btn grey" eventHandlerFunc={(e) => eventHandlerFunc(e)} value="6" />
          <Buttons styles="calc-btn orange" eventHandlerFunc={(e) => eventHandlerFunc(e)} value="-" />
          <Buttons styles="calc-btn grey" eventHandlerFunc={(e) => eventHandlerFunc(e)} value="1" />
          <Buttons styles="calc-btn grey" eventHandlerFunc={(e) => eventHandlerFunc(e)} value="2" />
          <Buttons styles="calc-btn grey" eventHandlerFunc={(e) => eventHandlerFunc(e)} value="3" />
          <Buttons styles="calc-btn orange" eventHandlerFunc={(e) => eventHandlerFunc(e)} value="+" />
          <Buttons styles="calc-btn zero grey" eventHandlerFunc={(e) => eventHandlerFunc(e)} value="0" />
          <Buttons styles="calc-btn grey" eventHandlerFunc={(e) => eventHandlerFunc(e)} value="." />
          <Buttons styles="calc-btn orange" eventHandlerFunc={(e) => eventHandlerFunc(e)} value="=" />
        </div>
      );
    }
}

export default Calculator;
