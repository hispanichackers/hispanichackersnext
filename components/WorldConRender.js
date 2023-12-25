import { useState, useEffect } from "react";

export default function WorldRender() {
  const worldArray = ["/static/images/Hack_the_New_World.webp", "/static/images/nuevoMundoMasUnido.webp", "/static/images/hispanicHacker.webp","/static/images/todos.webp" ]
  const texas = "/static/images/texas.webp";


  const [width, setWidth] = useState(() => {
    // Use a function to initialize the state to avoid issues during SSR
    return typeof window !== 'undefined' ? window.innerWidth : 0;
  });

  const [selectedImageUrl, setSelectedImageUrl] = useState('');

  useEffect(() => {
    // Function to pick a random URL from the array
    const pickRandomImageUrl = () => {
      const randomIndex = Math.floor(Math.random() * worldArray.length);
      return worldArray[randomIndex];
    };

    // Set the selected image URL on page load
    setSelectedImageUrl(pickRandomImageUrl());
  }, []);

  const breakpoint = 768;

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
      <div className="h-full lg:h-max md:row-span-3 md:relative lg:row-span-3 lg:bottom-96 ">
      <img
        className="lg:h-max lg:w-max lg:absolute md:-mt-20 lg:mt-72"
        src={selectedImageUrl}
        alt="Hack the New World"
      />
      </div>
    );
  } else {
    return (
      <div className="h-full w-full mt-10 flex justify-center ">
      <img
        src={texas}
        alt="Hack the New World"
      />
      </div>
    );
  }

  // Add a fallback return statement or return null if needed
  return null;
}