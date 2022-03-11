import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import config from './config/config';
import { getEvents } from './api/api';
import EventElement from './components/EventElement';

function App() {
  const [events, setEvents] = useState<any[]>();
  const [tokenID, setTokenID] = useState<string>();
  const [eventType, setEventType] = useState<string>();
  const [tokenAddress, setTokenAddress] = useState<string>(config.opensea_contract_address);

  const getEventsPerToken = async () => {
    let events = await getEvents(tokenAddress, tokenID, eventType);
    setEvents(events);
  }
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
          <option value="">All</option>
          <option value="created">Listings</option>
          <option value="successful">Successful for Sales</option>
          <option value="cancelled">Cancelled</option>
          <option value="bid_entered">Bid Entered</option>
          <option value="bid_withdrawn">Bid Withdrawn</option>
          <option value="approve">Approve</option>
          <option value="transfer">Transfer</option>
        </select>
      </div>
      <button className="form-button" onClick={getEventsPerToken}>Get</button>

      <div className="events-list-wrapper">
        <div className="item-wrapper">
            <span>Price(ETH)</span>
            <span>Quantity</span>
            <span>From Address</span>
            <span>To Address</span>
            <span>Time</span>

        </div>
        <ul className="events-list">
          {
            events?.map(event => (
              <li className="event-list-item">
                <EventElement data={event}/>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
