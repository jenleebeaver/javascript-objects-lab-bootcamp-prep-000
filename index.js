var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object={}, {key: value})
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object={}, {key: value})
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  obj[key] = value;
  return object;
}

 function deleteFromObjectByKey(object, key){
   delete object.key;
   return object;
 }

function deleteFromObjectByKey(object, key){
  var newObj = object;
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object,key){
  object[key] = undefined;
  return object;
}
