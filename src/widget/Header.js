import React from 'react';

const Header = (props) => {
  // parse datetime value in milliseconds to date object in seconds
  const dateTime = new Date(props.datetime * 1000);
  const day = dateTime.toLocaleDateString('en', { weekday: 'long' });
  const time = dateTime.toLocaleTimeString('en', { hour: '2-digit', minute:'2-digit' });

  return (
    <div className="header__container">
      <div className="header__location">{props.location}</div>
      <div className="header__time">{day} {time}</div>
      <div className="header__summary">{props.summary}</div>
    </div>
  )
}

export default Header;