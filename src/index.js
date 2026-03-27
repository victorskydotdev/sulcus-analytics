import './scss/main.scss';

import { pageInteractions } from './app/app';
import { modalHandling } from './app/form-modal-script';
import { submitForm } from './app/form-handling';
import { navInteraction } from './app/navbar';
import { displayAlert } from './app/redirect-handling';

// pageInteractions();
modalHandling();
submitForm();
navInteraction();
displayAlert();
