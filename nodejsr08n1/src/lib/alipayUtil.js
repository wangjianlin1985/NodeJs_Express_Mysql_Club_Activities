const AlipaySdk = require('alipay-sdk').default
const alipaySdk =  new  AlipaySdk({
  appId: '',
  signType: 'RSA2',
  gateway: 'https://openapi.alipaydev.com/gateway.do',
  alipayPublicKey: '',
  privateKey:'',
});
export default alipaySdk
