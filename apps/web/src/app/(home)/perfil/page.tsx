// 'use client'

// import { AvatarFallback, FotoPerfil } from "../../../../../../packages/ui/src/components/ui/FotoPerfil";
// import { Button } from "../../../../../../packages/ui/src/components/ui/Button";
// import { Input } from "../../../../../../packages/ui/src/components/ui/Input";
// import { AvatarImage } from "../../../../../../packages/ui/src/components/ui/FotoPerfil";

// export default function EditarPerfil() {
//   return (
//     <div className="min-h-screen flex flex-col justify-center ">
//       <div className="max-w-md w-full mx-auto border border-black">
//         <div className="bg-white p-8 border">
//           <form className="space-y-6">
//             <div className="flex justify-center mt-8">
//               <div className="relative">
            
//             <FotoPerfil className="w-24 h-24 rounded-full border">
//               <AvatarImage className="object-cover hover:bg-opacity-30 " src="https://github.com/shadcn.png"/>
//               <AvatarFallback className=" text-center hover:underline">Alterar Imagem</AvatarFallback>
//             </FotoPerfil>
                  
//               </div>
//             </div>
//             <div>
         
//               <Input
//                 type="text"
//                 label="Nome de usuário"
//                 id="username"
//                 name="username"
//                 className="mt-1 block w-full border border-black  p-2 rounded-md"
//               />
//             </div>
//             <div>
          
//               <Input
//                 type="email"
//                 label="Email"
//                 id="email"
//                 name="email"
//                 className="mt-1 block w-full border border-black p-2 rounded-md"
//               />
//             </div>
//             <div>
          
//               <Input
//                 type="password"
//                 label="Senha"
//                 id="password"
//                 name="password"
//                 className="mt-1 block w-full border border-black p-2 rounded-md"
//               ></Input>
//             </div>
//             <div>
//               <Button
//                 type="submit"
//                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-slate-900"
//               >
//                 Atualizar Perfil
//               </Button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client'
import React, { useState } from 'react';
import { AvatarFallback, FotoPerfil } from "../../../../../../packages/ui/src/components/ui/FotoPerfil";
import { Button } from "../../../../../../packages/ui/src/components/ui/Button";
import { Input } from "../../../../../../packages/ui/src/components/ui/Input";
import { AvatarImage } from "../../../../../../packages/ui/src/components/ui/FotoPerfil";

export default function EditarPerfil() {
  const [profilePic, setProfilePic] = useState("https://github.com/shadcn.png");

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files && e.target.files[0]; // Adicionado verificação de existência
    if (file && file.type.startsWith('image')) { // Garante que o arquivo é uma imagem
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) { // Verifica se o resultado não é nulo
          setProfilePic(reader.result.toString()); // Usa o resultado como string
        }
      };
      reader.readAsDataURL(file); // Lê o arquivo como uma URL de dados
    } else {
      // Adicionar um feedback ao usuário caso o arquivo não seja uma imagem
      alert('Por favor, selecione um arquivo de imagem válido.');
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto border border-black">
        <div className="bg-white p-8 border">
          <form className="space-y-6">
            <div className="flex justify-center mt-8">
              <div className="relative">
                <FotoPerfil className="w-24 h-24 rounded-full border">
                  <AvatarImage className="object-cover hover:bg-opacity-30" src={profilePic} />
                  <input
                    type="file"
                    onChange={handleImageChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <AvatarFallback className="text-center hover:underline">Alterar Imagem</AvatarFallback>
                </FotoPerfil>
              </div>
            </div>
            <div>
              <Input
                type="text"
                label="Nome de usuário"
                id="username"
                name="username"
                className="mt-1 block w-full border border-black p-2 rounded-md"
              />
            </div>
            <div>
              <Input
                type="email"
                label="Email"
                id="email"
                name="email"
                className="mt-1 block w-full border border-black p-2 rounded-md"
              />
            </div>
            <div>
              <Input
                type="password"
                label="Senha"
                id="password"
                name="password"
                className="mt-1 block w-full border border-black p-2 rounded-md"
              />
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
