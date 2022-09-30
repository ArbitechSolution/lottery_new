import {
  VStack,
  Stack,
  Container,
  Flex,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import TwitterIcon from "../../Assets/Twitter-1.png";
import TelegramIcon from "../../Assets/Telegram-1.png";
import EmailIcon from "../../Assets/Email-1.png";
import InstagramIcon from "../../Assets/icon_instagram_128x128.png";
import DiscordIcon from "../../Assets/icon_discord_64px.png";
import SocialNetworkIcons from "../SocialNetworkIcons";
function Footer() {
  const bgColor = useColorModeValue("gray.700", "gray.900");
  return (
    <div className="container mt-auto footer">
      <div className="row d-flex justify-content-center mt-4 mb-4">
        <div className="col-lg-3 buyTicketBox">
          <div className="buyTicketBoxMini">
            <div className="row d-flex justify-content-center">
              <div className="col-12 social-div ">
                <a href="https://discord.gg/XJzdsJZayH" target="_blank">
                  <img className="social" src={DiscordIcon} alt="Discord" />
                </a>
                <a href="https://twitter.com/AppBabylonia" target="_blank">
                  <img className="social" src={TwitterIcon} alt="Twitter" />
                </a>
                <a href="https://t.me/babyloniageneralchat" target="_blank">
                  <img className="social" src={TelegramIcon} alt="Telegram" />
                </a>
                <a
                  href="https://www.instagram.com/appbabylonia/"
                  target="_blank"
                >
                  <img className="social" src={InstagramIcon} alt="Instagram" />
                </a>
                <a href="" target="_blank">
                  <img className="social" src={EmailIcon} alt="Gmail" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
