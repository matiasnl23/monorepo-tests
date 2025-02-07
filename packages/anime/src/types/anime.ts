export interface AnimeDetails {
  mal_id: number;
  url: string;
  images: {
    jpg: MALImage;
    webp: MALImage;
  };
  trailer: {
    youtube_id: string;
    url: string;
    embed_url: string;
  };
  approved: boolean;
  titles: MALTitle[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: {
    from: string;
    to: string;
    prop: {
      from: {
        day: number;
        month: number;
        year: number;
      };
      to: {
        day: number;
        month: number;
        year: number;
      };
      string: string;
    };
  };
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: {
    day: string;
    time: string;
    timezone: string;
    string: string;
  };
  producers: MALRelation[];
  licensors: MALRelation[];
  studios: MALRelation[];
  genres: MALRelation[];
  explicit_genres: MALRelation[];
  themes: MALRelation[];
  demographics: MALRelation[];
}

export interface AnimeDetailsFull extends AnimeDetails {
  relations: {
    relation: string;
    entry: MALRelation[];
  }[];
  theme: {
    openings: string[];
    endings: string[];
  };
  external: MALExternalResource[];
  streaming: MALExternalResource[];
}

export interface Character {
  mal_id: number;
  url: string;
  images: {
    jpg: MALImage;
    webp: MALImage;
  };
  name: string;
}

export interface VoiceActor {
  person: {
    mal_id: number;
    url: string;
    name: string;
    images: {
      jpg: MALImage;
      webp: MALImage;
    };
  };
  language: string;
}

export interface Episode {
  mal_id: number;
  url: string;
  title: string;
  title_japanese: string;
  title_romanji: string;
  aired: string;
  score: number | null;
  filler: boolean;
  recap: boolean;
  forum_url: string;
}

export interface AnimePicture {
  images: {
    jpg: {
      image_url: string;
    };
  };
}

export interface MALRelation {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface MALImage {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface MALTitle {
  type: string;
  title: string;
}

export interface MALExternalResource {
  url: string;
  name: string;
}
