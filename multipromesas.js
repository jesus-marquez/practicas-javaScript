let p1=new Promise((resolve,reject)=> setTimeout(resolve,500,'hola mundo'));

let p2=new Promise((resolve,reject)=> setTimeout(resolve,600,'hola de nuevo'));

let p3=Promise.reject();

let saludar=()=>console.log('hola a todos');
// p1.then(function(){
//   p2.then(function() {
//
//   saludar();
//   })
// })

Promise.all([p1,p2,p3]).then(resultados=>{
  console.log(resultados);
  saludar();
}).catch(()=>console.log('o no he fallado'))
