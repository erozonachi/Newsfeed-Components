// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"
const buttonLabelExpand = `Click to Expand`;
const buttonLabelHide = `Click to Close`;

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector(`.expandButton`);
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = buttonLabelExpand;
    
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener(`click`, this.expandArticle);

    // Article read button click event handler
    this.readButton = this.domElement.querySelector(`.close`);
    this.readButton.addEventListener(`click`, this.removeArticle);
    
  }

  expandArticle = () => {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle(`article-open`);
    this.expandButton.textContent === buttonLabelExpand?
      this.expandButton.textContent = buttonLabelHide :
      this.expandButton.textContent = buttonLabelExpand;

  }

  removeArticle = () => {
    TweenMax.to(this.domElement, 2, {
      x:-1536,
    });
    setTimeout(() => this.domElement.remove(), 2000);
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

const articles = document.querySelectorAll(`.article`);

articles.forEach(article => {
  new Article(article);
});
