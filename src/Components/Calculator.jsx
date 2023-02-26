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

const handleClick = (e) => {
  var value = e.currentTarget.value;
  console.log(e.currentTarget.value);
  switch (value) {
    case "-":
      break;
    case "+":
      break;
    case "*":
      break;
    case "/":
      break;
    case ".":
      break;
    default:
      break;
  }
};

export default function Calculator() {
  const [result, setResult] = useState(0);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <br />
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <Item>
          <TextField
            className="result_box_class"
            id="result_box"
            label={result}
            variant="outlined"
            disabled
          />
        </Item>
        <Item>
          <Grid
            container
            spacing={{ xs: 12, md: 12 }}
            columns={{ xs: 12, sm: 12, md: 12 }}
          >
            <Grid item xs={12} sm={12} md={12} key="AC">
              <Button className="calc_btn_class" variant="contained" key="AC">
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
                  onClick={handleClick}
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
                onClick={handleClick}
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
                onClick={handleClick}
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
                onClick={handleClick}
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
                onClick={handleClick}
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
                onClick={handleClick}
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
                onClick={handleClick}
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
