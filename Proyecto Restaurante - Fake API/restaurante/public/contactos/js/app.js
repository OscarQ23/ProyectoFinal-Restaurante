const platos =document.getElementById('contactos');

document.addEventListener('DOMContentLoaded', e =>{

fetchData()

})

const fetchData = async () =>{
    try{
        const res = await fetch('http://localhost:4000/contactos/')
        const data = await res.json()
        conta(data);
    } catch (error){
        console.log(error)
    }
}


const conta = data =>{
    let elementos = ''
    data.forEach(item => {
        elementos += `

        <article class="card">

            <img src="${item.flag}" alt="">
            <div class="card-info">
                <h3>${item.Nombre}</h3>
                <p>
                <b>
                    Correo:
                </b>
                ${item.correo}
            </p>
                <p>
                    <b>
                        Celular:
                    </b>
                    ${item.celular}
                </p>

                <p>
                    <b>
                        Edad:
                    </b>
                    ${item.edad}
                </p>
                
            </div>
        </article>       
        `

    });
    contactos.innerHTML = elementos
}
