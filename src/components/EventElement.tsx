import { utils } from "ethers";
import { displayAddress, getFromAddress, getPrice, getTime, getToAddress } from "../helper/helper";
import { RowType } from "../interface/interface";
import './style.css';

const EventElement = ({data}:PropsType) => {
    return (
        <div className="item-wrapper">
            <span>{data.price}</span>
            <span>{data.quantity}</span>
            <span title={data.from_address}>{displayAddress(data.from_address)}</span>
            <span title={data.to_address}>{displayAddress(data.to_address)}</span>
            <span>{data.timestamp}</span>
        </div>
    )
}

interface PropsType {
    data: RowType
}
export default EventElement;