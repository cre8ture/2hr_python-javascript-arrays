const data = [

    {

        description: 'Accessing an array element',

        example_array: '[1, 2, 3, 4, 5]',

        python: `index = 2  
  
  arr[index]`,

        javascript: `let arr = [1, 2, 3, 4, 5];  
  
  let index = 2;
  
  arr[index];`

    },

    {

        description: 'Modifying an array element',

        example_array: '[1, 2, 3, 4, 5]',

        python: `index = 2
  
  arr[index] = 10`,

        javascript: `let arr = [1, 2, 3, 4, 5];  
  
  let index = 2;
  
  arr[index] = 10;`

    },

    {

        description: 'Appending to an array',

        example_array: '[1, 2, 3, 4, 5]',

        python: `arr.append(6)`,

        javascript: `let arr = [1, 2, 3, 4, 5];   
  
  arr.push(6);`

    },

    {

        description: 'Removing the last element from an array',

        example_array: '[1, 2, 3, 4, 5]',

        python: `arr.pop()`,

        javascript: `let arr = [1, 2, 3, 4, 5];
  
  arr.pop();`

    },

    {

        description: 'Finding the length of an array',

        example_array: '[1, 2, 3, 4, 5]',

        python: `len(arr)`,

        javascript: `let arr = [1, 2, 3, 4, 5];
  
  arr.length;`

    },

    {

        description: 'Sorting an array',

        example_array: '[5, 3, 1, 4, 2]',

        python: `arr.sort()`,

        javascript: `let arr = [5, 3, 1, 4, 2];  
  
  arr.sort((a, b) => a - b);`

    },

    {

        description: 'Inserting an element at a specific position',

        example_array: '[1, 2, 3, 4, 5]',

        python: `index = 2
  
  arr.insert(index, 10)`,

        javascript: `let arr = [1, 2, 3, 4, 5];
  
  let index = 2;
  
  arr.splice(index, 0, 10);`

    },

    {

        description: 'Removing an element at a specific position',

        example_array: '[1, 2, 3, 4, 5]',

        python: `index = 2
  
  arr.pop(index)`,

        javascript: `let arr = [1, 2, 3, 4, 5];
  
  let index = 2;
  
  arr.splice(index, 1);`

    },

    {

        description: 'Finding the index of an element',

        example_array: '[1, 2, 3, 4, 5]',

        python: `element = 3
  
  arr.index(element)`,

        javascript: `let arr = [1, 2, 3, 4, 5];
  
  let element = 3;  
  
  arr.indexOf(element);`

    },

    {

        description: 'Reversing an array',

        example_array: '[1, 2, 3, 4, 5]',

        python: `arr.reverse()`,

        javascript: `let arr = [1, 2, 3, 4, 5];
  
  arr.reverse();`

    },

    {

        description: 'Checking if an element exists in an array',

        example_array: '[1, 2, 3, 4, 5]',

        python: `element = 3
  
  element in arr`,

        javascript: `let arr = [1, 2, 3, 4, 5];
  
  let element = 3;
  
  arr.includes(element);`

    },

    {

        description: 'Concatenating two arrays',

        example_array: '[1, 2, 3] and [4, 5, 6]',

        python: `arr1 = [1, 2, 3]
  
  arr2 = [4, 5, 6]  
  
  arr1 + arr2`,

        javascript: `let arr1 = [1, 2, 3];
  
  let arr2 = [4, 5, 6];
  
  arr1.concat(arr2);`

    },

    {

        description: 'Slicing an array',

        example_array: '[1, 2, 3, 4, 5]',

        python: `start = 1
  
  end = 4
  
  arr[start:end]`,

        javascript: `let arr = [1, 2, 3, 4, 5];
  
  let start = 1;
  
  let end = 4;
  
  arr.slice(start, end);`

    },

    {

        description: 'Joining array elements into a string',

        example_array: "['a', 'b', 'c', 'd']",

        python: `separator = ', '
  
  separator.join(arr)`,

        javascript: `let arr = ['a', 'b', 'c', 'd'];
  
  let separator = ', ';
  
  arr.join(separator);`

    },

    {

        description: 'Mapping an array to a new array',

        example_array: '[1, 2, 3, 4, 5]',

        python: `list(map(lambda x: x * 2, arr))`,

        javascript: `let arr = [1, 2, 3, 4, 5];
  
  arr.map(x => x * 2);`

    },

    {

        description: 'Filtering an array',

        example_array: '[1, 2, 3, 4, 5]',

        python: `list(filter(lambda x: x % 2 == 0, arr))`,

        javascript: `let arr = [1, 2, 3, 4, 5];
  
  arr.filter(x => x % 2 === 0);`

    },

    {

        description: 'Reducing an array to a single value',

        example_array: '[1, 2, 3, 4, 5]',

        python: `from functools import reduce
  
  reduce((lambda x, y: x * y), arr)`,

        javascript: `let arr = [1, 2, 3, 4, 5];
  
  arr.reduce((x, y) => x * y);`

    },

    {

        description: 'Slicing an array from start to a specific index',

        example_array: '[1, 2, 3, 4, 5]',

        python: `end = 4  
  
  arr[:end]`,

        javascript: `let arr = [1, 2, 3, 4, 5];
  
  let end = 4;
  
  arr.slice(0, end);`

    },

    {

        description: 'Slicing an array from a specific index to end',

        example_array: '[1, 2, 3, 4, 5]',

        python: `start = 2
  
  arr[start:]`,

        javascript: `let arr = [1, 2, 3, 4, 5];
  
  let start = 2;
  
  arr.slice(start);`

    },

    {

        description: 'Slicing an array with step',

        example_array: '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]',

        python: `step = 2
  
  arr[::step]`,

        javascript: `let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  
  
  let step = 2;
  
  arr.filter((_, i) => i % step === 0);`

    },

    {

        description: 'Finding the first index of an element',

        example_array: '[1, 2, 3, 2, 1]',

        python: `element = 2
  
  arr.index(element)`,

        javascript: `let arr = [1, 2, 3, 2, 1];
  
  let element = 2;
  
  arr.indexOf(element);`

    },

    {

        description: 'Finding the last index of an element',

        example_array: '[1, 2, 3, 2, 1]',

        python: `element = 2
  
  len(arr) - 1 - arr[::-1].index(element)`,

        javascript: `let arr = [1, 2, 3, 2, 1];
  
  let element = 2;
  
  arr.lastIndexOf(element);`

    },
    {
        description: 'Creating an array',
        example_array: 'N/A',
        python: `import numpy as np
    arr = np.array([1, 2, 3, 4, 5])`,
        javascript: `let arr = [1, 2, 3, 4, 5];`
    },
    {
        description: 'Getting the shape of an array',
        example_array: '[1, 2, 3, 4, 5]',
        python: `arr.shape`,
        javascript: `let shape = [arr.length];`
    },
    {
        description: 'Reshaping an array',
        example_array: '[1, 2, 3, 4, 5, 6]',
        python: `arr.reshape(2, 3)`,
        javascript: `let reshapedArr = [[arr[0], arr[1], arr[2]], [arr[3], arr[4], arr[5]]];`
    },
    {
        description: 'Summing all elements in an array',
        example_array: '[1, 2, 3, 4, 5]',
        python: `arr.sum()`,
        javascript: `let sum = arr.reduce((a, b) => a + b, 0);`
    },
    {
        description: 'Calculating the mean of an array',
        example_array: '[1, 2, 3, 4, 5]',
        python: `arr.mean()`,
        javascript: `let mean = arr.reduce((a, b) => a + b, 0) / arr.length;`
    },
    {
        description: 'Creating an array with a range of numbers',
        example_array: 'N/A',
        python: `arr = np.arange(0, 10)`,
        javascript: `let arr = Array.from({length: 10}, (_, i) => i);`
    },
    {
        description: 'Creating an array of zeros',
        example_array: 'N/A',
        python: `arr = np.zeros(5)`,
        javascript: `let arr = Array(5).fill(0);`
    },
    {
        description: 'Creating an array of ones',
        example_array: 'N/A',
        python: `arr = np.ones(5)`,
        javascript: `let arr = Array(5).fill(1);`
    },
    {
        description: 'Creating an identity matrix',
        example_array: 'N/A',
        python: `matrix = np.eye(3)`,
        javascript: `let matrix = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];`
    },
    {
        description: 'Finding the maximum value in an array',
        example_array: '[1, 2, 3, 4, 5]',
        python: `arr.max()`,
        javascript: `let max = Math.max(...arr);`
    },
    {
    description: 'Reshaping an array',

    python: `arr.reshape(3, 1)`,

    javascript: `let arr = [1, 2, 3]; 

let reshaped = arr.map(x => [x]);

console.log(reshaped);`

  },

  {

    description: 'Calculating the mean of an array',

    python: `arr.mean()`,

    javascript: `let arr = [1, 2, 3, 4, 5];

let mean = arr.reduce((a, b) => a + b, 0) / arr.length;

console.log(mean);`

  },

  {

    description: 'Finding the max value',

    python: `arr.max()`,

    javascript: `let arr = [1, 5, 3, 2]; 

let max = Math.max(...arr);

console.log(max);`

  },

    {
  
      description: 'Initializing arrays',
  
      python: `import numpy as np
  arr = np.zeros(5)`,
  
      javascript: `let arr = new Array(5).fill(0); 
  console.log(arr);`
  
    },
  
    {
  
      description: 'Array slicing',
  
      python: `arr = [1, 2, 3, 4, 5]
  arr[1:3]`,
  
      javascript: `let arr = [1, 2, 3, 4, 5];
  console.log(arr.slice(1, 3));`
  
    },
  
    {
  
      description: 'Concatenation',
  
      python: `import numpy as np
  arr1 = np.array([1, 2, 3]) 
  arr2 = np.array([4, 5, 6])
  np.concatenate([arr1, arr2])`,
  
      javascript: `let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];  
  console.log(arr1.concat(arr2));`
  
    },
  
    {
  
      description: 'Broadcasting',  
  
      python: `import numpy as np
  arr = np.array([1, 2, 3])
  arr * 2`,
  
      javascript: `let arr = [1, 2, 3];
  console.log(arr.map(x => x * 2));`
  
    },
  
    {
  
      description: 'Transposing',
  
      python: `import numpy as np
  arr = np.array([[1, 2], [3, 4]])
  arr.transpose()`,
  
      javascript: `let arr = [[1, 2], [3, 4]];  
  console.log(arr[0].map((_, i) => arr.map(x => x[i])));`
  
    },
  
    {
  
      description: 'Reducing',
  
      python: `import numpy as np
  arr = np.array([1, 2, 3, 4])
  arr.sum()`,
  
      javascript: `let arr = [1, 2, 3, 4]; 
  console.log(arr.reduce((a, b) => a + b, 0));`
  
    },
  
    {
  
      description: 'Filtering',
  
      python: `import numpy as np
  arr = np.array([1, 2, 3, 4, 5]) 
  arr[arr % 2 == 0]`,
  
      javascript: `let arr = [1, 2, 3, 4, 5];  
  console.log(arr.filter(x => x % 2 == 0));`
  
    },
  
    {
  
      description: 'Indexing',
  
      python: `import numpy as np
  arr = np.array([1, 2, 3, 4])   
  arr[2]`,
  
      javascript: `let arr = [1, 2, 3, 4];
  console.log(arr[2]);`
  
    }
  


];

const content = document.getElementById('content');

data.forEach(item => {
    const desc = document.createElement('p');
    desc.textContent = item.description;

    const pythonLabel = document.createElement('p');
    pythonLabel.textContent = 'Python Code:';
    const pythonCode = document.createElement('pre');
    pythonCode.innerHTML = `<code class="language-python">${item.python}</code>`;
    const pythonCopy = document.createElement('button');
    pythonCopy.textContent = 'Copy';
    new ClipboardJS(pythonCopy, {
        text: () => item.python
    });

    const jsLabel = document.createElement('p');
    jsLabel.textContent = 'JavaScript Code:';
    const jsCode = document.createElement('pre');
    jsCode.innerHTML = `<code class="language-javascript">${item.javascript}</code>`;
    const jsCopy = document.createElement('button');
    jsCopy.textContent = 'Copy';
    new ClipboardJS(jsCopy, {
        text: () => item.javascript
    });

    const result = document.createElement('p');
    result.className = "result";
    try {
        result.textContent = 'Result: ' + eval(item.javascript).toString();
    } catch (e) {
        result.textContent = 'Error: ' + e;
    }
    const lastLine = document.createElement('hr');
    desc.className = 'item';
    pythonLabel.className = 'item';
    pythonCode.className = 'item';
    pythonCopy.className = 'item';
    jsLabel.className = 'item';
    jsCode.className = 'item';
    jsCopy.className = 'item';
    result.className = 'item result';
    lastLine.className = 'item';

    content.append(desc, pythonLabel, pythonCode, pythonCopy, jsLabel, jsCode, jsCopy, result, lastLine);
});

// Select all the items you want to observe
const items = document.querySelectorAll('#content > *');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // When element's is in viewport,
        // add the `is-visible` class to each item.
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
});

// Observe each item
items.forEach(item => {
    observer.observe(item);
});

function updateProgressBar() {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    const scroll = windowBottom >= docHeight ? "100%" : Math.floor(window.pageYOffset / (docHeight - windowHeight) * 100) + "%";

    document.getElementById('progress-bar').style.setProperty('--scroll', scroll);
}

window.addEventListener('scroll', updateProgressBar);
window.addEventListener('resize', updateProgressBar);