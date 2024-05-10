console.log('Hello Parcel!');

// 비동기함수 - async , await
async function test() {
 const promise = Promise.resolve(123)   
 console.log(await promise)
}
test()