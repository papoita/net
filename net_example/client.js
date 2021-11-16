/** @format */

const net = require("net");
const conn = net.createConnection({
	host: "localhost", // change to IP address of computer or ngrok host if tunneling
	port: 17441, // or change to the ngrok port if tunneling
});
//when running ngrok this will give you the port and the host
conn.setEncoding("utf8"); // interpret data as text
// client.js
// conn.on("data", (data) => {
// 	console.log("Server says: ", data);
// });
// // client.js

// conn.on("connect", () => {
// 	conn.write("Hello from client!");
// });
