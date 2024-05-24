import * as Yup from "yup";

export const addReadingSchema = (min = 1, max) =>
  Yup.object().shape({
    page: Yup.number()
      .typeError("Page number must be a number")
      .required("Page number is required")
      .min(min, `Min value ${min}`)
      .max(max, `Max value ${max}`)
      .integer("Must be an integer"),
  });
