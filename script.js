function updateGreeting() {
  const now = new Date();
  const hours = now.getHours();
  let greeting;

  if (hours < 12) {
    greeting = "Good Morning 🌞";
  } else if (hours < 18) {
    greeting = "Good Afternoon ☀️";
  } else {
    greeting = "Good Evening 🌙";
  }

  document.getElementById("dynamic").innerText =
    greeting + " | Current Time: " + now.toLocaleTimeString();
}

updateGreeting();