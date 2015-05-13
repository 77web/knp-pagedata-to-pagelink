angular.module('knp.pagination.directive', [])
    .directive('knpPagination', function(){
        return {
            replace: true,
            restrict: 'A',
            template: 'knp.pagination.template.html',
            scope: {
                pagedata: '=knpPagination'
            }
        };
    })
;
