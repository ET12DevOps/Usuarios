document.addEventListener('DOMContentLoaded', () => {
    let url = 'http://localhost:3000/usuarios'
    axios.get(url)
        .then(response => {
            console.log(response.data)
        })
        .catch(err => console.log(err))
})