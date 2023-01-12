import React, { useEffect, useState } from "react";
import Image from "next/image";

const Quote = () => {
  const [currentQuote, setCurrentQuote] = useState<string>();
  const [author, setAuthor] = useState<string>();
  useEffect(() => {
    refreshQuote();
  }, []);

  const fetchQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const quote = response.json();
    return quote;
  };

  const refreshQuote = () => {
    fetchQuote().then((quote) => {
      const { content, author } = quote;
      setAuthor(author);
      setCurrentQuote(content);
    });
  };

  return (
    <div>
      <div className="flex justify-between">
        <p>{currentQuote}</p>
        <Image
          className="border border-black self-start"
          src="/assets/refresh.svg"
          alt="refresh"
          width="16"
          height="16"
          onClick={refreshQuote}
        />
      </div>
      <p>{author}</p>
    </div>
  );
};

export default Quote;
