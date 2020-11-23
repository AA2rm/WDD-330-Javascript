'use strict';
/* Week 10: Fetch Notes*/

/****************************************
 * Create a fetch request from a url &
 * console log it ou
 ***************************************/
// take an argument (path)
fetch('http://example.com/movies.json')
// returns a promise (respone) & use a JSON method (also define in the body)
  .then(response => response.json())
// console it out
  .then(data => console.log(data));

  /****************************************
 * Request a fetch from the body mixin using
 * parameters.
 ***************************************/
const form = new FormData(document.getElementById('login-form'));
fetch('/login', {
  method: 'POST',
  body: form
});

 /****************************************
 * Use a fetch method() to send a request
 * by adding in other parameter s
 ***************************************/
// Example POST method implementation:
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  postData('https://example.com/answer', { answer: 42 })
    .then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
    });


/****************************************
* Send a request w/ credentials included
* for a cross-origin call using an include
****************************************/
fetch('https://example.com', {
  credentials: 'include'
});

/****************************************
 * Send a request for a URL on the 
 * same-origin by calling the script using
 * same-origin
***************************************/
// The calling script is on the origin 'https://example.com'

fetch('https://example.com', {
  credentials: 'same-origin'
});

/****************************************
 * Send a fetch request that omits the
 * credentials from the browser
****************************************/
fetch('https://example.com', {
  credentials: 'omit'
})

/****************************************
 * Use a fetch to POST JSON's encoded data
****************************************/
const data = { username: 'example' };

fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});

/****************************************
 * Use a fetch to upload files using HTML
****************************************/
const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);

fetch('https://example.com/profile/avatar', {
  method: 'PUT',
  body: formData
})
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});

/****************************************
 * Use a fetch() method & FormData() method
 *  to upload files using HTML
****************************************/
const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);

fetch('https://example.com/profile/avatar', {
  method: 'PUT',
  body: formData
})
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});


/****************************************
 * Use a fetch  & FormData() to upload
 * multiple files
****************************************/
const formData = new FormData();
const photos = document.querySelector('input[type="file"][multiple]');

formData.append('title', 'My Vegas Vacation');
for (let i = 0; i < photos.files.length; i++) {
  formData.append('photos', photos.files[i]);
}

fetch('https://example.com/posts', {
  method: 'POST',
  body: formData,
})
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});

/****************************************
 * Create a  line iterator that will fetch
 * a text file & prc it line-by-line
****************************************/
async function* makeTextFileLineIterator(fileURL) {
    const utf8Decoder = new TextDecoder('utf-8');
    const response = await fetch(fileURL);
    const reader = response.body.getReader();
    let { value: chunk, done: readerDone } = await reader.read();
    chunk = chunk ? utf8Decoder.decode(chunk) : '';
  
    const re = /\n|\r|\r\n/gm;
    let startIndex = 0;
    let result;
  
    for (;;) {
      let result = re.exec(chunk);
      if (!result) {
        if (readerDone) {
          break;
        }
        let remainder = chunk.substr(startIndex);
        ({ value: chunk, done: readerDone } = await reader.read());
        chunk = remainder + (chunk ? utf8Decoder.decode(chunk) : '');
        startIndex = re.lastIndex = 0;
        continue;
      }
      yield chunk.substring(startIndex, result.index);
      startIndex = re.lastIndex;
    }
    if (startIndex < chunk.length) {
      // last line didn't end in a newline char
      yield chunk.substr(startIndex);
    }
  }
  
  async function run() {
    for await (let line of makeTextFileLineIterator(urlOfFile)) {
      processLine(line);
    }
  }
  
  run();

/****************************************
 * Validate if the fetch() method chks for
 * a promise that's resolved & if the 
 * response.ok property value is true.
****************************************/
fetch('flowers.jpg')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.blob();
  })
  .then(myBlob => {
    myImage.src = URL.createObjectURL(myBlob);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });

/****************************************
 * Create a fetch() method that uses a
 * Request() constructor which is passed
 * as the fetch() arg
*****************************************/
const myHeaders = new Headers();

const myRequest = new Request('flowers.jpg', {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default',
});

fetch(myRequest)
  .then(response => response.blob())
  .then(myBlob => {
    myImage.src = URL.createObjectURL(myBlob);
  });


/*****************************************
 * Create a copy of an existing Request()
 * by passing it in as a request obj
*****************************************/
const anotherRequest = new Request(myRequest, myInit);

/****************************************
 * Create a header obj with a Headers()
 * constructor that uses a mulit-map of 
 * names to values.
****************************************/
const content = 'Hello World';
const myHeaders = new Headers();
myHeaders.append('Content-Type', 'text/plain');
myHeaders.append('Content-Length', content.length.toString());
myHeaders.append('X-Custom-Header', 'ProcessThisImmediately');

/****************************************
 * Create a  a header obj by passing an
 * array of obj literal to the constructor
****************************************/
const myHeaders = new Headers({
    'Content-Type': 'text/plain',
    'Content-Length': content.length.toString(),
    'X-Custom-Header': 'ProcessThisImmediately'
});

/****************************************
 * Query the contents of the method to 
 * get the headers()
****************************************/
console.log(myHeaders.has('Content-Type')); // true
console.log(myHeaders.has('Set-Cookie')); // false
myHeaders.set('Content-Type', 'text/html');
myHeaders.append('X-Custom-Header', 'AnotherValue');

console.log(myHeaders.get('Content-Length')); // 11
console.log(myHeaders.get('X-Custom-Header')); // ['ProcessThisImmediately', 'AnotherValue']

myHeaders.delete('X-Custom-Header');
console.log(myHeaders.get('X-Custom-Header')); // [ ]


/****************************************
 * Throw a TypeError when a header name is
 * used that is not a valid HTTP header
 * name
****************************************/
const myResponse = Response.error();
try {
  myResponse.headers.set('Origin', 'http://mybank.com');
} catch (e) {
  console.log('Cannot pretend to be a bank!');
}

/****************************************
 * Validate if the header content type is 
 * correct prior to prcessing it further
****************************************/
fetch(myRequest)
  .then(response => {
     const contentType = response.headers.get('content-type');
     if (!contentType || !contentType.includes('application/json')) {
       throw new TypeError("Oops, we haven't got JSON!");
     }
     return response.json();
  })
  .then(data => {
      /* process your data further */
  })
  .catch(error => console.error(error));


/****************************************
 * Create a custom response to a recieved
 * request using a respondWith() method.
****************************************/
const myBody = new Blob();

addEventListener('fetch', function(event) {
  // ServiceWorker intercepting a fetch
  event.respondWith(
    new Response(myBody, {
      headers: { 'Content-Type': 'text/plain' }
    })
  );
});

/****************************************
 * Create a fetch request from a url &
 * console log it ou
****************************************/



/****************************************
 * Create a fetch request from a url &
 * console log it ou
****************************************/



/****************************************
 * Create a fetch request from a url &
 * console log it ou
****************************************/



/****************************************
 * Create a fetch request from a url &
 * console log it ou
****************************************/



/****************************************
 * Create a fetch request from a url &
 * console log it ou
****************************************/