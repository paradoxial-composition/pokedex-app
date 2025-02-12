export interface AllPokemonResponse {
  count: number;
  next: string;
  previous: string;
  results: PokemonItem[];
}

export interface PokemonItem { name: string; url: string }

export interface Pokemon {
  abilities?: AbilityEntry[];
  base_experience?: number;
  forms?: {
    name: string;
    url: string;
  }[];
  game_indices?: GameIndex[];
  height?: number;
  held_items?: HeldItem[];
  id?: number;
  is_default?: boolean;
  location_area_encounters?: string;
  moves?: Move[];
  name?: string;
  order?: number;
  past_types?: string[];
  species?: Species;
  sprites?: Sprites;
  stats?: Stat[];
  types?: Type[];
  weight?: number;
}

export interface Ability {
  name: string;
  url: string;
}

export interface AbilityEntry {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

export interface Version {
  name: string;
  url: string;
}

export interface GameIndex {
  game_index: number;
  version: Version;
}

export interface Item {
  name: string;
  url: string;
}

export interface VersionDetail {
  rarity: number;
  version: Version;
}

export interface HeldItem {
  item: Item;
  version_details: VersionDetail[];
}

export interface MoveLearnMethod {
  name: string;
  url: string;
}

export interface VersionGroup {
  name: string;
  url: string;
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: MoveLearnMethod;
  version_group: VersionGroup;
}

export interface Move {
  move: {
    name: string;
    url: string;
  };
  version_group_details: VersionGroupDetail[];
}

export interface Species {
  name: string;
  url: string;
}

export interface Sprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: {
    dream_world: {
      front_default: string | null;
      front_female: string | null;
    };
    home: {
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
    "official-artwork": {
      front_default: string | null;
      front_shiny: string | null;
    };
  };
  versions: {
    [generation: string]: {
      [version: string]: {
        back_default: string | null;
        back_shiny: string | null;
        front_default: string | null;
        front_shiny: string | null;
        [key: string]: any; // Additional properties can be added as needed
      };
    };
  };
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
