const path = require('path'),
    rootPath = path.normalize(__dirname + '/..');
module.exports = {
  development: {
    db: '',
    root: rootPath,
    app: {
      name: 'Node Twitter'
    },
    facebook: {
      clientID: "",
      clientSecret: "",
      callbackURL: ""
    },
    github: {
      clientID: '',
      clientSecret: '',
      callbackURL: ''
    }
  },
  test: {
    db: '',
    root: rootPath,
    app: {
      name: 'Node Twitter'
    },
    facebook: {
      clientID: "",
      clientSecret: "",
      callbackURL: ""
    },
    github: {
      clientID: '',
      clientSecret: '',
      callbackURL: ''
    }
  },
  production: {
    db: '',
    root: rootPath,
    app: {
      name: 'Node Twitter'
    },
    facebook: {
      clientID: "",
      clientSecret: "",
      callbackURL: ""
    },
    github: {
      clientID: '',
      clientSecret: '',
      callbackURL: ''
    }
  }
};
