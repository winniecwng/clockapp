import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useAppState } from "../overmind";

const Quote = () => {
  const { isExpand } = useAppState();
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
    <div
      className={`flex items-stretch md:pt-12 lg:w-full ${
        isExpand
          ? "transition -translate-y-full duration-700"
          : "transition translate-y-0 duration-700"
      }`}
    >
      <div className="text-sm md:text-base lg:text-xl h-max lg:w-1/2">
        <div className="flex gap-4">
          <p>&quot;{currentQuote}&quot;</p>
          <Image
            className="self-start mt-2 hover:cursor-pointer"
            src="/assets/desktop/icon-refresh.svg"
            alt="refresh"
            width="24"
            height="24"
            onClick={refreshQuote}
          />
        </div>
        <p className="font-bold mt-5">{author}</p>
      </div>
    </div>
  );
};

export default Quote;
