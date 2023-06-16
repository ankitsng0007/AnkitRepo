import React, { useEffect, useState } from 'react';

const useTimeout = () => {
    const [showText,setShowText]  = useState(false);

    useEffect(()=>{
    const id = setTimeout(()=>{
        setShowText((prev)=>!prev);
    },3000);
    return ()=>{
        clearTimeout(id);
    };
},[])

  return showText;
};

export default useTimeout;
