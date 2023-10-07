import React from "react"
import {Link} from "react-router-dom";

export function Admin() {

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
    
          const responseData = await response.json();
          console.log(responseData);
          return responseData;
        } catch (error) {
          console.error(
            "There was a problem with the fetch operation:",
            error.message
          );
        }
      };

  return (
    <div>
        <text>help  {getVolunteers()}</text>
    </div>
  );
}