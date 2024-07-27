import React, { useState, useEffect } from 'react';

const FooterBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
 
        setIsVisible(false);
      } else {
      
        setIsVisible(true);
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <section
      className={`fixed bottom-0 w-screen bg-gray-100 py-5 z-10 transition-transform duration-300 ${
        isVisible ?'translate-y-full' :'translate-y-0' 
      }`}
    >
      <div className="mx-auto max-w-7xl px-12 w-full flex justify-between">
        <div className="flex justify-between items-center block w-full">
          <div className="flex w-full flex-row justify-between items-center">
            <form>
              <div className="flex bg-black p-1 pl-2 rounded-xl justify-between">
                <div className="flex items-center">
                  <input
                    type="text"
                    className="bg-black border-0 outline-none text-white p-1 placeholder-[#7E8587] w-44"
                    placeholder="Enter Phone Number"
                  />
                  <span className="w-6 flex items-center justify-end h-full"></span>
                </div>
                <button
                  type="submit"
                  className="text-center text-sm leading-7 justify-between pt-2 ml-2 bg-yellow-300 rounded-xl z-10 py-2 px-4 disabled:opacity-80 disabled:cursor-not-allowed"
                >
                  <span>Apply Now</span>
                </button>
              </div>
            </form>
            <div className="consent flex items-center py-4 px-2 max-w-xs">
              <input
                type="checkbox"
                id="consent-msg"
                checked
              />
              <label
                htmlFor="consent-msg"
                className="text-white md:text-black text-[10px] leading-3 cursor-pointer"
              >
                You agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp to guide you through your application.
              </label>
            </div>
          </div>
        </div>
        <div className="flex hidden w-full flex-row items-center justify-between">
          <div className="w-full max-w-[300px]">
            <a
              href="https://uni-growth.onelink.me/v6cm/"
              target="_blank"
              rel="noopener noreferrer"
              className="block google-btn-2 font-medium p-4 rounded-lg z-10 bg-[#FDEF78] text-black -mt-2 disabled:bg-[#AEAB8C]"
            >
              <div className="w-full flex justify-center items-center">
                <span>Download</span>
              </div>
            </a>
          </div>
          <div className="my-2">
            <p className="text-white md:text-black text-[10px] leading-3">
              Thank you for your interest in the Uni Card.<br />
              Download the Uni Cards app now and get your Uni Card in minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterBanner;
