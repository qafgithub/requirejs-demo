requirejs(["helpe/d","helpe/a","helpe/c"],function(d,a,foo){
    console.log("main.js被调用了")
    console.log(foo)
    d()
})