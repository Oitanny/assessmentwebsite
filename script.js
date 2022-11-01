function displayRadioValue() {
    var a=0,b=0, c=0;
   for(i=1; i<=30; i++){
    if(document.getElementById(i).checked) {   
        if(document.getElementById(i).value=="Yes"){
            if(i<=10 && i>=1){
                a++;
            }
            else if(i<=20 && i>=11){
                b++;
            }
            else if(i<=30 && i>=21){
                c++;
            }
        }
    }
}
document.getElementById("a").innerHTML="<p style=\"color:'red'; padding:10\">Assessment result for section 1:&nbsp&nbsp&nbsp   "+(a*20)/100+"</p>";
document.getElementById("b").innerHTML="<p style='color:'red'; padding:10'>Assessment result for section 2:&nbsp&nbsp&nbsp   "+(b*20)/100+"</p>";
document.getElementById("c").innerHTML="<p style='color:'red'; padding:10'>Assessment result for section 3:&nbsp&nbsp&nbsp "+(c*20)/100+"</p>";
}