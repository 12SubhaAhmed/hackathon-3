export default function Footer() {
    return (
      <footer className="bg-white border-t border-gray-300 py-8">
        <div className="container mx-auto px-4 lg:px-0">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0">
            {/* Left Section */}
            <div>
              <h1 className="text-xl font-bold text-blue-500">MORENT</h1>
              <p className="mt-2 text-gray-600 max-w-xs">
                Our vision is to provide convenience and help increase your sales business.
              </p>
            </div>

            {/* Middle Section */}
            <div className="flex flex-wrap justify-between lg:justify-start lg:space-x-10 w-full lg:w-auto">
              {/* About */}
              <div className="w-1/2 lg:w-auto mb-4 lg:mb-0">
                <h3 className="font-semibold text-black">About</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>How it works</li>
                  <li>Featured</li>
                  <li>Partnership</li>
                  <li>Business Relation</li>
                </ul>
              </div>

              {/* Community */}
              <div className="w-1/2 lg:w-auto mb-4 lg:mb-0">
                <h3 className="font-semibold text-black">Community</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>Events</li>
                  <li>Blog</li>
                  <li>Podcast</li>
                  <li>Invite a friend</li>
                </ul>
              </div>

              {/* Socials */}
              <div className="w-full lg:w-auto">
                <h3 className="font-semibold text-black">Socials</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>Discord</li>
                  <li>Instagram</li>
                  <li>Twitter</li>
                  <li>Facebook</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center mt-8 border-t border-gray-200 pt-4">
            <p className="text-black text-sm text-center lg:text-left">
              ©2022 MORENT. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-4 lg:mt-0">
              <a href="#" className="text-black text-sm hover:underline">Privacy & Policy</a>
              <a href="#" className="text-black text-sm hover:underline">Terms & Condition</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }