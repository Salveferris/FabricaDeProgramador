function compra(){
    var desc = parseFloat(document.getElementById('descontoDia').value)
    var prod1 = parseFloat(document.getElementById('produto1').value);
    var prod2 = parseFloat(document.getElementById('produto2').value);
    var prod3 = parseFloat(document.getElementById('produto3').value);
    var prod4 = parseFloat(document.getElementById('produto4').value);
    var prod5 = parseFloat(document.getElementById('produto5').value);

    var result1 = prod1 * 2.5;
    var result2 = prod2 * 3.1;
    var result3 = prod3 * 3.7;
    var result4 = prod4 * 3.9;
    var result5 = prod5 * 4.0; 
    var valoremrs = (result1 + result2 + result3 + result4 + result5)
    var totalprod = prod1 + prod2 + prod3 + prod4 + prod5;
    var bonus1 = (prod1/100) * desc
    var bonus2 = (prod2/100) * desc
    var bonus3 = (prod3/100) * desc
    var bonus4 = (prod4/100) * desc
    var bonus5 = (prod5/100) * desc
    var totalbonus = (bonus1 + bonus2 + bonus3 + bonus4 + bonus5)
    var levapracasa = totalprod + totalbonus
    document.getElementById('totalprod').textContent=totalprod;
    document.getElementById('totalrs').textContent=valoremrs;
    document.getElementById('bonus1').textContent=bonus1;
    document.getElementById('bonus2').textContent=bonus2;
    document.getElementById('bonus3').textContent=bonus3;
    document.getElementById('bonus4').textContent=bonus4;
    document.getElementById('bonus5').textContent=bonus5;
    document.getElementById('totalbonus').textContent=totalbonus;
    document.getElementById('levapracasa').textContent=levapracasa;
    
    
    
}