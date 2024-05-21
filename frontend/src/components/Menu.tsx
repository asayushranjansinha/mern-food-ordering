import FeaturedItemCard from "./FeaturedItemCard";
import { Button } from "./ui/button";

const Menu = () => {
  return (
    <section
      id="menu"
      className="container mx-auto py-10 text-center space-y-4"
    >
      <h3 className="text-yellow-500 text-xl md:text-2xl font-medium">
        Our Menu
      </h3>
      <h2 className="text-2xl md:text-3xl font-bold">Popular Orders</h2>
      <p className="text-gray-700 capitalize font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Corporis
        vel libero pariatur rem excepturi blanditiis magni suscipit? Enim,
        quaerat possimus?
      </p>
      <div className="flex flex-wrap justify-items-center flex-col md:flex-row items-center justify-center gap-x-6 md:gap-y-16 gap-y-8 pt-16">
       
        <FeaturedItemCard
          name="Non Veg Thali"
          description="lorem ipsum dolor"
          price={32.55}
          image="./hero-image-1.png"
        />
        <FeaturedItemCard
          name="Non Veg Thali"
          description="lorem ipsum dolor"
          price={32.55}
          image="./hero-image-2.png"
        />
        <FeaturedItemCard
          name="Non Veg Thali"
          description="lorem ipsum dolor"
          price={32.55}
          image="./hero-image-3.png"
        />
        <FeaturedItemCard
          name="Non Veg Thali"
          description="lorem ipsum dolor"
          price={32.55}
          image="./hero-image-4.png"
        />
      </div>

      <Button>View More</Button>
    </section>
  );
};
export default Menu;
