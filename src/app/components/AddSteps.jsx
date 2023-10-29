import { Button, Checkbox, TextField } from "@mui/material";
import Image from "next/image";
import React, { useContext, useState } from "react";
import Select from "./Select";
import DataContext from "../DataContext";
import * as yup from "yup";

const AddSteps = () => {
  const {
    id,
    setId,
    steps,
    setSteps,
    sharedData,
    setSharedData,
    name,
    setName,
    time,
    setTime,
    recipe,
    setRecipe,
    preq,
    setPreq,
    busy,
    setBusy,
    addStep,
    setAddStep,
  } = useContext(DataContext);
  const [errors, setErrors] = useState("");

  const validationSchema = yup.object().shape({
    name: yup.string().required("Process Name is required"),
    time: yup.number().min(0, "must be greater then 0"),
    recipe: yup.string(),
    // Diğer alanlar için gerekli doğrulama kurallarını ekleyin
  });

  const handleAdd = () => {
    validationSchema
      .validate({ name, time, recipe }, { abortEarly: false })
      .then(() => {
        setSteps((prev) => [...prev, { id, name, time, recipe, preq, busy }]);
        setId((prev) => prev + 1);
        setName("");
        setTime(0);
        setRecipe("");
        setPreq([]);
        setBusy(false);
        setAddStep(false);
        console.log(steps);
      })
      .catch((validationErrors) => setErrors(validationErrors));
  };

  return (
    <div className="h-[85vh] mt-3 ">
      <div className="md:flex w-[70vw] items-center justify-center mx-auto ">
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
          <TextField
            className="w-full"
            id="outlined-basic"
            label="Process Name"
            variant="standard"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={Boolean(errors.name)}
            helperText={errors.name}
          />
          <TextField
            className="w-full"
            id="outlined-basic"
            label="Process Time"
            variant="standard"
            required
            type="number"
            value={time ? time : null}
            onChange={(e) => setTime(e.target.value)}
            error={Boolean(errors.name)}
            helperText={errors.name}
          />
          <TextField
            className="w-full"
            id="outlined-basic"
            label="Process details"
            variant="standard"
            rows={3}
            multiline
            value={recipe}
            onChange={(e) => setRecipe(e.target.value)}
          />
          <Select />
          <section className="ml-[-200px]">
            <Checkbox
              value={busy}
              onChange={(e) => setBusy(e.target.checked)}
            />
            Make cook busy?
          </section>
          <Button variant="outlined" className="w-full" onClick={handleAdd}>
            Add Step To List
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddSteps;
