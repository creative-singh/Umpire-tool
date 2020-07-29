import React from 'react';
import './Button.css';

const Button = (props) => {
  const { title, clickable } = props;
  return (
    <button className='btn' onClick={clickable}>{title}</button>
  );
};

export default Button;