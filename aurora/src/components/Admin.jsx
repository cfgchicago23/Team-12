import React, { useEffect } from "react"
import {Link} from "react-router-dom";
import { useState } from 'react';



export function Admin() {

    const [name, setName] = useState([]);

    const getVolunteers = async () => {
      // prevent default form submission
    
        try {
          const response = await fetch("http://127.0.0.1:4000/retrieve-volunteers", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            }
          });
    
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
 
          setName(await response.json())
        } catch (error) {
          console.error(
            "There was a problem with the fetch operation:",
            error.message
          );
        }
      };
    
    useEffect(() => {
        getVolunteers();
    }, [])

  return (
    <div>
        <text>help  </text>
        {name.map((data) => {
            return(
            <li>{data.title}</li>
            )
        })}
    </div>
  );
}