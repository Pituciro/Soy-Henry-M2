var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)){
    resultSet.push(startEl)
  }
  for (let i = 0; i < startEl.children.length; i++) {
    let childrenResult= traverseDomAndCollectElements(matchFunc, startEl.children[i]) 
    resultSet= resultSet.concat(childrenResult)
  //  resultSet = [...resultSet, ...childrenResult] ... spread
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0]=== '#') return 'id';
  else if(selector[0]=== '.') return 'class';
  else if(selector.includes('.')) return 'tag.class';
  return 'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = function(elemento){
    return `#${elemento.id}` === selector;
    }
    //matchFunction = function(elemento){
      //if(elemento.id === selector) 
     // return "#" + elemento.id=== selector;
    //matchFunction = function(elemento) {
   // return "#" + elemento.id === selector;
  }
    else if (selectorType === "class") { 
      matchFunction = function(elemento){
        const clases = elemento.classList
        for (let i = 0; i < clases.length; i++) {
          if(`.${clases[i]}`=== selector){
            return true
          }
        }
        return false;
      }
      
    //return (elemento) =>{
    //let selectorName = selector.slice(1) // le quito el puntito.
    //let classes= elemento.className.split(' ') // obtengo todas las clases/
    //return classes.includes(selectorName);  
    }
  else if (selectorType === "tag.class") {
    matchFunction = function(elemento){
      const [tag, clas] = selector.split(".")  //const elemts= selector.split(".") // destructurin const tag = elemts[0] const clas = elemts[1]
      const classFn = matchFunctionMaker(`.${clas}`);
      const tagFn = matchFunctionMaker(tag)
    /*   if(tagFn(elemento)){
        if(classFn(elemento)){
          return true;
        }
      } else {
        return false;
    } */
    return tagFn(elemento) && classFn(elemento);
  }
  } else if (selectorType === "tag") {
    matchFunction = function(elemento){
      const elementTag = elemento.tagName
      if(selector.toUpperCase() === elementTag) return true
      else return false;
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
