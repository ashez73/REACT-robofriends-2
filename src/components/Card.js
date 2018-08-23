import React from 'react';
const Card = ({username, searchfield}) => {
  return (
    <div className ='w5 bg-light-gray tc dib br3 pa3 ma2 grow bw2 shadow-3'>
      <img alt='robo' src = {`https://robohash.org/${searchfield}?size=170x170`}/>
        <h2 >{searchfield}</h2>
    </div>
  );
}
export default Card;