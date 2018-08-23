import React from 'react';
import 'tachyons';

const InputBox =({searchChange}) =>{
  return (
  <div className = 'pa2'>
  <input className = 'p3 bt bl' type = 'text' placeholder = "Search" onChange ={searchChange}></input>
  </div>
  );
}
export default InputBox;