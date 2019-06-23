function monkeyPatcher(command) {
    let commands = {
        upvote: () => {
            this.upvotes++
        },
        downvote: () => {
           this.downvotes++
        },
        score: () => {
            let currentUpvotes = this.upvotes
            let currentDownvotes = this.downvotes
            let totalVotes = currentUpvotes + currentDownvotes
            let totalScore = currentUpvotes - currentDownvotes
            let rating = ''

            if (totalVotes > 50){
                let greaterNumberOfVotes = Math.max(currentUpvotes, currentDownvotes)
                let numberToAdd = Math.ceil((greaterNumberOfVotes * 25) / 100)
                currentUpvotes += numberToAdd
                currentDownvotes += numberToAdd
            }

            if (totalVotes < 10){
                rating = 'new'
            }else if ((this.upvotes / totalVotes) > 0.66){
                rating = 'hot'
            }else if ((this.downvotes / totalVotes <= 0.66) && totalScore >= 0 && (this.upvotes > 100 || this.downvotes > 100)){
                rating = 'controversial'
            }else if (totalScore < 0 && totalVotes >= 10){
                rating = 'unpopular'
            }else {
                rating = 'new'
            }

            return [currentUpvotes, currentDownvotes, totalScore, rating]
        }
    }
    return commands[command]()
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
}

monkeyPatcher.call(post, 'upvote')
monkeyPatcher.call(post, 'downvote')
console.log(monkeyPatcher.call(post, 'score'))

for (let i = 0; i < 50; i++) {
    monkeyPatcher.call(post, 'downvote')
}
console.log(monkeyPatcher.call(post, 'score'))