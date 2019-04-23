import React from 'react'
const Header = (props) => {
  return (
    <header style={styles.header}>
          <h1 style={styles.heading}>Calculate your loan detail</h1>
    </header>
  )
}
const styles = {
  header : {
      height: 80,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 50,
      paddingRight: 50,
      borderBottomColor: '#bbb',
      borderBottomWidth: 1,
      borderBottomStyle: 'solid'
    },
    heading: {
      color: '#00a1e7',
      fontSize: '30px'
    }
}

  export default Header
