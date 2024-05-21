const HowItWorks = () => {
  return (
    <section id="how-it-works" className="container mx-auto py-10 text-center space-y-4">
      <h3 className="text-yellow-500 text-xl md:text-2xl font-medium">How It Works</h3>
      <h2 className="text-2xl md:text-3xl font-bold">What We Offer?</h2>
      <p className="text-gray-700 capitalize font-medium">
        product quality if our priority, and always guarentees <br /> freshness
        and safety until it's in your handls.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-20">
        <div className="flex flex-col items-center">
          <img
            src="./src/assets/order.png"
            alt="order through website"
            className="h-48"
          />
          <h5 className="text-2xl font-bold text-neutral-900">Easy To Order</h5>
          <p className="text-gray-700 font-medium">
            Order 24/7 through our website
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="./src/assets/delivery.png"
            alt="delivery"
            className="h-48"
          />
          <h5 className="text-2xl font-bold text-neutral-900">
            Fastest Delivery
          </h5>
          <p className="text-gray-700 font-medium">Delivery will be on time</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="./src/assets/satisfied.png"
            alt="satisfied customer"
            className="h-48"
          />
          <h5 className="text-2xl font-bold text-neutral-900">
            100M+ Happy Customers
          </h5>
          <p className="text-gray-700 font-medium">
            Delight at the comfort of your place
          </p>
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;
