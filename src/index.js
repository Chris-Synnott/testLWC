import { createElement } from 'lwc';
import MyApp from 'syn/app';

const app = createElement('syn-app', { is: MyApp });
// eslint-disable-next-line @lwc/lwc/no-document-query
document.querySelector('#main').appendChild(app);
