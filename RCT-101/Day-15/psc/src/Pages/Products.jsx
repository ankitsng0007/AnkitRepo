import React from "react";
import {Link,useSearchParams} from "react-router-dom";

export const Products=()=>{
  const [searchparams,setSearchParams] = useSearchParams();
  const [data,setData] = React.useState();
  const [page,setPage] = React.useState();


  React.useEffect(()=>{
    fetch(`https://fakestoreapi.com/products`)
    .then((res)=>res.json())
    .then((res)=>{
      setData(res);
    })
  },[])
  React.useEffect(()=>{
    const params = {page};
    setSearchParams(params);
  },[page]);
    return(
      <>
        <h1>Products</h1>
        <div style={{display:"grid",
                     gridTemplateColumns:"repeat(2,1fr",
                     wwidth:"80%",margin:"auto"}}>
          {data?.map((el)=>(
            <div style={{width:"300px",
                         height:"400px",
                         border:"1px solid #cecece",
                         margin:"auto",
                         borderRadius:"10px",
                         marginTop:"15px"}}>
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