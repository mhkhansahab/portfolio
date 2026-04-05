import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { BiEnvelope } from "react-icons/bi";

export function SocialIcon({ type, className }: { type: string; className?: string }) {
  if (type.toLowerCase().includes("linkedin")) {
    return <FaLinkedinIn className={className} />;
  }
  if (type.toLowerCase().includes("github")) {
    return <FaGithub className={className} />;
  }
  if (type.toLowerCase().includes("envelope") || type.toLowerCase().includes("mail")) {
    return <BiEnvelope className={className} />;
  }
  return <FaXTwitter className={className} />;
}
