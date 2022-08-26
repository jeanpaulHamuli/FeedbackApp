import React from 'react'
import propTypes from 'prop-types'

function Header({ text }) {
  return (
    <header>
        <div className='container'>
            <h1>{ text }</h1>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback UI'
}

Header.propTypes = {
    text: propTypes.string
}

export default Header

