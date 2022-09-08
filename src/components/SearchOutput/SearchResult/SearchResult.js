import React from "react";
import classes from './SearchResult.module.css';

const SearchResult = (props) => {
    console.log(props);
    return (

<article className={classes.Result}>
    <h1>Title: {props.title}</h1>
    <img src={props.image} alt={props.title}></img>
    <h3></h3>
 <a href={props.link} rel="noopener noreferrer" target="_blank">{props.link}</a>
</article>


    );
}

export default SearchResult;