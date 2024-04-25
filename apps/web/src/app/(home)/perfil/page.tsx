import { Button } from "../../../../../../packages/ui/src/components/ui/Button";
import { Input } from "../../../../../../packages/ui/src/components/ui/Input";

export default function EditarPerfil() {
  return (
    <div className="min-h-screen flex flex-col justify-center ">
      <div className="max-w-md w-full mx-auto border border-black">
        <div className="bg-white p-8 border">
          <form className="space-y-6">
            <div className="flex justify-center mt-8">
              <div className="relative">
                <img
                  className="w-24 h-24 rounded-full border border-gray-300 bg-gray-200"
                  src="/path/to/your/current/profile.jpg"
                  
                />
                <label
                  htmlFor="profile-picture"
                  className="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 rounded-full cursor-pointer hover:bg-opacity-75"
                    >

                  <span className="text-white text-sm text-center">Alterar Foto</span>
                  <Input
                    type="file"
                    label="Foto de perfil"
                    id="profile-picture"
                    name="profile-picture"
                    className="hidden"
                    />
                {/* </label> */}
                    </label>
              </div>
            </div>
            <div>
              {/* <label
                htmlFor="username"
                className="text-sm font-medium text-gray-700"
              >
                Nome de usuário
              </label> */}
              <Input
                type="text"
                label="Nome de usuário"
                id="username"
                name="username"
                className="mt-1 block w-full border border-black  p-2 rounded-md"
              />
            </div>
            <div>
              {/* <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </label> */}
              <Input
                type="email"
                label="Email"
                id="email"
                name="email"
                className="mt-1 block w-full border border-black p-2 rounded-md"
              />
            </div>
            <div>
              {/* <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Senha
              </label> */}
              <Input
                type="password"
                label="Senha"
                id="password"
                name="password"
                className="mt-1 block w-full border border-black p-2 rounded-md"
              ></Input>
            </div>
            <div>
              <Button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-slate-900"
              >
                Atualizar Perfil
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
