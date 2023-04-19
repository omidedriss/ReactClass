// import logo from './logo.svg';
// import './App.css';
// const Welcome = (props)=>{
//   return(
//       <div>
//           {props.children}
//       </div>
//   )
// }

// function App() {
//   return (
//     <div className="App">

//       hello


//      hello {Math.floor(Math.random()*40)}
//      <div>
//                 <Welcome>
//                  <h1>Welcome to React World Developer</h1>
//                  <h2>test </h2>
    
//                 </Welcome>
//                 <p onClick={this.props.handler}>My Name is {this.props.name} and I {this.props.age} years old</p>
//             </div>

//     </div>
//   );
// }

// export default App;


// import React, { useState } from "react";

// import Wrapper from "./calculator/Wrapper";
// import Screen from "./calculator/Screen";
// import ButtonBox from "./calculator/ButtonBox";
// import Button from "./calculator/Button";

// const btnValues = [
//   ["C", "+-", "%", "/"],
//   [7, 8, 9, "X"],
//   [4, 5, 6, "-"],
//   [1, 2, 3, "+"],
//   [0, ".", "="],
// ];

// const toLocaleString = (num) =>
//   String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

// const removeSpaces = (num) => num.toString().replace(/\s/g, "");

// const App = () => {
//   let [calc, setCalc] = useState({
//     sign: "",
//     num: 0,
//     res: 0,
//   });

//   const numClickHandler = (e) => {
//     e.preventDefault();
//     const value = e.target.innerHTML;

//     if (removeSpaces(calc.num).length < 16) {
//       setCalc({
//         ...calc,
//         num:
//           calc.num === 0 && value === "0"
//             ? "0"
//             : removeSpaces(calc.num) % 1 === 0
//             ? toLocaleString(Number(removeSpaces(calc.num + value)))
//             : toLocaleString(calc.num + value),
//         res: !calc.sign ? 0 : calc.res,
//       });
//     }
//   };

//   const commaClickHandler = (e) => {
//     e.preventDefault();
//     const value = e.target.innerHTML;

//     setCalc({
//       ...calc,
//       num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
//     });
//   };

//   const signClickHandler = (e) => {
//     e.preventDefault();
//     const value = e.target.innerHTML;

//     setCalc({
//       ...calc,
//       sign: value,
//       res: !calc.res && calc.num ? calc.num : calc.res,
//       num: 0,
//     });
//   };

//   const equalsClickHandler = () => {
//     if (calc.sign && calc.num) {
//       const math = (a, b, sign) =>
//         sign === "+"
//           ? a + b
//           : sign === "-"
//           ? a - b
//           : sign === "X"
//           ? a * b
//           : a / b;

//       setCalc({
//         ...calc,
//         res:
//           calc.num === "0" && calc.sign === "/"
//             ? "Can't divide with 0"
//             : toLocaleString(
//                 math(
//                   Number(removeSpaces(calc.res)),
//                   Number(removeSpaces(calc.num)),
//                   calc.sign
//                 )
//               ),
//         sign: "",
//         num: 0,
//       });
//     }
//   };

//   const invertClickHandler = () => {
//     setCalc({
//       ...calc,
//       num: calc.num ? toLocaleString(removeSpaces(calc.num) * -1) : 0,
//       res: calc.res ? toLocaleString(removeSpaces(calc.res) * -1) : 0,
//       sign: "",
//     });
//   };

//   const percentClickHandler = () => {
//     let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
//     let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;

//     setCalc({
//       ...calc,
//       num: (num /= Math.pow(100, 1)),
//       res: (res /= Math.pow(100, 1)),
//       sign: "",
//     });
//   };

//   const resetClickHandler = () => {
//     setCalc({
//       ...calc,
//       sign: "",
//       num: 0,
//       res: 0,
//     });
//   };

//   return (
//     <Wrapper>
//       <Screen value={calc.num ? calc.num : calc.res} />
//       <ButtonBox>
//         {btnValues.flat().map((btn, i) => {
//           return (
//             <Button
//               key={i}
//               className={btn === "=" ? "equals" : ""}
//               value={btn}
//               onClick={
//                 btn === "C"
//                   ? resetClickHandler
//                   : btn === "+-"
//                   ? invertClickHandler
//                   : btn === "%"
//                   ? percentClickHandler
//                   : btn === "="
//                   ? equalsClickHandler
//                   : btn === "/" || btn === "X" || btn === "-" || btn === "+"
//                   ? signClickHandler
//                   : btn === "."
//                   ? commaClickHandler
//                   : numClickHandler
//               }
//             />
//           );
//         })}
//       </ButtonBox>
//     </Wrapper>
//   );
// };

// export default App;