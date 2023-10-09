
    const commentText = commentInput.value.trim();
    if (commentText !== '') {
        const commentItem = document.createElement('li');
        commentItem.textContent = commentText;
        commentList.appendChild(commentItem);
        commentInput.value = '';
    }
    if (event.key === 'Enter') {
        addComment();
    }
