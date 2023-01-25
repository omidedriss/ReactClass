export function Welcome() {
    return(<div>Welcome</div>)
    
};

 export function Hello(props) {
   return (
    <div>
        hello {props.name} is , age{props.age}= {Math.floor(Math.random()*40)};
        <Welcome/>

    </div>
   ) 
};


