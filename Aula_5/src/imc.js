function calcularIMC (peso,altura){

    if (altura === 0){
        return "NaN";
    }

    const alturaMetros = altura/100;
    return (peso/(alturaMetros*alturaMetros).toFixed(2));
}

function classificarIMC(imc){

    if(imc === "NaN"){
        return "NaN"
    }else if (imc < 18.5){
      return "Você está abaixo do peso";
    }
    else if (imc < 25){
      return "Parabens você está com no seu peso ideal";
    }
    else if (imc < 30){
      return "Você está levemente acima do peso";
    }
    else if (imc < 35){
      return "Você está com obesidade grau 1";
    }
    else if (imc < 40){
      return "Você está com obesidade grau 2(severa)";
    }
    else return "Você está com obesidade grau 3(morbida)";
}

module.exports = { calcularIMC, classificarIMC }; 
 