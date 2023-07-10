## Why is this important?

- This material goes over the foundations of coding. The information is necessary in order to understand what one is doing when typing code.

## Getting Started Q&A
<b>
1. Compose a short poem describing how HTTP sends data between computers.
</b>

- Request whispers soft,
Server responds with a nod,
Data flows in streams.

* *Finger snaps*
<b>
2. Describe how HTML, CSS, and JS files are “parsed” in the browser.
</b>

- HTML gets parsed first so that the browser can decipher element references. Next come CSS and JavaScript. As the browser reads the HTML, it sends requests for CSS and JS files contained within the HTML, then parses through those.
<b>
3. How can you find images to add to a Website?
</b>

- One can use a search engine to locate and select images. They would then either save the image to their device, or use the images URL to reference/display the image on their page.
<b>
4. How do you create a String vs a Number in JavaScript?
</b>

- Strings have quotation marks (either single or double) around them; numbers do not.

<b>
5. What is a Variable and why are they important in JavaScript?
</b>

- When it comes to coding, variables are storage containers for values/data.

_______________

## Intro to HTML Q&A
<b>
1. What is an HTML attribute? 
</b>

- HTML attributes contain extra information about an element, but will not display in a page's content. 

<b>
2. Describe the Anatomy of an HTMl element.
</b>

- There's the opening tag that consists of the element's name wrapped in angle brackets, and a closing tag that is the same, but with a forward slash before the element's name. Content goes between the open and close tags.

![HTML anatomy](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics/grumpy-cat-small.png)

<b>
3. What is the Difference between < article > and < section > element tags?
</b>

- An article tag encloses a block of related content that makes sense on its own without the rest of the page (ex. a single blog post).
- A section tag is more for grouping together a single part of the page that constitutes one single piece of functionality (ex. a mini map, or a set of article headlines and summaries), or a theme. 

<b>
4. What Elements does a “typical” website include?
</b>

- A typical website contains a header <b>< header ></b>, a main section <b>< main ></b>, and a footer <b>< footer ></b>. More tags can be added ineach section of the website.

<b>
5. How does metadata influence Search Engine Optimization?
</b>

- Scrubbers/Search engines will read through metadata to present relevant information to the user. The more keywords present in the metadata, the more likely a page will come up in a search.

<b>
6. How is the <meta> HTML tag used when specifying metadata?
</b>

- The < meta > HTML tag specifies metadata about an HTML document. This data provides information about the document such as character encoding, display settings, and website description. 

__________

## How to Start to Design a Website Q&A
<b>
1. What is the first step to designing a Website?
</b>

- The first step to designing a website is to figure out the purpose of the site. From there, details can be coded.

<b>
2. What is the most important question to answer when designing a Website?
</b>

- "What do I want to accomplish?" = The most important question.

__________

## Semantics Q&A
<b>
1. Why should you use an < h1 > element over a < span > element to display a top level heading?
</b>

- < span > will render code to look like a top level heading, but it has no semantic value, so it will not get any extra benefits.

<b>
2. What are the benefits of using semantic tags in our HTML?
</b>

- Search engines will consider its contents as important keywords to influence the page's search rankings (see SEO)
- Screen readers can use it as a signpost to help visually impaired users navigate a page
- Finding blocks of meaningful code is significantly easier than searching through endless divs with or without semantic or namespaced classes
- Suggests to the developer the type of data that will be populated
- Semantic naming mirrors proper custom element/component naming

##### https://developer.mozilla.org/en-US/docs/Glossary/Semantics

__________

## What is JavaScript? Q&A
<b>
1. Describe 2 things that require JavaScript in the Browser?
</b>

- JavaScript is used in Document Object Model (DOM) API and in geoloaction API.

<b>
2. How can you add JavaScript to an HTML document?
</b>

- JS gets added into an HTML document by placing < script > tags in the head of the HTML. Very similar to using CSS in an HTML doc.

## Things I Want to Know More About

- In what instance would it be better to use < span > over < h1 >?