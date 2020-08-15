import { useState, useEffect, useRef } from "react";


const defaultValues = {
    cardName: "",
    defaultPoints: "",
    gas: "",
    grocery: "",
    fastFood: "",
    resturant: "",
    homeImprovement: "",
    travel: "",
    amazon: "",
    cellPhone: "",
    drugStore: "",
    homeUtils: "",
    airlines: "",
    rideShares: "",
    deptStores: "",
    wholesaleClubs: ""
}


// Inspiratoin
// https://www.telerik.com/blogs/how-to-build-custom-forms-react-hooks
const useCustomForm = ({
    initialValues = defaultValues,
    onSubmit = ({ }) => { }
}) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    // const [onSubmitting, setOnSubmitting] = useState<boolean>(false);

    const formRendered = useRef(true);

    useEffect(() => {
        if (!formRendered.current) {
            setValues(initialValues);
            setErrors({});
            // setOnSubmitting(false);
        }
        formRendered.current = false;
    }, [initialValues]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        const { name, value } = target;
        event.persist();
        setValues({ ...values, [name]: value });
        console.log("Values: ", values,)
    };


    const handleSubmit = (event: any) => {
        if (event) event.preventDefault();
        setErrors({ ...errors });
        onSubmit({ values, errors });
    };

    return {
        values,
        errors,
        handleChange,
        handleSubmit
    };
};

export { defaultValues };
export default useCustomForm;