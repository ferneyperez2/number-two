

function volver(){
    location.reload()
}

function sumar(){
    let one = parseInt(document.getElementById('valor1').value);
    let two = parseInt(document.getElementById('valor2').value);
    document.getElementById('el-resultado').innerHTML = one+two;
}

function restar(){
let one = parseInt(document.getElementById('valor1').value);
let two = parseInt(document.getElementById('valor2').value);
document.getElementById('el-resultado').innerHTML = one-two;
}

function multiplicar(){
    let one = parseInt(document.getElementById('valor1').value);
    let two = parseInt( document.getElementById('valor2').value);
 document.getElementById('el-resultado').innerHTML = one*two;
}

function dividir(){

    let one = parseInt(document.getElementById('valor1').value);
    let two = parseInt(document.getElementById('valor2').value);
    document.getElementById('el-resultado').innerHTML = one/two;

}

function click(){
     let text= (document.getElementById('haga').value)
     document.getElementById('resorte').innerHTML = text + "operacion con exito";
}




