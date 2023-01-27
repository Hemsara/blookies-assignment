import { useState } from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { MdKeyboardArrowDown } from "react-icons/md";


export const Footer = () => {
  return (
    <footer className='footer'>
      <div className={ 'footer_left'}>
        {/* <Image
          src="/logo.png"
          alt=""
          className={ logo}
          width={100}
          height={50}
        /> */}
        <p>For every cause that deserves contribution!</p>
        <div className={ 'socials'}>
          <div className={ 'social_icon'}>
            <BsInstagram size={10} />
          </div>
          <div className={ 'social_icon'}>
            <BsTwitter size={10} />
          </div>
          <div className={ 'social_icon'}>
            <FaFacebookF size={10} />
          </div>
          <div className={ 'social_icon'}>
            <ImLinkedin2 size={10} />
          </div>
        </div>
      </div>
      <div className={ 'footer_right'}>
        <FooterLink title="Company" />
        <FooterLink title="Help" />
        <FooterLink title="Partners" />

        <div className={ 'footer_col'}>
          <h6>Subscribe to newsletter</h6>
          <form action="">
            <input type="text" name="" id="" placeholder="E-mail addrerss" />
            <button>subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  title: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ title }) => {
  const [toggled, setToggled] = useState(false);

  return (
    <div className={ 'footer_col'}>
      <span>
        <h6>{title}</h6>
        <a
          className={ 'footer_toggle'}
          onClick={() => setToggled(!toggled)}
          style={{ transform: `rotate(${toggled ? "180deg" : "0deg"})` }}
        >
          <MdKeyboardArrowDown size={23} />
        </a>
      </span>
      <ul
        className={toggled ? `${ 'footer_ul_toggled'}` : `${ 'footer_ul'}`}
      >
        <li>About</li>
        <li>Contact us</li>
        <li>NewsLetter</li>
        <li>Blog</li>
      </ul>
    </div>
  );
};

export default Footer;
