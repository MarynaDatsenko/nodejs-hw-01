import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    const myContacts = [...contacts];
    if (myContacts.length > 0) {
      myContacts.pop();
      await writeContacts(myContacts);
    } else {
      return console.error('No contacts to remove!');
    }
    console.log('Last contact has been removed!');
  } catch (error) {
    console.error('Error removing last contact:', error);
  }
};

removeLastContact();
