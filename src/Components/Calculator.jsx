import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import "./Calculator.css";
import { useState } from "react";
import PropTypes from "prop-types";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: (theme.palette.mode = "#bbbcd3"),
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.primary,
}));



export default function Calculator() {
  
  const show_value = () => {
    if (result !== undefined && result !== null  ) {
      var res=result +currentResult;
       
      setResult(res);
     // console.log(res);
      
      // if (true) {
      //   //alert(eval(last_result));
      // }
      // else {
      //   //alert(last_result);
      // }
    }
    else
    {
      alert('ورودی نامعتبر');
    }
  }

  const handleClick_op = (e) => {
    var value = e.currentTarget.value;
    //console.log(e.currentTarget.value);
    var res=result +currentResult;
    switch (value) {
      case "=":       
        setResult(res);
        setCurrentResult(0);   
        setCurrentResult(show_value);       
        break;
      case "-":
        // result=setResult(Number(result).toFixed(1));
        setResult(res);
        setResult(result+"-");
        break;
      case "+":
        setResult(res);
        setResult(result+"+");
        break;
      case "*":
        setResult(res);
        setResult(result+"*");
        break;
      case "/":
        setResult(res);
        setResult(result+"/");
        break;
      case ".":
        setResult(res);
        setResult(result+".");
        // if (!isNaN(+value)) {

        // }
        //  var char=".";
        //  debugger
        //  if (!result.includes(char)) {
        //esult=setResult(Number(result).toFixed(1));
        // }
        break;
      // default:
      //   setResult("");
      //   break;
    }
  }

  const handleClick_set_values = (e) => {
    var value = e.currentTarget.value;
    //console.log(e.currentTarget.value);

   // setCurrentResult(value);     
    


    if (result=="") {
      setResult(value);    
      setCurrentResult(value);   
      
    }
    else{
      setCurrentResult(value);     
    }
  }


 
  const [currentResult, setCurrentResult] = useState(0);
  const [result, setResult] = useState("");
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <br />
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <Item>
          <TextField
            step={0.01}
focused={true}
            className="result_box_class"
            id="result_box"
            label={result}
            variant="outlined"            
            value={currentResult}
          />
        </Item>
        <Item>
          <Grid
            container
            spacing={{ xs: 12, md: 12 }}
            columns={{ xs: 12, sm: 12, md: 12 }}
          >
            <Grid item xs={12} sm={12} md={12} key="AC">
              <Button className="calc_btn_class" variant="contained" key="AC" onClick={() => { setResult("");setCurrentResult(0); }}>
                AC
              </Button>
            </Grid>
          </Grid>
        </Item>
        <Item>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {Array.from(Array(10)).map((_, index) => (
              <Grid item xs={2} sm={3} md={3} key={index}>
                <Button
                  onClick={handleClick_set_values}
                  className="calc_btn_class"
                  variant="contained"
                  key={index}
                  value={index}
                >
                  {index}
                </Button>
              </Grid>
            ))}
            <Grid item xs={2} sm={3} md={3}>
              <Button
                onClick={handleClick_op}
                className="calc_btn_class"
                variant="contained"
                key="."
                value="."
              >
                .
              </Button>
            </Grid>

            <Grid item xs={2} sm={3} md={3}>
              <Button
                onClick={handleClick_op}
                className="calc_btn_class"
                variant="contained"
                key="+"
                value="+"
              >
                +
              </Button>
            </Grid>
            <Grid item xs={2} sm={3} md={3}>
              <Button
                onClick={handleClick_op}
                className="calc_btn_class"
                variant="contained"
                key="-"
                value="-"
              >
                -
              </Button>
            </Grid>
            <Grid item xs={2} sm={3} md={3} key="*">
              <Button
                onClick={handleClick_op}
                className="calc_btn_class"
                variant="contained"
                key="*"
                value="*"
              >
                *
              </Button>
            </Grid>
            <Grid item xs={2} sm={3} md={3} key="/">
              <Button
                onClick={handleClick_op}
                className="calc_btn_class"
                variant="contained"
                key="/"
                value="/"
              >
                /
              </Button>
            </Grid>
            <Grid item xs={2} sm={3} md={3}>
              <Button
                onClick={handleClick_op}
                className="calc_btn_class"
                variant="contained"
                key="="
                value="="
              >
                =
              </Button>
            </Grid>
            {/* <Grid item xs={2} sm={3} md={3}>
              <Button className="calc_btn_class" variant="contained" key=".">
                .
              </Button>
            </Grid>
            <Grid item xs={2} sm={3} md={3}>
              <Button className="calc_btn_class" variant="contained" key="+">
                +
              </Button>
            </Grid>
            <Grid item xs={2} sm={3} md={3}>
              <Button className="calc_btn_class" variant="contained" key="-">
                -
              </Button>
            </Grid>
            <Grid item xs={2} sm={3} md={3}>
              <Button className="calc_btn_class" variant="contained" key="=">
                =
              </Button>
            </Grid> */}
          </Grid>
        </Item>
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
}
