import { useEffect, useRef } from "react";

const useDebounce = (func,delay)=>{
    const debounceId = useRef();
    useEffect (()=>{
        clearTimeout(debounceId.current);
        let newDebounceId = setTimeout(()=>{
            func();
        },delay);
        debounceId.current = newDebounceId;
    },[delay,func]);
};
export {useDebounce};