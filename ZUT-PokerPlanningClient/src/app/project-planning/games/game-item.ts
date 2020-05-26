import { DeckType } from './deck-type.enum';

export enum GameStatus{
    Lobby = 0,
    Started = 1,
    Ended = 2,
}
type StoryScore = number | undefined;

export interface ParticipantScores{
    [userId :string]: number;
}


export interface IStory{
  storyName: string;
  storyId?: string;
  finalScore?: StoryScore;
  paricipantScores?: ParticipantScores;
}


type ActiveStoryType = string | undefined;

export interface GameItem {
    gameId: string;
    gameName: string;
    projectId: string;
    stories: IStory[];
    activeStoryIndex: number;
    gameStatus: GameStatus;
    activeStory: ActiveStoryType;
    createdAt: string;
}
