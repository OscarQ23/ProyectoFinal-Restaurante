const platos =document.getElementById('platos');

document.addEventListener('DOMContentLoaded', e =>{

fetchData()

})

const fetchData = async () =>{
    try{
        const res = await fetch('http://localhost:4000/Menu/')
        const data = await res.json()
        platillos(data);
    } catch (error){
        console.log(error)
    }
}


const platillos = data =>{
    let elementos = ''
    data.forEach(item => {
        elementos += `

        <article class="card">

            <img src="${item.flag}" alt="">
            <div class="card-info">
                <h3>${item.plato}</h3>
                <p>
                    <b>
                        Precio:
                    </b>
                    ${item.precio}
                </p>
                <p>
                    <b>
                        Descripcion:
                    </b>
                    ${item.Descripcion}
                </p>
            </div>
        </article>       
        `

    });
    platos.innerHTML = elementos
}
