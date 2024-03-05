import React, {useState, useEffect} from 'react';
import Home from "./Home";
import LandingPages from "./LandingPages";

const Main = () => {
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
      // Simulate a delay before redirecting to the actual page
      const timeout = setTimeout(() => {
        setRedirect(true);
      }, 3000); // Redirect after 3 seconds (3000 milliseconds)
  
      // Clear the timeout when the component unmounts
      return () => clearTimeout(timeout);
    }, []);
    return (
        <>
         {!redirect && <LandingPages />}
         {redirect && <Home />}
        </>
    );
}

export default Main;