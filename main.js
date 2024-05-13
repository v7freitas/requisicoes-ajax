// document.addEventListener("DOMContentLoaded", function () {
//   document
//     .getElementById("btn-buscar-cep")
//     .addEventListener("click", function () {
//       //Ajax - Asynchronous JavaScript and XML
//       const xhttp = new XMLHttpRequest();
//       //https://viacep.com/ws/12345234/json
//       const cep = document.getElementById("cep").value;
//       const endpoint = `https://viacep.com/ws/${cep}/json`;

//       xhttp.open("GET", endpoint);

//       xhttp.send();
//     });
// });

$(document).ready(function () {
  $("#btn-buscar-cep").click(function () {
    const cep = $("#cep").val();
    const endpoint = `https://viacep.com/ws/${cep}/json`;

    $.ajax(endpoint).done(function (resposta) {
      console.log(resposta);
    });
  });
});
