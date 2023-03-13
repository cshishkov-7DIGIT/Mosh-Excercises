import "./App.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let items = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Philadelphia",
    "Phoenix",
    "San Antonio",
  ];

  const heading = "Cities";

  const onSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div className="App">
      {/* <ListGroup items={items} heading={heading} onSelectItem={onSelectItem} /> */}

      {/* <Alert>
        <h1>Alert</h1>
      </Alert> */}

      <Button
        children="My button"
        onClick={() => console.log("Clicked!")}
        // color={'secondary'}
      />
    </div>
  );
}

export default App;
