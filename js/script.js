new Vue({
  el: '#root',
  data: {
    contactIndex: 0,
    contactSearch: '',
    myMessage: '',
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
    		avatar: '_6',
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
    	},
      // CARLO
      {
            name: 'Carlo',
            avatar: '_5',
            visible: true,
            messages: [
                  {
                        date: '10/01/2020 15:30:55',
                        text: 'Hey!',
                        status: 'sent'
                  },
                  {
                        date: '10/01/2020 15:35:06',
                        text: 'Hola!',
                        status: 'received'
                  },
                  {
                        date: '10/01/2020 15:50:55',
                        text: 'A che ora ci vediamo stasera?',
                        status: 'sent'
                  },
                  {
                        date: '10/01/2020 15:55:00',
                        text: 'Alle 21:00 in piazza. Non Trdare..',
                        status: 'received'
                  }

            ],
      }
    ]
  },
  methods: {
    // metodo per cercare un contatto
    search: function (element) {
      if (element.name.toLowerCase().includes(this.contactSearch.toLowerCase()) || this.contactSearch === '') {
        return true;
      }
    },
    // metodo per cambiare conversazione
    changeConversation: function (index) {
      this.contactIndex = index
    },
    // metodo per ottenere l'orario dell'ultimo messaggio sul chat-box
    lastDate: function (element) {
      return element.messages[element.messages.length - 1].date
    },
    // metodo per ottenere la preview dell'ultimo messaggio sul chat-box
    prevText: function (element) {
      return element.messages[element.messages.length - 1].text
    },
    // metodo per cambiare l'ultimo accesso
    lastSeen: function () {
      let messages = this.contacts[this.contactIndex].messages;
      return messages[this.contacts[this.contactIndex].messages.length - 1].date
    },
    // metodo per generare l'ora
    hour: function () {
      return dayjs().format('HH:mm')
    },
    // metodi per le risposte automatiche --------------
    reply: function (theText, time) {
      setTimeout(() => {
        this.contacts[this.contactIndex].messages.push({date: this.hour(), text: theText, status: 'received'})
      }, time);
      /* per non usare l'()=> si può inserire:
         let that = this (da inserire poi nel setTimeout al posto del this) */
    },
    // metodo per inviare il messaggio e ricevere una risposta automatica
    sendMessage: function () {
      if (this.myMessage !== '') {
        // invio del messaggio
        this.contacts[this.contactIndex].messages.push({date: this.hour(), text: this.myMessage, status: 'sent'});
        // -----------risposte automatiche-----------------
        
        let msg = this.myMessage.toLowerCase();
        switch (msg){
            case 'ciao':
                  this.reply('Ciao!', 1000);
            break;

            case 'hey':
                  this.reply('Hey!', 1000);
                  break;

            case 'hello':
                  this.reply('Hello!', 1000);
                  break;

            case 'salve':
                  this.reply('Salve!', 1000);
                  break;

            case 'buongiorno':
                  this.reply('Buongiorno anche a te!', 3000);
                  break;

            case 'good morning':
                  this.reply('Good morning dear!', 3000);
                  break;

            case 'buonasera':
                  this.reply('Buonasera!', 2000);
                  break;
            
            case 'good evening':
                  this.reply('Good evening!', 2000);
                  break;

            case 'buon pomeriggio':
                  this.reply('Buon pome!', 2000);
                  break;

            case 'good afternoon': 
                  this.reply('Good afternoon!', 2000);
                  break;

            case 'buonanotte':
                  this.reply('Buonanotte e sogni d\'oro!', 5000);
                  break;

            case 'good night':
                  this.reply('Have a good good night!', 4000);
                  break;

            case 'come stai':
                  this.reply('Io sto bene e tu?', 3000);
                  break;

            case 'how are you':
                  this.reply('I\'m fine, what about you!', 4000);
                  break;

            case 'come va':
                  this.reply('Tutto bene e tu?', 3000);
                  break;

            case 'what\'s your name':
                  this.reply('My name is ' + this.contacts[this.contactIndex].name + ', do you remember?', 1000);
                  break;

            case 'come ti chiami':
                  this.reply('Mi chiamo ' + this.contacts[this.contactIndex].name + ', ti sei dimenticat*?', 5000);
                  break;

            case 'che ore sono':
                  this.reply('Sono le ' + this.hour(), 2000);
                  break;

            case 'what time is it':
                  this.reply('It\'s ' + this.hour(), 2000);
                  break;

            case 'grazie':
                  this.reply('Non c\'è di che!', 2000);
                  break;

            case 'thank you':
                  this.reply('You\'re welcome!', 2000);
                  break;

            case 'thanks':
                  this.reply('You\'re welcome!', 2000);
                  break;
                  
            default:
            this.reply('Ok.', 100)
            }

        this.myMessage = '';
      }
    },
    // metodo per attivare e disattivare il menu del singolo messaggio
    activeMenu: function (index) {
      let menu = document.getElementsByClassName('menu')[index];
      menu.classList.toggle('d-block');
    },
    // metodo per eliminare un messaggio
    deleteMessage: function (index) {
      this.contacts[this.contactIndex].messages.splice(index, 1);
    }
  }
});
Vue.config.devtools = true;
