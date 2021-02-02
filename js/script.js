new Vue({
  el: '#root',
  // DATA
  data: {
    contacts: [
      // MICHELE
    	{
    		name: 'Michele',
    		avatar: '_1',
    		visible: true,
    		messages: [
    			{
    				date: '10/01/2020 15:30:55',
    				text: 'Hai portato a spasso il cane?',
    				status: 'sent'
    			},
    			{
    				date: '10/01/2020 15:50:00',
    				text: 'Ricordati di dargli da mangiare',
    				status: 'sent'
    			},
    			{
    				date: '10/01/2020 16:15:22',
    				text: 'Tutto fatto!',
    				status: 'received'
    			}
    		],
    	},
      // FABIO
    	{
    		name: 'Fabio',
    		avatar: '_2',
    		visible: true,
    		messages: [
    			{
    				date: '20/03/2020 16:30:00',
    				text: 'Ciao come stai?',
    				status: 'sent'
    			},
    			{
    				date: '20/03/2020 16:30:55',
    				text: 'Bene grazie! Stasera ci vediamo?',
    				status: 'received'
    			},
    			{
    				date: '20/03/2020 16:35:00',
    				text: 'Mi piacerebbe ma devo andare a fare la spesa.',
    				status: 'sent'
    			}
    		],
    	},
      // SAMUELE
    	{
    		name: 'Samuele',
    		avatar: '_3',
    		visible: true,
    		messages: [
    			{
    				date: '28/03/2020 10:10:40',
    				text: 'La Marianna va in campagna',
    				status: 'received'
    			},
    			{
    				date: '28/03/2020 10:20:10',
    				text: 'Sicuro di non aver sbagliato chat?',
    				status: 'sent'
    			},
    			{
    				date: '28/03/2020 16:15:22',
    				text: 'Ah scusa!',
    				status: 'received'
    			}
    		],
    	},
      // LUISA
    	{
    		name: 'Luisa',
    		avatar: '_4',
    		visible: true,
    		messages: [
    			{
    				date: '10/01/2020 15:30:55',
    				text: 'Lo sai che ha aperto una nuova pizzeria?',
    				status: 'sent'
    			},
    			{
    				date: '10/01/2020 15:50:00',
    				text: 'Si, ma preferirei andare al cinema',
    				status: 'received'
    			}
    		],
    	}
    ],
    contactIndex: 0,
    myMessage: ''
  },
  // METHODS
  methods: {
    // funzione per cambiare conversazione
    changeConversation: function (index) {
      this.contactIndex = index
    },
    // funzioni per generare l'ora -----------------------
    addZero: function (x) {
      if (x < 10) {
        x = ('0' + x);
      }
      return x;
    },
    hour: function () {
      var d = new Date();
      var hm = d.getHours() + ':' + this.addZero(d.getMinutes());
      return hm;
    },
    // funzioni per le risposte automatiche --------------
    answer: function (theText, time) {
      setTimeout(() => {
        this.contacts[this.contactIndex].messages.push({date: this.hour(), text: theText, status: 'received'})
      }, time);
    },
    itIncludes: function (text) {
      return this.myMessage.toLowerCase().includes(text)
    },
    sendMessage: function () {
      if (this.myMessage !== '') {
        // invio del messaggio
        this.contacts[this.contactIndex].messages.push({date: this.hour(), text: this.myMessage, status: 'sent'});
        // -----------risposte automatiche-----------------
        if (this.itIncludes('ciao')) {
              this.answer('Ciao!', 1000);
        } else if (this.itIncludes('hey')) {
              this.answer('Hey!', 1000);
        } else if (this.itIncludes('hello')) {
              this.answer('Hello!', 1000);
        } else if (this.itIncludes('hi')) {
              this.answer('Hi!', 1000);
        } else if (this.itIncludes('salve')) {
              this.answer('Salve', 1000);
        } else if (this.itIncludes('buongiorno')) {
              this.answer('Buongiorno anche a te!', 3000);
        } else if (this.itIncludes('good morning')) {
              this.answer('Good morning dear!', 3000);
        } else if (this.itIncludes('buonasera')) {
              this.answer('Buonasera!', 2000);
        } else if (this.itIncludes('good evening')) {
              this.answer('Good evening!', 2000);
        } else if (this.itIncludes('buon pomeriggio')) {
              this.answer('Buon pome!', 2000);
        } else if (this.itIncludes('good afternoon')) {
              this.answer('Good afternoon!', 2000);
        } else if (this.itIncludes('buonanotte')) {
              this.answer('Buonanotte e sogni d\'oro!', 5000);
        } else if (this.itIncludes('good night')) {
              this.answer('Have a good good night!', 4000);
        } else if (this.itIncludes('come stai')) {
              this.answer('Io sto bene e tu?', 3000);
        } else if (this.itIncludes('how are you')) {
              this.answer('I\'m fine, what about you!', 4000);
        } else if (this.itIncludes('come va')) {
              this.answer('Tutto bene e tu?', 3000);
        } else if (this.itIncludes('what\'s your name')) {
              this.answer('My name is ' + this.contacts[this.contactIndex].name + ', do you remember?', 1000);
        } else if (this.itIncludes('come ti chiami')) {
              this.answer('Mi chiamo ' + this.contacts[this.contactIndex].name + ', ti sei dimenticat*?', 5000);
        } else if (this.itIncludes('che ore sono')) {
              this.answer('Sono le ' + this.hour(), 2000);
        } else if (this.itIncludes('what time is it')) {
              this.answer('It\'s ' + this.hour(), 2000);
        } else if (this.itIncludes('grazie')) {
              this.answer('Non c\'è di che!', 2000);
        } else if (this.itIncludes('thank you')) {
              this.answer('You\'re welcome!', 2000);
        } else if (this.itIncludes('thanks')) {
              this.answer('You\'re welcome!', 2000);
        } else {
              this.answer('Ok', 100);
        }
        // -----------risposte automatiche-----------------
        this.myMessage = '';
      }
    }
  }
});
Vue.config.devtools = true;
