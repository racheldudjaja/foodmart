function showContent(id) {
  var contents = document.querySelectorAll('.content');
  for (var i = 0; i < contents.length; i++) {
    contents[i].classList.remove('active');
  }
  document.getElementById(id).classList.add('active');
}

function buyItem(itemName) {
  alert("Anda membeli: " + itemName);
}

function registerUser(event) {
  event.preventDefault();
  var nama = document.getElementById('regNama').value;
  var email = document.getElementById('regEmail').value;
  alert("Registrasi Berhasil! Selamat " + nama + ", akun dengan email " + email + " telah terdaftar!");
  document.getElementById('regNama').value = '';
  document.getElementById('regEmail').value = '';
  document.getElementById('regTelp').value = '';
  document.getElementById('regPass').value = '';
  document.getElementById('regAlamat').value = '';
}