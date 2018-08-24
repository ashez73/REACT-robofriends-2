import React from 'react';
const Card = ({searchfield}) => {
  return (
    <div className ='w5 tc dib br3 pa1'>
      <img alt='robo' src = {`https://robohash.org/${searchfield}?size=250x250`}/>
        <h2 >{searchfield}</h2>
    </div>
  );
}
export default Card;