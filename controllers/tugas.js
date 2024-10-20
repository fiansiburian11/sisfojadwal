async function main() {
  const access_token = await localStorage.getItem("access_token");
  if (!access_token) {
    window.location.href = "/login.html";
    return;
  }

  const response = await fetch("https://apisitib.hopto.org/tugas", {
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

    const listMatkul = document.createElement("td");
    listMatkul.textContent = data.mata_kuliah.nama;
    row.appendChild(listMatkul);

    const listTugas = document.createElement("td");
    listTugas.textContent = data.nama_tugas;
    row.appendChild(listTugas);

    const listDeadline = document.createElement("td");
    listDeadline.textContent = formatDate(data.deadline);
    row.appendChild(listDeadline);

    containerRow.appendChild(row);
  });
}

function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
}
main();
