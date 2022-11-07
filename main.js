function ConverteCôvado() {
    var chamaCôvado = document.getElementById("côvado").value;  // Váriavel que pega o número digitado no campo "Côvado"
    var covadoReal = parseFloat(chamaCôvado);    // Converte o valor obtido num número inteiro
    var converteKM = covadoReal * 0.45;  // Multiplica o valor por 0.45 para converter o  valor obtido
  
    var elementoCovado = document.getElementById("metro");  // Váriavel que acessa a chave h do HTML
    var metro = "O valor em metros é " + converteKM;  // Cria um texto, concatenando o que já está escrito com o valor obtido na var convertKM
    elementoCovado.innerHTML = metro;  // Escreve o texto obtido na var metro no h acessado pela var elementoCovado
  
  }
  
  function ConverteCana() {
    var chamaCana = document.getElementById("cana").value;
    var canaReal = parseFloat(chamaCana);
    var canaMetro = canaReal * 2.67;
  
    var elementoCana = document.getElementById("metro");
    var metro = "O valor em metros é " + canaMetro;
    elementoCana.innerHTML = metro;
  }
  
  function ConverteEfa() {
    var chamaEfa = document.getElementById("efa").value;
    var efaReal = parseFloat(chamaEfa);
    var efaKg = efaReal * 22;
  
    var elementoEfa = document.getElementById("peso");
    var peso = "O valor é de " + efaKg + " litros";
    elementoEfa.innerHTML = peso;
  }
  
  function ConverteGomor() {
    var chamaGomor = document.getElementById("gomor").value;
    var gomorReal = parseFloat(chamaGomor);
    var gomorKG = gomorReal * 2.2;
  
    var elementoGomor = document.getElementById("peso");
    var peso = "O valor é de " + gomorKG + " litros";
    elementoGomor.innerHTML = peso;
  }
  
  function converteBato() {
    var chamaBato = document.getElementById("bato").value;
    var batoReal = parseFloat(chamaBato);
    var batoL = batoReal * 22;
  
    var elementoBato = document.getElementById("litro");
    var litro = "O valor é de " + batoL + " litros";
    elementoBato.innerHTML = litro;
  }
  
  function converteHim() {
    var chamaHim = document.getElementById("him").value;
    var himReal = parseFloat(chamaHim);
    var himL = himReal * 3.67;
  
    var elementoHim = document.getElementById("litro");
    var litro = "O valor é de " + himL + " litros";
    elementoHim.innerHTML = litro;
  }
  