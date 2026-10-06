import {readFileSync,writeFileSync} from 'node:fs';
import {createDecipheriv} from 'node:crypto';
const b=readFileSync('source.enc');const key=Buffer.from(process.env.SOURCE_KEY,'base64');
const d=createDecipheriv('aes-256-gcm',key,b.subarray(0,12));d.setAuthTag(b.subarray(12,28));
writeFileSync('source.tar',Buffer.concat([d.update(b.subarray(28)),d.final()]));
