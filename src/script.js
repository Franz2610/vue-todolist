/**Descrizione:
Rifare l'esercizio della to do list.
Ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
 * 
 */

/**
 * L'esercizio è già finito ma lo ripasso
 * L'esercizio di oggi è basato su quello che abbiamo fatto a mezzogiorno.
 * Inizialmente creiamo la nostra pag HTML con un div #app che riprendiamo nel nostro Js con una const.
 * Nell'HTML creiamo il nostro input dove aggiungeremo le azioni con un v-model che sarà collegato al nostro Array di obj che dovrà avere un name ed una funzione per controllare se è la proprietà sarà uguale a true(mettere false).
 * Continiuamo a creare una ul dove con un "v-if" qual'ora non ci fossero più azioni create creeremo un else.
 * Nella nostra li con un "v-for" che è uguale (element, index) in listaAzioni(il nostro Array di obj).
 * Il lavoro qui è finito dovremmo poi lavorarci di pari passo con il nostro Js.
 * Dopo aver creato le nostre azioni da compiere creiamo le nostre funzioni:
 * 1) La prima è collegata al nostro input iniziale dove se non si dovesse scrivere nulla uscirà un alert che bloccherà la pag. Creiamo la nostra biding con una cost che creerà le nostre nuove azioni. Sarà collegata alla varibile prima imposta in data(). Quindi poi lo pushiamo nel nostro array, lasciamo poi dopo vuoto il nostro input.
 * 2) Molto semplice usando uno delle proprità per modificare il nostro array (splice per levarla in qualsiasi punto grazie al nostro index), lo colleghiamo al nostro button, che con la proprietà stop evitiamo la propagazione.
 * 3) Per quanto riguarda l'ultima funzione serve per sbarrare la nostra 'name' e colorare tutto di verde poichè collegato al nostro html nel li con un terziario.
 */




const {createApp} = Vue;

createApp({
    data(){
        return{
            listaAzioni : [
                {
                name : 'Finire esercizio',
                completed : false,
                image : 'img/webDvp.jpg'
            },
            {
                name : 'Ripetere',
                completed : false,
                image : 'img/Ripeter.jpg'
            },
            {
                name : 'Cucinare',
                completed : false,
                image : 'img/cucina.webp'
            },
            {
                name : 'Palestra',
                completed : false,
                image : 'img/pale.jpg'
            },
            {
                name : 'Cenare',
                completed : false,
                image : 'img/mangiare.jpg'
            },
            {
                name : 'Giocare a calcio',
                completed : false,
                image : 'img/cr7.jpg'
            },
            ],
            nuovaAzione : '',
            completed : false
            
            }
        },
        methods:{
            inserisci(){
                if(this.nuovaAzione === ''){
                    return alert('Scrivi azione da compiere')
                }
                const newAction = {
                    name : this.nuovaAzione,
                    completed : false,
                    text : 'Le img erano finite.'
                }
                this.listaAzioni.push(newAction);
                this.nuovaAzione = ''
            
            },
            cancella(index){
                this.listaAzioni.splice(index, 1)
            },
            completedAction(index){
                    this.listaAzioni[index].completed = true;
            }
        },
        mounted() {

        },
}).mount('#app')