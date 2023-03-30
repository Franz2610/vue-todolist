/**
 * 
 */




const {createApp} = Vue;

createApp({
    data(){
        return{
            listaAzioni : [
                'Finire esercizio',
                'Ripetere',
                'Cucinare',
                'Palestra',
                'Calcio'
            ]
            
            }
        },
        methods:{
            inserisci(){

                this.listaAzioni.push(this.text);
            
            },
            cancella(index){
                this.listaAzioni.splice(index, 1)
            },
            //completed(index){
                //this.listaSpesa[index].completed = true;

           // }

        },
        mounted() {

        },
}).mount('#app')