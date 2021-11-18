import React from "react";
import Button from '@mui/material/Button';
import {getRocket, getLaunchpad, latestLaunch} from "../../services/index"
import SpacexTable from "../../components/spacex-table";
import Nav from "../../components/nav/index"

import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

function SpacexLatestTable() {

    //modal states
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {setModalAnimationData(true); setOpen(true)};
    const handleClose = () => {setOpen(false); setModalData({}); setModalAnimationData(true) };
    const [modalData, setModalData] = React.useState({})
    const [modalAnimationData, setModalAnimationData] = React.useState(false)
    
    //table data states
    const [data, setData] = React.useState([])
    const [animationData, setAnimationData] = React.useState(true);

    React.useEffect(() => {
        latestLaunch((response) => {
          console.log(response)
          if(response.status <= 299 && response.status >= 200){
            setData([response.data])
            setAnimationData(false)
          }
        });
      }, [animationData]);

    const getRocketData = (id) => {
        getRocket(id, (response) => {
          console.log(response)
          if(response.status <= 299 && response.status >= 200){
            const picked = (({ name, type, country, first_flight, wikipedia}) => ({ name, type, country, first_flight, wikipedia}))(response.data);
            setModalData(picked)
            setModalAnimationData(false)
          }
        });
    };

    const getLaunchpadData = (id) => {
      getLaunchpad(id, (response) => {
        console.log(response)
        if(response.status <= 299 && response.status >= 200){
          const picked = (({ full_name, locality, region, launch_attempts, launch_successes, timezone, status, details }) => ({ full_name, locality, region, launch_attempts, launch_successes, timezone, status, details }))(response.data);
          setModalData(picked)
          setModalAnimationData(false)
        }
      });
  };

    const getDetailsData = (data) => {
      return {id: data.id, details: data.details, article: data.links.article, webcast: data.links.webcast, wikipedia: data.links.wikipedia}
    }

    const rocketButtonClick = (e) => {
      console.log(e.target.innerText)
      getRocketData(e.target.innerText)
      handleOpen()
    }

    const launchpadButtonClick = (e) => {
      console.log(e.target.innerText)
      getLaunchpadData(e.target.innerText)
      handleOpen()
    }

    const columns = React.useMemo(
        () => [
          {
            Header: "Name",
            columns: [
              {
                Header: "Name",
                accessor: "name",
              },
              {
                Header: "Flight Number",
                accessor: "flight_number",
              },
              {
                Header: "Success",
                accessor: "success",
              },
              {
                Header: "Date",
                accessor: "date_utc",
              },
              {
                // Make an expander cell
                Header: () => "Launchpad", // No header
                id: 'launchpad', // It needs an ID
                Cell: ({ row }) => (
                  // Use Cell to render an expander for each row.
                  // We can use the getToggleRowExpandedProps prop-getter
                  // to build the expander.
    
                  <Button onClick={launchpadButtonClick}>{row.original.launchpad}</Button>
                ),
              },
              {
                // Make an expander cell
                Header: () => "Rocket", // No header
                id: 'rocket', // It needs an ID
                Cell: ({ row }) => (
                  // Use Cell to render an expander for each row.
                  // We can use the getToggleRowExpandedProps prop-getter
                  // to build the expander.
    
                  <Button onClick={rocketButtonClick}>{row.original.rocket}</Button>
                ),
              },
              {
                // Make an expander cell
                Header: () => "More Details", // No header
                id: 'moreDetails', // It needs an ID
                Cell: ({ row }) => (
                  // Use Cell to render an expander for each row.
                  // We can use the getToggleRowExpandedProps prop-getter
                  // to build the expander.
    
                  <Button onClick={() => {setModalData(getDetailsData(row.original)); console.log(modalData); handleOpen()}}>Details</Button>
                ),
              },
            ],
          },
        ],
      [] );

  return (
    <React.Fragment>
      <Container>
        <Nav active="ultimo"></Nav>
        <SpacexTable animationData={animationData} columns={columns} data={data} open={open} handleClose={handleClose} modalData={modalData} modalAnimationData={modalAnimationData}></SpacexTable>
      </Container>
    </React.Fragment>
  );
}

export default SpacexLatestTable;
