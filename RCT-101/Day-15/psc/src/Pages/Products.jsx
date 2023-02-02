import React from "react";
import {Link,useSearchParams} from "react-router-dom";
 const getCurrentPageUrl=(value)=>{
  value=Number(value);
  if(typeof value ==="number" && value<=0){
      value=1;
  }
  if(!value){
   value=1;
  }
  return value;
 };
export const Products=()=>{
  const [data,setData] = React.useState([]);
  const [searchparams,setSearchParams] = useSearchParams();
  const initPage = getCurrentPageUrl(searchparams.get("page"));
  const [page,setPage] = React.useState(initPage);
  const limit=2;
  React.useEffect(()=>{
    fetch(`https://fakestoreapi.com/products?limit=${limit}&page=${page}`)
    .then((res)=>res.json())
    .then((res)=>{
      setData(res);
    })
  },[page])
  React.useEffect(()=>{
    let params = {page};
    setSearchParams(params);
  },[page]);
    return(
      <>
        <h1>Products</h1>
        <div style={{display:"grid",
                     gridTemplateColumns:"repeat(2,1fr",
                     wwidth:"80%",margin:"auto"}}>
          {data?.map((el)=>(
            <div key={el.id} style={{width:"300px",
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
        <button disabled={page===1} onClick={()=>setPage(page-1)}>Prev</button>
        <button>{page}</button>
        <button disabled={page===10} onClick={()=>setPage(page+1)}>Prev</button>
      </>
    )
};