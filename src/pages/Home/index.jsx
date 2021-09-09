import contentsTop from '../../data/contentsTop';
import contentsMidTop from '../../data/contentsMidTop';
import contentsMidMid from '../../data/contentsMidMid';
import contentsMidBot from '../../data/contentsMidBot';
import MainContent from '../../components/MainContent';
import SubHeader from '../../components/SubHeader';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FooterContacts from '../../components/FooterContacts';

export default function Home() {
  return (
    <div>
      <Header />
      {contentsTop.map((contentTop) => (
        <SubHeader key={contentTop.title} content={contentTop} />
      ))}
      {contentsMidTop.map((contentMidTop) => (
        <MainContent key={contentMidTop.title} content={contentMidTop} />
      ))}
      {contentsMidMid.map((contentMidMid) => (
        <MainContent key={contentMidMid.title} content={contentMidMid} />
      ))}   
      {contentsMidBot.map((contentMidBot) => (
        <MainContent key={contentMidBot.title} content={contentMidBot} />
      ))}
      <Footer />
      <FooterContacts>Sobre</FooterContacts>
      <FooterContacts>Contact</FooterContacts>
      <FooterContacts>Terms of Use</FooterContacts>
      <FooterContacts>Privacy Policy</FooterContacts>
    </div>
  );
}
