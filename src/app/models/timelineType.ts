import { BaseObject } from '../models/baseObject';
import { TimelineEvent } from '.';

export class TimelineType extends BaseObject{
    category: string; // discovery
    subCategory: string; // physics
    description: string;
    events: Array<TimelineEvent>;

}