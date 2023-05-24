const Hero = () => {
  return (
    <div className="mt-10">
      <div className="text-center container mx-auto px-8 py-9 max-w-4xl ">
        🎶 Groove, Buy, Repeat! 🎶
        <h1 className="text-3xl font-bold">
          Discover, <span className="text-purple-600">Shop</span>, and
          <span className="text-purple-600"> Amplify </span>Your Music
          Experience!
        </h1>
        <p>
          {" "}
          Unleash Your Inner Rockstar! Discover, shop, and amplify your music
          experience. Dive into a world of rhythm and melody, explore an
          extensive collection, and own the beat that moves you. Your soundtrack
          awaits!
        </p>
      </div>
      <div className=" flex justify-center mt-3 mb-10">
        <a
          href="."
          className=" bg-purple-500 px-4 py-4 rounded mr-4 w-24 hover:bg-purple-600 text-center"
        >
          BUY
        </a>
        <a
          href=""
          className=" bg-purple-500 px-4 py-4 rounded w-24 hover:bg-purple-600 text-center"
        >
          UPLOAD
        </a>
      </div>
      <div className="flex justify-center">
        <img src="./heroimage.png" alt="" />
      </div>
    </div>
  );
};
export default Hero;
