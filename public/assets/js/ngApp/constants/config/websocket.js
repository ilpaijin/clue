'use strict';

clueApp.constant('WEBSOCKET_CONFIG', {
    NodeAppServer: {
        "localhost": {
            broadcast: 'http://127.0.0.1:3001/broadcast',
            echo: 'http://127.0.0.1:3001/echo'
        },
        "54.72.77.96": { // amazon AWS
            broadcast: 'http://54.72.77.96:3001/broadcast'
        }
    },
    GoAppServer: 'http://localhost:3000/echo',
});