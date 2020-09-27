console.log(require('react'));
require('lodash');
import a from './otherCpy.html';
import * as b from './otherCpy.html';
import './child.css';
console.log(a);
console.log(b);
console.log(require('./otherCpy.html'));
console.log('async');

class Foo {}
new Foo();
