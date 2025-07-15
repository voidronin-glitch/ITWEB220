// contact_list.js

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Contact array with 3 initial contacts
let contacts = [
    { name: "Alice Johnson", address: "123 Maple St", phone: "555-1234" },
    { name: "Bob Smith", address: "456 Oak Ave", phone: "555-5678" },
    { name: "Charlie Brown", address: "789 Pine Rd", phone: "555-9012" }
];

function promptContactInfo(callback) {
    let contact = {};
    readline.question("Enter contact name: ", name => {
        contact.name = name.trim();
        readline.question("Enter contact address: ", address => {
            contact.address = address.trim();
            readline.question("Enter contact phone number: ", phone => {
                contact.phone = phone.trim();
                callback(contact);
            });
        });
    });
}

function sortContactsByName() {
    contacts.sort((a, b) => a.name.localeCompare(b.name));
}

function displayContacts() {
    console.log("\nContact List:");
    contacts.forEach((contact, index) => {
        console.log(`${index + 1}. Name: ${contact.name}, Address: ${contact.address}, Phone: ${contact.phone}`);
    });
}

function askToAddMore() {
    if (contacts.length >= 10) {
        console.log("\nMaximum number of contacts reached (10). Cannot add more.");
        sortContactsByName();
