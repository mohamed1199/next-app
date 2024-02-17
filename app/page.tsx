"use client";
import Term from "@/components/Term";
import { use, useEffect, useState } from "react";
export default function Home1() {
  const [terms, setTerms] = useState([1]);
  
  const handelonclick = () => {
    setTerms([...terms, 1]);
  }

return (

  <div>

    {
      terms.map((term, index) => {
        return <Term key={index} />
      })
    }
    <button className="bg-blue-600 p-2w-full text-white " onClick={handelonclick} >
      add new
    </button>
  </div>
);
}
