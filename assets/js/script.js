let calcular = document.querySelector('#calcular');

calcular.addEventListener("click",function(){
    let cantidad = document.querySelector ("#cantidad").value;
    let precio = document.querySelector("#precio").innerText;
    precio = (parseInt(precio));
    precio.innerText = precio.toString ();
    let total = Number(cantidad) * Number (precio)

    document.querySelector("#total-final").innerText = "$" + total
    document.querySelector("#total-cantidad").innerText = cantidad + " unidades"

    let color = document.querySelector("#color").value;
    let totalColor = document.querySelector("#total-color");
    totalColor.style.backgroundColor = color;
})

