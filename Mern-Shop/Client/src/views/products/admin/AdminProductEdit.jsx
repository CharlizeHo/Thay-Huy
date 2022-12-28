import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import FormRow from "../../../components/common/FormRow";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Loader from "../../../components/common/Loader";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormRowError } from "../../../components/common/FormRowError";
import { useParams } from "react-router-dom";
import GlobalSpinner from "../../../components/common/GlobalSpinner";
import { useNavigate } from "react-router-dom";
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

const AdminProductEdit = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    queryKey: ["products", productId],
    queryFn: () => {
      return axios.get(`products/${productId}`);
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    reset(data?.data);
  }, [data]);

  const mutation = useMutation({
    mutationFn: (newProduct) => {
      return axios.put(`/products/${productId}`, newProduct);
    },
    onSuccess: () => {
      navigate("/admin/products");
      toast.success("Successfully save product");
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  if (isLoading) return <GlobalSpinner />;

  return (
    <AdminProductForm
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      isLoading={mutation.isLoading}
      errors={errors}
      btnLabel="Save Product"
    />
  );
};

export default AdminProductEdit;
