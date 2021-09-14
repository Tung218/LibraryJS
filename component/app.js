import html from "../core.js";
import {connect} from "../store.js"
const connector = connect();
function App() {
  return html`
  <ul>
  </ul>
  `
};
export default connector(App);
