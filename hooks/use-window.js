import { useState, useEffect } from "react";

const useWindow = () => {
    const [width, setWidth] = useState(1920);
    const [height, setHeight] = useState(1080);
    
    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };
    
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    return { width, height };
};

export default useWindow;