import { useState, useEffect } from "react";
import ChartComponent from "./Components/ChartComponent/ChartComponent"
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <Skeleton height={50} width={200} />
          <Skeleton height={400} />
        </div>
      ) : (
        <ChartComponent />
      )}
    </div>
  )
}

export default App