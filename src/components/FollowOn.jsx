import {FaInstagram, FaLinkedin, FaXTwitter} from "react-icons/fa6";

const FollowOn = () => {
  return (
    <div
      className="faded-text pt-2" //custom - faded-text
    >
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://www.linkedin.com/in/sitanshulall/">
          <FaLinkedin size={20} />
        </a>
        <a href="https://www.instagram.com/sitanshu.lall">
          <FaInstagram size={20} />
        </a>
        <a href="https://www.twitter.com/SitanshuLall">
          <FaXTwitter size={20} />
        </a>
      </div>
    </div>
  );
};

export default FollowOn;