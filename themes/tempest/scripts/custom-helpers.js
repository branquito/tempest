var moment = require('moment');

hexo.extend.helper.register('from_now', function(date){
  return moment(date).fromNow();
});
