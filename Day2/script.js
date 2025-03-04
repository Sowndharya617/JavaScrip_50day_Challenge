function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    // Improved calculations for smooth movement
    const hourDeg = (hours % 12) * 30 + minutes * 0.5;
    const minuteDeg = minutes * 6 + seconds * 0.1;
    const secondDeg = seconds * 6;
  
    // Apply transformations
    document.getElementById('hour-hand').style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    document.getElementById('minute-hand').style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    document.getElementById('second-hand').style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
  
    // Update digital time
    document.getElementById('digital-time').textContent = now.toLocaleTimeString();
  }
  
  // Update every second
  setInterval(updateClock, 1000);
  updateClock();
  
  // Theme toggle functionality
  document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
  
    // Store theme preference in local storage
    if (document.body.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
  
  // Apply theme from localStorage on load
  window.onload = function () {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-theme");
    }
  };
  
