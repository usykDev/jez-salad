export enum SelectedPage {
  Home = "home",
  AboutUs = "aboutus",
  Reviews = "reviews",
  Offers = "offers",
  ContactUs = "contactus",
}

export interface CardType {
  image: string;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  img: string;
  age: string;
  review: string;
}
