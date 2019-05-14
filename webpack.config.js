module.exports = env => {
  const fn = env.NODE_ENV === 'development' ? 'dev' : 'prod';
  return require(`./build/webpack.${fn}.conf.js`)
}
