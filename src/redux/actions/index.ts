export const setTemplateNames = (templateNames: string[]) => {
  return { type: "SET_TEMPLATES_NAMES", templateNames}
};

export const setSelectedTemplateName = (templateName: string) => {
  return { type: "SET_SELECTED_TEMPLATE_NAME", templateName }
};

export const setSelectedTemplateContext = (template: string) => {
  return { type: "SET_SELECTED_TEMPLATE_CONTEXT", template }
};

export const setGlobalError = (error: string) => {
  return { type: "SET_GLOBAL_ERROR", error}
};

export const clearGlobalError = () => {
  return { type: "CLEAR_GLOBAL_ERROR" }
};

export const setContextVariables = (contextVariables: string[]) => {
  return { type: "SET_CONTEXT_VARIABLES", contextVariables}
};

export const setIsLoading = () => {
  return { type: "SET_IS_LOADING" }
};