import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import DataContext from "../DataContext";
import { step } from "@material-tailwind/react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Selection = () => {
  const { preq, setPreq } = React.useContext(DataContext);
  const { steps } = React.useContext(DataContext);
  const [renderList, setRenderList] = React.useState([]);

  const handleChange = (id) => {
    if (!preq.includes(id)) {
      setPreq((prev) => [...prev, id]);
    } else {
      let newList = preq.filter((person) => person !== id);
      setPreq(newList);
    }
  };

  React.useEffect(() => {
    let newRenderList = steps.filter((step) => preq.includes(step.id));
    setRenderList(newRenderList.map((step) => step.name));
  }, [preq, steps]);

  return (
    <div className="w-full">
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Prerequisite?</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={renderList}
          input={<OutlinedInput label="Prerequisite?" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {steps.length > 0 ? (
            steps.map((step) => (
              <MenuItem
                key={step.id}
                value={step.id}
                onClick={() => handleChange(step.id)}
              >
                <Checkbox checked={preq.includes(step.id)} />
                <ListItemText primary={step.name} />
              </MenuItem>
            ))
          ) : (
            <MenuItem>No step to select yet</MenuItem>
          )}
        </Select>
      </FormControl>
    </div>
  );
};

export default Selection;
