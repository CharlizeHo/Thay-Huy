import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "react-router-dom";
import GlobalSpinner from "../../../components/common/GlobalSpinner";
import { useNavigate } from "react-router-dom";
import AdminProductForm from "./AdminProductForm";
import { productSchema } from "../../../validation/productSchema";
import {
  getProductById,
  updateProductById,
} from "../../../services/productService";
import useProduct from "../../../hooks/products/useProduct";

const AdminProductEdit = () => {
  const [isFileUploading, setIsFileUploading] = useState(false);
  const { productId } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useProduct(productId);
  // const { data, isLoading } = useQuery({
  //   queryKey: ["products", productId],
  //   queryFn: () => getProductById(productId),
  // });

  const {
    watch,
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, dirtyFields },
  } = useForm({
    resolver: yupResolver(productSchema),
  });

  // Reset data form after fetching from server
  useEffect(() => {
    reset(data?.data);
  }, [data]);

  const mutation = useMutation({
    mutationFn: (newProduct) => updateProductById(productId, newProduct),
    onSuccess: () => {
      navigate("/admin/products");
      toast.success("Successfully save product");
    },
  });

  const onSubmit = (data) => {
    // mutation.mutate(data);
    if (dirtyFields.image) {
      const file = data.image[0];
      const category = data.category;

      const storageRef = ref(storage, `products/${category}/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          switch (snapshot.state) {
            case "running":
              setIsFileUploading(true);
              break;
          }
        },
        (error) => {
          //Handle unsuccessful upload
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          console.log("Hello ba");
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setIsFileUploading(false);
            console.log("File available at", downloadURL);
            mutation.mutate({ ...data, imageUrl: downloadURL });
          });
        }
      );
    } else {
      mutation.mutate(data);
    }
  };

  if (isLoading) return <GlobalSpinner />;

  return (
    <AdminProductForm
      watch={watch}
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      isLoading={mutation.isLoading || isFileUploading}
      errors={errors}
      btnLabel="Save Product"
      isDirty={isDirty}
    />
  );
};

export default AdminProductEdit;
