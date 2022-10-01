function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}


class CalcButtons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { numbers, handleNum, handleClear, handleDec, handleEq, handleOp } = this.props;
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col-9 numcol" }, /*#__PURE__*/
      React.createElement("button", { id: "clear", value: "clear", onClick: handleClear, className: "clearbtn" }, /*#__PURE__*/React.createElement("h1", { class: "zerotitle" }, "AC")),

      numbers.map(num => {
        return /*#__PURE__*/(

          React.createElement("button", { onClick: handleNum, id: num.name, key: num.name, value: num.value, className: "numbtn" }, /*#__PURE__*/React.createElement("h1", { class: "numtitle" }, num.value)));
      }), /*#__PURE__*/

      React.createElement("button", { id: "zero", value: "0", onClick: handleNum, className: "btnyuge" }, /*#__PURE__*/React.createElement("h1", { class: "zerotitle" }, "0")), /*#__PURE__*/
      React.createElement("button", { id: "decimal", value: ".", onClick: handleDec, className: "numbtn" }, /*#__PURE__*/React.createElement("h1", { class: "numtitle" }, "."))), /*#__PURE__*/

      React.createElement("div", { className: "col-3 funccol" }, /*#__PURE__*/
      React.createElement("button", { id: "divide", value: "/", onClick: handleOp, className: "funcbtn" }, /*#__PURE__*/React.createElement("h1", null, "\xF7")), /*#__PURE__*/
      React.createElement("button", { id: "multiply", value: "*", onClick: handleOp, className: "funcbtn" }, /*#__PURE__*/React.createElement("h1", null, "\xD7")), /*#__PURE__*/
      React.createElement("button", { id: "subtract", value: "-", onClick: handleOp, className: "funcbtn" }, /*#__PURE__*/React.createElement("h1", null, "-")), /*#__PURE__*/
      React.createElement("button", { id: "add", value: "+", onClick: handleOp, className: "funcbtn" }, /*#__PURE__*/React.createElement("h1", null, "+")), /*#__PURE__*/
      React.createElement("button", { id: "equals", value: "=", onClick: handleEq, className: "funcbtn" }, /*#__PURE__*/React.createElement("h1", null, "="))))));




  }}
;

const Input = props => {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("div", { className: "displayinput" },
    props.children)));



};

const Output = props => {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("div", { id: "display", className: "displayoutput" },
    props.children)));



};


const Display = props => {

  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("div", { className: "w-100" }), /*#__PURE__*/
    React.createElement("div", { className: "col-12 displaycol" }, /*#__PURE__*/
    React.createElement(Input, null, props.eq), /*#__PURE__*/
    React.createElement(Output, null, props.currNum))));



};


const CalcContainer = props => {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("div", { className: "row" }, /*#__PURE__*/
    React.createElement("div", { className: "calc-contain rounded py-4 calc shadow-lg" }, /*#__PURE__*/
    React.createElement(Display, { currNum: props.currNum, eq: props.eq }), /*#__PURE__*/
    React.createElement(CalcButtons, { numbers: props.numbers, handleDec: props.handleDec, handleEq: props.handleEq, handleNum: props.handleNum, handleClear: props.handleClear, handleOp: props.handleOp }))))));





};



class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleDec",




















    () => {
      let op = /[/*-+]$/;
      if (this.state.calcd === true || this.state.currNum === '0') {
        this.setState({
          currNum: '0.',
          eq: this.state.prevAns + '0.',
          calcd: false });

      } else if (op.test(this.state.eq)) {
        this.setState({
          currNum: '0.',
          eq: this.state.eq + '0.' });

      } else {
        this.setState({
          currNum: this.state.currNum.includes('.') ?
          this.state.currNum :
          this.state.currNum + '.',
          eq: this.state.currNum.includes('.') ?
          this.state.eq :
          this.state.eq + '.' });

      }
    });_defineProperty(this, "handleNum",

    e => {
      if (this.state.currNum === '0' || this.state.calcd === true) {
        this.setState({
          currNum: e.currentTarget.value,
          eq: e.currentTarget.value });

      } else if (this.state.currNum.match(/[/*-+]/)) {
        this.setState({
          currNum: e.currentTarget.value,
          eq: this.state.eq + e.currentTarget.value });

      } else {
        this.setState({
          currNum: this.state.currNum + e.currentTarget.value,
          eq: this.state.eq + e.currentTarget.value });

      }
    });_defineProperty(this, "handleClear",


    e => {
      e.preventDefault();
      this.setState({
        currNum: '0',
        prevAns: '',
        eq: '',
        calcd: false });

    });_defineProperty(this, "handleOp",


    e => {
      if (this.state.eq.includes('=')) {
        this.setState({
          eq: this.state.prevAns + e.currentTarget.value,
          currNum: e.currentTarget.value,
          calcd: false });

      } else if (this.state.currNum.match(/[/*\-+]/) && this.state.eq.match(/[/*\-+]$/)) {
        this.setState({
          currNum: e.currentTarget.value,
          eq: this.state.eq.slice(0, -1) + e.currentTarget.value });


      } else {
        this.setState({
          currNum: e.currentTarget.value,
          prevAns: this.state.eq,
          eq: this.state.eq + e.currentTarget.value });

      }
      /* console.log(this.state.currNum) */
    });_defineProperty(this, "handleEq",

    e => {
      let op = /[/*-+]$/;
      if (this.state.calcd === false) {
        let answer = this.state.eq;
        if (op.test(answer)) {
          answer = answer.slice(0, -1);
        }
        answer = Math.round(10000000 * eval(answer)) / 10000000;
        this.setState({
          currNum: answer.toString(),
          prevAns: answer,
          eq: this.state.eq + '=' + answer,
          calcd: true });

      }
    });this.state = { currNum: '0', prevAns: '', eq: '', calcd: false, numbers: [{ name: 'nine', value: 9 }, { name: 'eight', value: 8 }, { name: 'seven', value: 7 }, { name: 'six', value: 6 }, { name: 'five', value: 5 }, { name: 'four', value: 4 }, { name: 'three', value: 3 }, { name: 'two', value: 2 }, { name: 'one', value: 1 }] };}




  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/

      React.createElement(CalcContainer, {
        numbers: this.state.numbers,
        handleNum: this.handleNum,
        eq: this.state.eq,
        currNum: this.state.currNum,
        handleClear: this.handleClear,
        handleOp: this.handleOp,
        handleDec: this.handleDec,
        handleEq: this.handleEq })));


  }}



ReactDOM.render( /*#__PURE__*/
React.createElement(App, null),
document.getElementById('root'));