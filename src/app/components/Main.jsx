"use client";
import React, { useState } from "react";
import { Textarea } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { BiTimeFive } from "react-icons/bi";
import { MdDriveFileRenameOutline } from "react-icons/md";
import Image from "next/image";
import { Checkbox } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import { Select } from "@material-tailwind/react";
import { Option } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

const Main = () => {
  const [text, setText] = useState("");
  console.log(text);

  return (
    <div className="h-[85vh] mt-2 ">
      <div className="md:flex w-[70vw] items-center justify-center  mx-auto ">
        <Image
          width={450}
          height={1000}
          className="object-cover rounded-3xl sm:hidden md:block md:w-[450px]"
          src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <div
          className="flex justify-center items-center flex-col  
      w-[350px] mx-auto gap-3 "
        >
          <Input
            type="text"
            label="Name of process (should be unique)"
            icon={<MdDriveFileRenameOutline />}
          />
          <Input type="number" label="Cook Time" icon={<BiTimeFive />} />
          <Textarea
            color="gray"
            label="Yemek Tarifi"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></Textarea>
          <div className="w-full">
            <Select label="Select a prerequisite">
              <Option></Option>
              {/* <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
              <Option>Material Tailwind Angular</Option>
              <Option>Material Tailwind Svelte</Option> */}
            </Select>
          </div>
          <Checkbox
            label={
              <div>
                <Typography color="blue-gray" className="font-medium">
                  Cook needs to take his time?
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Can't do anything apart from this job at the same time
                </Typography>
              </div>
            }
            containerProps={{
              className: "-mt-5",
            }}
          />
          <Button color="amber" className="w-full mt-2">
            Add to list
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Main;
