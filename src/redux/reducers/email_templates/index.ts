const initialState = {
  allEmailTemplateNames: [],
  selectedEmailTemplateName: "",
  selectedTemplateContext: "",
  contextVariables: "",
};

const emailTemplatesReducer = (state = initialState, action: any) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default emailTemplatesReducer;