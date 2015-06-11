'use strict';

angular.module('flDoco')
  .controller('ListCtrl', function ($scope) {
    $scope.sections = [
      { name: 'Section link 1',
        type: 'link',
        link:'#'
      },
      { name: 'Section toggle 1',
        type: 'toggle',
        link:'#',
        closed: true,
        children: [
            { name: 'Sublink 1',
              link: '#'
            },
            {
              name: 'Sublink 2',
              link: '#'
            }
        ]
      },
      { name: 'Section toggle 2',
        type: 'toggle',
        link:'#',
        closed: true,
        children: [
          { name: 'Sublink 1',
            link: '#'
          },
          {
            name: 'Sublink 2',
            link: '#'
          }
        ]
      }
    ];

  });
