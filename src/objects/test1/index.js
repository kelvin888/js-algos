// Define the Contact constructor function
class Contact {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}

// Define the ContactList constructor function
class ContactList {
    constructor() {
        this.contacts = [];
    }
    // Add the addContact method to the ContactList prototype
    addContact(contact) {
        this.contacts.push(contact);
    }
    // Add the getContacts method to the ContactList prototype
    getContacts() {
        return this.contacts;
    }
}



module.exports = {
    Contact,
    ContactList
};
