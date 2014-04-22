function fixThis(fn,obj){
   return function(){
       return fn.apply(obj,[].slice.call(arguments,0));
   }
}