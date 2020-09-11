import { useState, useEffect, useRef } from 'react';
import { formFields, submitType } from '../../utils/interfaces/formInterface';

const defaultValues: formFields = {
  cardname: '',
  defaultpercent: '',
  gas: '',
  grocery: '',
  fastfood: '',
  resturant: '',
  homeimprovement: '',
  travel: '',
  amazon: '',
  cellphone: '',
  drugstore: '',
  homeutils: '',
  airlines: '',
  rideshares: '',
  deptstores: '',
  wholesale: '',
};

const errorStates = {
  cardname: 'Card name required',
  defaultpercent: 'Default percentage required',
};

// Inspiration
// https://www.telerik.com/blogs/how-to-build-custom-forms-react-hooks
const useCustomForm = ({
  initialValues = defaultValues,
  onSubmit = (type: submitType) => {
    console.log('Type: ', type);
  },
}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(errorStates);
  // const [onSubmitting, setOnSubmitting] = useState<boolean>(false);

  const formRendered = useRef(true);

  useEffect(() => {
    if (!formRendered.current) {
      setValues(initialValues);
      setErrors(errorStates);
      // setOnSubmitting(false);
    }
    formRendered.current = false;
  }, [initialValues]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, value } = target;
    const err: any = { ...errors };

    event.persist();
    setValues({ ...values, [name]: value });
    if (name === 'cardname') {
      if (value !== '') {
        delete err.cardname;
      } else {
        err.cardname = errorStates.cardname;
      }
    } else if (name === 'defaultpercent') {
      if (value !== '') {
        delete err.defaultpercent;
      } else {
        err.defaultpercent = errorStates.defaultpercent;
      }
    }
    setErrors(err);
  };

  const handleSubmit = (event: any) => {
    if (Object.keys(errors).length !== 0) return errors;
    if (event) event.preventDefault();
    onSubmit({ values, errors });
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export { defaultValues };
export default useCustomForm;
