import Navbar from "../components/Navbar";
import Kategori2 from "../components/Kategori2";
function Order() {

    return (
      <div className="App">
          <Navbar/>
          <Kategori2  nama="Jasa Design" harga="100.000"/>
          <Kategori2  nama="Jasa Coding" harga="125.000"/>
          <Kategori2  nama="Jasa Edit" harga="99.999"/>
     </div>
    );
  }
  
export default Order;