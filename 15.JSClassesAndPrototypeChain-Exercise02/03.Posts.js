function solve() {
    class Post{
        constructor(title, content){
            this.title = title
            this.content = content
        }

        toString(){
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    }

    class SocialMediaPost extends Post{
        constructor(title, content, likes, dislikes){
            super(title, content)
            this.likes = Number(likes)
            this.dislikes = Number(dislikes)
            this.comments = []
        }

        addComment(comment){
            this.comments.push(comment)
        }

        toString(){
            let result = super.toString() + `\nRating: ${this.likes - this.dislikes}\n`
            if (this.comments.length > 0){
                result += 'Comments:\n'
                for (let i = 0; i < this.comments.length; i++) {
                    result += ` * ` + this.comments[i] + '\n'
                }
            }

            return result.trim()
        }
    }

    class BlogPost extends Post{
        constructor(title, content, views){
            super(title, content)
            this.views = Number(views)
        }

        view(){
            this.views++
            return this
        }

        toString(){
            return super.toString() + `\nViews: ${this.views}`
        }
    }

    return {Post, SocialMediaPost, BlogPost}
}

let Post = solve().Post
let SocialMediaPost = solve().SocialMediaPost
let BlogPost = solve().BlogPost

let post = new Post("Post", "Content")
console.log(post.toString())
// Post: Post
// Content: Content

let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30)
scm.addComment("Good post")
scm.addComment("Very good post")
scm.addComment("Wow!")

console.log(scm.toString())
// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
// * Good post
// * Very good post
// * Wow!

let blog = new BlogPost("SomePost", "SomeContent", 5)
blog.view()
console.log(blog.toString())
// Post: SomePost
// Content: SomeContent
// Views: 6