import Article from './Article'

const ArticleList = ({ posts }) => {

  return (
    <main>
      {posts.map((posts) => {
        return <Article key={posts.id} title={posts.title} date={posts.date} preview={posts.preview} minutes={posts.minutes}/>
      })}
    </main>
  )
}
export default ArticleList;