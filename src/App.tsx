import React, { useState } from 'react';
import './App.css';
import config from './config/config';
import EventElement from './components/EventElement';
import { actionTypes, columns } from './data/data';
//@ts-ignore
import { CSVLink } from "react-csv";
import useData from './hook/useData';

function App() {
  const [tokenID, setTokenID] = useState<string>();
  const [eventType, setEventType] = useState<string>();
  const [tokenAddress, setTokenAddress] = useState<string>(config.opensea_contract_address);
  
  const data = useData(tokenAddress, tokenID, eventType);
  return (
    <div className="wrapper">
      <div className="form-group">
        <label htmlFor="" className="control-label">Token Address: </label>
        <input type="text" className="form-control" value={tokenAddress} onChange={(e) => setTokenAddress(e.target.value)}/>
      </div>
      <div className="form-group">
        <label htmlFor="" className="control-label">Token ID:</label>
        <input type="text" className="form-control" value={tokenID} onChange={(e) => setTokenID(e.target.value)}/>
      </div>
      <div className="form-group">
        <label htmlFor="" className="control-label">Action Type:</label>
        <select className="form-control" value={eventType} onChange={(e) => setEventType(e.target.value)}>
         {
           actionTypes.map(action => (
             <option value={action.value}>{action.label}</option>
           ))
         }
        </select>
      </div>
      <CSVLink data={data} headers={columns} filename={`nft-data-${tokenAddress}-${tokenID}-${eventType}.csv`}>
        Export To CSV
      </CSVLink>

      <div className="events-list-wrapper">
        <div className="item-wrapper">
            {
              columns.map(column => (
                <span>{column.label}</span>
              ))
            }

        </div>
        <ul className="events-list">
          {
            data?.map(data => (
              <li className="event-list-item">
                <EventElement data={data}/>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
