import Button from "./Button";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="bg-hero 2xl:h-[667px] xl:h-[600px]">
      <div className="container mx-auto">
        <Navbar />
        <div className="text-center mt-10">
          <h1 className="text-3xl text-white font-semibold font-mono 2xl:w-6/12 w-8/12 mx-auto leading-relaxed">Saya seorang front-end engineer, back-end engineer, dan juga UI designer</h1>
          <p className="text-white text-opacity-60 text-lg w-4/12 mx-auto mt-2 leading-relaxed">Sejak 13 tahun saya memulai progvramming. Sejak 3 tahun memulai UI design.</p>
          <Button href="#profile" pill variant="yellow" className="mt-10">Pelajari</Button>
        </div>
      </div>
    </div>
  );
}