const FooterResources = () => {
    return (
        <>
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
          </>
    )
}

export default FooterResources;