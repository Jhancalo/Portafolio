let ciudad=document.getElementById('destino').value
let silla=document.getElementById('clase').value
let boton=document.getElementById('vamos')
let maletas=parseInt(document.getElementById('pesomaletas').value)
let pasajeros=parseInt(document.getElementById('cantidadpasajeros').value)
let precioxpasajero;
let precio;
let precioxmaleta;
let precioxsilla;
let total;
let alerta1=document.getElementById("alerta1")
let alerta2=document.getElementById("alerta2")
let alerta3=document.getElementById("alerta3")
let alerta4=document.getElementById("alerta4")

//==================================================================================//

boton.addEventListener('click',function(){
    let ciudad=document.getElementById('destino').value
    let silla=document.getElementById('clase').value
let boton=document.getElementById('vamos')
let maletas=parseInt(document.getElementById('pesomaletas').value)
let pasajeros=parseInt(document.getElementById('cantidadpasajeros').value)
let precioxpasajero;
let precio;
let precioxmaleta;
let alerta1=document.getElementById("alerta1")
let alerta2=document.getElementById("alerta2")
let alerta3=document.getElementById("alerta3")
let alerta4=document.getElementById("alerta4")


    if (ciudad==1) {
        //cali
       precio=212680
       precioxpasajero=precio*pasajeros
       if (maletas>50) {
        precioxmaleta=(maletas-50)*15000
       }
       if (silla==1) {
        precioxsilla=precio+0
       }
       if (silla==2) {
        precioxsilla=precio+20000
       }
       if (silla==3) {
       precioxsilla= precio+40000,"Incluye Copa Whisky"
       }
       total=precioxpasajero+precioxmaleta+precioxsilla;

       alerta1.innerHTML=`El valor total de pasaje es:${precioxpasajero}`
       alerta2.innerHTML=`Su silla seleccionada con costo es:${precioxsilla}`
       alerta3.innerHTML=`El precio por sus maletas son:${precioxmaleta}`
        alerta4.innerHTML=`El total de su E-Ticket es:${total}`
 
    }
    if (ciudad==2) {
        //barranquilla
        precio=228030
        precioxpasajero=precio*pasajeros
        if (maletas>50) {
            precioxmaleta=(maletas-50)*15000
           }
           if (silla==1) {
            precio
           }
           if (silla==2) {
            precio+20000
           }
           if (silla==3) {
            precio+40000,"Incluye Copa Whisky"
           }
           total=precioxpasajero+precioxmaleta+precioxsilla;
           alerta1.innerHTML=`El valor total de pasaje es:${precioxpasajero}`
           alerta2.innerHTML=`Su silla seleccionada con costo es:${precioxsilla}`
            alerta3.innerHTML=`El precio por sus maletas son:${precioxmaleta}`
             alerta4.innerHTML=`El total de su E-Ticket es:${total}`
     
    }
    if (ciudad==3) {
        //medellin
        precio=154610
        precioxpasajero=precio*pasajeros
        if (maletas>50) {
            precioxmaleta=(maletas-50)*15000
           }
           if (silla==1) {
            precio
           }
           if (silla==2) {
            precio+20000
           }
           if (silla==3) {
            precio+40000,"Incluye Copa Whisky"
           }
           total=precioxpasajero+precioxmaleta+precioxsilla;
           alerta1.innerHTML=`El valor total de pasaje es:${precioxpasajero}`
           alerta2.innerHTML=`Su silla seleccionada con costo es:${precioxsilla}`
           alerta3.innerHTML=`El precio por sus maletas son:${precioxmaleta}`
             alerta4.innerHTML=`El total de su E-Ticket es:${total}`

    }
    if (ciudad==4) {
        //bogota
        precio=181620
        precioxpasajero=precio*pasajeros
        if (maletas>50) {
            precioxmaleta=(maletas-50)*15000
           }
           if (silla==1) {
            precio
           }
           if (silla==2) {
            precio+20000
           }
           if (silla==3) {
            precio+40000,"Incluye Copa Whisky"
           }
           total=precioxpasajero+precioxmaleta+precioxsilla;
           alerta1.innerHTML=`El valor total de pasaje es:${precioxpasajero}`
           alerta2.innerHTML=`Su silla seleccionada con costo es:${precioxsilla}`
            alerta3.innerHTML=`El precio por sus maletas son:${precioxmaleta}`
             alerta4.innerHTML=`El total de su E-Ticket es:${total}`
    }
    if (ciudad==5) {
        //cartagena
        precio=228870
        precioxpasajero=precio*pasajeros
        if (maletas>50) {
            precioxmaleta=(maletas-50)*15000
           }
           if (silla==1) {
            precio
           }
           if (silla==2) {
            precio+20000
           }
           if (silla==3) {
            precio+40000,"Incluye Copa Whisky"
           }
           total=precioxpasajero+precioxmaleta+precioxsilla;
           alerta1.innerHTML=`El valor total de pasaje es:${precioxpasajero}`
           alerta2.innerHTML=`Su silla seleccionada con costo es:${precioxsilla}`
            alerta3.innerHTML=`El precio por sus maletas son:${precioxmaleta}`
            alerta4.innerHTML=`El total de su E-Ticket es:${total}`

    }
})


