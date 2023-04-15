import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// https://github.com/bradtraversy/tailwind-course-projects
// https://uidesigndaily.com/

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Clipboard Website</title>
      </Head>
      {/* Hero Section */}
      <section id="hero">
        <div className="section-container mb-40 pt-16">
          <img src="logo.svg" alt="" className="mx-auto my-16" />
          <h3 className="">A history of everything you copy</h3>
          <p className="section-content mb-10">
            <span className="text-2xl">
              Clipboard allows you to track and organize everything you copy.
              Instantly access your clipboard on all your devices.
            </span>
          </p>
          {/* Button Container */}
          <div className="button-container">
            <Link
              href="#"
              className="p-4 px-8 text-white rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
            >
              Download for iOS
            </Link>
            <Link
              href="#"
              className="p-4 px-8 text-white rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
            >
              Download for Mac
            </Link>
          </div>
        </div>
      </section>
      {/* Snippets Section */}
      <section id="snippets">
        <div className="section-container my-20">
          <h3 className="mb-8 text-4xl font-bold text-darkGrayishBlue md:text-5xl">
            Keep track of your snippets
          </h3>
          <p className="section-content mb-24">
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
        </div>
      </section>
      {/* Features Section */}
      <section id="features">
        <div className="section-container my-20">
          <div className="relative flex flex-col md:flex-row md:space-x-32">
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src="image-computer.png"
                alt=""
                className="md:absolute right-[50%] top-0"
              />
            </div>

            {/* Items Container */}
            <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16">
              {/* Item One */}
              <div className="flex flex-col items-center md:items-start">
                <h5>Quick Search</h5>
                <p className="max-w-md text-grayishBlue">
                  Easily search your snippets by content, category, web address,
                  application, and more.
                </p>
              </div>
              {/* Items 2 */}
              <div className="flex flex-col items-center md:items-start">
                <h5>iCould Sync</h5>
                <p className="max-w-md text-grayishBlue">
                  Instantly saves and syncs snippets across your devices.
                </p>
              </div>
              {/* Items 3 */}
              <div className="flex flex-col items-center md:items-start">
                <h5>Complete History</h5>
                <p className="max-w-md text-grayishBlue">
                  Retrieve any snippets from the first moment you started using
                  the app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Access Anywhere Section */}
      <section id="access">
        <div className="section-container flex flex-col items-center my-20">
          <h3>Access Clipboard Anywhere</h3>
          <p className="section-content mb-24">
            Whether you’re on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>
          <img className="" src="image-devices.png" alt="" />
        </div>
      </section>
      {/* Supercharge Section */}
      <section className="section-container my-20">
        <h3>Supercharge your workflow</h3>
        <p className="section-content mb-16">
          We’ve got the tools to boost your productivity.
        </p>
        {/* Items Container */}
        <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
          {/* Item 1 */}
          <div className="flex flex-col items-center space-y-5">
            <img src="icon-blacklist.svg" className="mb-6" alt="" />
            <h5>Create Blasklists</h5>
            <p className="max-w-md text-grayishBlue">
              Easily search your snippets by content, category, web address,
              applicatiton, and more.
            </p>
          </div>
          {/* Item 2 */}
          <div className="flex flex-col items-center space-y-5">
            <img src="icon-text.svg" className="mb-6" alt="" />
            <h5>Pain Text Snippets</h5>
            <p className="max-w-md text-grayishBlue">
              Remove unwanted formatting from copied text for a consistent look.
            </p>
          </div>
          {/* Item 3 */}
          <div className="flex flex-col items-center space-y-5">
            <img src="icon-preview.svg" className="mb-6" alt="" />
            <h5>Sneek Preview</h5>
            <p className="max-w-md text-grayishBlue">
              Quick Preview of all snippets on your Clipboard for easy access.
            </p>
          </div>
        </div>
      </section>
      {/* References Section */}
      <section id="references">
        <div className="flex flex-col items-center justify-between mx-auto max-w-6xl px-10 space-y-16 my-44 md:flex-row md:space-y-0">
          <img src="logo-google.png" alt="" />
          <img src="logo-ibm.png" alt="" />
          <img src="logo-microsoft.png" alt="" />
          <img src="logo-hp.png" alt="" />
          <img src="logo-vector-graphics.png" alt="" />
        </div>
      </section>
      {/* Bottom CTA Section */}
      <section className="section-container my-20">
        <h3>Cipboard for iOS and MacOS</h3>
        <p className="section-content mb-10">
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you’re ready to start adding to your clipboard.
        </p>

        {/* Button Container */}

        <div className="button-container">
          <Link
            href="#"
            className="p-4 px-8 text-white rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
          >
            Download for iOS
          </Link>
          <Link
            href="#"
            className="p-4 px-8 text-white rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
          >
            Download for Mac
          </Link>
        </div>
      </section>
      {/* Credentials */}
      <section className="section-container my-20">
        <div className="section-container">
          <h3 className="">Author</h3>
          <p className="section-content">
            This site was created by{" "}
            <Link href="https://github.com/YoheiKo">
              YoheiKo using Tailwind and Next.js.
            </Link>
          </p>
          <p className="section-content">
            The content of this site do not have backend features. Full credit
            to{" "}
            <Link href="https://www.traversymedia.com">
              www.traversymedia.com
            </Link>
          </p>
        </div>
      </section>
      <footer className="bg-gray-50">
        <div className="section-container">
          <div className="flex flex-col items-center justify-between md:flex-row">
            {/* Image */}
            <img src="logo.svg" alt="" className="scale-50" />
            {/* Container for Menus and Social */}
            <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">
              {/* Menus */}
              <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
                {/* Menu 1 */}
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <Link href="#" className="hover:text-strongCyan">
                      FAQs
                    </Link>
                  </div>
                  <div>
                    <Link href="#" className="hover:text-strongCyan">
                      Contact Us
                    </Link>
                  </div>
                </div>
                {/* Menu 2 */}
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <Link href="#" className="hover:text-strongCyan">
                      Privacy Policy
                    </Link>
                  </div>
                  <div>
                    <Link href="#" className="hover:text-strongCyan">
                      Press Kit
                    </Link>
                  </div>
                </div>
                {/* Menu 3 */}
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <Link href="#" className="hover:text-strongCyan">
                      Install Guide
                    </Link>
                  </div>
                </div>
              </div>
              {/* Social Icons */}
              <div className="flex justify-between w-32 py-1">
                <Link href="#">
                  <img
                    src="icon-facebook.svg"
                    alt=""
                    className="duration-200 ficon"
                  />
                </Link>
                <Link href="#">
                  <img
                    src="icon-twitter.svg"
                    alt=""
                    className="duration-200 ficon"
                  />
                </Link>
                <Link href="#">
                  <img
                    src="icon-instagram.svg"
                    alt=""
                    className="duration-200 ficon"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
