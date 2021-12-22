import "./css/app.css";
import data from "./data/etsy.json";
import Listing from "./components/Listing";

export default function App() {
  return (
    <div className="App">
      <Listing items={data} />
    </div>
  );
}
