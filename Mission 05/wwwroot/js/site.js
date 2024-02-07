// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    // Function to handle form submission
    $("#pricingForm").submit(function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the values of numHours and rate inputs
        const numHours = parseFloat($("#numHours").val());
        const rate = parseFloat($("#rate").val().replace("$", ""));

        // Perform the multiplication
        let total = numHours * rate;

        // Update the value of the total input box
        $("#total").val(`$${total.toFixed(2)}`); // Display the total with 2 decimal places
    });
});
