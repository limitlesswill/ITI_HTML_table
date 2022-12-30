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
    let trs = tr[i].getElementsByTagName("td");
    let match = false;

    for (let td of trs) {
      if (td.textContent.toUpperCase().indexOf(filter) > -1) {
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


window.onload = function () {

  /*a hellfire way to do it O_O
  let table = document.getElementById("table");
  let tr = table.getElementsByTagName("tr");

  for (let x = 1; x < tr.length; x++) {
  tr[x].onmousedown = function (x) {
  alert(this.rowIndex);
  let newrow = table.insertRow(this.rowIndex + 1);
  newrow.innerHTML = "<td colspan='2' style='text-align:center;font-weight:bold;'>YOYO</td>";
    }}*/

  let details = document.getElementsByClassName("panel");
  for (let panel of details) {
    panel.onclick = function () {
      let content = this.nextElementSibling;
      if (content.style.display == "")
        content.style.display = "none";
      else
        content.style.display = "";

    }
  }

  let info = document.getElementsByClassName("info");
  for (let content of info) {
    content.style.display = "none";
  }

}




