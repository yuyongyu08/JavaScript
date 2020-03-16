class Pocker {
    constructor() {
        this.cardTypes = ['红心', '方片', '草花', '黑桃'];
        this.cards = []
    }

    init() {
        for (let i = 1; i <= 13; i++) {
            this.cardTypes.forEach(type => {
                let num = i;
                switch (i) {
                    case 1:
                        num = 'A'
                        break;
                    case 11:
                        num = 'J'
                        break;
                    case 12:
                        num = 'Q'
                        break;
                    case 13:
                        num = 'K'
                }
                this.cards.push(`${type}${num}`)
            })
        }
        this.cards.push(`大王`)
        this.cards.push(`小王`)
    }

    wash() {
        !this.cards.length && this.init();

        for (let i = this.cards.length - 1; i >= 0; i--) {
            let random = Math.floor(Math.random() * i)

            let temp = this.cards[i];
            this.cards[i] = this.cards[random];
            this.cards[random] = temp;
        }
    }

    print() {
        console.log(this.cards.toString());
    }
}

module.exports = Pocker