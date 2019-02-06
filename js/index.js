//Bookr Object
const bookr = [{"genre":"action", "title":"Mockingjay", "author":"Suzanne Collins", "isbn":9783837306910, "rating":4.5},
{"genre":"comedy", "title":"The Hitchhiker's Guide to the Galaxy", "author":"Douglas Adams", "isbn":9780230529151, "rating":5},
{"genre":"fantasy", "title":"The Lord of the Flies", "author":"William Golding", "isbn":9784087605785, "rating":4},
{"genre":"bio", "title":"Scar Tissue", "author":"Anthony Kiedis", "isbn":9788494588655, "rating":5},
{"genre":"fantasy", "title":"The Hobbit", "author":"J.R.R. Tolkien", "isbn":9789402306538, "rating":4},
{"genre":"kids", "title":"The Cat In The Hat", "author":"Dr. Seuss", "isbn":9782371000193, "rating":4},
{"genre":"action", "title":"Into The Wild", "author":"Jon Krakauer", "isbn":9782846664417, "rating":4},
{"genre":"fantasy", "title":"Perloo The Bold", "author":"Avi", "isbn":9780788736797, "rating":4},
{"genre":"kids", "title":"The Giving Tree", "author":"Shel Silverstein", "isbn":9789985608289, "rating":4.5},
{"genre":"comedy", "title":"The Adventures of Captain Underpants", "author":"Dav Pilkey", "isbn":9781537925776, "rating":4.5},
{"genre":"action", "title":"Robinson Crusoe", "author":"Daniel Defoe", "isbn":9786612175039, "rating":3.5},
{"genre":"fantasy", "title":"Alice's Adventures in Wonderland", "author":"Lewis Carroll", "isbn":9788862777216, "rating":4},
{"genre":"kids", "title":"Where The Wild Things Are", "author":"Maurice Sendak", "isbn":9780867642179, "rating":4.5},]

// Tabbed Content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');

 tabs.addEventListener('click', function(e){
    if(e.target.tagName == "LI"){
        const targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach(function(panel){
            if (panel == targetPanel){
                panel.classList.add('active');
            } else{
                panel.classList.remove('active');
            }
        })
    }
});
///////////////////////////////////////////////////////////////////
//Card Content
class TabLink {
    constructor(tabElement){
      this.tabElement = tabElement;
      this.tabData = this.tabElement.dataset.tab; 
      if(this.tabData === 'all'){
        this.cards = document.querySelectorAll('.card');
      } else {
        this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`);
      }
      this.cards = Array.from(this.cards).map(card => new TabCard(card));
      this.tabElement.addEventListener('click', () => this.selectLink());
    }
  
    selectLink(){
      const links = document.querySelectorAll('.tab');
      links.forEach(tab => tab.classList.remove('active-tab'));
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => card.style.display = 'none');
      this.tabElement.classList.add('active-tab');
      this.cards.forEach(card => card.selectCard());
    }
  }
  
  class TabCard {
    constructor(cardElement){
      this.cardElement = cardElement;
    }
    selectCard(){
        this.cardElement.style.display = 'flex';
    }
  
  }
  let links = document.querySelectorAll('.tab').forEach(tab => new TabLink(tab));