import { useState } from "react";

export default function Entry({ action }) {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    action(content); 
    setContent(""); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Enter Amiibo (ex: Kirby)"/>
      <button type="submit">Find Amiibo</button>
    </form>
  );
}
