
const app = new Vue({
    el: '#app',
    data: {
        nbrClick: 0,
        activeClick0: true,
        activeClick1: false,
        activeClick2: false,
        activeClick3: false,
        quoteIsActive: false,
        imageIsVisible: true,
        listQuotes: [
            'En septembre, tu seras peut-être déconfiné. Ou pas...',
            'Ta vie se résume à remplir une timesheet.',
            'Tu finiras avec 8 chats à Thetford Mines.',
            'Crème-toi bien cet été.',
            'Je sais où tu habites.',
            'Ton futur est mon passé.',
            'Tu marches sur de la glace fine. Fais attention.',
            'Tu as déjà tout accompli. La chute approche',
            'Chez Albi le Géant, tu trouveras ce que tu voudras.',
            'Achète une Juicy Fruit.',
            'Ne regarde pas derrière toi cette nuit!',
        ],
        currentQuotes: [],
        chosenQuote: '',
    },
    methods: {
        increaseClick() {
            var activeClick = this.nbrClick += 1;

            if(activeClick == 1) {
                this.activeClick0 = !this.activeClick0;
                this.activeClick1 = !this.activeClick1;

            } else if (activeClick == 2) {
                this.activeClick1 = !this.activeClick1;
                this.activeClick2 = !this.activeClick2;

            } else if (activeClick == 3 ){
                var self = this;
                this.activeClick2 = !this.activeClick2;
                this.activeClick3 = !this.activeClick3;
                this.quoteIsActive = !this.quoteIsActive;
                this.imageIsVisible = !this.imageIsVisible;
                this.picker();
                setTimeout(function(){ self.created() }, 6000);
 
            } 
        },
        playSound(sound){
            if(sound) {
                var audio = new Audio(sound);
                audio.play();
            }
        },
        picker: function(){
            if(this.currentQuotes.length == 0) {
                Array.prototype.push.apply(this.currentQuotes, this.listQuotes);
            } 
            var chosenNumber = Math.floor(Math.random() * this.currentQuotes.length);
            this.chosenQuote = this.currentQuotes[chosenNumber];
            this.currentQuotes.splice(chosenNumber,1);
            
            
        },
        created: function () {
            this.activeClick3 = !this.activeClick3;
            this.quoteIsActive = !this.quoteIsActive;
            this.activeClick0 = !this.activeClick0;
            this.imageIsVisible = !this.imageIsVisible;
            this.nbrClick = 0;
        },
    }
});