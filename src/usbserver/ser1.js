const WebSocketServer = require("websocket").server;
const express = require("express");
const http = require("http");
const fs = require("fs");
const clients = [];
const cors = require("cors");
const fab = require("./fabric");

const data1 = {
	version: "3.6.3",
	objects: [
		{
			type: "circle",
			version: "3.6.3",
			originX: "left",
			originY: "top",
			left: 54,
			top: 20,
			width: 100,
			height: 100,
			fill: "transparent",
			stroke: "#000",
			strokeWidth: 1,
			strokeDashArray: null,
			strokeLineCap: "butt",
			strokeDashOffset: 0,
			strokeLineJoin: "miter",
			strokeMiterLimit: 4,
			scaleX: 5.1,
			scaleY: 4.17,
			angle: 0,
			flipX: false,
			flipY: false,
			opacity: 1,
			shadow: null,
			visible: true,
			clipTo: null,
			backgroundColor: "",
			fillRule: "nonzero",
			paintFirst: "fill",
			globalCompositeOperation: "source-over",
			transformMatrix: null,
			skewX: 0,
			skewY: 0,
			radius: 50,
			startAngle: 0,
			endAngle: 6.283185307179586,
		},
		{
			type: "circle",
			version: "3.6.3",
			originX: "left",
			originY: "top",
			left: 170,
			top: 90,
			width: 100,
			height: 100,
			fill: "transparent",
			stroke: "#000",
			strokeWidth: 1,
			strokeDashArray: null,
			strokeLineCap: "butt",
			strokeDashOffset: 0,
			strokeLineJoin: "miter",
			strokeMiterLimit: 4,
			scaleX: 1,
			scaleY: 1,
			angle: 0,
			flipX: false,
			flipY: false,
			opacity: 1,
			shadow: null,
			visible: true,
			clipTo: null,
			backgroundColor: "",
			fillRule: "nonzero",
			paintFirst: "fill",
			globalCompositeOperation: "source-over",
			transformMatrix: null,
			skewX: 0,
			skewY: 0,
			radius: 50,
			startAngle: 0,
			endAngle: 6.283185307179586,
		},
		{
			type: "circle",
			version: "3.6.3",
			originX: "left",
			originY: "top",
			left: 360,
			top: 90,
			width: 100,
			height: 100,
			fill: "transparent",
			stroke: "#000",
			strokeWidth: 1,
			strokeDashArray: null,
			strokeLineCap: "butt",
			strokeDashOffset: 0,
			strokeLineJoin: "miter",
			strokeMiterLimit: 4,
			scaleX: 1,
			scaleY: 1,
			angle: 0,
			flipX: false,
			flipY: false,
			opacity: 1,
			shadow: null,
			visible: true,
			clipTo: null,
			backgroundColor: "",
			fillRule: "nonzero",
			paintFirst: "fill",
			globalCompositeOperation: "source-over",
			transformMatrix: null,
			skewX: 0,
			skewY: 0,
			radius: 50,
			startAngle: 0,
			endAngle: 6.283185307179586,
		},
		{
			type: "circle",
			version: "3.6.3",
			originX: "left",
			originY: "top",
			left: 374,
			top: 106,
			width: 100,
			height: 100,
			fill: "transparent",
			stroke: "#000",
			strokeWidth: 1,
			strokeDashArray: null,
			strokeLineCap: "butt",
			strokeDashOffset: 0,
			strokeLineJoin: "miter",
			strokeMiterLimit: 4,
			scaleX: 0.72,
			scaleY: 0.67,
			angle: 0,
			flipX: false,
			flipY: false,
			opacity: 1,
			shadow: null,
			visible: true,
			clipTo: null,
			backgroundColor: "",
			fillRule: "nonzero",
			paintFirst: "fill",
			globalCompositeOperation: "source-over",
			transformMatrix: null,
			skewX: 0,
			skewY: 0,
			radius: 50,
			startAngle: 0,
			endAngle: 6.283185307179586,
		},
		{
			type: "line",
			version: "3.6.3",
			originX: "left",
			originY: "top",
			left: 270,
			top: 240,
			width: 90,
			height: 0,
			fill: "rgb(0,0,0)",
			stroke: "#000",
			strokeWidth: 3,
			strokeDashArray: null,
			strokeLineCap: "butt",
			strokeDashOffset: 0,
			strokeLineJoin: "miter",
			strokeMiterLimit: 4,
			scaleX: 1,
			scaleY: 1,
			angle: 0,
			flipX: false,
			flipY: false,
			opacity: 1,
			shadow: null,
			visible: true,
			clipTo: null,
			backgroundColor: "",
			fillRule: "nonzero",
			paintFirst: "fill",
			globalCompositeOperation: "source-over",
			transformMatrix: null,
			skewX: 0,
			skewY: 0,
			x1: -45,
			x2: 45,
			y1: 0,
			y2: 0,
		},
		{
			type: "circle",
			version: "3.6.3",
			originX: "left",
			originY: "top",
			left: 100,
			top: 290,
			width: 100,
			height: 100,
			fill: "transparent",
			stroke: "#000",
			strokeWidth: 1,
			strokeDashArray: null,
			strokeLineCap: "butt",
			strokeDashOffset: 0,
			strokeLineJoin: "miter",
			strokeMiterLimit: 4,
			scaleX: 4.29,
			scaleY: 0.39,
			angle: 0,
			flipX: false,
			flipY: false,
			opacity: 1,
			shadow: null,
			visible: true,
			clipTo: null,
			backgroundColor: "",
			fillRule: "nonzero",
			paintFirst: "fill",
			globalCompositeOperation: "source-over",
			transformMatrix: null,
			skewX: 0,
			skewY: 0,
			radius: 50,
			startAngle: 0,
			endAngle: 6.283185307179586,
		},
		{
			type: "image",
			version: "3.6.3",
			originX: "left",
			originY: "top",
			left: 175.69,
			top: 294.16,
			width: 501,
			height: 195,
			fill: "rgb(0,0,0)",
			stroke: "#000000",
			strokeWidth: 0,
			strokeDashArray: null,
			strokeLineCap: "butt",
			strokeDashOffset: 0,
			strokeLineJoin: "miter",
			strokeMiterLimit: 4,
			scaleX: 0.56,
			scaleY: 0.17,
			angle: 0,
			flipX: false,
			flipY: false,
			opacity: 1,
			shadow: null,
			visible: true,
			clipTo: null,
			backgroundColor: "",
			fillRule: "nonzero",
			paintFirst: "fill",
			globalCompositeOperation: "source-over",
			transformMatrix: null,
			skewX: 0,
			skewY: 0,
			crossOrigin: "",
			cropX: 0,
			cropY: 0,
			src:
				"data:image/png;base64,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",
			filters: [
				{ type: "BlendColor", color: "#000", mode: "multiply", alpha: 1 },
			],
		},
		{
			type: "circle",
			version: "3.6.3",
			originX: "left",
			originY: "top",
			left: 184,
			top: 106,
			width: 100,
			height: 100,
			fill: "transparent",
			stroke: "#000",
			strokeWidth: 1,
			strokeDashArray: null,
			strokeLineCap: "butt",
			strokeDashOffset: 0,
			strokeLineJoin: "miter",
			strokeMiterLimit: 4,
			scaleX: 0.72,
			scaleY: 0.67,
			angle: 0,
			flipX: false,
			flipY: false,
			opacity: 1,
			shadow: null,
			visible: true,
			clipTo: null,
			backgroundColor: "",
			fillRule: "nonzero",
			paintFirst: "fill",
			globalCompositeOperation: "source-over",
			transformMatrix: null,
			skewX: 0,
			skewY: 0,
			radius: 50,
			startAngle: 0,
			endAngle: 6.283185307179586,
		},
	],
};
const data2 = {
	version: "3.6.3",
	objects: [
		{
			type: "circle",
			version: "3.6.3",
			originX: "left",
			originY: "top",
			left: 10,
			top: 10,
			width: 100,
			height: 100,
			fill: "transparent",
			stroke: "#000",
			strokeWidth: 1,
			strokeDashArray: null,
			strokeLineCap: "butt",
			strokeDashOffset: 0,
			strokeLineJoin: "miter",
			strokeMiterLimit: 4,
			scaleX: 1,
			scaleY: 1,
			angle: 0,
			flipX: false,
			flipY: false,
			opacity: 1,
			shadow: null,
			visible: true,
			clipTo: null,
			backgroundColor: "",
			fillRule: "nonzero",
			paintFirst: "fill",
			globalCompositeOperation: "source-over",
			transformMatrix: null,
			skewX: 0,
			skewY: 0,
			radius: 50,
			startAngle: 0,
			endAngle: 6.283185307179586,
		},
		{
			type: "circle",
			version: "3.6.3",
			originX: "left",
			originY: "top",
			left: 520,
			top: 370,
			width: 100,
			height: 100,
			fill: "transparent",
			stroke: "#000",
			strokeWidth: 1,
			strokeDashArray: null,
			strokeLineCap: "butt",
			strokeDashOffset: 0,
			strokeLineJoin: "miter",
			strokeMiterLimit: 4,
			scaleX: 1,
			scaleY: 1,
			angle: 0,
			flipX: false,
			flipY: false,
			opacity: 1,
			shadow: null,
			visible: true,
			clipTo: null,
			backgroundColor: "",
			fillRule: "nonzero",
			paintFirst: "fill",
			globalCompositeOperation: "source-over",
			transformMatrix: null,
			skewX: 0,
			skewY: 0,
			radius: 50,
			startAngle: 0,
			endAngle: 6.283185307179586,
			id: 755414,
		},
	],
	background: "#ffffff",
	dim: { h: 474, w: 632 },
};
// let x = JSON.stringify(data1)
async function printLabel(json) {
	const c = await fab(json);
	console.log(c);
	const regex = /^data:.+\/(.+);base64,(.*)$/;
	const string = c;
	const matches = string.match(regex);
	// console.log(matches)
	const ext = matches[1];
	const data = matches[2];
	// console.log(matches)
	const buffer = Buffer.from(data, "base64");
	fs.writeFileSync("plikA." + ext, buffer);
	const base64str = base64_encode("./plikA.png");
	// console.log(base64str);
	const zplToSend =
		"^XA" +
		"^MNA" +
		"^LL0480" +
		"~DYE:LABEL,P,P," +
		base64str.length / 2 +
		",," +
		base64str +
		"^XZ";
	console.log(base64str.length);
	fs.writeFile("/dev/usb/lp1", zplToSend, function (err, dat) {
		if (err) {
			return console.log(err);
		}
		console.log(dat);
		fs.writeFile(
			"/dev/usb/lp1",
			"^XA\n" +
				"^MMT\n" +
				"^PW639\n" +
				"^LL0480\n" +
				"^LS0\n" +
				"^XGE:LABEL.PNG,1,1^FS\n" +
				"^PQ1,0,1,Y^XZ",
			function (err, data) {
				if (err) {
					return console.log(err);
				}
				console.log(data);
			}
		);
	});
}

// printLabel(data1)
// console.log(fab(x))
const server = http.createServer(function (request, response) {
	// process HTTP request. Since we're writing just WebSockets
	// server we don't have to implement anything.
});
server.listen(5600, function () {});

// create the server
const wsServer = new WebSocketServer({
	httpServer: server,
});

// WebSocket server
wsServer.on("request", function (request) {
	const connection = request.accept(null, request.origin);
	let index = clients.push(connection) - 1;
	// console.log('connection')
	// This is the most important callback for us, we'll handle
	// all messages from users here.
	connection.on("message", function (message) {
		console.log(message);
		if (message.type === "utf8") {
			// process WebSocket message
			// console.log(clients)

			try {
				printLabel(message.utf8Data);
			} catch (e) {
				console.log(e);
			}

			for (let i = 0; i < clients.length; i++) {
				clients[i].sendUTF(JSON.stringify(message.utf8Data));
			}
			// connection.sendUTF(JSON.stringify(message.utf8Data))
		}
	});

	connection.on("close", function (connection) {
		// close user connection
	});
});

function base64_encode(file) {
	// read binary data
	const bitmap = fs.readFileSync(file);
	// convert binary data to base64 encoded string
	return new Buffer.from(bitmap).toString("hex");
}