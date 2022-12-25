function doit() {
 event.preventDefault();
 let q = document.getElementById("q");
 q.value =`"${q.value}" site:stackoverflow.com`;
 document.forms[0].target="_blank";
 document.forms[0].action = "https://www.google.com/search";
 document.forms[0].submit();
 document.forms[0].reset();
 return true;
};

