import {useFormik} from "formik";

const Form = (props) => {
    const formik = useFormik({
        initialValues: {
            text: '',
        },
        onSubmit: values => {
            props.addToDo(values.text)
            values.text = ''
        },

    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <input
                id="text"
                name="text"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.email}
            />

            <button type="submit">Submit</button>
        </form>
    )
}
export default Form;