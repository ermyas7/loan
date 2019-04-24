import React, { Component } from 'react';
import Header from './components/layout/Header'
import Slider from './components/Slider'
import Loader from './components/Loader'

const data = {
  loan: {
    text: 'Loan Amount',
    min: 500,
    max: 5000,
    appended: '$'
  },
  duration: {
    text: 'Loan Duration',
    min: 6,
    max: 24,
    appended: 'months'
  }
}

class App extends Component {
  state = {
    duration: 0,
    loan: 0,
  }

  setDuration = (duration) => {
    this.setState({duration})
  }

  setLoan = (loan) => {
    this.setState({loan})
  }
  render() {
    console.log(this.state)
    return (
        <div className="App">
          <Header/>
          <div className="mainContainer">
            <Slider data={data.duration} setParameter={this.setDuration}/>
            <Slider data ={data.loan} setParameter={this.setLoan}/>
            <Loader/>
          </div>
        </div>
    );
  }
}
export default App
