import { Input } from "@mantine/core";
import { Mail, Send } from "lucide-react";
import style from "./inputStyle.module.css";
export default function AwesomeIdeaSection() {
  return (
    <div className="w-full  mt-10 flex justify-center p-10">
      <div className="w-3/5 bigDesktop:w-1/2 h-fit">
        <div className="text-5xl bold w-1/2">
          <span>Have an Awesome Project Idea?</span>
          <span className="text-orange-500 ml-3">Let's Discuss</span>
        </div>
        <div className="mt-10 relative">
          <Input
            classNames={{
              input: style.input,
              section: style.section,
            }}
            placeholder="Enter your email I will get back to you"
            leftSection={<LeftSectionInput />}
            // rightSection={<RightSectionInput />}
          />
          <RightSectionInput />
          
        </div>
      </div>
    </div>
  );
}

function LeftSectionInput() {
  return (
    <div className="w-12 h-10 bg-orange-500/40 rounded-full p-2 animate-pulse flex justify-center items-center">
      <Mail className="fill-white" />
    </div>
  );
}

function RightSectionInput() {
  return (
    <button className="text-white rounded-full bg-orange-500 p-3 bold flex absolute top-[5px] right-3 hover:bg-orange-500/80">
      <span className="mr-1">Submit</span>
      <Send />
    </button>
  );
}
