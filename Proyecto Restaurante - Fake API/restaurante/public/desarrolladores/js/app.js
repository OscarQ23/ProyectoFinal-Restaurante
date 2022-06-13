const desarrollo =document.getElementById('desarrollo');

document.addEventListener('DOMContentLoaded', e =>{

fetchData()

})

const fetchData = async () =>{
    try{
        const res = await fetch('http://localhost:4000/programadores')
        const data = await res.json()
        progrmadores(data);
    } catch (error){
        console.log(error)
    }
}


const  progrmadores = data =>{
    let elementos = ''
    data.forEach(item => {
        elementos += `

        <article class="card">

            <img src="${item.flag}" alt="">
            <div class="card-info">
                <h3>${item.Nombre}</h3>
                <p>
                    <b>
                        Edad:
                    </b>
                    ${item.edad}
                </p>
                <p>
                    <b>
                        Descripción:
                    </b>
                    ${item.descripcion}
                </p>
            </div>
        </article>
        `
    });
    desarrollo.innerHTML = elementos
}