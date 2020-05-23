import { DeckType } from './deck-type.enum';

export interface GameItem {
    id: number;
    projectId: string;
    title: string;
    deckType: DeckType;
    userStoriesVotedCount: number;
    userStoriesCount: number;
    assignedPointsCount: number;
    created: Date;
}
