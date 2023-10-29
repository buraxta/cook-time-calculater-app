import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import DataContext from "../DataContext";
import { Button } from "@mui/material";

const List = () => {
  const { steps } = useContext(DataContext);
  const { perfectTime, setPerfectTime } = useContext(DataContext);

  const handleCalculate = () => {
    // fetch("http://127.0.0.1:5000", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(steps),
    // })
    fetch("http://buraxta.pythonanywhere.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(steps),
    })
      .then((response) => response.json())
      .then((data) => {
        setPerfectTime(data.perfect_time);
        console.log(data);
      })
      .catch((error) => {
        console.error("Hata:", error);
      });
  };
  return (
    <div className="ml-5">
      {steps.length > 0 ? (
        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Process Name</th>
                <th scope="col">Time</th>
                <th scope="col">Cook Busy?</th>
              </tr>
            </thead>
            <tbody>
              {steps.map((step, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{step.name}</td>
                    <td>{step.time}</td>
                    <td>{step.busy ? "Yes" : "No"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Button
            onClick={handleCalculate}
            variant="outlined"
            color="primary"
            className="w-full"
          >
            Calculate Perfect Time!
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default List;
