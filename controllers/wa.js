async function main() {
    const access_token = await localStorage.getItem("access_token");
    if (!access_token) {
      window.location.href = "/login.html";
      return;
    }
  }
  main();
  