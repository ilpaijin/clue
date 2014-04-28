package main

import (
	"code.google.com/p/go.net/websocket"
	"fmt"
	"net/http"
)

func webHandler(ws *websocket.Conn) {
	var in []byte
	if err := websocket.Message.Receive(ws, &in); err != nil {
		fmt.Println(err.Error())
	}
	fmt.Printf("Received: %s\n", string(in))
	websocket.Message.Send(ws, in)
}

func RRHandler(w http.ResponseWriter, req *http.Request) {
	s := websocket.Server{Handler: websocket.Handler(webHandler)}
	s.ServeHTTP(w, req)
}

func main() {

	http.HandleFunc("/", RRHandler)

	err := http.ListenAndServe(":3000", nil)

	if err != nil {
		panic("ListenAndServe" + err.Error())
	}
}
