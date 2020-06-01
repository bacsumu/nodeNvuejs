var app = new Vue({
    el:"#app",
    data:{
        message:"Hello Vue.js"
    }
});

var app2 = new Vue({
el:"#app-2",
data:{
    message: 'print date ' + new Date() +'!!'
}
});

var app3 = new Vue({
el:"#app-3",
data:{
    seen:true
}
});

var app4 = new Vue({
el:"#app-4",
data:{
    todos:[
        {text:'learn vuejs'},
        {text:'what is vuejs'},
        {text:'vuejs is fun!!'}
    ]
}
});

var app5 = new Vue({
    el:"#app-5",
    data:{
        message:'hello vue.js'
    },
    methods:{
        reverseMessage:function(){
            this.message = this.message.split(' ').reverse().join(' ');
        }
    }
})