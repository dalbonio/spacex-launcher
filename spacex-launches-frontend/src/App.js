import { useTable } from "react-table";
import React, {useEffect, useState} from "react";
import SpacexFutureTable from "./spacex-table/spacex-future-table";
import SpacexPastTable from "./spacex-table/spacex-past-table";
import {upcomingLaunches, pastLaunches} from "./services/index"

function App() {

  const [data, setData] = useState([])
  const [animationData, setAnimationData] = useState(true);

  useEffect(() => {
      pastLaunches((response) => {
        console.log(response)
        if(response.status <= 299 && response.status >= 200){
          setData(response.data)
          setAnimationData(false)
        }
      });
    }, [animationData]);

  return (
    // <SpacexFutureTable data={data}>
    // </SpacexFutureTable>

    <SpacexPastTable data={data}>
    </SpacexPastTable>
  )
}

export default App;
