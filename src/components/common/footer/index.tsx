import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
import footerData from "@/lib/footer-data.json";
import { FooterData } from "./footer";

export default function Footer() {
  const data = footerData as FooterData;

  const getSocialIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "instagram":
        return (
          <Instagram className="h-5 w-5 hover:text-gray-300 transition-colors" />
        );
      case "facebook":
        return (
          <Facebook className="h-5 w-5 hover:text-gray-300 transition-colors" />
        );
      case "youtube":
        return (
          <Youtube className="h-5 w-5 hover:text-gray-300 transition-colors" />
        );
      default:
        return null;
    }
  };

  return (
    <footer className="bg-navbar text-white py-12 ">
      <div>
        <div className="max-w-4xl px-[25px] lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {/* Columns */}
            {data.columns.map((column, index) => (
              <div key={index}>
                <h3 className=" font-thunder text-[25px] leading-[30px] mb-4">
                  {column.title}
                </h3>
                <ul
                  className={`${
                    index === 0
                      ? "flex flex-wrap gap-x-6 gap-y-3 min-[640px]:flex-col min-[640px]:space-y-3"
                      : "space-y-3"
                  }`}
                >
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.url}
                        className="hover:text-gray-300 transition-colors font-onest text-base leading-[30px]"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Find Us Column */}
            <div>
              <h3 className="font-medium text-lg mb-4">Find Us</h3>
              <p className="mb-3">Social Media</p>
              <div className="flex space-x-4 mb-4">
                {data.contactInfo.socialMedia.map((social, index) => (
                  <Link key={index} href={social.url} aria-label={social.name}>
                    {getSocialIcon(social.icon)}
                  </Link>
                ))}
              </div>
              <p className="mb-2">{data.contactInfo.phone}</p>
              <p className="mb-2">{data.contactInfo.address}</p>
              <p>{data.contactInfo.hours}</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#5C5C5C] my-8"></div>

        {/* Copyright */}
        <div className="text-base font-onest leading-[30px] text-center min-[640px]:text-left text-white px-0 min-[640px]:px-8">
          {data.copyright}
        </div>
      </div>
    </footer>
  );
}
