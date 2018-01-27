
const home = require('google-home-notifier');
const language = 'ja';

home.device('Google-Home', language);

home.notify('シャイニー！', function(res) {
  console.log(res);
});
