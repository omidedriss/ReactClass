import "./button.css"
const MyButton = (props) => {

    

    if(props.type=="Success")
    {
        return(
            <button className="Success">test</button>
        );
    }
    else if(props.type=="Danger")
    {
    return(
        <button className="Danger" >test</button>
    )
}


    
}
export default MyButton;