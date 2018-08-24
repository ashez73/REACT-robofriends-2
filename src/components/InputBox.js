import React from 'react';
import 'tachyons';

const InputBox =({searchChange}) =>{
  return (
  <div className = 'pa2'>
  <input className = 'p3 bt bl' type = 'text' maxLength="20" placeholder = "Search" onChange ={searchChange} autoFocus></input>
  </div>
  );
}
export default InputBox;