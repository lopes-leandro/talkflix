import { useState } from 'react';

export default function useForm(fields) {
  const [values, setValues] = useState(fields);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function changeField(event) {
    const { name, value } = event.target;
    setValue(
      name,
      value,
    );
  }

  function clearForn() {
    setValues(fields);
  }

  return {
    values,
    changeField,
    clearForn,
  };
}
