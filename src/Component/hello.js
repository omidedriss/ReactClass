import logo from './logo.svg';
import './App.css';
const Welcome = (props)=>{
  return(
      <div>
          {props.children}
      </div>
  )
}

const hello=(props)=> {
  return (
    <div>
     {/* hello {Math.floor(Math.random()*40)} */}
     <div>
                <Welcome>
                 <h1>Welcome to React World Developer</h1>
                 <h2>test </h2>
    
                </Welcome>
                <h2>test</h2>
                <p onClick={props.handler}>My Name is {props.name} and I {props.age} years old</p>
            </div>
    </div>
  );
}

export default hello;
