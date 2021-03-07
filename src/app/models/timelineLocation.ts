import { BaseObject } from '../models/baseObject';
import { Coordinates } from './coordinates';
import { TimelineEvent } from './';

export class TimelineLocation extends BaseObject{
    countryName: string; // if the country has changed, this was the name before the change
    placeName: string;
    continent: string; 
    currentCountryName: string;
    coordinates: Coordinates;
    events: Array<TimelineEvent>;

    

}