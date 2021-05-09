// We need to find a way to extrapolate the variables used by any given template
// We also need a way to take a variable and translate to nested json 

// The following helper methods are based on the following assumptions:
// 1. Email template variables are always stored within "{{ }}"". A user can have unlimited variables
// 2. Dot notation represents one layer in the nested JSON object
//    i.e. user.address.city => {"user": {"address": {"city": "Chicago"}}}

export const containsValidContextVariables = (contextVariables: string) => {

}

export const extractContentVariables = (emailTemplateString: string) => {

}

export const formJSONFromObject = (contentVariables: string[]) => {
  
}