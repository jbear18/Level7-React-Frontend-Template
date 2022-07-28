import React from "react";
import classes from './SearchResult.module.css';

const SearchResult = (props) => {
    console.log(props);
    return (

    <article className={classes.Result}>
        <h1>Recipe Title: {props.title}</h1>
        <h3>Calories: {props.calories}<h3>
        <h3>Image: {props.image}<h3>
        <h3>Link: {props.link}<h3>
        </article>
    );
}

export default SearchResult;