import * as Yup from "yup";

export const startReadingSchema = (lastRead) =>
  Yup.object().shape({
    page: Yup.number()
      .typeError("Page number must be a number")
      .required("Page number is required")
      .oneOf(
        [lastRead],
        lastRead === 1
          ? `Reading must start from 1`
          : `Last reading session finished on ${lastRead} page`
      )
      .integer("Must be an integer"),
  });

export const finishReadingSchema = (min, max) =>
  Yup.object().shape({
    page: Yup.number()
      .typeError("Page number must be a number")
      .required("Page number is required")
      .min(min, `Reading started from ${min} page`)
      .max(max, `Max page number is ${max}`)
      .integer("Must be an integer"),
  });
