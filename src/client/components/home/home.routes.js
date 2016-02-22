routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('greet', {
            url: '/',
            template: '<home></home>'
        });
}
