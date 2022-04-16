let promise=new Promise((res,rej)=>{
    setTimeout(()=>res(5),1000);
});
async function someFun(){
    console.log("a");
    let data=await promise;
    console.log('inside async:'+data);
    console.log("b");
}
someFun();
