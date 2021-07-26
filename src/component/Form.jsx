import {useFormik} from "formik";
import { Formik } from 'formik';
import styled from "styled-components";
import {Button, Input} from "@material-ui/core";
import Items from "./Item";

const Form = (props) => {
    const formik = useFormik({
        initialValues: {
            text: ''
        },
        onSubmit: values => {
            props.addToDo(values.text)
            formik.resetForm();
        },
    });
    const StyledButton = styled(Button)`
      &&{
        margin-left: 1rem;
        background-color: greenyellow;
      }
      &&:hover{
        margin-left: 1rem;
        background-color: green;
      }
    `;
    return (
        <form onSubmit={formik.handleSubmit}>
            <Input
                id="text"
                name="text"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.text}
            />

            <StyledButton variant="contained" color="primary" type="submit" >Добавить</StyledButton>
        </form>
    )
}
export default Form;