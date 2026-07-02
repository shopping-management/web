import { useEffect, useState } from "react";
import { getHealth } from "./api/client";

function App() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    getHealth().then(setData);
  }, []);

  return (
    <div className="p-6 text-xl">
      <h1 className="font-bold">Shopping Web</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;