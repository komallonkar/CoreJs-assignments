let propName = "c";
const rank = {
    a: 1,
    b: 2,
    [propName]: 3,
};

console.log(rank.c); // 3