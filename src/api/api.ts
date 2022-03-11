import axios from "../config/axios";
import config from '../config/config';

export const getEvents = async (tokenAddress: string | undefined, tokenID: string | undefined, eventType: string | undefined): Promise<any[]> => {
    let res = await axios.get(config.opensea_events_endpoint, {
        params: {
            asset_contract_address: tokenAddress ? tokenAddress : undefined,
            token_id: tokenID ? tokenID : undefined,
            event_type: eventType ? eventType : undefined
        }
    });
    console.log('res: ', res?.data?.asset_events);            
    return res.data.asset_events as any[];
}
