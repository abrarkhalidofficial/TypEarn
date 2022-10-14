export let socket = new WebSocket("wss://typearncontrol.com:8766");

socket.onclose = () => {
  socket = new WebSocket("wss://typearncontrol.com:8766");
};
