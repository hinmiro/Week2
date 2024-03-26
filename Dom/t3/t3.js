'use strict';

const target = document.querySelector('#target');
const list = document.createElement('list');
const liName = document.createElement('li');
liName.textContent = navigator.appName + navigator.appVersion;
const liSys = document.createElement('li');
liSys.textContent = navigator.platform;
const liScreen = document.createElement('li');
liScreen.textContent = `Screen W: ${screen.width} H: ${screen.height}`;
const availableSize = document.createElement('li');
availableSize.textContent = `Available size W: ${screen.availWidth} H: ${screen.availHeight}`;
const liDate = document.createElement('li');
const options = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};
liDate.textContent = new Date(Date.now()).toLocaleDateString('fi-FI', options);

list.appendChild(liSys);
list.appendChild(liScreen);
list.appendChild(availableSize);
list.appendChild(liDate);
target.appendChild(list);
