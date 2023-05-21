import './App.css';
import { useSearchParams } from "react-router-dom";

function App() {
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        
  );
}

export default App;
