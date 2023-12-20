import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert"
function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button type ="Primary"/>
        <Button type ="Success"/>
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert text ="error"/>
        <br></br>
        <Alert text ="warning"/>
        <br></br>
        <Alert text ="info"/>
        <br></br>
        <Alert text ="success"/>
      </div>
    </div>
  );
}

export default App;
