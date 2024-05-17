import * as Yup from "yup";

export const addBookSchema = Yup.object().shape({
  title: Yup.string()
    .required("Book title is required")
    .matches(/^[a-zA-Z0-9_\- ]{1,20}$/, "Enter a valid Title*"),
  author: Yup.string()
    .required("The author is required")
    .matches(/^[a-zA-Z0-9_\- ]{3,20}$/, "Enter a valid Author*"),
  totalPages: Yup.number()
    .typeError("Number of pages must be a number")
    .required("Number of pages is required")
    .min(1, "Min value 1")
    .integer("Must be an integer"),
});
