const botao = document.querySelector("#botao");

botao.addEventListener('click', calcularMedia)

function calcularMedia() 
{
  let soma = 0;
  let numeros = document.getElementById("txtNumeros").value;
  numeros = numeros.split("+");
  
  console.log(numeros)

  for(let i = 0; i < numeros.length; i++) 
  {
    if (isNaN(parseFloat(numeros[i])))
    {
      resultado.innerHTML = "Insira apenas números"
      return;
    }
    soma = parseFloat(numeros[i]) + soma;
  }

  soma = Math.round(soma / numeros.length);
  resultado = document.getElementById("resultado")
  
  resultado.innerHTML = "A média dos números: " 
  + "<br>" + "<i>" + numeros + "</i>" +"<br>"
  + " somados é: "
  + "<br>" + soma
}   