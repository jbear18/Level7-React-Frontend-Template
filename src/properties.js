export const properties = {
    courseName: 'Recipe Search',
//    endpoint: 'http://localhost:5000/searchSpoonacularResults?q=',
    endpoint: 'https://recipe-search-one.vercel.app/searchSpoonacularResults?q=',
    description: 'Search for a recipe or discover a new recipe! Input a search term and a result of the recipe, image, #calories, and ID will pop up.',
//    backendSwaggerUrl: 'http://localhost:5000/',
    backendSwaggerUrl: 'https://recipe-search-one.vercel.app/',
    createdBy: 'Jessie Shen',
    repositoryUrl: 'https://ppjcqy0ktq0.typeform.com/to/Jmj9xECp'

};

/*
It is likely that you will also need to change the object that the frontend is expecting to receive from the service.


SearchResult.js
Change this to match the structure of your object.  Note that for cheetah search, it uses the map() function to
destructure a list of authors that is returned from the query into a number of <p> tags:

<article className={classes.Result}>
    <h1>Title: {props.title}</h1>
    <h3 className={classes.Author}>
        {props.authors && props.authors.map((author, index) => (
            <p key={index}>{author}</p>
        ))}
     </h3>
     <a href={props.link} rel="noopener noreferrer" target="_blank">{props.link}</a>
</article>

If your object doesn't return any lists, you could simplify the above code greatly.  For example, the above code for
a made up animal object may look like this:

<article className={classes.Result}>
    <h1>Recipe Title: {props.title}</h1>
    <h3>Calories: {props.calories}<h3>
    <h3>Image: {props.image}<h3>
    <h3>Link: {props.link}<h3>
//    <a href={props.link} rel="noopener noreferrer" target="_blank">{props.link}</a>
</article>


The only other thing to do is to make sure to pass the correct values as props from SearchOutput.js to the
SearchResults.  Continuing with the above animal example may look like this:

SearchOutput.js: 22

<SearchResult
    key={index}
    species={result.species}
    numberOfLegs={result.numberOfLegs}
    link={result.link}
/>

 */