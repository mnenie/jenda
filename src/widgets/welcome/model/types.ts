export interface MarketingCard extends ImgInCard {
  id: number;
  title?: string;
  description?: string;
  width?: string;
  height?: string;
  pagePrefix: string;
}

interface ImgInCard {
  url?: string;
  bottom?: string;
  right?: string;
  left?: string;
  top?: string;
  imgWidth?: string;
}

export interface SectionWrapperType {
  name: string;
  heading: string;
  about: string;
  writer: string;
  img: string;
  review?: Partial<ReviewWrapper>;
}

export interface ReviewWrapper {
  img: string;
  name: string;
  status: string;
  comment: string;
}
