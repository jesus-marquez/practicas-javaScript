function calculo(){
  return new Promise((resolve,reject)=>{
    setTimeout(resolve,500,5);
  })
}

function segundoCalculo(numero){
  console.log(numero);
  return new Promise((resolve,reject)=>{
    setTimeout(resolve,300,'este es el segundo Calculo');
  })
}

calculo().then(segundoCalculo).then(console.log);
