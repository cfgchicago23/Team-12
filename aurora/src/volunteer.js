// Function to fetch and display contact info
function displayContactInfo() {
  const volunteerElement = document.getElementById("volunteer-1");

  if (volunteerElement) {
    volunteerElement.addEventListener("mouseover", async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/volunteer/1");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        const tooltip = document.createElement("div");
        tooltip.className = "tooltip"; 
        tooltip.textContent = `Name: ${data.name}, Email: ${data.email}, Phone: ${data.phone}`;
      
        tooltip.style.position = "absolute";
        tooltip.style.top = `${volunteerElement.offsetTop - 30}px`; 
        tooltip.style.left = `${volunteerElement.offsetLeft}px`; 
        document.body.appendChild(tooltip);

       
        volunteerElement.addEventListener("mouseout", () => {
          tooltip.remove();
        });
      } catch (error) {
        console.error("Error fetching contact info:", error);
      }
    });
  }
}


document.addEventListener("DOMContentLoaded", displayContactInfo);
