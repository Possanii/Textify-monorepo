"use client";

import { Dropzone } from "@ui/components/ui/Dropzone";
import { TableImages } from "@ui/components/ui/TableImages";
import { Controller } from "react-hook-form";
import { useUploadController } from "./useUploadController";

export function UploadSessionComponent() {
  const { control, isSubmitting } = useUploadController();

  return (
    <Controller
      control={control}
      name={"videos"}
      disabled={isSubmitting}
      render={({ field: { onChange, value } }) => {
        return (
          <div className="flex flex-col gap-10 border-dashed border-2 bg-white">
            <Dropzone onFilesChange={onChange} videos={value as File[]} />
            {value && (
              <TableImages images={value as File[]} onFilesChange={onChange} />
            )}
          </div>
        );
      }}
    />
  );
}
