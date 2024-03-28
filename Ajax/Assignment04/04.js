'use strict';

async function fetchData(url, options) {
  const response = await fetch(url, options);
  if (response.status > 299 || response.status < 200) {
    throw new Error(`Http error: ${response.status}`);
  }
  try {
    const data = await response.json();
    return data;
  } catch (e) {
    console.error('Parsing error: ', e);
  }
}

try {
  const user = {
    name: 'John Doe',
    job: 'Developer',
  };
  const url = 'https://reqres.in/api/users';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };
  const userData = fetchData(url, options);
  console.log(userData);
} catch (error) {
  console.error('An error occurred:', error);
}
