export interface Character {
  mal_id: number;
  url: string;
  images: {
    jpg: MALImage;
    webp: MALImage;
  };
  name: string;
  name_kanji: string;
  nicknames: string[];
  favorites: number;
  about: string;
}

export interface CharacterFull extends Character {
  anime: {
    role: string;
    anime: {
      mal_id: number;
      url: string;
      images: {
        jpg: MALImage;
        webp: MALImage;
      };
      title: string;
    };
  }[];
  manga: {
    role: string;
    manga: {
      mal_id: number;
      url: string;
      images: {
        jpg: MALImage;
        webp: MALImage;
      };
      title: string;
    };
  }[];
  voices: {
    language: string;
    person: {
      mal_id: 0;
      url: string;
      images: {
        jpg: MALImage;
      };
      name: string;
    };
  }[];
}

export interface MALRelation {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface MALImage {
  image_url?: string;
  small_image_url?: string;
  large_image_url?: string;
}
