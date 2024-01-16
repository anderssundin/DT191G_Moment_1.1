// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Hämta in datum för att skriva ut aktuellt år till copyright
const date = new Date();
const copyright = date.getFullYear();
const copyrightEl = document.getElementById('copyright');

copyrightEl.innerText = copyright;
