import React,{useState,useEffect} from "react";
import axios from "axios";
const Apione=(props)=>{
    const[post,setpost]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.ir/posts").then((Response)=>{
            console.log(Response.data);
            const posts=Response.data.slice(0,7);
            const postupdate=posts.map((postitem)=>{
                return{
                    ...postitem,
                    clickme :"ادامه متن",
                };
            });
            setpost(postupdate);
        });
    },[]);
    
    return(
        <div style={{flexDirection:"row"}}>
            {
            post.map((p)=> {
             return <p>'{p.body}<br></br>"click me : ادامه مقاله"
                  </p>
            }
            )}
       
        </div>

    );
};

export default Apione;