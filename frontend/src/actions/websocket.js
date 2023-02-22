export const wsConnect = () => ({ type: 'WS_CONNECT' });
// export const wsConnecting = payload => ({ type: 'WS_CONNECTING', payload });
export const wsConnected = () => ({ type: 'WS_CONNECTED' });
export const wsRecievedMessage = (payload) => ({ type: 'WS_RECIEVED_MESSAGE', payload })
export const wsSendedMessage = (payload) => ({ type: 'WS_SENDED_MESSAGE', payload })

