package main

import (
	"fmt"
	"gopkg.in/igm/sockjs-go.v1/sockjs"
	"log"
	"net/http"
)

func EchoHandler(conn sockjs.Conn) {
	log.Println("Session created")

	m := []byte{'p', 'a', 'i', 'o'}

	fmt.Printf("%v", m)

	conn.WriteMessage(m)

	for {
		if msg, err := conn.ReadMessage(); err == nil {
			fmt.Printf("%v", msg)
			go conn.WriteMessage(msg)
		} else {

			return
		}
	}

}

func main() {
	sockjs.Install("/echo", EchoHandler, sockjs.DefaultConfig)
	http.ListenAndServe(":3000", nil)
}
