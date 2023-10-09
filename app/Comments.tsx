import { useState } from "react";
export default function Comments() {
    return (<div class="comment-section">        
        <h2>Comments</h2>        
        <ul id="comment-list"></ul>        
        <textarea id="comment-input" placeholder="Write a comment...">
        </textarea>
        <button id="comment-button">Comment</button>
    </div>    );
}
