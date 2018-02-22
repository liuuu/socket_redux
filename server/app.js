const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8989 }, () => {
  console.log('connect');
});

const users = [];

const broadcast = (data, ws) => {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN && client !== ws) {
      client.send(JSON.stringify(data));
    }
  });
};

wss.on('connection', ws => {
  let index;
  ws.on('message', message => {
    const data = JSON.parse(message);
    switch (data.type) {
      case 'ADD_USER': {
        console.log('add user');

        index = users.length;
        users.push({ name: data.name, id: index + 1 });
        ws.send(
          JSON.stringify({
            type: 'USER_LIST',
            users,
          })
        );
        broadcast(
          {
            type: 'USER_LIST',
            users,
          },
          ws
        );
        break;
      }
      case 'ADD_MESSAGE':
        broadcast(
          {
            type: 'ADD_MESSAGE',
            message: data.message,
            author: data.author,
          },
          ws
        );
        break;
      default:
        break;
    }
  });

  ws.on('close', () => {
    users.splice(index, 1);
    broadcast(
      {
        type: 'USER_LIST',
        users,
      },
      ws
    );
  });
});
