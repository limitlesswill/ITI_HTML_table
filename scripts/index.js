function doit() {
  event.preventDefault();
  let q = document.getElementById("q");
  q.value = `"${q.value}" site:stackoverflow.com`;
  document.forms[0].target = "_blank";
  document.forms[0].action = "https://www.google.com/search";
  document.forms[0].submit();
  document.forms[0].reset();
  return true;
};

function lolup() {
  let look = document.getElementById("look");
  let filter = look.value.toUpperCase();

  let table = document.getElementById("table");
  let tr = table.getElementsByTagName("tr");
  
  for (let i = 1; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td");
    let match = false;

    for (let x = 0; x < td.length; x++) {
      if (td[x].textContent.toUpperCase().indexOf(filter) > -1) {
        match = true;
        break;
      }
    }

    if (match)
      tr[i].style.display = "";
    else
      tr[i].style.display = "none";


  }

}
