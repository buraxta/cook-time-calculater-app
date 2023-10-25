"use client";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
      <section className="flex">
        <Card className="mt-6 w-2/6 ">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Enter your recipe
            </Typography>
            <Typography>
              To be able to make you faster, you need to share us the details
              about your recipe
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Link href="/addstep">
              <Button>Add a step</Button>
            </Link>
          </CardFooter>
        </Card>
        <div className=" w-4/6 mt-6 text-center">
          <h1>Girilen yemek adımları burada görünecek</h1>
        </div>
      </section>
    </div>
  );
}
