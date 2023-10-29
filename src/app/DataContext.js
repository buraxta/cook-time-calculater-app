"use client";
import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [sharedData, setSharedData] = useState("Varsayılan Veri");
  const [name, setName] = useState("");
  const [time, setTime] = useState(0);
  const [recipe, setRecipe] = useState("");
  const [preq, setPreq] = useState([]);
  const [steps, setSteps] = useState([]);
  const [busy, setBusy] = useState(false);
  const [addStep, setAddStep] = useState(false);
  const [id, setId] = useState(0);
  const [perfectTime, setPerfectTime] = useState(0);
  const [showImage, setShowImage] = useState(true);

  return (
    <DataContext.Provider
      value={{
        showImage,
        setShowImage,
        perfectTime,
        setPerfectTime,
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
