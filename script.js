function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal*rate*years/100;
    var year = new Date().getFullYear + parseInt(years)
    if (principal<=0){
        alert("Enter a positive number");
    }
    document.getElementById("result").innerHTML=interest;
    
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}