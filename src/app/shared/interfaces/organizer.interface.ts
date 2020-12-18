import { SocialMedia } from "./social-media.interface";

export interface Organizer {
  id: number;
  name: string;
  photo: string;
  bio: string;
  socialMedia: SocialMedia[];
}
