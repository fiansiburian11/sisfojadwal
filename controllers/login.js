const username = document.getElementById("nim")
const password = document.getElementById("password")
const button = document.getElementById("btn-login")

button.addEventListener("click", async function(e){
    e.preventDefault()
    if(!username.value || !password.value){
        alert("masukkan username dan password")
        return
    }
    const response = await fetch("https://apisitib.hopto.org/users/login", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json", 
            "Accept": "application/json"

        }, 
        body: JSON.stringify({
            username: username.value,
            password: password.value,
            
        })
    })
    const responseJson = await response.json()
    if (responseJson.error){
        alert(responseJson.message)
        return
    }else {
        localStorage.setItem('access_token', responseJson.data.access_token)
        window.location.href= "/jadwal.html"
        return
    }
})