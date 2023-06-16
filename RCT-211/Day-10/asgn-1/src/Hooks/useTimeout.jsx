import React, { useEffect, useState } from 'react';

const useTimeout = (delay) => {
    const [showText,setShowText]  = useState(false);

    useEffect(()=>{
    const id = setTimeout(()=>{
        setShowText((prev)=>!prev);
    },delay);
    return ()=>{
        clearTimeout(id);
    };
},[delay])

  return showText;
};

export default useTimeout;
