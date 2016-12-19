/** */
import hex_md5 from 'libs/md5';
import config from './config';
let START_DATE = hex_md5(config.START_DATE);
let END_DATE = hex_md5(config.END_DATE);
const LICENSE_CODE = START_DATE + END_DATE
export default LICENSE_CODE;