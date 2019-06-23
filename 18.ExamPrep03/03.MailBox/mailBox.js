class MailBox {
    constructor(){
        this._mailBox = []
    }

    get messageCount(){
        return this._mailBox.length
    }

    addMessage(subject, text){
        this._mailBox.push({subject, text})
        return this
    }

    deleteAllMessages(){
        this._mailBox.length = 0
    }

    findBySubject(substr){
        return this._mailBox.filter(m => m.subject.includes(substr))
    }

    toString(){
        if (this._mailBox.length === 0){
            return '* (empty mailbox)'
        }
        return this._mailBox.map(m => `* [${m.subject}] ${m.text}`).join('\n')
    }
}