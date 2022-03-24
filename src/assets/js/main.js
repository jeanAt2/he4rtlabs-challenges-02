

// Este será o objeto principal no qual você irá se basear para as funções do desafio!
// Caso haja dúvidas de como prosseguir, favor consultar a sala #js no nosso discord!

i
let features = [
  {
    feature: "Authentication",
    devHours: 10,
    testHours: 2
  }
];

// alert("He4rtDevs <3");

// Dica: faça o layout e depois pense em como vai funcionar o script.


function insert() {

  let features = [
    {
      feature: "Authentication",
      devHours: 10,
      testHours: 2
    }
  ];
  alert(`Entrou onde deveria entrar`);
  debugger;
  var nameFunction = document.getElementById('name').value;
  var hoursDev = document.getElementById('timeDev').value;
  var hoursTest = document.getElementById('timeTest').value;
  console.log(nameFunction);  
  console.log(hoursDev);  
  console.log(hoursTest); 

  let feature = new Feature(nameFunction, hoursDev, hoursTest);
  
  features.push(feature);
  
  insertFunction(features);
  alert(`Nova Feature: ${feature.getAll()} + quantidade na lista: ${features.length}`);

  // myModal.addEventListener('shown.bs.modal', function () {
  //   myInput.focus()
  // })
}


class Feature {
  constructor(nameFunction, hoursDev, hoursTest){
    this.nameFunction = nameFunction;
    this.hoursDev = hoursDev;
    this.hoursTest = hoursTest;
  }

  getAll() {
    return `Feature: Nome: ${this.nameFunction} Horas de desenvolvimento: ${this.hoursDev} Horas de Teste: ${this.hoursTest}
    `;
  }
}