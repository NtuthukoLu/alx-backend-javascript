import Building from './5-building.js';

export default class SkyHighBuilding extends Building
{
    constructor(sqft, floors)
    {
        super(sqft);
        this._floors = floors;
    }

    // Getter for sqft
    get sqft() {
    return this._sqft;
    }

    set sqft(value)
    {
        this._sqft = value;
        return value;
    }
    // Getter for floors
    get floors() {
    return this._floors;
    }

    set floors(value)
    {
        this._floors = value;
        return value;
    }

    evacuationWarningMessage()
    {
        return `Evacuate slowly the ${this._floors} floors`;
    }
}