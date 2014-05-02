'use strict';

clueApp.constant('WEBSOCKET_CONFIG', {
    NodeAppServer: {
        "localhost": 'http://192.168.178.15:3001/broadcast',
        "54.72.77.96": 'http://54.72.77.96:3001/broadcast' // amazon AWS
    },
    GoAppServer: 'http://localhost:3000/echo',
});