import Body from "./components/body"
import Store from "./utils/reduxStore";
import { Provider } from "react-redux";
const App = () => {
    return (
        <>
        <Provider store = {Store}>
        
       <Body/>
       
        </Provider>

      </>

    );
};

export default App;