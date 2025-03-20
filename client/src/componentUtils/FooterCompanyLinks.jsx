const FooterCompanyLinks = () => {
    return(
        <>
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
          </>
    )
}

export default FooterCompanyLinks;