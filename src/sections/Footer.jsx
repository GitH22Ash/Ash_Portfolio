import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Terms */}
        <div className="flex flex-col justify-center">
          <p className="text-sm hover:underline cursor-pointer">
            Terms & Conditions
          </p>
        </div>

        {/* Social Icons */}
        <div className="socials   flex gap-6 justify-center">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              {socialImg.src ? (
                <a
                  href={socialImg.src}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={socialImg.imgPath}
                    alt={`${socialImg.name} icon`}
                    className=" hover:scale-150 hover:opacity-100 transition-transform duration-150 cursor-pointer"
                  />
                </a>
              ) : (
                <img
                  src={socialImg.imgPath}
                  alt={`${socialImg.name} icon`}
                  className="opacity-60"
                />
              )}
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end text-sm text-gray-400">
            © {new Date().getFullYear()} Ayush Bijalwan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
