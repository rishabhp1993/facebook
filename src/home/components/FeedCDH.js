import React, { useEffect, useState } from 'react';
import Offers from './Offers';
import OffersLoading from './OffersLoading';
import config from '../../config';

function FeedCDH() {
  const CDHOffersLoading = OffersLoading(Offers);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

useEffect(() => {
  setAppState({ loading: true });
  let customerID = config.customerID;
  let containerName = config.containerName;
  let channel = config.channel;
  let baseUrl = config.baseUrl !== "" ? config.baseUrl : window.location.origin;
  const apiUrl = `${baseUrl}/prweb/PRRestService/PegaMKTContainer/V2/Container`;
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ CustomerID: customerID, ContainerName: containerName, Channel: channel})
  };
  fetch(apiUrl, requestOptions)
    .then((res) => res.json())
    .then((offers) => {
      setAppState({ loading: false, offers: offers.ContainerList[0].RankedResults });
    })
    .catch((e) => {
      console.error(e);
      setAppState({ loading: false });
    });
}, [setAppState]);
  return (
    <CDHOffersLoading isLoading={appState.loading} offers={appState.offers} />
  );
}
export default FeedCDH;
