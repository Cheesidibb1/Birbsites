// Get all cookies
const cookies = document.cookie;


// Set a new cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Delete a cookie
function deleteCookie(name) {
    document.cookie.deleteCookie(name);
}

// Check if a cookie exists
function checkCookie(name) {
    return document.cookie.includes(name);
}