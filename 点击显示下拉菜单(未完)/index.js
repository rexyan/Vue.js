var app = new Vue({
    el: '#app',
    data:{
        show:false,
    },
    method:{
        handleClose:function () {
            this.show = false;
        }
    }
});