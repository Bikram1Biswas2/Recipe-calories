

const Banner = () => {
    return (
        <div>
            <div className="hero h-[450px] bg-cover bg-center bg-no-repeat bg-[url('https://i.ibb.co/2KDMdmg/janko-ferlic-2oi-JD1q-JNEQ-unsplash.jpg')]"
  >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
      <p className="mb-5">
      Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
      </p>
     <div className="flex gap-3 justify-center">
     <button className="btn bg-green-400">Explore Now</button>
     <button className="btn ">Our Feedback</button>
     </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;