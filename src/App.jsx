import Header from "./components/Header";
import "./App.css";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div id="container">
        <Header />
        <div id="galeria">
          <MyCard
            image="https://images.pexels.com/photos/351406/pexels-photo-351406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            name="Rucio"
            description="Con un pelaje robusto y una mirada alerta, el Pastor Alemán es conocido por su inteligencia y lealtad. Este perro posee habilidades excepcionales en tareas de trabajo y es frecuentemente utilizado en roles de búsqueda y rescate, destacando por su destreza y entrenabilidad."
            badgeText="Pastor Aleman"
            badgeColor='danger'
          />
          <MyCard
            image="https://images.pexels.com/photos/37860/border-collie-jump-water-british-sheepdog-37860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            name="Rayo"
            description="Con una mirada intensa y un pelaje suave, el Border Collie es reconocido como la raza más inteligente. Ágil y en constante alerta, este perro es famoso por su destreza en competiciones de agilidad y su capacidad para aprender rápidamente comandos complejos."
            badgeText="Border Collie"
            badgeColor='primary'
          />
          <MyCard
            image="https://images.pexels.com/photos/101634/pexels-photo-101634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            name="Manchas"
            description="Con su distintivo pelaje blanco y negro, el Dálmata es conocido por su energía y elegancia. Tradicionalmente asociado con los servicios de bomberos, este perro es atlético y amigable, destacando por su apariencia única y personalidad vivaz."
            badgeText="Dalmata"
            badgeColor='warning'
          />
          <MyCard
            image="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            name="Pancho"
            description="Con un pelaje corto y brillante, el Labrador Retriever es conocido por su amabilidad y disposición para trabajar. Altamente versátil, esta raza es apreciada como perro guía, de búsqueda y rescate, así como un compañero leal en entornos familiares"
            badgeText="Labrador Retriever"
            badgeColor='secondary'
          />
        
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
