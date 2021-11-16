const users = document.getElementById("content");
users.innerHTML = output();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((response) => {
    users.innerHTML = data(response);
  });

function data(result) {
  let table = "";
  result.forEach((data) => {
    table += `<tr>
                  <td >${data.id}</td>
                  <td>${data.name}</td>
                  <td>${data.username}</td>
                  <td>${data.email}</td>
                  <td>
                      ${data.address.street},
                      ${data.address.suite}, 
                      ${data.address.city},
                      ${data.address.zipcode}
                 </td>
                 <td>
                      ${data.company.name},
                      ${data.company.bs}
                 </td>
                </tr>`;
  });

  return table;
}

function output() {
  return `<tr>
    <td colspan="6"></td>
  </tr>`;
}