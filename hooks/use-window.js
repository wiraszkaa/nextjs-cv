import { useState, useEffect } from "react";

const useWindow = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    
    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };
    
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    return { width, height };
};

export default useWindow;