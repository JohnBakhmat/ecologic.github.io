loadXMLDoc();
function loadXMLDoc(){
    const xhttp = new XMLHttpRequest ();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            myFunction(this)
        }
    };
    xhttp.open("GET", "Books.xml", true);
    xhttp.send();}
function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>Title</th><th>Author</th><th>Category</th><th>Year</th><th>Price</th></tr>";
    var x = xmlDoc.getElementsByTagName("book");
    for (i = 0; i <x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("category")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("year")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue +
            "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
}
function search() {
    // Declare variables
    let input, filter, table, tr, td,td2, i, txtValue;
    input = document.getElementById("Search");
    filter = input.value.toUpperCase();
    table = document.getElementById("demo");
    tr = table.getElementsByTagName("tr");

    for ( i = 0 ; i < tr.length ; i ++ ) {
        td = tr[ i ].getElementsByTagName ("td")[ 0 ];
        td2 = tr[ i ].getElementsByTagName ("td")[ 0 ];
        if ( td ) {
            txtValue = td.textContent || td.innerText;
            if ( txtValue.toUpperCase ().indexOf (filter) > - 1 ) {
                tr[ i ].style.display = "";
            } else {
                tr[ i ].style.display = "none";
            }
        }
    }
}
