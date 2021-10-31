import "./App.css";
import Routs from "./Routs";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Routs />
    </Provider>
  );
}

export default App;
