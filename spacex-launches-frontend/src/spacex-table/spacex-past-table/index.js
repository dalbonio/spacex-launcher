import { useTable } from "react-table";
import styled from 'styled-components'
import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

const MyButton = styled.button``

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function SpacexPastTable({ data }) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [modalData, setModalData] = React.useState({})
    const [launchpadData, setLaunchpadData] = React.useState({})
    const [rocketData, setRocketData] = React.useState({})

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
            Header: "Launchpad",
            accessor: "launchpad",
          },
          {
            Header: "Rocket",
            accessor: "rocket",
          },
          {
            // Make an expander cell
            Header: () => "More Details", // No header
            id: 'moreDetails', // It needs an ID
            Cell: ({ row }) => (
              // Use Cell to render an expander for each row.
              // We can use the getToggleRowExpandedProps prop-getter
              // to build the expander.

              <Button onClick={() => {setModalData(row.original); console.log(row.original); handleOpen()}}>Details</Button>
            ),
          },
        ],
      },
    ],
    []
  );

  return (
    <React.Fragment>
        <Styles>
        <Table columns={columns} data={data}/>
        </Styles>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            { "id" in modalData && <Typography id="modal-modal-title" variant="h6" component="h2">Id: {modalData.id}</Typography> }
            { "details" in modalData && <Typography id="modal-modal-title" variant="h6" component="h2">Details: {modalData.details}</Typography> }
            { "links" in modalData && "articles" in modalData.links && <Typography id="modal-modal-description" sx={{ mt: 2 }}>Articles: {modalData.links.article}</Typography> }
            { "links" in modalData && "webcast" in modalData.links && <Typography id="modal-modal-description" sx={{ mt: 2 }}> Webcast: {modalData.links.webcast}</Typography> }
            { "links" in modalData && "wikipedia" in modalData.links && <Typography id="modal-modal-description" sx={{ mt: 2 }}> Webcast: {modalData.links.wikipedia}</Typography> }
        </Box>
        </Modal>
    </React.Fragment>
  );
}

export default SpacexPastTable;
