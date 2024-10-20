async function main() {
  const access_token = await localStorage.getItem("access_token");
  if (!access_token) {
    window.location.href = "/login.html";
    return;
  }

  const response = await fetch("https://apisitib.hopto.org/kelompok", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const responseJson = await response.json();

  const containerRow = document.getElementById("container-rows");
  containerRow.innerHTML = "";

  responseJson.data.map((data, index) => {
    const row = document.createElement("tr");

    const listNo = document.createElement("td");
    listNo.textContent = index + 1;
    row.appendChild(listNo);

    const listMatkul = document.createElement("td");
    listMatkul.textContent = data.mata_kuliah.nama;
    row.appendChild(listMatkul);

    const listnamaklmpk = document.createElement("td");
    listnamaklmpk.textContent = data.nama;
    row.appendChild(listnamaklmpk);

    const listanggota = document.createElement("td");
    listanggota.innerHTML = data.anggota.replace(/\n/g, "<br>");
    row.appendChild(listanggota);

    containerRow.appendChild(row);
  });
}
main();
