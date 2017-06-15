import { Browser } from "cmpx";
import AppComponet from './AppComponet';

console.time('boot');
new Browser().boot(AppComponet);
console.timeEnd('boot');
