import {
  AppStore,
  Content,
  FooterLogo,
  FooterStoreLinks,
  PlayStore,
} from "../Footer/Style";

export const Footer = () => {
  const goToAppStore = () => {
    window.open(
      "https://apps.apple.com/us/app/camp-gladiator/id648465971?itsct=apps_box&amp;amp;itscg=30200",
      "_blank"
    );
  };

  const goToPlayStore = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.campgladiator&hl=en_US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
      "_blank"
    );
  };
  return (
    <Content>
      <FooterLogo />
      <FooterStoreLinks>
        <AppStore onClick={() => goToAppStore()} />
        <PlayStore onClick={() => goToPlayStore()} />
      </FooterStoreLinks>
    </Content>
  );
};
