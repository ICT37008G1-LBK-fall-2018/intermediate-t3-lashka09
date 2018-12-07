let ricxvebi = prompt('ჩაწერე ორი ციფრი').split(' '),
    a = +ricxvebi[0],
    b = +ricxvebi[1],
    sum = 0;

if((a <= 0 || b <= 0 ) || (a >= 1000 || b >= 1000) || a >= b ){
    alert('შეცლომითაა');
}else{
    for(a; a<=b; a++){
        sum += a;
    }

    alert(sum);
}