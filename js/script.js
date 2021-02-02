new Vue({
  el: '#root',
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

  methods: {
    changeContact: function (index) {
      this.contactIndex = index
    },
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
    sendMessage: function () {
      if (this.myMessage !== '') {
        this.contacts[this.contactIndex].messages.push({date: this.hour(), text: this.myMessage, status: 'sent'});

        if (this.myMessage.toLowerCase().includes('ciao')) {
          setTimeout(() => {
            this.contacts[this.contactIndex].messages.push({date: this.hour(), text: 'Ciao!', status: 'received'})
          }, 2000);
        } else if (this.myMessage.toLowerCase().includes('come stai')) {
          setTimeout(() => {
            this.contacts[this.contactIndex].messages.push({date: this.hour(), text: 'Io sto bene e tu?', status: 'received'})
          }, 2000);
        } else if (this.myMessage.toLowerCase().includes('hey')) {
          setTimeout(() => {
            this.contacts[this.contactIndex].messages.push({date: this.hour(), text: 'Hey!', status: 'received'})
          }, 2000);
        } else if (this.myMessage.toLowerCase().includes('come va')) {
          setTimeout(() => {
            this.contacts[this.contactIndex].messages.push({date: this.hour(), text: 'Tutto bene e tu?', status: 'received'})
          }, 2000);
        } else if (this.myMessage.toLowerCase().includes('come ti chiami')) {
          setTimeout(() => {
            this.contacts[this.contactIndex].messages.push({date: this.hour(), text: 'Mi chiamo ' + this.contacts[this.contactIndex].name + ', ti sei dimenticat*?' , status: 'received'})
          }, 2000);
        } else if (this.myMessage.toLowerCase().includes('che ore sono')) {
          setTimeout(() => {
            this.contacts[this.contactIndex].messages.push({date: this.hour(), text: 'Sono le ' + this.hour(), status: 'received'})
          }, 2000);
        } else if (this.myMessage.toLowerCase().includes('grazie')) {
          setTimeout(() => {
            this.contacts[this.contactIndex].messages.push({date: this.hour(), text: 'Non c\'è di che!', status: 'received'})
          }, 2000);
        } else {
          setTimeout(() => {
            this.contacts[this.contactIndex].messages.push({date: this.hour(), text: 'Ok', status: 'received'})
          }, 2000);
        }
        this.myMessage = '';
      }
    }
  }
});
Vue.config.devtools = true;
