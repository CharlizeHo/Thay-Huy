import * as yup from "yup";

export const productSchema = yup
  .object({
    title: yup.string().required("Title is required in this field"),
    category: yup
      .string()
      .oneOf(["smartphones", "laptops"], "Select a category"),
    price: yup.number().positive().required().typeError("Must be a number"),
    imageFile: yup.mixed(),
    description: yup.string().required(),
  })
  .required();
