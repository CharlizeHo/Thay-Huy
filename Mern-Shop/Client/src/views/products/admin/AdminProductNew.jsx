import React from "react";
import { useForm } from "react-hook-form";
import FormRow from "../../../components/common/FormRow";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Loader from "../../../components/common/Loader";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AdminProductForm from "./AdminProductForm";

const schema = yup
  .object({
    title: yup.string().required("Title is required in this field"),
    category: yup
      .string()
      .oneOf(["smartphones", "laptops"], "Select a category"),
    price: yup.number().positive().required().typeError("Must be a number"),
    imageUrl: yup.string().required(),
    description: yup.string().required(),
  })
  .required();

const AdminProductNew = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: (newProduct) => {
      return axios.post("/products/add", newProduct);
    },
    onSuccess: () => {
      reset(); //sẽ reset lại form sau khi nhấn submit button
      toast.success("Successfully add product");
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <AdminProductForm
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      isLoading={mutation.isLoading}
      errors={errors}
      btnLabel="Create Product"
    />
  );
};

export default AdminProductNew;
