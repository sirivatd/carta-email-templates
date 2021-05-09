const initialState = {
  allEmailTemplateNames: [],
  selectedEmailTemplateName: "",
  isLoading: false,
  contextVariables: []
};

const emailTemplates = (state = initialState, action: any) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default emailTemplates;