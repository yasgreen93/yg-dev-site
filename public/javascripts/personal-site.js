import '../sass/style.scss';

import Blazy from './blazy';

const blazy = new Blazy({
  selector: 'img',
  successClass: 'profile__image--loaded'
});
