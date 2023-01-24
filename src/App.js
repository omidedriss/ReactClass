import logo from './logo.svg';
import './App.css';
const Welcome = (props)=>{
  return(
      <div>
          {props.children}
      </div>
  )
}

function App() {
  return (
    <div className="App">

      hello


     hello {Math.floor(Math.random()*40)}
     <div>
                <Welcome>
                 <h1>Welcome to React World Developer</h1>
                 <h2>test </h2>
    
                </Welcome>
                <p onClick={this.props.handler}>My Name is {this.props.name} and I {this.props.age} years old</p>
            </div>

    </div>
  );
}

export default App;
