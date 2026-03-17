// pages/Home.tsx

const Home = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">Usuarios</div>

      <div className="bg-white p-6 rounded-lg shadow">Ventas</div>

      <div className="bg-white p-6 rounded-lg shadow">Reportes</div>
    </div>
  );
};

export default Home;
