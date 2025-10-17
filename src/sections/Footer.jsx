import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        
        {/* Blog */}
      <div className="flex flex-col justify-center">
        <a
          href="https://tinyurl.com/ash-blog-portfolio" 
          target="_blank"                 // Opens in a new tab
          rel="noopener noreferrer"       // Security best practice
        >
          <img
            src="/images/blog.png"
            alt="blog"
            className="inline w-20 h-10 mr-1 mb-1 hover:opacity-80 transition cursor-pointer hover:scale-150"
          />
        </a>
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
            © {new Date().getFullYear()} Ayush Bijalwan.<br/> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
