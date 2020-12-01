let day = 9;
let month = 4;


if(((day >=21 && day <=31) && month == 3) || ((day >= 1 && day <=19)) && month == 4){
    console.log("KOC");
}else if(((day >=20 && day <=30) && month == 4) || ((day >= 1 && day <=20)) && month == 5){
    console.log("BOGA");
}else if(((day >=21 && day <=31) && month == 5) || ((day >= 1 && day <=20)) && month == 6){
    console.log("IKIZLER");
}else if(((day >=21 && day <=30) && month == 6) || ((day >= 1 && day <=22)) && month == 7){
    console.log("YENGEC");
}else if(((day >=23 && day <=31) && month == 7) || ((day >= 1 && day <=22)) && month == 8){
    console.log("ASLAN");
}else if(((day >=23 && day <=31) && month == 8) || ((day >= 1 && day <=22)) && month == 9){
    console.log("BASAK");
}else if(((day >=23 && day <=30) && month == 9) || ((day >= 1 && day <=22)) && month == 10){
    console.log("TERAZI");
}else if(((day >=23 && day <=31) && month == 10) || ((day >= 1 && day <=21)) && month == 11){
    console.log("AKREP");
}else if(((day >=22 && day <=30) && month == 11) || ((day >= 1 && day <=21)) && month == 12){
    console.log("YAY");
}else if(((day >=22 && day <=31) && month == 12) || ((day >= 1 && day <=19)) && month == 1){
    console.log("OGLAK");
}else if(((day >=20 && day <=31) && month == 1) || ((day >= 1 && day <=18)) && month == 2){
    console.log("KOVA");
}else if(((day >=19 && day <=28) && month == 2) || ((day >= 1 && day <=20)) && month == 3){
    console.log("BALIK");
}else{
    console.log("PLEASE INPUT A TRUE DAY AND MONTH");
}