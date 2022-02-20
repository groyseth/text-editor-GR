import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('textEdit')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('textEdit', { keyPath: 'id', autoIncrement: true });
      console.log('textEdit database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
// export const putDb = async (content) => console.error('putDb not implemented');


export const putDb = async (content) => {
  console.error('upDb failed');
  console.log('PUT to the database');
  const todosDb = await openDB('jate', 1);
  const tx = todosDb.transaction('textEdit', 'readwrite');
  const store = tx.objectStore('textEdit');
  const request = store.put({id: 1, newStore: content });
  const result = await request;
  console.log('🚀 - data saved to the database', result);
  // return result;
};
// TODO: Add logic for a method that gets all the content from the database
// export const getDb = async () => console.error('getDb not implemented');

export const getDb = async () => {
  console.log('GET all from the database');
const userDb = await openDB('jate', 1);
const tx = userDb.transaction('textEdit', 'readonly');
const store = tx.objectStore('textEdit');
const request = store.get(1);
const result = await request;
console.log('result.value', result);
return result;
};




initdb();
