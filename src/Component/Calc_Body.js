import { Button } from "./Button";
import {Input} from "./Input"
import {Label} from "./Label"
import "./MyStyle.css"
import React, { useState } from "react";

const Calc_Body=(props)=>{

     const [input_text, setInput_text] = useState("");
     const [label_text, setlabel_text] = useState("");
     const [num1, setnum1] = useState("");
     const [num2, setnum2] = useState("");
     const [operand, setoperand] = useState("");
     
     const btn_num_click=(e)=>{
        const my_data=e.target.value;
        setInput_text(input_text+""+my_data);
        setnum1(input_text+""+my_data);
    }
    const btn_Operan_click=(e)=>{
        setoperand(e.target.value);
        
        if(num2=="")
        {
            
            setnum2(num1);
            setlabel_text(num1+""+e.target.value);
            setnum1("");
            setInput_text("");
        }else
        {
            calculate_Result();
        }
       
       
      
}
const calculate_Result=()=>{
    let result
    if(num1!="" && num2!="" && operand!="")
    {
        
        switch(operand)
        {
            case '+': result=parseFloat(num2)+parseFloat(num1); break;
            case '-': result=parseFloat(num2)-parseFloat(num1); break;
            case '/': result=parseFloat(num2)/parseFloat(num1); break;
            case '*': result=parseFloat(num2)*parseFloat(num1); break;

            
      
        }
        
        setInput_text("")
        setlabel_text(num2+""+operand+num1+"="+result)
        setnum1(result)
        setnum2("")
        
    }


}
    
return(
    
    <table border="0" className="table">
        <tbody>
        <tr>
            <td colSpan="4">
               <Label label_text={label_text}></Label>
            </td>
        </tr>
        <tr>
            <td colSpan="3">
                <Input input_text={input_text}></Input>
            </td>
            <td>
              
            <Button  onClick={btn_Operan_click}  text="/"></Button>
            </td>
        </tr>
        <tr>
            <td>
                <Button onClick={btn_num_click} text="1"></Button>
            </td>
            <td>
                <Button onClick={btn_num_click} text="2"></Button>
            </td>
            <td>
                <Button onClick={btn_num_click}  text="3"></Button>
            </td>
            <td>
                <Button onClick={btn_Operan_click} text="+"></Button>
            </td>
        </tr>
        <tr>
            <td>
                <Button onClick={btn_num_click}  text="4"></Button>
            </td>
            <td>
                <Button onClick={btn_num_click}  text="5"></Button>
            </td>
            <td>
                <Button onClick={btn_num_click}  text="6"></Button>
            </td>
            <td>
                <Button onClick={btn_Operan_click} text="-"></Button>
            </td>
        </tr>
        <tr>
            <td>
                <Button onClick={btn_num_click}  text="7"></Button>
            </td>
            <td>
                <Button onClick={btn_num_click}  text="8"></Button>
            </td>
            <td>
                <Button onClick={btn_num_click}  text="9"></Button>
            </td>
            <td>
                <Button onClick={btn_Operan_click} text="*"></Button>
            </td>
        </tr>
        <tr>
            <td>
                <Button onClick={btn_num_click}  text="0"></Button>
            </td>
            <td>
                <Button onClick={btn_num_click}  text="00"></Button>
            </td>
            <td>
                <Button onClick={btn_num_click}  text="000"></Button>
            </td>
            <td>
                <Button onClick={btn_num_click} text="."></Button>
            </td>
        </tr>
        <tr>
            <td colSpan="4">
            <Button onClick={btn_Operan_click} text="="></Button>
            </td>
            
        </tr>
        </tbody>
    </table>
)
}
export default Calc_Body;