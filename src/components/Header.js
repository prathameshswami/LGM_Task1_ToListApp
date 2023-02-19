import React from 'react'
import PropTypes from 'prop-types'


export default function Header(props) {

  let headerStyle = {
    height : "7vh",
    color: "white",
    padding : "2px",
    fontSize:"27px",
    backgroundColor: "black"
  }

  return (
    <div className='text-center bg-dark' style={headerStyle}>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-center" style={{color:"white"}}> */}
        <div className="heading">
            <strong>{props.title}</strong>
        </div>
          
      {/* </nav> */}
    </div>
  )
}

Header.defaultProps = {
  title : "your title Here"
}
Header.propTypes = {
  title : PropTypes.string,
  searchBar : PropTypes.bool.isRequired
}