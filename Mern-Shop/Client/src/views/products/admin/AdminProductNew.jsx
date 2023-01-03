import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import AdminProductForm from "./AdminProductForm";
import { createProduct } from "../../../services/productService";
import { uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../../config/firebase";
import { yupResolver } from "@hookform/resolvers/yup";
import { productSchema } from "../../../validation/productSchema";
import { useState } from "react";

const AdminProductNew = () => {
  const [isFileUploading, setFileUploading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
  });

  const mutation = useMutation({
    mutationFn: (newProduct) => createProduct(newProduct),
    onSuccess: () => {
      reset(); //sẽ reset lại form sau khi nhấn submit button
      toast.success("Successfully created new product");
    },
  });

  const onSubmit = (data) => {
    // mutation.mutate(data);
    const file = data.image[0];
    const category = data.category;

    const storageRef = ref(storage, `products/${category}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        switch (snapshot.state) {
          case "running":
            setFileUploading(true);
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
          setFileUploading(false);
          console.log("File available at", downloadURL);
          mutation.mutate({ ...data, imageUrl: downloadURL });
        });
      }
    );
  };

  return (
    <AdminProductForm
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      isLoading={mutation.isLoading || isFileUploading}
      errors={errors}
      btnLabel="Create Product"
    />
  );
};

export default AdminProductNew;
