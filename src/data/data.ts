
export const columns = [
    {
        label: 'Price(ETH)',
        key: 'price'
    },
    {
        label: 'Quantity',
        key: 'quantity'
    },
    {
        label: 'From',
        key: 'from_address'
    },
    {
        label: 'To',
        key: 'to_address'
    },
    {
        label: 'Time',
        key: 'timestamp'
    },
];

export const actionTypes = [
    {
        label: 'All',
        value: ''
    },
    {
        label: 'Listings',
        value: 'created'
    },
    {
        label: 'Successful for Sales',
        value: 'successful'
    },
    {
        label: 'Cancelled',
        value: 'cancelled'
    },
    {
        label: 'Bid Entered',
        value: 'bid_entered'
    },
    {
        label: 'Bid Withdrawn',
        value: 'bid_withdrawn'
    },
    {
        label: 'Approve',
        value: 'approve'
    },
    {
        label: 'Transfer',
        value: 'transfer'
    }
]