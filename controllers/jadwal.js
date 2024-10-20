async function main() {
  const access_token = await localStorage.getItem("access_token");
  if (!access_token) {
    window.location.href = "/login.html";
    return;
  }

  const response = await fetch("https://apisitib.hopto.org/jadwal_kuliah", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const responseJson = await response.json();

  const containerRow = document.getElementById("container-row");
  containerRow.innerHTML = "";

  responseJson.data.map((data, index) => {
    const row = document.createElement("tr");

    const listNo = document.createElement("td");
    listNo.textContent = index + 1;
    row.appendChild(listNo);

    const listName = document.createElement("td");
    listName.textContent = data.mata_kuliah.nama;
    row.appendChild(listName);

    const listSks = document.createElement("td");
    listSks.textContent = data.mata_kuliah.sks;
    row.appendChild(listSks);

    const listKelas = document.createElement("td");
    listKelas.textContent = "22TIB";
    row.appendChild(listKelas);

    const listDosen = document.createElement("td");
    listDosen.textContent = data.mata_kuliah.dosen;
    row.appendChild(listDosen);

    const listRuang = document.createElement("td");
    listRuang.textContent = data.ruang;
    row.appendChild(listRuang);

    const listHari = document.createElement("td");
    listHari.textContent = convertDay(data.hari);
    row.appendChild(listHari);

    const listJamMasuk = document.createElement("td");
    listJamMasuk.textContent = convertToJakartaTime(data.jam_masuk);
    row.appendChild(listJamMasuk);

    const listJamKeluar = document.createElement("td");
    listJamKeluar.textContent = convertToJakartaTime(data.jam_keluar);
    row.appendChild(listJamKeluar);

    containerRow.appendChild(row);
  });
}
main();

function convertDay(number) {
  switch (number) {
    case 1:
      return "Senin";
    case 2:
      return "Selasa";
    case 3:
      return "Rabu";
    case 4:
      return "Kamis";
    case 5:
      return "Jum'at";
    case 6:
      return "Sabtu";
    case 7:
      return "Minggu";
  }
}

const convertToJakartaTime = (dateString) => {
  const date = new Date(dateString);


  return date.toLocaleString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });
};
