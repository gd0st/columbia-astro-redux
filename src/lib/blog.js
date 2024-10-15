class Post {
	title;
	date;
	summary;
	filename;
	publish;

	/**
	 * 
	 * @param {string} title 
	 * @param {string} date 
	 * @param {string} summary 
	 * @param {string} filename 
	 * @param {boolean} publish 
	 */
	constructor(title, date, summary, filename, publish) {
		this.title = title
		this.date = new Date(date)
		this.summary = summary
		this.filename = filename
		this.publish = publish
	}
}

/**
 * 
 * @param {Promise<Array>} pages
 * @returns {Post[]} 
 */
export let posts = async (pages)=> (await pages).map(page => {
	let frontmatter = page.frontmatter;
	let filename = path.basename(page.file).split(".")[0]
	return new Post(frontmatter.title, frontmatter.date, frontmatter.summary, filename, frontmatter.publish)
}).filter(page => page.publish)