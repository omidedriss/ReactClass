function Learn1() {
    return(
        <div>
            Learn Test 1
        </div>
    )
    
}

const Learn2 = ()=>{
  return(
      <div>
         Learn Test 2
      </div>
  )
}

const Learn3=()=> {
  return (
    <div>
     {/* hello {Math.floor(Math.random()*40)} */}
     <div>
                <Learn2/>
                <p>test learn 3</p>
              
            </div>
    </div>
  );
}

export default Learn3;
