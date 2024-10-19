function openNav() {
  document.getElementById("mySidebar").style.width = "190px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

const jadwalRows = document.querySelectorAll(".jadwal");
const modal = document.getElementById("myModal");

jadwalRows.forEach((row) => {
  row.addEventListener("click", () => {
    const kode = row.dataset.kode;
    const nama = row.dataset.nama;

    modal.innerHTML = `
      <h2>${nama}</h2>
      <p>Kode: ${kode}</p>
      `;
    modal.style.display = "block";
  });
});
