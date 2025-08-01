import ContactForm from "./ContactForm";

export default function ContactThree() {
  return (
    <div className="bostami-page-content-wrap" id="contact">
      <div className="section-wrapper pl-60 pr-60 pt-60">
        <div className="bostami-page-title-wrap mb-15">
          <h2 className="page-title">contact</h2>
        </div>
      </div>

      <div className="section-wrapper pr-60 pl-60 mb-60">
        <div className="contact-area bg-light-white-2">
          <h5 className="contact-title">I am avilable for freelance work</h5>
          <h5 className="contact-title-b">contact me</h5>
          <ContactForm />
        </div>
      </div>

      <div className="footer-copyright text-center bg-light-white-2 pt-25 pb-25">
        <span>
          © {new Date().getFullYear()} All Rights Reserved by dev moshiur.
        </span>
      </div>
    </div>
  );
}
