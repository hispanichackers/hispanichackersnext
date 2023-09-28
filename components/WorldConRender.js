import { useState, useEffect } from "react";

export default function WorldRender() {
  const worldArray = ["/static/images/Hack_the_New_World.png", "/static/images/nuevoMundoMasUnido.png", "/static/images/nuevoMundoMasUnido.png","/static/images/todos.png" ]

  const [width, setWidth] = useState(() => {
    // Use a function to initialize the state to avoid issues during SSR
    return typeof window !== 'undefined' ? window.innerWidth : 0;
  });

  const breakpoint = 1024;

  useEffect(() => {
    // Ensure this code only runs on the client side
    if (typeof window !== 'undefined') {
      const handleResizeWindow = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResizeWindow);
      return () => {
        window.removeEventListener("resize", handleResizeWindow);
      };
    }
  }, []); // Empty dependency array ensures it runs once after initial render

  if (width > breakpoint) {
    return (
      <div className="h-full lg:h-max md:row-span-2 md:relative lg:row-span-3 lg:bottom-96 ">
      <img
        className=" lg:h-max lg:w-max lg:absolute lg:mt-72 xl:mt-80"
        src={worldArray[0]}
        alt="Hack the New World"
      />
      </div>
    );
  }

  // Add a fallback return statement or return null if needed
  return null;
}