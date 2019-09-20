async function fetchSedes(){
     
   const res = await fetch('http://fredyball.pythonanywhere.com/api/sedes/',
    {
        method:'GET',
        headers: {'Content-Type': 'application/json'}
    })
    const json = await res.json()
    console.log(json) 
}

fetchSedes()

