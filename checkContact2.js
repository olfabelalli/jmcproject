function valthisform() {
    var checkboxs = document.getElementsByName("c1");
    var okay = false;
    for (var i = 0, l = checkboxs.length; i < l; i++) {
        if (checkboxs[i].checked) {
            okay = true;
            
            break;
        }
    }
    if (okay) 
    {
        // alert("Thank you for checking a checkbox");
        document.location.href="result1.html"

}
    else alert("Please check a checkbox");
}