import React from "react";
import {Link} from "react-router-dom";

export const Products=()=>{
  const [data,setData] = React.useState();
  React.useEffect(()=>{
    fetch(`https://fakestoreapi.com/products`)
    .then((res)=>res.json())
    .then((res)=>{
      setData(res);
    })
  },[])
    return(
      <>
        <h1>Products</h1>
        <div style={{display:"grid",
                     gridTemplateColumns:"repeat(2,1fr",
                     wwidth:"80%",margin:"auto"}}>
          {data?.map((el)=>(
            <div style={{display:"flex",
                         flexDirection:"column",
                         alignItems:"centre",
                         border:"1px solid",
                         margin:"auto",
                         padding:"10px"
                         }}>
              <img src={el.image} alt="item-pic"
              style={{width:"200px",height:"200px"}}/>
              <h3>{el.title}</h3>
              <h3>Rs. {el.price}</h3>
              <Link to={`/${el.id}`}>More Details</Link>
            </div>
          ))}
        </div>
      </>
    )
};