import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    const myContacts = [...contacts];
    const contactCount = myContacts.length;
    return `Total number of contacts: ${contactCount}`;
  } catch (error) {
    console.error('Error counting contacts:', error);
  }
};
console.log(await countContacts());
