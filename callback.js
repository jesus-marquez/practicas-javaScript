// const request=require('request');
//
// request('http://google.com', function(){
//   console.log('se termino la peticion');
// })
// console.log('soy el siguiente mensaje')

const rp=require('request-promise');

//promise
rp('http://google.com')
  .then(function(html){
    console.log('termine la peticion de google');
  }).catch(function(err){
    console.log(err);
  })
