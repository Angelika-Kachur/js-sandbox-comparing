// Create Data of Project
var data = {
    title              : "Stackblitz",
    description        : "Stackblitz exapmple",
    html               : `<h1>Hello there. I was created on <span id='time'></span></h1>`,
    css                : `h1{color:purple;}`,
    js                 : `import moment from 'moment';
    document.getElementById('time').innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
    `,
    js_library         : ""
  };

// Create the index.js file
const jsCode = data.js;

// Create the index.html file
const htmlCode = data.html;

// Create the Project payload
const project = {
  files: {
    'index.js': jsCode,
    'index.html': htmlCode
  },
  title: data.title,
  description: data.description,
  template: 'javascript', // template must be one of: typescript, create-react-app, angular-cli, javascript
  tags: ['stackblitz', 'sdk'] ,
  dependencies: {
    moment: '*' // * = latest version
  }
};

// Method to open project in new window
window['openNewProject'] = () => {
  StackBlitzSDK.openProject(project);
}

// Method to embed this project
window['embedNewProject'] = () => {
  StackBlitzSDK.embedProject('myDiv', project, { height: 320 });
}