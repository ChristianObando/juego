function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('seleccion')
    botonMascotaJugador.addEventListener('click', seleccionMascota) 
}

function seleccionMascota(){
    let min = 1
    let max = 12
    let input1 =document.getElementById("Geo")
    let input2 =document.getElementById("Terra")
    let input3 =document.getElementById("Totem")
    let input4 =document.getElementById("Aura")
    let input5 =document.getElementById("Céfiro")
    let input6 =document.getElementById("Nimbus")
    let input7 =document.getElementById("Vulcano")
    let input8 =document.getElementById("Ember")
    let input9 =document.getElementById("Fénix")
    let input10 =document.getElementById("Océan")
    let input11 =document.getElementById("Koral")
    let input12 =document.getElementById("Cascada")

    mascota = ''
    if (input1.checked){
        mascota = "Geo"              
    }else if (input2.checked){
        mascota = "Terra" 
    }else if (input3.checked){
        mascota = "Totem"
    }else if (input4.checked){
        mascota = "Aura" 
    }else if (input5.checked){
        mascota = "Céfiro" 
    }else if (input6.checked){
     mascota = "Nimbus" 
    }else if (input7.checked){
        mascota = "Vulcano" 
    }else if (input8.checked){
        mascota = "Ember" 
    }else if (input9.checked){
        mascota = "Fénix" 
    }else if (input10.checked){
        mascota = "Océan" 
    }else if (input11.checked){
        mascota = "Koral" 
    }else if (input12.checked){
        mascota = "Cascada" 
    }else {
        alert("no elegiste una mierda")
    }
    
    rival=  Math.floor(Math.random() * (max - min + 1) + min)

        if (rival == 1){
            mascotaR = "Geo"              
        }else if (rival == 2){
            mascotaR = "Terra" 
        }else if (rival == 3){
            mascotaR = "Totem"
        }else if (rival == 4){
            mascota = "Aura" 
        }else if (rival == 5){
            mascotaR = "Céfiro" 
        }else if (rival == 6){
            mascotaR = "Nimbus" 
        }else if (rival == 7){
            mascotaR = "Vulcano" 
        }else if (rival == 8){
            mascotaR = "Ember" 
        }else if (rival == 9){
            mascotaR = "Fénix" 
        }else if (rival == 10){
            mascotaR = "Océan" 
        }else if (rival == 11){
            mascotaR = "Koral" 
        }else if (rival == 12){
            mascotaR = "Cascada"
        } 

        alert("elegiste a: " + mascota)    
        document.getElementById("miMascota").innerHTML = mascota
        alert("te enfrentaras a: " + mascotaR)
        document.getElementById("mascotaRival").innerHTML = mascotaR
   
}

window.addEventListener('load',iniciarJuego)

 
    





    
 





