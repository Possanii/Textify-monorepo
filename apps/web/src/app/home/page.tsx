import Logo from "../../../public/Logo_with_black_text.png";

const LandingPage = () => {
  return (
    <div className="bg-white text-black h-screen bg-gradient-to-br from-green-500">
      <div>
        <title>Textify</title>
      </div>
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <img src={Logo.src} alt="Textify" className=" mx-5 mb-2" />
          <div className="flex space-x-4">
            <button className="border rounded-full border-white px-4 py-2">
              Home
            </button>
            <button className="border rounded-full border-white px-4 py-2">
              Upload
            </button>
            <button className="border rounded-full border-white px-4 py-2">
              Editar Perfil
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <img
            src="/profile-icon.png"
            alt="User Profile"
            className="h-8 mr-2"
          />
          <img
            src="/notification-icon.png"
            alt="Notifications"
            className="h-8"
          />
        </div>
      </nav>

      {/* Upload Section */}
      <section className="p-4">
        <h1 className="text-3xl">Faça o upload agora</h1>
        <p className="text-gray-400">Transcrição</p>
        <button className="bg-green-500 text-white px-4 py-2 mt-2">
          Continuar
        </button>
      </section>

      {/* Video Grid */}
      <section className="p-4">{/* Video thumbnails grid here */}</section>

      {/* Search Bar */}
      <div className="p-4 flex justify-end">
        <input
          type="text"
          placeholder="Pesquisar Vídeo"
          className="px-4 py-2 border border-gray-300"
        />
      </div>
    </div>
  );
};

export default LandingPage;
