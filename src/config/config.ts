export default {
    network: process.env.REACT_APP_MODE === 'test' ? 'testnet' : 'mainnet',
    openseaAPIKey: process.env.REACT_APP_OPENSEA_API_KEY || '',
    infura_key: process.env.REACT_APP_INFURA_KEY || '',
    infura_secret_key: process.env.REACT_APP_INFURA_SECRET_KEY || '',
    opensea_events_endpoint: `https://api.opensea.io/api/v1/events`,
    opensea_contract_address: '0x1A92f7381B9F03921564a437210bB9396471050C'
}