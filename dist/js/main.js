
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
            'En septembre, tu seras peut-être déconfiné. Ou pas.',
            'Ta vie se résume à remplir ta timesheet. Tous les jours.',
            'Tu aimerais un negroni sur une terrasse? Mais non.',
            'Le chat est ton meilleur ami.',
            'Crème-toi bien cet été.',
            'Je sais où tu habites.',
            'Ton futur est mon passé.',
            'Retourne-toi. Je ne suis plus là.',
            'Ne regarde pas dehors. NE REGARDE PAS!'
        ],
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
            var chosenNumber = Math.floor(Math.random() * this.listQuotes.length);
            this.chosenQuote = this.listQuotes[chosenNumber];
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