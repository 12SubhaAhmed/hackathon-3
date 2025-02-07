import Cars from "./components/Cars/page"
import Navbar from "./components/Navbar/page"
import Footer from "./components/Footer/page"
import Hero from "./components/Hero/page"
import PickupDropoff from "./components/PickUp/page"

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <PickupDropoff/>
      <Cars/>
      <Footer/>    
    </div>
  )
}
