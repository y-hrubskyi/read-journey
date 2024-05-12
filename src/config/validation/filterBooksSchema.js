import * as Yup from "yup";

export const filterBooksSchema = Yup.object().shape({
  title: Yup.string().required("Title is required").min(2, "Too Short").trim(),
  author: Yup.string()
    .required("Author is required")
    .min(2, "Too Short")
    .trim(),
});
