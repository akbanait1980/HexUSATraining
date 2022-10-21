import Auth from "./components/Auth";
import Header from "./components/Header";
import './App.css'

import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <div className="container">
      
      <UserContextProvider>
        <Header/>
        <Auth />
      </UserContextProvider>

    </div>
  );
}

export default App;
