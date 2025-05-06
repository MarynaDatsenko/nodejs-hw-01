import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    const newContacts = [
      ...contacts,
      ...Array.from({ length: number }, createFakeContact),
    ];
    await writeContacts(newContacts);
    console.log(`Generated ${number} new contacts.`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

generateContacts(100);
