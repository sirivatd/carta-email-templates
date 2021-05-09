import { connect } from "react-redux";
import TemplateShow from "./";

interface State {
  allEmailTemplateNames: string[],
}
const mapStateToProps = (
  state: State
) => {
  return {
    templateNames: state.allEmailTemplateNames,
  }
}

export default connect(mapStateToProps, {})(TemplateShow)