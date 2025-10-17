var titulo = (document.querySelector(".titulo);
 titulo.textContext = "Aparecida Nutricionista";
  
 var paciente = document.querySelector("#paciente);
    var tdPeso = paciente.querySelector(".info-peso");
     
    var peso = tdPeso.textContext

    var tdAlura = paciente.querySelector("info-altura");
    var altura = tdAltura.textContext;

   var imc = peso / altura * altura;
   console.log (imc);
