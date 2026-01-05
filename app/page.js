"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/health`)
      .then(res => res.text())
      .then(data => setMsg(data));
  }, []);

  return (
    <div>
      <h1>Next.js Frontend</h1>
      <p>{msg}</p>
    </div>
  );
}
