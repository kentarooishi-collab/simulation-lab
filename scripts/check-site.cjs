const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),site=path.join(root,'site');
const expected=['.nojekyll','about.html','index.html'];assert.deepEqual(fs.readdirSync(site).sort(),expected);
for(const name of ['index.html','about.html']){
 const html=fs.readFileSync(path.join(site,name),'utf8');assert.match(html,/<!doctype html>/i);assert.match(html,/<html lang="ja"/);assert.match(html,/name="viewport"/);
 for(const m of html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g))new vm.Script(m[1],{filename:name});
 for(const m of html.matchAll(/(?:href|src)="([^"]+)"/g)){const ref=m[1];if(ref==='https://github.com/kentarooishi-collab/simulation-lab')continue;assert(!/^https?:|^\/|^file:/i.test(ref),'Assets and links must be relative: '+ref);if(!ref.startsWith('#'))assert(fs.existsSync(path.resolve(site,ref.split('#')[0])),ref);}
 assert(!/C:\\Users|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}|gh[pousr]_[A-Za-z0-9_]{20,}|github_pat_|-----BEGIN [A-Z ]*PRIVATE KEY-----/i.test(html),'Private data detected');
}
const app=fs.readFileSync(path.join(site,'index.html'),'utf8');for(const id of ['s-play','s-moon-period','s-view','g-start','p-volume','p-repair'])assert(app.includes('id="'+id+'"'),id);
console.log('PASS: HTML, JavaScript syntax, relative links, site manifest, and private-data checks.');
