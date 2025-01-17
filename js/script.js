const { createApp } = Vue

createApp({
    data() {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            active_contact: 0,
            new_message: '',
            chars: ''
        }
    },
    methods: {
        selectChat(index) {
            this.active_contact = index
            console.log("cioa", this.active_contact)
        },

        newMessage() {
            if (this.new_message.trim() != "") {
                this.contacts[this.active_contact].messages.push({
                    date: new Date().toLocaleString(),
                    message: this.new_message.trim(),
                    status: 'sent'
                })

                setTimeout(() => {
                    this.contacts[this.active_contact].messages.push({
                        date: new Date().toLocaleString(),
                        message: 'ok',
                        status: 'received'
                    })

                }, 1000)
                this.new_message = ''
            }
        },

        searchContact() {
            this.contacts.forEach(contact => {
                contact.visible = contact.name.toLowerCase().includes(this.chars.toLowerCase())
            })
        },

        handleMouseEnter(index) {
            document.getElementById("caret-down-" + index).classList.remove("d-none")
            document.getElementById("caret-down-" + index).classList.add("d-block")
        },

        handleMouseLeave(index) {
            document.getElementById("caret-down-" + index).classList.remove("d-block")
            document.getElementById("caret-down-" + index).classList.add("d-none")
        },

        showOptions(index) {
            if (document.getElementById("message-options-" + index).classList.contains("d-none")) {
                document.getElementById("message-options-" + index).classList.remove("d-none")
                document.getElementById("message-options-" + index).classList.add("d-block")
            } else if (document.getElementById("message-options-" + index).classList.contains("d-block")) {
                document.getElementById("message-options-" + index).classList.remove("d-block")
                document.getElementById("message-options-" + index).classList.add("d-none")
            }
        },

        deleteMessage(index) {
            document.getElementById("message-options-" + index).classList.remove("d-block")
            document.getElementById("message-options-" + index).classList.add("d-none")

            this.contacts[this.active_contact].messages.splice(index, 1)
            if (this.contacts[this.active_contact].messages.length == 0) {
                this.contacts.splice(this.active_contact, 1)
                this.active_contact = null
            }
            console.log("hai eliminato il", index, "messaggio")
        }

    }
}).mount('#app')
