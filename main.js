
const cats = document.getElementById('categories');
const cat = document.getElementById('category');
const newCat = document.getElementById('newCategory');
const errMSG = document.getElementById('errorMSG');
const settingsBtn = document.getElementById('settingsBtn');
const settings = document.getElementById('settings');

document.getElementById('settingsBtn').addEventListener('click', function(event) {
  if(settings.style.display === 'none') {
    settings.style.display = 'inline flex';
  } else {
    settings.style.display = 'none';
  }
});

document.getElementById('catBtn').addEventListener('click', function(event) {
  const postCat = document.getElementById('postCat');
  if(postCat.style.display === 'none') {
    postCat.style.display = 'inline flex';
  } else {
    postCat.style.display = 'none';
  }
});

document.getElementById('subBtn').addEventListener('click', function(event) {
  const postSub = document.getElementById('postSub');
  if(postSub.style.display === 'none') {
    postSub.style.display = 'inline flex';
  } else {
    postSub.style.display = 'none';
  }
});

document.getElementById('settingsBtn').addEventListener('click', function(event) {
  if(settings.style.display === 'none') {
    settings.style.display = 'inline flex';
  } else {
    settings.style.display = 'none';
  }
});
// Adapted function to add new category
function insertCat(newEl, existingEl) {
  existingEl.parentElement.insertBefore(newEl, existingEl.previousSibling);
}

// Adapted function to add new subscription
function insertSub(newEl, existingEl) {
  existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}

/*  Create New Category */
// New element to insert
const div1 = document.createElement('div');
div1.className = 'cat';
const div2 = document.createElement('div');
div2.className = 'catSubs';
const span1 = document.createElement('span');
span1.className = 'title';
const icon = document.createElement('h1');
icon.innerHTML ="&#9874;";
span1.appendChild(icon);
const h2 = document.createElement('h2');
h2.innerText = 'English History';
span1.appendChild(h2);
div2.appendChild(span1);
const p1 = document.createElement('p');
p1.className = 'description';
p1.innerText ='Historical recordings of some of Englands greatest historical moments';
div2.appendChild(p1);
div1.appendChild(div2);
const div3 = document.createElement('div');
div3.className = 'engHist';
div1.appendChild(div3);

// Existing element to insert after
const lastItem = document.querySelector('.cat');
// insertCat(div1, lastItem);
/////////////////////////////////////////////////////////////

/*  Create New Subscription */
// New element to insert
const li = document.createElement('li');
const div4 = document.createElement('div');
div4.className = 'sub mdriver1981';
li.appendChild(div4);
const span2 = document.createElement('span');
span2.className = 'subTitle';
const a1 = document.createElement('a');
a1.href='https://www.youtube.com/@Mdriver1981';
a1.target = '_new';
const icon2 = document.createElement('h1');
icon2.innerHTML = "&#8987;";
a1.appendChild(icon2);
span2.appendChild(a1);
div4.appendChild(span2);
const div5 = document.createElement('div');
div5.className ='subInfo';
const title = document.createElement('h2');
title.innerText = 'Mdriver1981';
div5.appendChild(title);
const h3 = document.createElement('h3');
h3.innerText = '@Mdriver1981';
div5.appendChild(h3);
const p2 = document.createElement('p');
p2.className = 'subDesc';
p2.innerText ='My name is Matt, I have a history degree and am trying to utilize it on this page.';
div5.appendChild(p2);
div4.appendChild(div5);

// Existing element to insert after
const lastSubItem = document.querySelector('.engHist');
// Our custom function

// Our custom function
// insertSub(div4, lastSubItem);


// =================================================\\
// AI Deepseek Function
document.getElementById('postCat').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  const category = document.getElementById('category').value;
  const description = document.getElementById('description').value;
  const option = document.getElementById('selectCat');

  // Create a new div with the input values
  const newDiv = document.createElement('div');
  newDiv.id = category;
  newDiv.classList.add('cat');

  const catsub = document.createElement('div');
  catsub.classList.add('catSubs');

  const catTitle = document.createElement('span');
  catTitle.classList.add('title');

  const h1 = document.createElement('h1');
  h1.innerHTML = "&#8987;";
  
  const h2 = document.createElement('h2');
  h2.innerText = `${category}`;

  const p = document.createElement('p');
  p.innerText = description;
  p.classList.add('description')

  const subDiv = document.createElement('div');
  subDiv.id = 'subscriptions';

  // Append elements to the new div
  newDiv.appendChild(catsub);
  catsub.appendChild(catTitle);
  catTitle.appendChild(h1);
  catTitle.appendChild(h2);
  catsub.appendChild(p);

  // Append the new div to the output container
  document.getElementById('categories').appendChild(newDiv);
  const suboption = document.createElement('option');
  suboption.value = `${category}`;
  suboption.textContent = category;
  suboption.style.textTransform = 'capitalize';
  option.appendChild(suboption);


  // Clear the form
  document.getElementById('postCat').reset();
});


// =======================================================
// Create Subscription
// AI Deepseek Function
document.getElementById('postSub').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
        // Get input values\
  const image = document.getElementById('image').value;
  const title = document.getElementById('subscription').value;
  const subUser = document.getElementById('username').value;
  const website = document.getElementById('website').value;
  const description = document.getElementById('desc').value;

  const newSubItem = document.querySelector('#selectCat');
  let newSub = newSubItem.value;

   // Create a new div with the input values
  const newDiv = document.createElement('div');
  newDiv.id = title;
  newDiv.classList.add('sub');


  let span = document.createElement('span');
  span.classList.add('img');

  let a = document.createElement('a');
  a.href = website;

  let img = document.createElement('img');
  img.src = image;
  img.alt = `${title} Logo`;
  img.style.border = '0.2rem inset blue';

  a.appendChild(img);
  span.appendChild(a);
  newDiv.appendChild(span);

  const subDiv = document.createElement('div');
  subDiv.classList.add('subInfo');

  const h2 = document.createElement('h2');
  h2.textContent = title;

  const h3 = document.createElement('h3');
  h3.textContent = `@${subUser}`;

  const p = document.createElement('p');
  p.textContent = `${description}`;
  p.classList.add('subDesc');
  
  subDiv.appendChild(h2);
  subDiv.appendChild(h3);
  subDiv.appendChild(p);

  newDiv.appendChild(subDiv);

   // Append the new div to the output container
  document.getElementById(newSub).appendChild(newDiv);
  
  // Clear the form
  document.getElementById('postSub').reset();
});
