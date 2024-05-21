import * as Yup from "yup";

export const addReadingSchema = Yup.object().shape({
  page: Yup.number()
    .typeError("Page number must be a number")
    .required("Page number is required")
    .min(1, "Min value 1")
    .integer("Must be an integer"),
});
