import { utils } from "ethers";
import { displayAddress, getFromAddress, getPrice, getTime, getToAddress } from "../helper/helper";
import './style.css';

const {formatEther} = utils;    
const EventElement = ({data}:PropsType) => {
    return (
        <div className="item-wrapper">
            <span>{getPrice(data)}</span>
            <span>{data.quantity || 'undefined'}</span>
            <span title={getFromAddress(data)}>{displayAddress(getFromAddress(data))}</span>
            <span title={getToAddress(data)}>{displayAddress(getToAddress(data))}</span>
            <span>{getTime(data)}</span>
        </div>
    )
}

interface PropsType {
    data: {
        price: string | number,
        quantity: string,
        from: string,
        to: string,
        time: string | number
    }
}
export default EventElement;