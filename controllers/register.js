const username = document.getElementById("username")
const password = document.getElementById("password")
const nim = document.getElementById("nim")
const nama = document.getElementById("nama")
const nowa = document.getElementById("no_whatsapp")
const button = document.getElementById("btn-daftar")

button.addEventListener("click", async function(e){
    e.preventDefault()
    if (!username.value || !password.value || !nim.value || !nama.value || !nowa.value){
        alert("silahkan masukkan input dengan benar")
        return
    }
    const response = await fetch ("https://apisitib.hopto.org/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json", 
            "Accept": "application/json"
        }, 
        body:JSON.stringify({
            username: username.value,
            password: password.value,
            nim: nim.value,
            nama: nama.value,
            whatsapp: nowa.value

        })
    })
    const responseJson = await response.json()
    if (responseJson.error){
        alert(responseJson.message)
        return
    }else{
        alert("Pendaftaran Berhasil")
        window.location.href= "/login.html"
        return
    }
  
})