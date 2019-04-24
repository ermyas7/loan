import React, {Component} from 'react'
import '../css/slider.css'
class Slider extends Component{
  state = {
    value: 0
  }
  changeHandler = (evt) => {
    let {value} = evt.target
    this.setState({value})
    this.props.setParameter(value)
    this.props.fetchLoanDetail()
  }
  render(){
    let {data} = this.props;
    return(
      <div className="slider-box">
        <label htmlFor="loan" style={loanText}>
            {data.text}
            {this.state.value >= data.min? 
              `  :--   ${this.state.value}${data.appended}`: null}
        </label>
        <input type="range"
         min={data.min}
         max={data.max}
         value = {this.state.value}
         onChange = {this.changeHandler}
         className="slider"
         id="loan"/>
    </div>
    )
  }
}

const loanText = {
  fontSize: '25px',
  color: '#00a1e7',
  display: 'inline-block',
  marginBottom: '10px'
}

export default Slider;
