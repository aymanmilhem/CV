"use strict";

const titleBooksAndTeachingElement = document.getElementById(
  "titleBooksAndTeaching"
);

titleBooksAndTeachingElement.addEventListener(
  "mouseover",
  function (textHighlight) {
    titleBooksAndTeachingElement.style = "color : gold";
  }
);
titleBooksAndTeachingElement.addEventListener(
  "mouseout",
  function (textUnHighlight) {
    titleBooksAndTeachingElement.style = "color : aliceblue";
  }
);

titleBooksAndTeachingElement.addEventListener("click", function (hide) {
  const listToHide = document.getElementById("listBooksAndTeaching");
  const styleATM = getComputedStyle(listToHide, null).display;
  console.log(styleATM);
  if (styleATM === "grid") {
    console.log("yes it is grid!");
    listToHide.style = "display: none";
  } else listToHide.style = "display: grid";
});

const titleWorkExperienceElement = document.getElementById(
  "titleWorkExperience"
);

titleWorkExperienceElement.addEventListener(
  "mouseover",
  function (textHighlight) {
    titleWorkExperienceElement.style = "color : gold";
  }
);
titleWorkExperienceElement.addEventListener(
  "mouseout",
  function (textUnHighlight) {
    titleWorkExperienceElement.style = "color : aliceblue";
  }
);
titleWorkExperienceElement.addEventListener("click", function (hide) {
  const listToHide = document.getElementById("listWorkAndExperience");
  const styleATM = getComputedStyle(listToHide, null).display;
  console.log(styleATM);
  if (styleATM === "grid") {
    console.log("yes it is grid!");
    listToHide.style = "display: none";
  } else listToHide.style = "display: grid";
});

const titleSkillsElement = document.getElementById("titleSkills");
titleSkillsElement.addEventListener("mouseover", function (textHighlight) {
  titleSkillsElement.style = "color : gold";
});
titleSkillsElement.addEventListener("mouseout", function (textUnHighlight) {
  titleSkillsElement.style = "color : aliceblue";
});
titleSkillsElement.addEventListener("click", function (hide) {
  const listToHide = document.getElementById("listSkills");
  const styleATM = getComputedStyle(listToHide, null).display;
  console.log(styleATM);
  if (styleATM === "grid") {
    console.log("yes it is grid!");
    listToHide.style = "display: none";
  } else listToHide.style = "display: grid";
});

const myHobbiesLinkElement = document.getElementById("myHobbiesLink");
myHobbiesLinkElement.addEventListener("mouseover", function (textHighlight) {
  myHobbiesLinkElement.style = "color : gold";
});

myHobbiesLinkElement.addEventListener("mouseout", function (textUnHighlight) {
  myHobbiesLinkElement.style = "color : aliceblue";
});

const contactMeLinkElement = document.getElementById("contactMeLink");
contactMeLinkElement.addEventListener("mouseover", function (textHighlight) {
  contactMeLinkElement.style = "color : gold";
});

contactMeLinkElement.addEventListener("mouseout", function (textUnHighlight) {
  contactMeLinkElement.style = "color : aliceblue";
});
