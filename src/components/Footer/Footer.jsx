import Container from "../Others/Container";



const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12">
      <Container>
        <div className="grid md:grid-cols-5 gap-8 mx-2 md:mx-0">
          <div>
            <h3 className="text-white text-lg font-semibold mb-2">
              CS — Ticket System
            </h3>
            <p className="text-sm">
              Customer Support Zone is committed to delivering fast, reliable,
              and friendly assistance. We aim to resolve your issues quickly,
              ensuring a smooth, satisfying experience and building lasting
              customer trust.
            </p>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-2">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Contact Saled</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-2">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Product & Services</li>
              <li>Customer Stories</li>
              <li>Download Apps</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-2">
              Information
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Join Us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-2">
              Social Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>@CS — Ticket System</li>
              <li>@CS — Ticket System</li>
              <li>@CS — Ticket System</li>
              <li>support@cst.com</li>
            </ul>
          </div>
        </div>

        <hr className="mt-12 border-t border-gray-800" />

        <div className="text-left md:text-center text-gray-500 text-sm mt-10 mx-2 md:mx-0">
          © 2025 CS — Ticket System.
          <br className="block md:hidden" /> All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;