import React from "react";
import classes from './SearchResult.module.css';

const SearchResult = (props) => {
    console.log(props);
    return (

//    <article className={classes.Result}>
//        <h1>Recipe Title: {props.title}</h1>
//        <h3>Image: {props.image}</h3>
//        </article>

<article className={classes.Result}>
    <h1>Title: {props.title}</h1>
    <h3>Image: {props.image}</h3>
    <h3 className={classes.Result}>
        {props.results && props.results.map((title, index) => (
            <p key={index}>{title}</p>
//            <p link="https://spoonacular.com/" + props.title.split(" ")[props.title.split(" ").length-1] + "-" + "props.id">"hello"</p>
        ))}
        </h3>
        <a href={props.link} rel="noopener noreferrer" target="_blank">{props.link}</a>
</article>


    );
}

export default SearchResult;