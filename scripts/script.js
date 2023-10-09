window.addEventListener("load", () => {
  modifyTabs();
  modifyTabsContent();
  if (cheackActiveClass()) {
    showTextContent();
  } else {
    addActiveClass();
    showTextContent();
  }
  addAllImages();
});

document.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("tabs-layout__item") &&
    event.target.dataset.section === "our-services"
  ) {
    if (event.target.classList.contains("tabs-layout__active")) {
      return;
    } else {
      const currentActiveTab = document.querySelector(".tabs-layout__active");
      currentActiveTab.classList.remove("tabs-layout__active");
      event.target.classList.add("tabs-layout__active");
      modifyTabsContent();
      showTextContent();
    }
  }
  if (event.target.classList.contains("amazing-work__tabs-layout")) {
    resetClassInAmazingWork();
    event.target.classList.add(
      "amazing-work__tabs-layout_add-click-properties"
    );
    filterInAmazingWork(event.target);
  }
});

document
  .querySelector(".button_adding-items")
  .addEventListener("click", (event) => {
    let clickCount = event.currentTarget.dataset.click;
    clickCount--;
    event.currentTarget.dataset.click = clickCount;
    const currentActiveElement = document.querySelector(
      ".amazing-work__tabs-layout_add-click-properties"
    );
    if (clickCount !== 0) {
      addAllImages();
      filterInAmazingWork(currentActiveElement);
    } else {
      addAllImages();
      filterInAmazingWork(currentActiveElement);
      event.currentTarget.classList.add("button_add-hidden");
    }
  });

function showTextContent() {
  const tabsCollection = document.querySelectorAll(".tabs-layout__item");
  const tabsContentCollection = document.querySelectorAll(
    ".content-item__our-services"
  );
  for (let index = 0; index < tabsCollection.length; index++) {
    if (tabsCollection[index].classList.contains("tabs-layout__active")) {
      tabsContentCollection[index].classList.remove("content-item_hidden");
    }
  }
}

function cheackActiveClass() {
  const tabsCollection = document.querySelectorAll(".tabs-layout__item");
  for (let index = 0; index < tabsCollection.length; index++) {
    if (tabsCollection[index].classList.contains("tabs-layout__active")) {
      return true;
    }
  }
  return false;
}

function addActiveClass() {
  const tabsCollection = document.querySelectorAll(".tabs-layout__item");
  for (let index = 0; index < tabsCollection.length; index++) {
    if (tabsCollection[index].dataset.section === "our-services") {
      tabsCollection[index].classList.add("tabs-layout__active");
    }
    return;
  }
}

function modifyTabs() {
  const tabsCollection = document.querySelectorAll(".tabs-layout__item");
  for (let index = 0; index < tabsCollection.length; index++) {
    if (tabsCollection[index].dataset.section === "our-services") {
      if (tabsCollection[index].classList.contains("tabs-layout__active")) {
        tabsCollection[index].remove("tabs-layout__active");
      }
    }
  }
}

function modifyTabsContent() {
  const tabsContentCollection = document.querySelectorAll(
    ".content-item__our-services"
  );
  for (let index = 0; index < tabsContentCollection.length; index++) {
    tabsContentCollection[index].classList.add("content-item_hidden");
  }
}

let imageArray = [
  "graphic-design1",
  "graphic-design2",
  "graphic-design3",
  "graphic-design4",
  "graphic-design5",
  "graphic-design6",
  "graphic-design7",
  "graphic-design8",
  "graphic-design9",
  "graphic-design10",
  "graphic-design11",
  "graphic-design12",
  "graphic-design13",
  "graphic-design14",
  "graphic-design15",
  "landing-pages1",
  "landing-pages2",
  "landing-pages3",
  "landing-pages4",
  "landing-pages5",
  "landing-pages6",
  "landing-pages7",
  "landing-pages8",
  "landing-pages9",
  "web-design1",
  "web-design2",
  "web-design3",
  "web-design4",
  "web-design5",
  "web-design6",
  "web-design7",
  "web-design8",
  "web-design9",
  "web-design10",
  "wordpress1",
  "wordpress2",
  "wordpress3",
  "wordpress4",
  "wordpress5",
  "wordpress6",
  "wordpress7",
  "wordpress8",
  "wordpress9",
  "wordpress10",
  "wordpress11",
  "wordpress12",
  "wordpress13",
];

let newImageArray = [];
let count = 0;

function addAllImages() {
  const placeOfAddingCollection = document.querySelectorAll(
    ".portfolio-gallery__card"
  );
  addImagesToNewArray();
  const collectionOfGalleryDescription = document.querySelectorAll(
    ".portfolio-gallery__description"
  );
  for (let index = 0; index < newImageArray.length; index++) {
    placeOfAddingCollection[
      index
    ].firstElementChild.src = `./images/amazing-works/${newImageArray[index]}.jpg`;
    collectionOfGalleryDescription[index].innerHTML = `${addContentInInner(
      newImageArray[index]
    )}`;
    placeOfAddingCollection[index].firstElementChild.alt = newImageArray[index];
    placeOfAddingCollection[index].classList.remove(
      "portfolio-gallery__card_add-hidden"
    );
  }
}

function addImagesToNewArray() {
  let count = 12;
  for (let index = 0; index < count; index++) {
    const randomNumber = randomInteger(0, imageArray.length - 1);
    newImageArray.push(imageArray[randomNumber]);
    imageArray.splice(randomNumber, 1);
  }
}

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function resetClassInAmazingWork() {
  const amazingCollection = document.querySelectorAll(
    ".amazing-work__tabs-layout"
  );
  for (let index = 0; index < amazingCollection.length; index++) {
    if (
      amazingCollection[index].classList.contains(
        "amazing-work__tabs-layout_add-click-properties"
      )
    ) {
      amazingCollection[index].classList.remove(
        "amazing-work__tabs-layout_add-click-properties"
      );
    }
  }
}

function addContentInInner(elementOfArray) {
  const currentString = elementOfArray;
  let modifidedElement = [];

  for (let index = 0; index < currentString.length; index++) {
    if (currentString[index] === "-") {
      modifidedElement.push(" ");
    } else if (!Number.isNaN(+currentString[index])) {
      continue;
    } else {
      modifidedElement.push(currentString[index]);
    }
  }

  const contentElement = modifidedElement.join("");
  return contentElement;
}

function filterInAmazingWork(element) {
  const currentElements = document.querySelectorAll(".portfolio-gallery__card");
  if (element.dataset.filter === "All") {
    removeClassHiddenInFilter();
  } else {
    removeClassHiddenInFilter();
    const filter = element.dataset.filter;
    const collectionOfGalleryDescription = document.querySelectorAll(
      ".portfolio-gallery__description"
    );
    for (
      let index = 0;
      index < collectionOfGalleryDescription.length;
      index++
    ) {
      if (
        collectionOfGalleryDescription[index].innerHTML !== filter &&
        collectionOfGalleryDescription[index].innerHTML !== ""
      ) {
        currentElements[index].classList.add(
          "portfolio-gallery__card_additional-hidden"
        );
      }
    }
  }
}

function removeClassHiddenInFilter() {
  const currentElements = document.querySelectorAll(
    ".portfolio-gallery__card_additional-hidden"
  );
  for (let index = 0; index < currentElements.length; index++) {
    currentElements[index].classList.remove(
      "portfolio-gallery__card_additional-hidden"
    );
  }
}

function createMasonryElement(counter) {
  const wrapperOfElement = document.createElement("div");

  if (counter % 3 == 0) {
    wrapperOfElement.classList.add(
      "masonry-item",
      "masonry-item--width4",
      "masonary-item-properties"
    );
  } else {
    wrapperOfElement.classList.add(
      "masonry-item",
      "masonry-item--width3",
      "masonary-item-properties"
    );
  }
  wrapperOfElement.append(imageForMasonry(counter));
  wrapperOfElement.append(createWrapperForLinks());

  return wrapperOfElement;
}

function imageForMasonry(elementNumber) {
  const imageForAdding = document.createElement("img");
  imageForAdding.src = `./images/best-images/best-images${elementNumber}.png`;
  imageForAdding.alt = `best-images${elementNumber}`;
  return imageForAdding;
}

function createWrapperForLinks() {
  const wrapperForLinks = document.createElement("div");
  wrapperForLinks.classList.add("wrapper-for-gallery");
  wrapperForLinks.append(createLinkInMasonryElement("search"));
  wrapperForLinks.append(createLinkInMasonryElement("zoom"));
  return wrapperForLinks;
}

function createLinkInMasonryElement(param) {
  const linkSearch = document.createElement("a");
  if (param === "search") {
    linkSearch.classList.add(
      "wrapper-for-gallery__search",
      "wrapper-for-gallery__size",
      "wrapper-for-gallery__background-color"
    );
    linkSearch.href = "#";
  } else {
    linkSearch.classList.add(
      "wrapper-for-gallery__zoom",
      "wrapper-for-gallery__size",
      "wrapper-for-gallery__background-color"
    );
    linkSearch.href = "#";
  }
  linkSearch.append(createLinkWrapper(param));
  return linkSearch;
}

function createLinkWrapper(param) {
  const wrapperForImage = document.createElement("i");
  if (param === "search") {
    wrapperForImage.classList.add("fa", "fa-search");
  } else {
    wrapperForImage.classList.add("fa", "fa-arrows-alt");
  }
  wrapperForImage.setAttribute("aria-hidden", "true");
  return wrapperForImage;
}

$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-navigation",
  initialSlide: 3,
});

$(".slider-navigation").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  centerMode: true,
  focusOnSelect: true,
  initialSlide: 3,
  variableWidth: true,
});

$(document).ready(function () {
  var $grid = $(".masonry-container").imagesLoaded(function () {
    $grid.masonry({
      itemSelector: ".masonry-item",
      columnWidth: 10,
      gutter: 10,
      percentPosition: true,
    });
  });

  $(".button_adding-masonry-item").on("click", function (event) {
    let counter = event.currentTarget.dataset.click;
    counter++;
    event.currentTarget.dataset.click = counter;

    if (event.currentTarget.dataset.click <= 9) {
      var btn = $(this);
      $(btn).buttonLoader("start");
      setTimeout(function () {
        $(btn).buttonLoader("stop");
      }, 1000);
      setTimeout(() => {
        $grid.append(createMasonryElement(counter));
        $grid.masonry("reloadItems");
        $grid.masonry("layout");
      }, 1100);
    }
  });
});

(function ($) {
  $.fn.buttonLoader = function (action) {
    var self = $(this);
    if (action == "start") {
      if ($(self).attr("disabled") == "disabled") {
        e.preventDefault();
      }
      $(".has-spinner").attr("disabled", "disabled");
      $(self).attr("data-btn-text", $(self).text());
      $(self).html(
        '<span class="spinner"><i class="fa fa-spinner fa-spin"></i></span>Loading'
      );
      $(self).addClass("button_adding-masonry-item_change-properties");
      $(self).addClass("active");
      $(self).removeClass("button__add-item");
    }
    if (action == "stop") {
      $(self).html($(self).attr("data-btn-text"));
      $(self).removeClass("active");
      $(".has-spinner").removeAttr("disabled");
      $(self).addClass("button__add-item");
      $(self).removeClass("button_adding-masonry-item_change-properties");
    }
  };
})(jQuery);
