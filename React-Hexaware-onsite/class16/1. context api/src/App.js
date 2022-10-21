import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/UserContext";

function App() {
  return (
    <div className="container">
      {/* <h1>App</h1> */}

      <UserProvider value="Mark Smith">
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
