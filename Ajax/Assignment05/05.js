'use strict';

const table = document.querySelector('table');

async function renderRestaurants() {
  const restaurants = await getRestaurants();

  const sortedRest = [...restaurants].sort((a, b) =>
    a.name.toLowerCase().trim().localeCompare(b.name.toLowerCase().trim())
  );
  console.log(sortedRest);

  sortedRest.forEach((r) => {
    const nameTd = document.createElement('td');
    const addressTd = document.createElement('td');
    const newRow = document.createElement('tr');
    const modal = document.querySelector('.modal');
    const form = document.querySelector('#form');
    const closeButton = document.querySelector('#closeButton');

    closeButton.addEventListener('click', () => {
      newRow.classList.remove('highlight');
      modal.close();
    });

    newRow.addEventListener('click', restaurantClick(r));

    function restaurantClick(r) {
      return async function (event) {
        const menu = await getRestaurantMenu(r._id);
        console.log(menu.courses[0]);
        form.innerHTML = '';
        newRow.classList.toggle('highlight');
        newRow.style.cursor = 'pointer';
        const menuTable = document.createElement('table');
        const name = document.querySelector('#restaurantName');
        name.textContent = r.name;
        const addressDiv = document.createElement('div');
        const addressLabel = document.createElement('label');
        addressLabel.textContent = 'Address:';
        const postDiv = document.createElement('div');
        const postLabel = document.createElement('label');
        postLabel.textContent = 'Zip-code:';
        const cityDiv = document.createElement('div');
        const cityLabel = document.createElement('label');
        cityLabel.textContent = 'City:';
        const phoneDiv = document.createElement('div');
        const phoneLabel = document.createElement('label');
        phoneLabel.textContent = 'Phone:';
        const companyDiv = document.createElement('div');
        const companyLabel = document.createElement('label');
        companyLabel.textContent = 'Company:';

        const menuHeader = document.createElement('h2');
        menuHeader.textContent = 'D41LY M3NU';

        const addressInfo = document.createElement('p');
        addressInfo.textContent = r.address;
        const postInfo = document.createElement('p');
        postInfo.textContent = r.postalCode;
        const cityInfo = document.createElement('p');
        cityInfo.textContent = r.city;
        const phoneInfo = document.createElement('p');
        phoneInfo.textContent = r.phone;
        const companyInfo = document.createElement('p');
        companyInfo.textContent = r.company;

        const contentDiv = document.createElement('div');

        addressDiv.append(addressLabel, addressInfo);
        addressDiv.classList.add('infoDiv');
        postDiv.append(postLabel, postInfo);
        postDiv.classList.add('infoDiv');
        cityDiv.append(cityLabel, cityInfo);
        cityDiv.classList.add('infoDiv');
        phoneDiv.append(phoneLabel, phoneInfo);
        phoneDiv.classList.add('infoDiv');
        companyDiv.append(companyLabel, companyInfo);
        companyDiv.classList.add('infoDiv');

        contentDiv.append(addressDiv, cityDiv, phoneDiv, companyDiv);

        form.appendChild(contentDiv);
        form.appendChild(menuHeader);
        if (menu.courses.length === 0) {
          const row = document.createElement('tr');
          const empty = document.createElement('td');
          empty.textContent = 'There is no menu available today.';
          row.append(empty);
          menuTable.append(row);
          form.append(menuTable);
        } else if (menu.courses.length > 0) {
          menu.courses.forEach((course) => {
            const row = document.createElement('tr');
            const name = document.createElement('td');
            const price = document.createElement('td');

            name.textContent = course.name;
            price.textContent = course.price;
            row.append(name, price);
            menuTable.append(row);
            form.append(menuTable);
          });
        }
        modal.showModal();
      };
    }

    nameTd.textContent = r.name;
    addressTd.textContent = r.address;

    newRow.appendChild(nameTd);
    newRow.appendChild(addressTd);
    table.appendChild(newRow);
  });
}

async function getRestaurants() {
  const response = await fetch(
    'https://10.120.32.94/restaurant/api/v1/restaurants'
  );
  if (!response.ok) throw new Error('Bad response');
  try {
    const data = await response.json();
    return await data;
  } catch (e) {
    console.error('Parsing error, ', e);
  }
}

async function getRestaurantMenu(id) {
  const response = await fetch(
    `https://10.120.32.94/restaurant/api/v1/restaurants/daily/${id}/fi`
  );
  if (!response.ok) throw new Error(`Http error: ${response.status}`);
  try {
    return await response.json();
  } catch (e) {
    console.error('Parsing error: ', e);
  }
}

renderRestaurants();
