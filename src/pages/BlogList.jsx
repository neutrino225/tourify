import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";

const BlogList = () => {
	return (
		<div className="blogs-page">
			<div className="blogs-grid">
				{blogs.map((blog) => (
					<div key={blog.id} className="blog-card">
						<h3>{blog.title}</h3>
						<p>{blog.short_info}...</p>
						<Link to={`/blog/${blog.id}`}>Read More</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default BlogList;
