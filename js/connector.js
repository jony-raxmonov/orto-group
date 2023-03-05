var BASE_URL = "https://home.starfit.uz/order";

function send() {
  let name = document.getElementById("name");
  let address = document.getElementById("address");
  let phone = document.getElementById("phone");
  let comment = document.getElementById("comment");
  let data = {
    name: name.value,
    address: address.value,
    number: phone.value,
    message: comment.value,
  };
  console.log("Send method ishladi");
  fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((respone) => respone.json())
    .then((data) => {
      alert(JSON.stringify(data));
      location.reload();
    })
    .catch((err) => {});
    

}