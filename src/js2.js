function ConHour(){
    var a=Number(document.getElementById('time').value);
    var rd=document.getElementById('same');
    if(document.getElementById('hr').checked){
        document.getElementById('labm').innerHTML=a*60+" mins";
    }
    else{
        
        document.getElementById('labh').innerHTML=a*3600+" sec";
        
    }
}