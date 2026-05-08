const buf= Buffer.from('Hello World');

console.log(buf);

console.log(buf.toString());

/*----output ----
<Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>
Hello World*/

//----allocating space to buffer---------------//
const buf1 = Buffer.alloc(11);
buf1.write('Ramya');
console.log(buf1.toString());

//-----------copy one buffer to other-----------//
buf.copy(buf1);

console.log(buf1.toString());

const a =Buffer.from('data');
console.log(a.length);
const b = Buffer.alloc(a.length);
a.copy(b);
console.log(a.toString());
console.log(b.toString());

//-----------concat two buffer------------//
const c=Buffer.from('Hello');
const d = Buffer.from('World');
const ans = Buffer.concat([c,d]);
console.log(ans.toString());
