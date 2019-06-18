import { LightningElement, track, api } from 'lwc';


export default class helloWorld extends LightningElement {
    @track helloName = 'Blah';

    //track name
    @api
    set name(value) {
        this.helloName = value;
    }

    // Get the current greeting
    get name() {
        return 'Hello World ' + this.helloName;
    }

}
