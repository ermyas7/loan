import React from 'react'

const  Result = ({resultData}) => {
    let {currency, amount} = resultData.monthlyPayment  
  return (
    <div style={summaryContainer}>
        <h2 style={summaryHeading}>Your Loan Summary</h2>
        <div style={summaryContent}>
            <p style={summaryText}>
                Loan duration {` :- ${resultData.duration} months`} 
            </p>
            <p style={summaryText}>
                Loan amount {` :- ${resultData.loan} ${currency}`} 
            </p>
            <p style={summaryText}>
                Interest Rate {`    :-    ${resultData.interestRate} Annually`} 
            </p>
            <p style={summaryText}>
                Monthly Payment {`    :-    ${amount} ${currency}`} 
            </p>
        </div>
    </div>
  )
}

const summaryContainer = {
    backgroundImage: 'linear-gradient(to bottom right,#1d9fd9, #004d87)',
    color: '#fff',
    padding: '20px',
    boxShadow: '0 20px 60px rgba(0,0,0,.1)',
    marginTop: '50px'
}

const summaryHeading = {
    fontSize: '30px',
    fontWeight: '300',
    textAlign: 'center'
}

const summaryContent = {
    marginTop: '6px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

const summaryText = {
    marginTop: '6px',
    fontSize: '18px',
    fontWeight: '500',
}

export default Result