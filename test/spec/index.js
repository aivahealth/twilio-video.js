if (typeof window === 'undefined') {
  require('../mockwebrtc')();
}
require('./useragent');
require('./sipjsuseragent');
require('./endpoint');