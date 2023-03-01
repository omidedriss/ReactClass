const List= ()=>{
    const nums=[1,5,10,15,20];

    const itemlist=nums.map((x,index)=>{
        return(
            <li key={index}>{x}</li>
        )
    })
    return(
        <div>
            <ul>{itemlist}</ul>
        </div>
    )
}
export default List;