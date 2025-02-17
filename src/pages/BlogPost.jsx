import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import ReactMarkdown from "react-markdown";

const BlogPost = () => {
	const { id } = useParams();
	const blog = blogs.find((b) => b.id === parseInt(id));

	if (!blog) {
		return <h2 className="not-found">Blog not found! 😕</h2>;
	}

	return (
		<div className="blog-post-page">
			<div className="blog-post">
				<button className="back-btn">
					<a href="/blogs">Go Back</a>
				</button>
				<h1>{blog.title}</h1>
				<ReactMarkdown>{blog.content}</ReactMarkdown>
			</div>
		</div>
	);
};

export default BlogPost;
