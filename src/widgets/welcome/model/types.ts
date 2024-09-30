export interface MarketingCard extends ImgInCard {
  id: number;
  title?: string;
  description?: string;
  width?: string;
  height?: string;
  pagePrefix: string;
}

interface ImgInCard {
  url: string;
  bottom?: string;
  right?: string;
  left?: string;
  top?: string;
  imgWidth?: string;
}
