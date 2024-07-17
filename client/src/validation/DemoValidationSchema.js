import * as Yup from "yup"
export const DemoValidationSchema = Yup.object().shape({
    imgSrc:Yup.string().url().required("url is required"),
    price:Yup.number().required("price is required"),
    name:Yup.string().required("name is required"),
    title:Yup.string().required("title is required"),
})