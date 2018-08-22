const ENV = process.env.NODE_ENV;
const config = {
  dev:{

  },
  production:{
    baseUrl: './',
  }
}

module.exports = Object.assign({ }, config[ENV])
