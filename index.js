let nomeHeroi = "killua";
let xpHeroi = 10100;
let nivelHeroi = "";

if (xpHeroi < 1001) {
  	nivelHeroi = "Ferro";
} 

else if (xpHeroi <= 2000) { 
    nivelHeroi = "Bronze";
    
}
else if (xpHeroi <= 5000) { 
    nivelHeroi = "Prata";
    
}

else if (xpHeroi <= 7000) { 
    nivelHeroi = "Ouro";
    
} 

else if (xpHeroi <= 8000) { 
    nivelHeroi = "Platina";
    
} 
else if (xpHeroi <= 9000) { 
    nivelHeroi = "Ascendente";
    
} 
else if (xpHeroi <= 10000) { 
    nivelHeroi = "Imortal";
    
} 
else { 
    
    nivelHeroi = "Radiante";
    
    }
    
    console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi);
    


     





