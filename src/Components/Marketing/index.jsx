import {  Suspense, useEffect, useRef } from "react";
// const {mount} = lazy(async () => await import("marketingMF/MarketingApp"));
import {mount} from "marketingMF/MarketingApp"; 

const Marketing = () => {
    const mfMarketingRef = useRef(null); 
    console.log("Marketing component loaded", mount);
    useEffect(() => {
        if (mfMarketingRef.current) {
            mount(mfMarketingRef.current);
        }
    }, []);
  return (
    <Suspense fallback={<div>Loading Marketing...</div>}>
    <div ref={mfMarketingRef}/>
    </Suspense>
  )
}

export default Marketing