
function App() {
  return (
    <div className="container">
       
    {/* <h1>Product is running on { process.env.REACT_APP_ENV } env</h1> */}
    <p>Project is runnuing on <b>{ process.env.REACT_APP_ENV === 'local' ? "localhost/api" : "www.abc.com/api" }</b></p>

    </div>
  );
}
export default App;
