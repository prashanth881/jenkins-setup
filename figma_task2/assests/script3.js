
document.addEventListener('DOMContentLoaded', function() {
    // Initialize intl-tel-input
    const input = document.querySelector("#country");
    window.intlTelInput(input, {
        // options here
        initialCountry: "auto", // Automatically detect the user's country
        geoIpLookup: function(callback) {
            fetch("https://ipinfo.io?token=YOUR_TOKEN") // Replace YOUR_TOKEN with your actual token
                .then(response => response.json())
                .then(data => callback(data.country))
                .catch(() => callback("us")); // Fallback to US if there's an error
        },
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js" // Optional, for formatting
    });
});
