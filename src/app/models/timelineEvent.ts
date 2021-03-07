import { BaseObject } from "./baseObject";
import { TimelineLocation } from ".";
import { TimelineType } from ".";
import { DateTime } from 'luxon';

export class TimelineEvent implements BaseObject {
    id: number;
    date: DateTime;
    endDate: DateTime;
    title: string;
    description: string; //richtext
    happening: boolean;
    location: TimelineLocation;
    type: TimelineType;



}