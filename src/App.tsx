import "./App.css";
declare global {
  interface Window {
    Osmos: any;
  }
}
function App() {
  return (
    <div className="App">
      {/* Button provide in snippet */}
      <button
        className="ftl-button"
        onClick={() =>
          window.Osmos.handleClick(
            "nrvmfhp-7cmt2p2bsfubrzvr_yzchlc7kgqjwjgwmttyytxnj"
          )
        }
      >
        Upload Your Data
      </button>
    </div>
  );
}

export default App;
