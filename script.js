let prices = [100,200,300,400,500,600];
let dis;
for (let i =0; i<=prices.length; i++)
{
    dis = prices[i]*0.10;
    console.log(`Discount Price of ${prices[i]} is prices ${dis}`)
}

console.log(prices)