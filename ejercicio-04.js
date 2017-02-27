function fibonacci(upperLimit) {

  if((upperLimit == "string") || (upperLimit == false)||(upperLimit == true) || ( upperLimit == Math.abs(upperLimit) * -1 )){
    return "Error";
  };

  var e =[];
         var var1 = 0, var2 = 1,  var3;
         e.push(var1);
         e.push(var2);
for(var i=3; i <= upperLimit;i++){
      var3 = var1 + var2;
      var1 = var2;
      var2 = var3;
       e.push(var3);
 };   //console.log(e)
        return (e.join( ));
}

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.fibonacci = fibonacci;
}
