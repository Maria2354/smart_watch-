

// Select the existing order form
let orderForm = document.querySelector("#order form");

// Create a message for order confirmation
let orderMessage = document.createElement("p");
orderMessage.id = "order-message";
orderMessage.style.fontWeight = "bold";

// Add the message below the form
orderForm.appendChild(orderMessage);


/* TABLE ROW */

// Select all rows from the specifications table
let tableRows = document.querySelectorAll(
    "#specifications tbody tr"
);

// Highlight the row when the mouse moves over it
tableRows.forEach(function (row) {

    row.addEventListener("mouseover", function () {
        row.style.backgroundColor = "#cce5ff";
    });

    // Restore the normal color when the mouse leaves
    row.addEventListener("mouseout", function () {
        row.style.backgroundColor = "";
    });

});


/* LIGHT / DARK MODE SWITCHER */

// Create the theme button
let themeButton = document.createElement("button");

themeButton.textContent = "Toggle Light/Dark Mode";
themeButton.id = "theme-toggle";
themeButton.type = "button";

// Add the button to the page
document.body.appendChild(themeButton);

// Change the theme when the button is clicked
themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "Light Mode";
    } else {
        themeButton.textContent = " Dark Mode";
    }

});


/*INTERACTIVE ACCESSORIES TOTAL CALCULATOR */

//  accessories 
let accessoriesHeading = document.createElement("h3");
accessoriesHeading.textContent = "Optional Accessories";

// Create the accessories list
let accessoriesList = document.createElement("div");

accessoriesList.innerHTML = `
    <p>
        <label>
            <input type="checkbox" class="accessory" value="500">
            Extra Charger - Rs. 500
        </label>
    </p>

    <p>
        <label>
            <input type="checkbox" class="accessory" value="800">
            Watch Strap - Rs. 800
        </label>
    </p>

    <p>
        <label>
            <input type="checkbox" class="accessory" value="1200">
            Protective Case - Rs. 1200
        </label>
    </p>
`;

//total price
let totalPrice = document.createElement("p");
totalPrice.id = "total";
totalPrice.textContent = "Accessories Total: Rs. 0";

// Add the accessories before the submit button
let submitButton = orderForm.querySelector(
    'button[type="submit"]'
);

orderForm.insertBefore(accessoriesHeading, submitButton);
orderForm.insertBefore(accessoriesList, submitButton);
orderForm.insertBefore(totalPrice, submitButton);

// Select all accessory checkboxes
let accessoryCheckboxes = document.querySelectorAll(".accessory");

// Calculate the total price
function calculateTotal() {

    let total = 0;

    accessoryCheckboxes.forEach(function (checkbox) {

        if (checkbox.checked) {
            total = total + parseInt(checkbox.value);
        }

    });

    totalPrice.textContent = "Accessories Total: Rs. " + total;
}

//change 
accessoryCheckboxes.forEach(function (checkbox) {

    checkbox.addEventListener("change", calculateTotal);

});


/* BIRTH YEAR AND AGE DISCOUNT */

// Create the birth year label
let birthYearLabel = document.createElement("label");
birthYearLabel.textContent = "Birth Year:";
birthYearLabel.htmlFor = "birth-year";

// Create the birth year input
let birthYearInput = document.createElement("input");
birthYearInput.type = "text";
birthYearInput.id = "birth-year";
birthYearInput.placeholder = "Enter your birth year";

// Create a discount message
let discountMessage = document.createElement("p");
discountMessage.id = "discount-message";

// Add the new fields before the submit button
orderForm.insertBefore(birthYearLabel, submitButton);
orderForm.insertBefore(birthYearInput, submitButton);
orderForm.insertBefore(discountMessage, submitButton);


/* READ MORE / READ LESS */

// Select the benefits section
let benefitsSection = document.querySelector(
    "main > section:not([id])"
);

// Select its heading
let benefitHeading = benefitsSection.querySelector("h2");

// Create extra text
let extraText = document.createElement("p");

extraText.textContent =
    "SmartWatch helps you monitor your daily activity, " +
    "stay connected to your phone, and manage your routine. " +
    "Choose the features that best fit your everyday needs.";

// Hide the extra text initially
extraText.style.display = "none";

// Create the Read More button
let readMoreButton = document.createElement("button");
readMoreButton.textContent = "Read More";
readMoreButton.type = "button";

// Add the text and button after the heading
benefitHeading.after(extraText);
extraText.after(readMoreButton);

// Show or hide the extra text when clicked
readMoreButton.addEventListener("click", function () {

    if (extraText.style.display === "none") {

        extraText.style.display = "block";
        readMoreButton.textContent = "Read Less";

    } else {

        extraText.style.display = "none";
        readMoreButton.textContent = "Read More";

    }

});


/* LIVE CATEGORY FILTER */

// Select the features section
let featuresSection = document.getElementById("features");

// Select all feature articles
let featureArticles = featuresSection.querySelectorAll("article");

// Give each article a category
featureArticles[0].dataset.category = "Health";
featureArticles[1].dataset.category = "Battery";
featureArticles[2].dataset.category = "Connectivity";
featureArticles[3].dataset.category = "Connectivity";

// Create a box for the filter buttons
let filterBox = document.createElement("div");
filterBox.style.margin = "15px 0";

// Add filter buttons
filterBox.innerHTML = `
    <button type="button" data-filter="All">All</button>
    <button type="button" data-filter="Health">Health</button>
    <button type="button" data-filter="Battery">Battery</button>
    <button type="button" data-filter="Connectivity">Connectivity</button>
`;

// Show the filter buttons below the heading
featuresSection.querySelector("h2").after(filterBox);

// Select the filter buttons
let filterButtons = filterBox.querySelectorAll("button");

// Filter articles when a button is clicked
filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        let category = button.dataset.filter;

        featureArticles.forEach(function (article) {

            if (
                category === "All" ||
                article.dataset.category === category
            ) {
                article.style.display = "block";
            } else {
                article.style.display = "none";
            }

        });

    });

});


/*DYNAMIC SHOP OPENING STATUS */

// Read the current hour
let currentHour = new Date().getHours();

// Create the shop status message
let statusMessage = document.createElement("p");
statusMessage.id = "shop-status";
statusMessage.style.fontWeight = "bold";
statusMessage.style.textAlign = "center";

// Check whether the shop is open
if (currentHour >= 8 && currentHour < 20) {

    statusMessage.textContent = "We are Open!";
    statusMessage.style.color = "#16a34a";

} else {

    statusMessage.textContent = "Closed - Open at 8 AM";
    statusMessage.style.color = "#dc2626";

}

// Display the status below the main heading
document.querySelector("header h1").after(statusMessage);


/*  SPECIAL NOTES CHARACTER COUNTER */

// Create the special instructions label
let notesLabel = document.createElement("label");
notesLabel.textContent = "Special Order Instructions:";
notesLabel.htmlFor = "special-notes";

// Create the special instructions textarea
let notesBox = document.createElement("textarea");
notesBox.id = "special-notes";
notesBox.maxLength = 100;
notesBox.placeholder = "Enter special instructions";
notesBox.rows = 3;

// Create the character counter
let characterCounter = document.createElement("p");
characterCounter.id = "character-counter";
characterCounter.textContent = "100 characters remaining";

// Add the new fields before the submit button
orderForm.insertBefore(notesLabel, submitButton);
orderForm.insertBefore(notesBox, submitButton);
orderForm.insertBefore(characterCounter, submitButton);

// Update the counter as the user types
notesBox.addEventListener("input", function () {

    let remaining = 100 - notesBox.value.length;

    characterCounter.textContent =
        remaining + " characters remaining";

});


/* FORM SUBMISSION AND AGE VALIDATION */

// Handle form submission without refreshing the page
orderForm.addEventListener("submit", function (e) {

    e.preventDefault();

    // Read the customer's name and email
    let username = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    // Check that the required fields are filled
    if (username === "" || email === "") {

        orderMessage.textContent =
            "Please enter your name and email.";

        orderMessage.style.color = "#dc2626";
        return;

    }

    // Convert the birth year string into an integer
    let birthYear = parseInt(birthYearInput.value, 10);

    // Get the current year
    let currentYear = new Date().getFullYear();

    // Validate the birth year
    if (
        isNaN(birthYear) ||
        birthYearInput.value.trim() === "" ||
        birthYear < 1900 ||
        birthYear > currentYear
    ) {

        discountMessage.textContent =
            "Please enter a valid birth year.";

        discountMessage.style.color = "#dc2626";
        return;

    }

    // Calculate the customer's age
    let age = currentYear - birthYear;

    // Display a discount message
    if (age <= 25) {

        discountMessage.textContent =
            "You qualify for the student discount (demo).";

        discountMessage.style.color = "#16a34a";

    } else if (age >= 60) {

        discountMessage.textContent =
            "You qualify for the senior discount (demo).";

        discountMessage.style.color = "#16a34a";

    } else {

        discountMessage.textContent =
            "No age-based discount applies.";

        discountMessage.style.color = "#64748b";

    }

    // Display personalized confirmation
    orderMessage.textContent =
        "Thank you for visiting, " + username +
        "! We will contact you at " + email +
        ". Your order is ready for review.";

    orderMessage.style.color = "#16a34a";

    // This is a demonstration; no real order is sent.

});
