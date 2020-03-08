import React from "react";
import ReactDOM from "react-dom";

//? isareti koyarak color propsunu optional olarak belirliyoruz. Eger koymasaydik bu componenta color props'u string olarak mecbur verilmek zorunda olacakti
interface AppProps {
  color?: string;
}

//Eger constructor icinde state tutmak istiyorsaniz once interface tanimlayacaksiniz.
//Sonra GENERIC olarak class'a yazacaksiniz.
//Ve simdi artik constructor icinde hata almadan kullanabilirsiniz.
// interface AppState {
//   counter: number;
// }

class App extends React.Component<AppProps /*AppState*/> {
  constructor(props: AppProps) {
    super(props);
    //this.state = { counter: 0}
  }

  state = {
    counter: 0
  };

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <h2>React App</h2>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        {this.state.counter}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
