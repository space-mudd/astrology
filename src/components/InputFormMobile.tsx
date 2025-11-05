import React from "react";
import { Button } from "./ui/button";

function InputFormMobile({
  handleSubmit,
  inputWidth,
  name,
  setName,
  dateOfBirth,
  setDateOfBirth,
  timeOfBirth,
  setTimeOfBirth,
  location,
  setLocation,
  handleClick,
}: any) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            height: "calc(1/5 * 100%)",

            //width: "calc(22/100 * 100%)",
            width: `${inputWidth}px`,
          }}
          className={`text_main absolute md:text-[calc(9/400*100dvh)] text-[calc(8/400*100dvh)] tracking-tighter xl:top-[calc(87/100*100%)] md:top-[calc(86/100*100%)] xl:left-[calc(85/200*100%)] md:left-[calc(78/200*100%)] top-[calc(88/100*100dvh)] left-[calc(7/67*100dvh)] leading-tight -translate-y-2/3 bg-transparent border-none outline-none focus:border-none focus:outline-none text-white z-30 resize-none overflow-hidden`}
        >
          <div className="flex items-center">
            <p className="w-[30%] text-right text-[12px]">YOUR NAME:</p>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="w-[70%] bg-transparent border-b mb-1.5 border-white focus:border-b focus:border-white focus:outline-none h-full"
            />
          </div>
          <div className="flex items-center">
            <p className="w-[30%] text-right text-[12px]">BIRTH DATE:</p>
            <input
              value={dateOfBirth}
              onChange={(e) => {
                setDateOfBirth(e.target.value);
              }}
              className="w-[70%] bg-transparent border-b mb-1.5 border-white focus:border-b focus:border-white focus:outline-none h-full"
            />
          </div>
          <div className="flex items-center">
            <p className="w-[30%] text-right text-[12px]">BIRTH TIME:</p>
            <input
              value={timeOfBirth}
              onChange={(e) => {
                setTimeOfBirth(e.target.value);
              }}
              className="w-[70%] bg-transparent border-b mb-1.5 border-white focus:border-b focus:border-white focus:outline-none h-full"
            />
          </div>
          <div className="flex items-center">
            <p className="w-[30%] text-right text-[12px]">LOCATION:</p>
            <input
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              className="w-[70%] bg-transparent border-b mb-1.5 border-white focus:border-b focus:border-white focus:outline-none h-full"
            />
          </div>
          <div className="flex justify-self-end">
            <Button
              onClick={handleClick}
              className="bg-transparent h-auto text-[12px]"
            >
              Send
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default InputFormMobile;
