import {
  CalendarIcon,
  FaceSmileIcon,
  MagnifyingGlassCircleIcon,
  MapPinIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";

function TweetBox() {
  const [input, setInput] = useState<string>("");

  return (
    <div className="flex space-x-2 p-5">
      <img
        className="mt-4 h-14 w-14 rounded-full object-cover"
        src="https://links.papareact.com/gll"
        alt="user"
      />

      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          <input
            type="text"
            placeholder="What's Happening?"
            className="h-24 w-full text-xl outline-none placeholder:text-xl"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="flex items-center">
            <div className="flex flex-1 space-x-2 text-twitter">
              {/* icons */}
              <PhotoIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <MagnifyingGlassCircleIcon className="h-5 w-5" />
              <FaceSmileIcon className="h-5 w-5" />
              <CalendarIcon className="h-5 w-5" />
              <MapPinIcon className="h-5 w-5" />
            </div>
            <button
              disabled={!input}
              className="rounded-full bg-twitter px-4 py-2 font-bold text-white disabled:opacity-40"
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TweetBox;
