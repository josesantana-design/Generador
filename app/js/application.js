/**================================================
JS : Aplication SCRIPTS
===================================================*/

angular
  .module('application', [])
  .controller('myCtrl', function($scope) {
    $scope.sidebar = [{
      link  : 'Recientes',
      href  : 'recientes'
    },
    {
      link  : 'Favoritas',
      href  : 'favoritas'
    },
    {
      link  : 'Mas Descargadas',
      href  : 'mas_descargadas'
    }]

    $scope.movies = [{
      quality   : '1080p',
      language  : 'Latino',
      poster    : 'http://i65.tinypic.com/qpqux5.jpg',
      title     : 'Kun Fu Panda',
      gender    : 'Animacion'
    },
    {
      quality   : '1080p',
      language  : 'Latino',
      poster    : 'http://i67.tinypic.com/2d1tonm.jpg',
      title     : 'Kun Fu Panda 2',
      gender    : 'Animacion'
    },
    {
      quality   : '1080p',
      language  : 'Latino',
      poster    : 'http://i68.tinypic.com/o078kh.jpg',
      title     : 'Kun Fu Panda 3',
      gender    : 'Animacion'
    },
    {
      quality   : '1080p',
      language  : 'Latino',
      poster    : 'http://i64.tinypic.com/5f41i1.jpg',
      title     : 'Avanger',
      gender    : 'Accion'
    },
    {
      quality   : '1080p',
      language  : 'Latino',
      poster    : 'http://i65.tinypic.com/10e213p.jpg',
      title     : 'Avanger E. Ultron',
      gender    : 'Accion'
    },
    {
      quality   : '1080p',
      language  : 'Latino',
      poster    : 'http://i67.tinypic.com/6tdcms.jpg',
      title     : '50 Sombras de B.',
      gender    : 'Comedia'
    },
    {
      quality   : '1080p',
      language  : 'Sub',
      poster    : 'http://placehold.it/150x210/150x210',
      title     : 'Title',
      gender    : 'Gender'
    },
    {
      quality   : '1080p',
      language  : 'Sub',
      poster    : 'http://placehold.it/150x210/150x210',
      title     : 'Title',
      gender    : 'Gender'
    },
    {
      quality   : '1080p',
      language  : 'Sub',
      poster    : 'http://placehold.it/150x210/150x210',
      title     : 'Title',
      gender    : 'Gender'
    },
    {
      quality   : '1080p',
      language  : 'Sub',
      poster    : 'http://placehold.it/150x210/150x210',
      title     : 'Title',
      gender    : 'Gender'
    },
    {
      quality   : '1080p',
      language  : 'Sub',
      poster    : 'http://placehold.it/150x210/150x210',
      title     : 'Title',
      gender    : 'Gender'
    },
    {
      quality   : '1080p',
      language  : 'Latino',
      poster    : 'http://placehold.it/150x210/150x210',
      title     : 'Title',
      gender    : 'Gender'
    }]
});
