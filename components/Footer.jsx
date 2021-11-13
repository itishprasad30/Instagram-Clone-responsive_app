const Footer = () => {
  return (
    <div className="flex flex-row justify-center items-center space-x-3 bg-yellow-200">
      <div>
        <p>
          Devloped with 💓 by{" "}
          <a
            className="hover:bg-red-500 rounded-md px-2 py-1  hover:text-gray-50 "
            href="https://twitter.com/Itish_prasad"
          >
            Itish Prasad Sahoo
          </a>
        </p>
      </div>
      <p>
        &copy;
        <a href="https://github.com/itishprasad30">Itish Prasad</a>
      </p>
    </div>
  );
};

export default Footer;
