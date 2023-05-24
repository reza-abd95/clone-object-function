const obj = {
    name : "reza",
    family : "abedi",
    age: 28,
    yaroo :{
        first : "developer" ,
        second: {
            hi: "yes",
            bye:"no",
        } 
    }
}


function clone(src) {
    let target = {};
    for (let key in src) {

      let value = src[key];

      if(value && typeof value === 'object') {

        target[key] = clone(value);

    } else {
        
        target[key] = value;
    }
   }
      return target;
  };

  const newObj = clone(obj);
  console.log(newObj)
  
