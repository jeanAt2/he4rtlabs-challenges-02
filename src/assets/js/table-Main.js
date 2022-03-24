insertHTML = async () => {
  const res = await fetch("./../../../docs/table-main.json");
  const tableMain = await res.json();

  let id = document.getElementById("idFeature");
  let nameFeature = document.getElementById("nameFeature");
  let hoursDev = document.getElementById("hoursDev");
  let hoursTest = document.getElementById("hoursTest");
  let del = document.getElementById("delete");
  let table;

  id.innerText = `${tableMain["id"]}`;
  nameFeature.innerText = `${tableMain["name"]}`;
  hoursDev.innerText = `${tableMain["hd"]}`;
  hoursTest.innerText = `${tableMain["ht"]}`;
  del.innerText = `${tableMain["del"]}`;

  insertFunction = (features) => {
    // Criar o td
    // Criar os cam
  };
};

insertHTML();
