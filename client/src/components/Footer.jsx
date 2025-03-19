import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Company Info */}
          <div>
            <img
              src="https://d86af0gufpxog.cloudfront.net/unsafe/adaptive-fit-in/184x44/filters:format(webp)/https%3A%2F%2Fd5nfy7n2jvqm2.cloudfront.net%2Ffe-imgs%2Fnew_design%2Flogo_white.svg"
              alt="Company Logo"
              className="h-10 mb-3"
            />
            <p className="text-sm">
              Smart Procurement for SMEs <br />
              Get Best Prices for your Raw Materials requirements
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about/info" className="hover:text-gray-400">About Us</a></li>
              <li><a href="/about/team" className="hover:text-gray-400">Team</a></li>
              <li><a href="/about/investors" className="hover:text-gray-400">Investors</a></li>
              <li><a href="/about/debt-partners" className="hover:text-gray-400">Debt Partners</a></li>
              <li><a href="https://www.smeassist.in" className="hover:text-gray-400">SMEAssist</a></li>
              <li><a href="https://www.ofbcareers.com" className="hover:text-gray-400">Careers</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/about/news" className="hover:text-gray-400">OFB in News</a></li>
              <li><a href="/about/blogs" className="hover:text-gray-400">Blogs</a></li>
              <li><a href="/about/ceo-speaks" className="hover:text-gray-400">CEO Speaks</a></li>
              <li><a href="https://d5nfy7n2jvqm2.cloudfront.net/media.zip" className="hover:text-gray-400">Download Media Kit</a></li>
              <li><a href="/about/press-releases" className="hover:text-gray-400">Press Release</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Support</h3>
            <ul className="space-y-2">
              <li><a href="/terms-of-use" className="hover:text-gray-400">Privacy & Terms</a></li>
              <li><a href="/about/contact" className="hover:text-gray-400">Contact Us</a></li>
              <li><a href="/about/contact" className="hover:text-gray-400">General Enquiries</a></li>
              <li><a href="/about/contact" className="hover:text-gray-400">Supplier Enquiries</a></li>
              <li><a href="/about/contact" className="hover:text-gray-400">Partner Enquiries</a></li>
              <li><a href="/about/contact" className="hover:text-gray-400">Investor Relations</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-6 border-t border-gray-700 pt-4 text-sm">
          &copy; 2025 OFB Tech Pvt. Ltd, All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
