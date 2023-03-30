/**
 * 
 */




const {createApp} = Vue;

createApp({
    data(){
        return{
            listaAzioni : [{
                name : 'Finire esercizio',
                completed : false
            },{
                name : 'Ripetere',
                completed : false
            },{
                name : 'Cucinare',
                completed : false
            },{
                name : 'Palestra',
                completed : false
            },{
                name : 'Cenare',
                completed : false
            },{
                name : 'Giocare a calcio',
                completed : false
            },
            ]
            nuovaAzione : '',
            
            }
        },
        methods:{
            inserisci(){
                const newAction = {
                    name : this.nuovaAzione,
                    completed : false
                }
                this.listaAzioni.push(newAction);
                this.nuovaAzione = ''
            
            },
            cancella(index){
                this.listaAzioni.splice(index, 1)
            },
            completed(index){
                this.listaSpesa[index].completed = true;
            }

        },
        mounted() {

        },
}).mount('#app')