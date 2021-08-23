module.exports = {
  layout: "book",
  tags: ["books"],
  eleventyComputed: {
    minimalTitle: (data) => data.title?.split(":")[0],
    minimalAuthor: (data) => data.author?.split(",")[0],
  },
}
