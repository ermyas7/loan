import React, { Component } from 'react'
import axios from 'axios'

import Header from './components/layout/Header'
import Slider from './components/Slider'
import Loader from './components/Loader'
import Result from './components/Result'

////////////////////////////////////////////
////////// different sets of data for
////////// loan and duration selector /////
const data = {
  loan: {
    text: 'Loan Amount',
    min: 500,
    max: 5000,
    appended: 'USD'
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
    isLoading: false,
    interestRate: 0,
    monthlyPayment: {}
  }

  //set duration according to selector data
  setDuration = (duration) => {
    this.setState({duration})
  }

  //set loan according to selector data
  setLoan = (loan) => {
    this.setState({loan})
  }

  ///fetch interest and monthly payment if both loan and duration are set
  fetchLoanDetail = () => {
    let {duration, loan} = this.state;
    if(duration >= 6 && loan >= 500){
      this.setState({isLoading: true})
      let url =
      `https://ftl-frontend-test.herokuapp.com/interest?amount=${loan}&numMonths=${duration}`;
      axios.get(url)
      .then(response => {
        this.setState({isLoading: false})
        this.setState({interestRate: response.data.interestRate})
        this.setState({monthlyPayment: response.data.monthlyPayment})
      })
      .catch(err => {
        console.log(err)
        this.setState({isLoading: false})
      })
    }
  }

  ////check if fetched data is returned from api call
  isResultReady = () => {
    let {duration, loan, isLoading} = this.state;
    return (duration >= 6 && loan >= 500 && !isLoading)? true: false;
  }

  render() {
    let resultData = this.state
    return (
        <div className="App">
          <Header/>
          <div className="mainContainer">
            <Slider data={data.duration}
             setParameter={this.setDuration} 
             fetchLoanDetail={this.fetchLoanDetail}/>
            <Slider data ={data.loan} 
            setParameter={this.setLoan}
            fetchLoanDetail={this.fetchLoanDetail}/>
            {this.state.isLoading &&<Loader/>}
            {
              this.isResultReady() && <Result resultData={resultData}/>
            }
            
          </div>
        </div>
    );
  }
}
export default App
