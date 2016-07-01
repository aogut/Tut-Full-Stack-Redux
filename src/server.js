import Server from 'socket.io';

export default function startServer(store) {
  const io = new Server().attach(8090);

  console.log("listening at 8090");
  store.subscribe(
    () => io.emit('state', store.getState().toJS())
  );

  io.on('connection', (socket) => {
    console.log("connected: " + new Date());
    socket.emit('state', store.getState().toJS());
    socket.on('action', store.dispatch.bind(store));
  });
}
