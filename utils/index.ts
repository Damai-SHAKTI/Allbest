const sortByDate = (a: any, b: any) => {
    return new Date(b.frontmatter.post_date).valueOf() - new Date(a.frontmatter.post_date).valueOf()
}

export { sortByDate }