import { GoMarkGithub } from "react-icons/go";
import { FaTwitter } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoIosBasketball } from "react-icons/io";
import Instructor from "./components/instructor";
import Download from "./components/download";
import { Link } from "gatsby";
import { Logo } from "./components/logo";

export default {
	Link,
	Logo,
	Instructor,
	Download,
	DownloadIcon: FiDownload,
	SunnyIcon: IoIosBasketball,
	GithubIcon: GoMarkGithub,
	TwitterIcon: FaTwitter
};
