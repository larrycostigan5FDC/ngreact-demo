import 'ngreact';
import Fish from '../components/fish.jsx';

const app = window.angular.module('app', ['react']);

app.directive('fish', [
    'reactDirective',
    function(reactDirective) {
        console.dir(reactDirective);
        console.dir(Fish);
        return reactDirective(Fish);
    }
]);
