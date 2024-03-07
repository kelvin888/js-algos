const { Contact, ContactList } = require('.');

describe('Contact and ContactList', () => {
    describe('Contact Constructor', () => {
        test('Creating a contact with name, email, and phone', () => {
            const contact = new Contact('John Doe', 'john@example.com', '123-456-7890');

            expect(contact.name).toBe('John Doe');
            expect(contact.email).toBe('john@example.com');
            expect(contact.phone).toBe('123-456-7890');
        });
    });

    describe('ContactList Constructor', () => {
        test('Initializing an empty contact list', () => {
            const contactList = new ContactList();

            expect(contactList.contacts).toEqual([]);
        });
    });

    describe('ContactList Methods', () => {
        let contactList;

        beforeEach(() => {
            contactList = new ContactList();
        });

        test('Adding a contact to the contact list', () => {
            const contact = new Contact('Jane Smith', 'jane@example.com', '987-654-3210');
            contactList.addContact(contact);

            expect(contactList.contacts.length).toBe(1);
            expect(contactList.contacts[0]).toBe(contact);
        });

        test('Getting contacts from the contact list', () => {
            const contact1 = new Contact('Alice Johnson', 'alice@example.com', '111-222-3333');
            const contact2 = new Contact('Bob Brown', 'bob@example.com', '444-555-6666');
            contactList.addContact(contact1);
            contactList.addContact(contact2);

            const contacts = contactList.getContacts();

            expect(contacts.length).toBe(2);
            expect(contacts).toContain(contact1);
            expect(contacts).toContain(contact2);
        });
    });
});
