const app = Vue.createApp({

    data() {

        return {
            "times": 0,
            "msg": "",
            "returnMessage": ""

            // add here

        }

    },

    methods: {

        // add here
        repeatMessage(){
            this.returnMessage = "";
            let message = this.msg;
            if (this.times < 0){
                message = `Must be non-negative number: ${this.times}`;
            }
            else if(this.times == 0){
                message = "";
            }
            else{
                for (let i = 0; i < this.times -1; i++){
                    message = message + this.msg;
                }
            }
            this.returnMessage = message;
            
            
        }

    }

})