import QueryBuilder from './query-builder'
import Loki from '@lokidb/loki'
import LokiFullTextSearch from '@lokidb/full-text-search'

LokiFullTextSearch.register()

const dirs = ["/","/en","/ar","/en/chapterThree","/en/chapterFour","/en/chapterOne","/en/chapterThree copy","/en/chapterTwo","/ar/chapterFive","/ar/chapterFour","/ar/chapterOne","/ar/chapterThree","/ar/chapterTwo","/en/chapterThree/sectionFive","/en/chapterThree/sectionFour","/en/chapterThree/sectionOne","/en/chapterThree/sectionThree","/en/chapterThree/sectionTwo","/en/chapterFour/sectionOne","/en/chapterFour/sectionTwo","/en/chapterOne/sectionFour","/en/chapterOne/sectionThree","/en/chapterOne/sectionOne","/en/chapterOne/sectionTwo","/en/chapterTwo/sectionFive","/en/chapterTwo/sectionFour","/en/chapterTwo/sectionOne","/en/chapterTwo/sectionSix","/en/chapterTwo/sectionThree","/en/chapterTwo/sectionTwo","/en/chapterThree copy/sectionFour","/en/chapterThree copy/sectionOne","/en/chapterThree copy/sectionThree","/en/chapterThree copy/sectionTwo","/ar/chapterFive/sectionFour","/ar/chapterFive/sectionFive","/ar/chapterFive/sectionOne","/ar/chapterFive/sectionSix","/ar/chapterFive/sectionTwo","/ar/chapterFive/sectionThree","/ar/chapterFour/sectionTwo","/ar/chapterFour/sectionOne","/ar/chapterOne/sectionOne","/ar/chapterOne/sectionFour","/ar/chapterOne/sectionThree","/ar/chapterOne/sectionTwo","/ar/chapterThree/sectionFive","/ar/chapterThree/sectionTwo","/ar/chapterThree/sectionFour","/ar/chapterThree/sectionOne","/ar/chapterThree/sectionThree","/ar/chapterTwo/sectionFive","/ar/chapterTwo/sectionFour","/ar/chapterTwo/sectionOne","/ar/chapterTwo/sectionThree","/ar/chapterTwo/sectionSix","/ar/chapterTwo/sectionTwo","/en/chapterOne/sectionOne/assets","/en/chapterOne/sectionTwo/assets","/ar/chapterOne/sectionOne/assets","/ar/chapterOne/sectionTwo/assets"]
  let db, items

const $content = function () {
  let options = {}
  const paths = []
  Array.from(arguments).forEach((argument) => {
    if (typeof argument === 'string') {
      paths.push(argument)
    } else if (typeof argument === 'object') {
      options = argument
    }
  })

  const { text = false, deep = false } = options

  const path = `/${paths.join('/').replace(/\/+/g, '/')}`
  const isDir = !path || !!dirs.find(dir => dir === path)
  // Look for dir or path
  const query = isDir ? { dir: deep ? { $regex: new RegExp(`^${path}`) } : path } : { path }
  // Postprocess to get only first result (findOne)
  const postprocess = isDir ? [] : [data => data[0]]

  return new QueryBuilder({
    query: items.chain().find(query, !isDir),
    path,
    postprocess,
    text
  }, {
    fullTextSearchFields: ["title","description","slug","text"]
  })
}

export default (database) => {
  db = new Loki('content.db')
  db.loadJSONObject(database)
  items = db.getCollection('items')

  return $content
}
