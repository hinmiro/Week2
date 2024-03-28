'use strict';

const payload = {
  body: JSON.stringify({
    name: 'Santa',
    job: 'Claus',
  }),
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
};
async function createUser(payload) {
  const response = await fetch('https://reqres.in/api/users', payload);
  if (!response.ok) throw new Error('Invalid data');
  console.log('result', await response.json());
}

console.log('Started to send data');
createUser(payload);
