import { formatEther } from "ethers/lib/utils"

export const getPrice = (data: any) => {
    let price = data.total_price || data.bid_amount || data.starting_price;
    if (price) {
        return parseFloat(formatEther(price)).toFixed(2);
    } else {
        return 'None';
    }
}

export const getToAddress = (data:any) => {
    let transaction = data.transaction;
    if  (transaction) {
        return transaction.to_account.address;
    }
    let to_account = data.to_account
    if (to_account) {
        return to_account.address;
    }
    return 'None';
}

export const getFromAddress = (data:any) => {
    let transaction = data.transaction;
    if  (transaction) {
        return transaction.from_account.address;
    }
    let from_account = data.from_account
    if (from_account) {
        return from_account.address;
    }
    return 'None';
}

export const getTime = (data: any) => {
    let transaction = data.transaction;
    if  (transaction) {
        return new Date(transaction.timestamp).toLocaleString();
    }
    let {created_date} = data; 
    if (created_date) {
        return new Date(created_date).toLocaleString();
    }
    return 'None';
}

export const displayAddress = (address: string) => {
    if (!address || address == 'None') return 'None';
    let _address = address.slice(0, 4) + '...' + address.slice(-4);
    return _address;
}