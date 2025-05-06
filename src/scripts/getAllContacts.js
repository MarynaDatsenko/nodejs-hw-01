import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    const myContacts = [...contacts];
    console.log('Contacts retrieved successfully');
    return myContacts;
  } catch (error) {
    console.error('Error retrieving contacts:', error);
  }
};

console.log(await getAllContacts());
