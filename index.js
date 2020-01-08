'use strict';

// REQUIREMENTS

// 1. ENTER ITEMS BY HITTING RETURN OR CLICKING 'ADD ITEM' BUTTON

// 2. CHECK AND UNCHECK ITEMS ON THE LIST BY CLICKING 'CHECK' BUTTON

// 3. PERMANENTLY REMOVE ITEMS FROM THE LIST


//select list
const list = $('.shopping-list');

// ADD NEW ITEM FUNCTION IIFE

(function addNewItem() {

  // select the form submit button
  let submitButton = $('#js-shopping-list-form');

  // add submit event listener
  $(submitButton).on('submit', function(){
    event.preventDefault();

    // get value of input field

    let item = $(':text').val();

    //adds new item to the list

    $(list).append(`<li>
    <span class="shopping-item">${item}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);

    // clears input field 
    $(':text').val('');

  });
})();

// CHECK AND UNCHECK ITEMS ON THE LIST BY CLICKING 'CHECK' BUTTON

(function toggleItem() {
  $(list).on('click', '.shopping-item-toggle', function(event) {
    event.stopPropagation();
    let thisItem = $(this).parent().parent().find('.shopping-item');
    $(thisItem).toggleClass('shopping-item__checked');
  });
})();

// 

(function deleteItem() {
  $(list).on('click', '.shopping-item-delete', function(event) {
    event.stopPropagation();
    let thisItem = $(this).parent().parent().find('.shopping-item');
    $(thisItem).parent().remove();
  });
})();


