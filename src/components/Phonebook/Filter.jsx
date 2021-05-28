import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/phonebook/phonebook-actions";

const Filter = () => {
  const [value, setValue] = useState('')

  const dispatch = useDispatch();

  const onChange = (e) => {
    setValue(e.currentTarget.value)
    dispatch(changeFilter(e.currentTarget.value))
  };

  return (
    <label className={"form"}>
      Find contacts by name
      <input value={value} onChange={onChange} />
    </label>
  );
};

export default Filter
