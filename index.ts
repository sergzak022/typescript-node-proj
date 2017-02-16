import {Observable} from 'rxjs';


function testfn ( a: string, b: string, cb ) {
  setTimeout(()=>{
    cb(a,b);
  }, 100);
}

let twoArgs = Observable.bindCallback(testfn);

twoArgs('hello', 'world')
  .subscribe(function([a, b]){
    console.log(a, b);
  });

