// Circle.js :

import '../style/Circle.css'
import '../style/svg.css'

function Circle() {
  return (
    <svg width='100' height='100' viewBox='-50 -50 100 100' className='circle' >
      <circle cx='0' cy='0' r='40' />
    </svg>
  );
}

export default Circle;
//--------------------------------------------------------------
//Cross.js :

import '../style/Cross.css'

function Cross() {
  return (
    <svg width='100' height='100' viewBox='-50 -50 100 100' className='cross'>
    <line x1='-40' y1='-40' x2='40' y2='40' />
    <line x1='-40' y1='40' x2='40' y2='-40' />
  </svg>
  );
}

export default Cross;
//----------------------------------------------------------------
//Result.js :

import '../style/Result.css'

function Result({winner , reset}) {
  return (
    <div className='result' >
     {winner==='CIRCLE' && 'Circle won the game.'} 
     {winner==='CROSS' && 'Cross won the game.'} 
     {winner==='It is a tie!' && 'It is a tie!'} 

     <button onClick={reset} className="btn">Reset</button>
    </div>
  );
}

export default Result;
----------------------------------------------------------------
//Square.js :
import Circle from './Circle';
import Cross from './Cross';
import '../style/Square.css'

function Square({position , value, takeTurn}) {

function handleClick(){
  if (value==="EMPTY") takeTurn(position)
}

  return (
    <div className='square' onClick={handleClick}>
      {value === "CIRCLE" && <Circle />}
      {value === "CROSS" && <Cross />}
    </div>
  );
}

export default Square;
