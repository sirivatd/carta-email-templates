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

}

export const formJSONFromArray = (contentVariables: string[]) => {
  contentVariables.forEach(variable => {
  });
}