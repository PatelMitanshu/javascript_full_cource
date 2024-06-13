const marvel_herros=["thor","ironman","spiderman"]
const dc_herros=["superman","batman","flash"]
const all_herros=[...marvel_herros,...dc_herros]
console.log(all_herros)

const another_array=[1,2,3,[4,6],7,[6,7,[4,5]]]

const real_another=another_array.flat(Infinity)
console.log(real_another)