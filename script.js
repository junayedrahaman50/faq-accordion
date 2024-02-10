"use strict";

// on load
$(document).ready(function () {
  function handleToggle(item) {
    item.toggleClass("open");
    item.find(".hidden-text").slideToggle();
  }

  const items = $(".faq-item");

  items.each(function () {
    const item = $(this);
    const query = item.find(".faq-item-header span");
    const plusBtn = item.find(".plus-icon");
    const minusBtn = item.find(".minus-icon");

    // click events
    query.on("click", function () {
      handleToggle(item);
    });

    plusBtn.on("click", function () {
      handleToggle(item);
    });

    minusBtn.on("click", function () {
      handleToggle(item);
    });
  });
});
