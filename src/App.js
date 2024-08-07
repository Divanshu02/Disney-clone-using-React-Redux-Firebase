import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import FirebaseContextProvider from "./context/FirebaseContextProvider";
import DataFetchContextProvider from "./context/DataFetchContextProvider";

function App() {
  return (
    <FirebaseContextProvider>
        <Header />
        <Outlet />
    </FirebaseContextProvider>
  );
}
     
export default App;
