import { Button } from "@douyinfe/semi-ui";
import { useTranslation } from "react-i18next";
import { socials } from "../../../data/socials";

export default function ContactAuthor() {
  const { t } = useTranslation();

  const contactMethods = [
    {
      name: "GitHub/GitEE",
      url: socials.githubs,
      icon: "fab fa-github",
      description: t("contact_github_desc", "Report issues, contribute, or view source code"),
    },
    {
      name: "Twitter/X",
      url: socials.twitters,
      icon: "fab fa-twitter",
      description: t("contact_twitter_desc", "Follow for updates and announcements"),
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">{t("contact_author_title", "Contact the Author")}</h3>
        <p className="text-gray-600">
          {t("contact_author_subtitle", "Get in touch with the DrawDB team through any of these channels:")}
        </p>
      </div>
      
      <div className="space-y-4">
        {contactMethods.map((method, index) => (
          <div
            key={index}
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            onClick={() => window.open(method.url, "_blank")}
          >
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <i className={`${method.icon} text-blue-600 text-xl`}></i>
            </div>
            <div className="flex-grow">
              <h4 className="font-medium text-gray-900">{method.name}</h4>
              <p className="text-sm text-gray-600">{method.description}</p>
            </div>
            <div className="flex-shrink-0">
              <i className="fas fa-external-link-alt text-gray-400"></i>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-start">
          <i className="fas fa-info-circle text-blue-600 mt-1 mr-3"></i>
          <div>
            <h4 className="font-medium text-blue-900 mb-1">
              {t("contact_tip_title", "Quick Tip")}
            </h4>
            <p className="text-sm text-blue-800">
              {t("contact_tip_desc", "For bug reports and feature requests, GitHub Issues is the best place to get a quick response.")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}