// export default function Home() {
//   return (
//     <div>
//       <span>Home</span>
//     </div>
//   );
// }

import { UploadSessionComponent } from "./(private)/(videos)/upload/uploadSession";
import React from "react";
import { CloudUpload } from "lucide-react";

const UploadScreen = () => {
  return (
    <div className="bg-gray-100 min-h-screen">

      <div className="flex flex-col gap-4">
        <header className="flex justify-between">
          <h4 className="font-medium text-xl">Uploads</h4>
          <button className="text-red-500 border border-red-500 px-4 py-2 rounded-md mr-2 flex gap-4">
            Limpar todos
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-md mr-2">
            Criar todos (1)
          </button>
        </header>
    <UploadSessionComponent/>
      </div>


      {/* Upload Area
      <div className="container mx-auto p-8">
        <div className="border-dashed border-2 border-gray-400 p-8 text-center">
          <CloudUpload className="mx-auto text-center size-12" />
          <input type="file" className="hidden" />
          <p>Drop files here or click to upload</p>
        </div>
      </div> */}

      {/* Columns */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
        <div className="bg-white p-4 shadow-md">
          <h2 className="text-lg font-semibold">Title</h2>
        </div>

        <div className="bg-white p-4 shadow-md">
          <h2 className="text-lg font-semibold">Metadata</h2>
        </div>

        <div className="bg-white p-4 shadow-md">
          <h2 className="text-lg font-semibold">Video upload</h2>
        </div>

        <div className="bg-white p-4 shadow-md">
          <h2 className="text-lg font-semibold">Audio conversion</h2>
        </div>

        <div className="bg-white p-4 shadow-md">
          <h2 className="text-lg font-semibold">Audio upload</h2>
        </div>
      </div>
    </div>
  );
};

export default UploadScreen;
