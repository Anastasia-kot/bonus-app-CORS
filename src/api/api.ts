export const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'AccessKey': process.env.REACT_APP_AccessKey
    },
    body: JSON.stringify({
        "idClient": process.env.REACT_APP_ClientID,
        "accessToken": "",
        "paramName": "device",
        "paramValue": process.env.REACT_APP_DeviceID,
        "latitude": 0,
        "longitude": 0,
        "sourceQuery": 0
    })
};

export const headers = (token: string) => ({
    'Content-Type': 'application/json',
    'AccessKey': process.env.REACT_APP_AccessKey,
    'AccessToken': token,
})