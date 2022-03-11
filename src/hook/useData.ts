import { useEffect, useState } from "react";
import { getEvents } from "../api/api";
import { getFromAddress, getPrice, getTime, getToAddress } from "../helper/helper";
import { RowType } from "../interface/interface";

const useData = (tokenAddress: string | undefined, tokenID: string | undefined, eventType: string | undefined): RowType[] => {
    const [data, setData] = useState<RowType[]>();
    
    useEffect(() =>{
        (async () => {
            let events = await getEvents(tokenAddress, tokenID, eventType);
            const _data = events.map(event => (
                {
                    price: getPrice(event),
                    quantity: event.quantity,
                    from_address: getFromAddress(event),
                    to_address: getToAddress(event),
                    timestamp: getTime(event),
                }               
            ));
            setData(_data);
        })();
    }, [tokenAddress, tokenID, eventType]);

    return data || [];
}
export default useData;