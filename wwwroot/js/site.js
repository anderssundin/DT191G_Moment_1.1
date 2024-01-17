

// Hämta in datum för att skriva ut aktuellt år till copyright
const date = new Date();
const copyright = date.getFullYear();
const copyrightEl = document.getElementById('copyright');

copyrightEl.innerText = copyright;
