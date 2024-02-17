"use client";
import { use, useEffect, useState } from "react";
export default function Term() {
  const [message, setMessage] = useState("is connecting");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Reference to the iframe
    const iframe = document.getElementById('myFrame');

    // Function to handle messages received from the iframe
    const handleMessage = (event:any) => {
        // Log the message received from the iframe
        console.log('Message from iframe:', event.data);
        if(event.data === 'Error'){
          setIsError(true);
        }
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
    setIsError(false);
    const iframe = document.getElementById('myFrame') as HTMLIFrameElement;

    // Send a message to the iframe
    iframe.contentWindow?.postMessage('hello', '*');
};

useEffect(() => {
  sendMessageToIframe();
}, []);

return (


  <div className="w-[600px] h-[460px] flex-col items-center justify-center">
 
    
    { <div className={`w-[600px] h-[400px] ${isError?'hidden' : ''} `}>
        <iframe id="myFrame" src="http://localhost:8888?hostname=54.81.98.197&username=ubuntu&password=MTIzNDU2Nzg=" width="600" height="400"></iframe>
    </div>
    }
    {isError && <button className="bg-red-900 w-full text-white " onClick={sendMessageToIframe}>
        Try Again
    </button>
    }
    
   

  </div>


);
}
