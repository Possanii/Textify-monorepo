import React from "react";

const EditarPerfil = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center bg-gradient-to-br from-green-500">
      <div className="max-w-md w-full mx-auto border border-black">
        <div className="bg-white p-8 border">
          <form className="space-y-6">
            <div className="flex justify-center mt-8">
              <div className="relative">
                <img
                  className="w-24 h-24 rounded-full border border-gray-300 bg-gray-200"
                  src="/path/to/your/current/profile.jpg"
                  alt="Imagem de perfil"
                />
                <label
                  htmlFor="profile-picture"
                  className="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 rounded-full cursor-pointer hover:bg-opacity-75"
                >
                  <span className="text-white text-sm">Alterar Foto</span>
                  <input
                    type="file"
                    id="profile-picture"
                    name="profile-picture"
                    className="hidden"
                  />
                </label>
              </div>
            </div>
            <div>
              <label
                htmlFor="username"
                className="text-sm font-medium text-gray-700"
              >
                Nome de usuário
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 block w-full border border-black  p-2 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border border-black p-2 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="bio"
                className="text-sm font-medium text-gray-700"
              >
                Biografia
              </label>
              <textarea
                id="bio"
                name="bio"
                className="mt-1 block w-full border border-black p-2 rounded-md"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-green-500"
              >
                Atualizar Perfil
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditarPerfil;
