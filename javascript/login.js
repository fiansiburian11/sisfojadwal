document.querySelector("form").addEventListener("submit", function (event) {
  const text = document.getElementById("Nim").value;
  const password = document.getElementById("password").value;

  if (!text || !password) {
    alert("Email dan Kata Sandi harus diisi!");
    event.preventDefault();
  }
});
