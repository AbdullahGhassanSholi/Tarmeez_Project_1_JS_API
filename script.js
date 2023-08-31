let index = 0;
function readAPIforUsers() {
  let request = new XMLHttpRequest();
  request.open('GET', 'https://jsonplaceholder.typicode.com/users');
  request.responseType = 'json';
  request.send();
  request.onload = () => {
    let users = request.response;
    for (user of users) {
      index = user.id;
      console.log('index : user : first : ' + index);
      document.getElementsByClassName('left-box')[0].innerHTML += `
        <div class="left-peace" onclick="readAPIforPosts(${index})">
          <h3 class="h3">${user.name}</h3>
          <p class="lp">${user.email}</p>
        </div>
      `;
      console.log('index : user : end : ' + index);
    }
  };
}

readAPIforUsers();

function readAPIforPosts(index) {
  console.log('index : post : first : ' + index);
  let request = new XMLHttpRequest();
  request.open('GET', 'https://jsonplaceholder.typicode.com/posts');
  request.responseType = 'json';
  request.send();
  request.onload = () => {
    let posts = request.response;
    document.getElementsByClassName('right-box')[0].innerHTML = '';
    for (post of posts) {
      if (index == 1 && post.id > 0 && post.id <= 10) {
        neededHTML(index);
      } else if (index == 2 && post.id > 10 && post.id <= 20) {
        neededHTML(index);
      } else if (index == 3 && post.id > 20 && post.id <= 30) {
        neededHTML(index);
      } else if (index == 4 && post.id > 30 && post.id <= 40) {
        neededHTML(index);
      } else if (index == 5 && post.id > 40 && post.id <= 50) {
        neededHTML(index);
      } else if (index == 6 && post.id > 50 && post.id <= 60) {
        neededHTML(index);
      } else if (index == 7 && post.id > 60 && post.id <= 70) {
        neededHTML(index);
      } else if (index == 8 && post.id > 70 && post.id <= 80) {
        neededHTML(index);
      } else if (index == 9 && post.id > 80 && post.id <= 90) {
        neededHTML(index);
      } else if (index == 10 && post.id > 90 && post.id <= 100) {
        neededHTML(index);
      }
    }
  };
  console.log(index);
}

function neededHTML(index) {
  index = index - 1;
  let selected = document.getElementsByClassName('left-peace-border');
  for (sel of selected) sel.classList.remove('left-peace-border');
  document
    .getElementsByClassName('left-peace')
    [index].classList.add('left-peace-border');
  document.getElementsByClassName('right-box')[0].innerHTML += `
        <div class="right-peace">
          <h4 class="h4">
            ${post.title}</h4>
          <input type="text">
          <p class="rp">${post.body}</p>
        </div>
      `;
}

// document.getElementsByClassName('click')[0].onclick = () => {
//   document.getElementsByClassName('left-box')[0].innerHTML += `
//         <div class="left-peace">
//           <h3 class="h3">Abdullah Sholi</h3>
//           <p class="lp">groupgroup060@gmail.com</p>
//         </div>

//       `;
//   document.getElementsByClassName('right-box')[0].innerHTML += `
//         <div class="right-peace">
//           <h4 class="h4">Abdullah Hello</h4>
//           <input type="text">
//           <p class="rp"></p>
//         </div>
//       `;
//   console.log(document.getElementsByClassName('container')[0].innerHTML);
// };
