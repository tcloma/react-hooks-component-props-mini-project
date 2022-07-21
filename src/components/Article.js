const Article = ({ title, date = 'January 1, 1970', preview, minutes }) => {
  let bento = ''
  let coffee = ''
  
  // Check if it's 30 mins or more
  // If yes, display in bento boxes, if not display in coffee
  if (minutes >= 30) {
    // Every 10 minutes render a bento
    // Round up to nearest 10s place
    minutes = Math.round(minutes / 5)*5
    console.log(minutes)
    for (let i = 0; i < minutes/10; i++) {
      bento += '🍱'
    }
    console.log(bento)
  }
  else {
    // Every 5 minutes render a coffee
    console.log(minutes)
    for (let i = 0; i < (minutes * 2)/10; i++) {
      coffee += '☕️'
    }
    console.log(coffee)
  }



  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {bento}{coffee} {minutes} min read</small>
      <p>{preview}</p>
    </article>
  )
}
export default Article;
