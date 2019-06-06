var data = new Date();
// Guarda cada pedaço em uma variável
var dia     = data.getDate();           // 1-31
var dia_sem = data.getDay();            // 0-6 (zero=domingo)
var mes     = data.getMonth();          // 0-11 (zero=janeiro)
var ano2    = data.getYear();           // 2 dígitos
var ano4    = data.getFullYear();       // 4 dígitos
var hora    = data.getHours();          // 0-23
var min     = data.getMinutes();        // 0-59
var seg     = data.getSeconds();        // 0-59
var mseg    = data.getMilliseconds();   // 0-999
var tz      = data.getTimezoneOffset(); // em minutos

// Formata a data e a hora (note o mês + 1)
var str_data = dia + '/' + (mes+1) + '/' + ano4;
var str_hora = hora + ':' + min + ':' + seg;

// Mostra o resultado
//lert('Hoje é ' + str_data + ' às ' + str_hora);

if (hora >= 6 && hora < 12){
document.write("Ei jovem, bom dia!");
}

if (hora >= 12 && hora < 19){
document.write("Ei jovem, boa tarde!");
}

if (hora >= 19 && hora < 23){
document.write("Ei jovem, boa noite!");
}

if (hora >= 23 && hora < 5){
document.write("Ei jovem, está tarde, por que não vai dormir ?");
}