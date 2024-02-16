"use client";
import { use, useEffect, useState } from "react";
export default function Home1() {
  const [message, setMessage] = useState("is connecting");

  useEffect(() => {
    // Reference to the iframe
    const iframe = document.getElementById('myFrame');

    // Function to handle messages received from the iframe
    const handleMessage = event => {
        // Log the message received from the iframe
        console.log('Message from iframe:', event.data);
        setMessage(event.data);
    };

    // Add event listener to listen for messages from the iframe
    window.addEventListener('message', handleMessage);

    // Clean up event listener on component unmount
    return () => {
        window.removeEventListener('message', handleMessage);
    };
}, []);

const sendMessageToIframe = () => {
    // Reference to the iframe
    const iframe = document.getElementById('myFrame') as HTMLIFrameElement;

    // Send a message to the iframe
    iframe.contentWindow?.postMessage('54.81.98.197|22|ubuntu|12345678', '*');
};

useEffect(() => {
  sendMessageToIframe();
}, []);

return (
  <div className="w-[600px] h-[400px] relative">
 
    
    <div className="w-[600px] h-[400px] z-0">
        <iframe id="myFrame" src="http://localhost:8888" width="600" height="400"></iframe>
        
    </div>
    {message != "connected" &&
    <div className="w-[600px] h-[400px] absolute top-0 z-50 bg-red-900 text-center">
      {
        message == "is connecting" ?
        <h1>Connecting...</h1> :
        <button onClick={sendMessageToIframe}>Try again</button>
      }
    </div>
  }
  </div>
);
}
