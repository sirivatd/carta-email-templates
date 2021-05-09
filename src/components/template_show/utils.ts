// We need to find a way to extrapolate the variables used by any given template
// We also need a way to take a variable and translate to nested json 

// The following helper methods are based on the following assumptions:
// 1. Email template variables are always stored within "{{ }}"". A user can have unlimited variables
// 2. Dot notation represents one layer in the nested JSON object
//    i.e. user.address.city => {"user": {"address": {"city": "Chicago"}}}

export const containsValidContextVariables = (contextVariables: string) => {

}

// Recursive regex string matching
// Input: "<html> <head> <style type="text"> {{ user.firstName }} ... {{ user.lastName }} ... {{ location }}"
// Output: ["user.firstName", "user.lastName", "location"]
export const extractContentVariables = (emailTemplateString: string) => {
  const templatePattern = /[^{\{]+(?=}\})/g
  let contentVariables = emailTemplateString.match(templatePattern);

  return contentVariables && contentVariables.map(variable => variable.trim());
}

// Input: ["exercise.grant.issuer.name", "exercise.grant.label", "exercise.url"]
// Output: {"exercise": {"grant": {"issuer": {"name": }, {"label": }}}, {"url": }}
export const formJSONFromString = (contentVariable: string) => {
  let dotIndex = contentVariable.indexOf('.');

  if(dotIndex === -1) {
    return `{"${contentVariable}":"*placeholder*"}`
  }
  
  return `{"${contentVariable.slice(0, dotIndex)}":${formJSONFromString(contentVariable.slice(dotIndex+1))}}`
}

function toType(a) {
  // Get fine type (object, array, function, null, error, date ...)
  return ({}).toString.call(a).match(/([a-z]+)(:?\])/i)[1];
}

function isDeepObject(obj) {
  return "Object" === toType(obj);
}
const options = {nonEnum:true, symbols:true, descriptors: true, proto:true};

function deepAssign(options) {
  return function deepAssignWithOptions (target, ...sources) {
      sources.forEach( (source) => {

          if (!isDeepObject(source) || !isDeepObject(target))
              return;

          // Copy source's own properties into target's own properties
          function copyProperty(property) {
              const descriptor = Object.getOwnPropertyDescriptor(source, property);
              //default: omit non-enumerable properties
              if (descriptor.enumerable || options.nonEnum) {
                  // Copy in-depth first
                  if (isDeepObject(source[property]) && isDeepObject(target[property]))
                      descriptor.value = deepAssign(options)(target[property], source[property]);
                  //default: omit descriptors
                  if (options.descriptors)
                      Object.defineProperty(target, property, descriptor); // shallow copy descriptor
                  else
                      target[property] = descriptor.value; // shallow copy value only
              }
          }

          // Copy string-keyed properties
          Object.getOwnPropertyNames(source).forEach(copyProperty);

          //default: omit symbol-keyed properties
          if (options.symbols)
              Object.getOwnPropertySymbols(source).forEach(copyProperty);

          //default: omit prototype's own properties
          if (options.proto)
              // Copy souce prototype's own properties into target prototype's own properties
              deepAssign(Object.assign({},options,{proto:false})) (// Prevent deeper copy of the prototype chain
                  Object.getPrototypeOf(target),
                  Object.getPrototypeOf(source)
              );

      });
      return target;
  }
}

export const formJSONFromArray = (contentVariables: string[]) => {
  contentVariables.sort((a, b) => b.length - a.length)
  var resultObject = {}

  contentVariables.forEach(variable => {
    let tempObject = JSON.parse((formJSONFromString(variable)));
    resultObject = deepAssign(options)(resultObject, tempObject)
  });

  return JSON.stringify(resultObject);
}