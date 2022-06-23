console.log("you have reached the main page");
const candles = [
    {id: 1, commodity: 'crude ', month: 'Jan'},
    {id: 2, commodity: 'minigold ', month: 'Jan'},
    {id: 3, commodity: 'copper ', month: 'Jan'},
    {id: 4, commodity: 'CAD ', month: 'Jan'},
    {id: 5, commodity: 'natgas', month: 'Jan'},
];
//for of
for(let candle of candles) {
    console.log(candle.commodity);
}
//forEach
candles.forEach(function(candle){
    console.log(candle.commodity);
});
//map
const candleCommodity = candles.map(function(candle){
   return candle.commodity;
});
console.log(candleCommodity)

//filter
const candleMonth =candles.filter(function(candle){
    return candle.commodity;
});
console.log(candleMonth)