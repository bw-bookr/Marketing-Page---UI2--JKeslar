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