import { motion } from "framer-motion";

const MainContentMobileAppPromotion = () => {
    return (
        <>
        <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-8 flex flex-col md:flex-row items-center justify-between bg-gray-200 p-6 rounded-lg shadow-md"
      >
        <div>
          <h3 className="text-xl font-semibold">
            OFB: B2B Raw Materials Prices
          </h3>
          <p>Unlock a Whole New World of Raw Materials</p>
          <ul className="mt-2 list-disc pl-4">
            <li>✅ View Live Prices and Instant News</li>
            <li>✅ Get Quotations For Your Products</li>
            <li>✅ Manage All Your Orders from One Place</li>
          </ul>
          <div className="flex mt-4 space-x-4">
            <a
              href="https://apps.apple.com/us/app/ofbusiness-sme-loan-material/id1527965724"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/AppStoreImage.png"
                alt="Download on App Store"
                className="h-12"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.ofbusiness.app.buyer"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/PlayStoreImage.png"
                alt="Download on Google Play"
                className="h-12"
              />
            </a>
          </div>
        </div>
        <img
          src="https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/mobilePhoto.png"
          alt="Mobile App"
          className="w-48 mt-4 md:mt-0"
        />
      </motion.section></>
    )
}

export default MainContentMobileAppPromotion;