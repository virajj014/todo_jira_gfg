import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <header className='header'>
      <div className='header__title'>
        <h1>Active Sprints</h1>
      </div>

      <div className='header__actions'>
        <button className='complete-sprint-btn'>Complete Sprint</button>
        <button className='more-options-btn'>...</button>
      </div>
    </header>
  )
}

export default Header