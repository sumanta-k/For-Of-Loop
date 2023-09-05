const items = ['book','table','chair','kite'];
//iterate through normal for loop
for(let i=0;i<items.length;i++){
    console.log(items[i]);
}

// iterate through for of loop

for(const item of items){
    console.log(item);
}