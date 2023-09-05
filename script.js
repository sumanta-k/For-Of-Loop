const items = ["book", "table", "chair", "kite"];
//iterate through normal for loop
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

// iterate through for of loop

for (const item of items) {
 console.log(item);
}

// iterate through array
const users = [{ name: "happy" }, { name: "brad" }, { name: "steve" }];
for(const user of users){
   console.log(user.name);
}

//loop over string
const str = 'hello world';
for(const letter of str){
   console.log(letter);
}

//loop over maps
const map = new Map();
map.set('name','happy');
map.set('age',21);
for(const [key,value]of map){
    console.log(key,value);
}