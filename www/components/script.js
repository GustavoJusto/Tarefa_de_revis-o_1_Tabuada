
  function Taboada()
  {
    document.getElementById("txt_taboada").innerHTML = "";
      var resultado = 0;
      var textoF = "";
      var numero = document.getElementById('numero').value;

      for(x = numero; x >= 0; x --)
      {
        resultado = (x * numero);
        textoF = x+" * "+numero+" = "+resultado;
        document.getElementById("txt_taboada").insertAdjacentHTML("afterbegin",textoF+"\n");
      }
  }