import styled from 'styled-components'
import React from "react";
import Table from "../table/index"
import Loader from "../loader/index"
import InformationModal from "../information-modal/index";

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


function SpacexTable({columns, data, animationData, open, handleClose, modalData, modalAnimationData}) {

  return (
    <React.Fragment>
        <Styles>
        <Table columns={columns} data={data}/>
        {animationData ? (<Loader/>) : (<div></div>)}
        </Styles>
        <InformationModal open={open} handleClose={handleClose} modalData={modalData} modalAnimationData={modalAnimationData}></InformationModal>
    </React.Fragment>
  );
}

export default SpacexTable