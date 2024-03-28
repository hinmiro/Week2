'use strict';

const url = 'https://reqres.in/api/unknown/23';

async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.error('Parse error: ', e);
  }
}

async function postData(url, method) {
  const payload = {
    body: JSON.stringify({
      name: 'Json',
      job: 'Statham',
    }),
    method: method,
    headers: {'Content-type': 'application/json'},
  };
  try {
    const response = await fetch(url, payload);
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    return await response.json();
  } catch (e) {
    console.error('Error: ', e);
  }
}

getData(url);
postData(url, 'POST');
postData(url, 'PUT');
