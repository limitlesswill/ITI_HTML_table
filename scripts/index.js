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
 
 var input, filter, table, tr, td, i, txtValue;
 input = document.getElementById("look");
 filter = input.value.toLowerCase();
 table = document.getElementById("table");
 tr = table.getElementsByTagName("tr");

 for (i = 0; i < tr.length; i++) {
  td = tr[i].getElementsByTagName("td")[0];
  if (td) {
   txtValue = td.textContent || td.innerText;
   if (txtValue.toLowerCase().indexOf(filter) > -1) {
    tr[i].style.display = "";
   } else {
    tr[i].style.display = "none";
   }
  }
 }
}
