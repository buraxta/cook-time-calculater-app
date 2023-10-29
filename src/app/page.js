"use client";
import Header from "./components/Header";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";
import { useContext, useState } from "react";
import Main from "./components/Main";
import DataContext from "./DataContext";
import List from "./components/List";
import AddSteps from "./components/AddSteps";
import PerfectTime from "./components/PerfectTime";

export default function Home() {
  let {
    setAddStep,
    addStep,
    showImage,
    setShowImage,
    perfectTime,
    setPerfectTime,
    setSteps,
  } = useContext(DataContext);
  const handleClick = () => {
    setAddStep((prev) => !prev);
  };

  const handleNewCalculation = () => {
    setShowImage(true);
    setAddStep(false);
    setPerfectTime(0);
    setSteps([]);
  };
  return (
    <div>
      {addStep ? (
        <div>
          <AddSteps />
        </div>
      ) : (
        <div>
          <Header />
          {showImage ? (
            <section className="flex">
              <Card className="mt-6 w-2/6 max-h-[230px]">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Enter your recipe
                  </Typography>
                  <Typography>
                    To be able to make you faster, you need to share us the
                    details about your recipe
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button onClick={handleClick}>Add a step</Button>
                </CardFooter>
              </Card>
              <div className=" w-4/6 mt-6 text-center">
                {perfectTime ? <PerfectTime time={perfectTime} /> : <List />}
              </div>
            </section>
          ) : (
            <div className=" h-[40vh] flex items-center justify-center flex-col">
              <h1>The perfect cooking time: {perfectTime}</h1>
              <Button
                onClick={handleNewCalculation}
                variant="contained"
                color="blue"
                className="mt-5"
              >
                Make a new calculation ?
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
