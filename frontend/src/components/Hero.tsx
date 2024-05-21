import { Typewriter } from "react-simple-typewriter";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="container mx-auto py-10 bg-[#FEF8EC]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-2xl md:text-[2.8vw] font-bold text-pink-500">
            <Typewriter
              words={[
                "Masaaledaar Chatpataa",
                "Swadisht Ghar Ka Khaana",
                "Exotic Desi Delights",
              ]}
              loop={50}
              cursor
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <h3 className="text-gray-700 font-medium text-center">
            Discover Delicious Delights <br /> for Every Palate
            <span className="md:block hidden">
              Explore a world of culinary wonders, from{" "}
              <span className="text-pink-600 font-bold">savory classics</span>{" "}
              to sweet indulgences. Satisfy your cravings and tantalize your
              taste buds with our{" "}
              <span className="text-pink-600 font-bold">
                handpicked selection
              </span>{" "}
              of mouthwatering dishes. Whether you're craving comfort food or
              seeking adventurous flavors, we've got something for everyone.
              Order now and embark on a gastronomic journey like no other!
            </span>
          </h3>

          <Button
            variant={"default"}
            size={"sm"}
            className="text-xl px-6 py-5 bg-yellow-400 hover:bg-yellow-500 rounded-full font-medium text-black"
          >
            Order Now
          </Button>
        </div>
        <div className="order-first md:order-last">
          <img
            src="./src/assets/banner-image-1.png"
            alt="banner"
            className="h-[320px] md:h-[400px] w-full"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
