/**
 * Created by tuannguyen on 1/2/15.
 */
describe('myCtrl', function(){
    beforeEach(module('myCtrl'));
    it( 'should add "active" when the route changes', inject(function() {
        var elm = $compile( '<a href="/hello" when-active>Hello</a>' )( $scope );

        $location.path('/not-matching');
        expect( elm.hasClass('active') ).toBeFalsey();

        $location.path( '/hello' );
        expect( elm.hasClass('active') ).toBeTruthy();
    }));
});