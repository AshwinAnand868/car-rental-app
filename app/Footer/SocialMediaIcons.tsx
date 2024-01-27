import Link from 'next/link';
import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const SocialMediaIcons = () => {

  const linkStyles = {
    backgroundColor: "#f5f6fa",
    display: "block",
    height: "53px",
    width: "53px",
    borderRadius: "53px",
  }

  const socialLinks = [
    {
      id: 1,
      icon: FaFacebookF,
      url: "https://www.facebook.com/anand.ashwin.9212/",
    },
    {
      id: 2,
      icon: FaTwitter,
      url: "https://twitter.com/_Ashwin_Anand_",
    },
    {
      id: 3,
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/in/anand-ashwin/",
    },
    {
      id: 4,
      icon: FaInstagram,
      url: "https://www.instagram.com/ashwin_anand_/",
    },
    {
      id: 5,
      icon: FiGithub,
      url: "https://github.com/AshwinAnand868/",
    },
  ];

  return (
    <>
      {socialLinks.map((socialLink, index) => {
        const Icon = socialLink.icon;
        return (
          <Link
            key={`social-${index}`} target='_blank' href={socialLink.url}
            className='mt-3 p-3 rounded-full bg-blue-500 hover:bg-white hover:text-blue-500 cursor-pointer'
            >
            <Icon className='w-5 h-5'/>
          </Link>
        );
      })}
    </>
  )
}

export default SocialMediaIcons