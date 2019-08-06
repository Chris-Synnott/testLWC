import { createElement } from 'lwc';
import HelloWorld from 'syn/helloWorld';

describe('syn-hello-world', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('contains a div that controls animation.', () => {
        const element = createElement('syn-hello-world', {
            is: HelloWorld
        });
        document.body.appendChild(element);

        // Get div element
        const el = document.body.querySelector('syn-hello-world');
        expect(el).toBe(element);
    });
});
