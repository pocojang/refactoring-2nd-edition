type Genre = 'tragedy' | 'comedy';
type PlayID = 'hamlet' | 'as-like' | 'othello';

export type Plays = {
  [playID in PlayID]: {
    name: string;
    type: Genre;
  };
};

export interface Performance {
  playID: PlayID;
  audience: number;
}

export interface Invoice {
  customer: string;
  performances: Performance[];
}
