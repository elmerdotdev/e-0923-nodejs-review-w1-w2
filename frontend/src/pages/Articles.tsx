import { useEffect, useState } from "react"

type Article = {
  postName: string
  postContent: string
  postDate: number
  published: boolean
}

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>()

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch(`http://localhost:4000/articles`)
      const data = await response.json()
      setArticles(data)
    }

    fetchArticles()
  }, [])

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles?.map((article, index) => (
          <li key={index}>
            <h3>{article.postName}</h3>
            <div>{article.published ? 'Published' : 'Not published'}</div>
            <div>{article.postContent}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Articles