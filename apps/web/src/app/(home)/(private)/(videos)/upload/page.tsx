"use client";

import { FormProvider } from "react-hook-form";
import { UploadSessionComponent } from "./components/dropdownArea/uploadSession";
import { HeaderUploadVideo } from "./components/header/HeaderUploadVideo";
import { useUploadPageController } from "./useUploadPageController";

export default function UploadVideo() {
  const { useFormMethods } = useUploadPageController();

  return (
    <div className="flex flex-col gap-4 bg-white p-2">
      <FormProvider {...useFormMethods}>
        <HeaderUploadVideo />
        <UploadSessionComponent />
      </FormProvider>
    </div>
  );
}
