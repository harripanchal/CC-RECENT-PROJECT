const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

function handIt(
  name,
  lname,
  service1,
  service2,
  service3,
  service4,
  des1,
  des2,
  des3,
  des4,
  project1,
  project2,
  project3,
  project4,
  prodescription1,
  prodescription2,
  prodescription3,
  prodescription4,
  whoyou,
  whodes,
  contact1,
  contact2,
  email1,
  email2,
  address,
) {
  localStorage.setItem("val1", name + " " + lname);
  vval1 = name + lname;
  localStorage.setItem("val2", lname);
  vval2 = lname;
  localStorage.setItem("val3", service1);
  vval3 = service1;
  localStorage.setItem("val4", service2);
  vval4 = service2;
  localStorage.setItem("val5", service3);
  vval5 = service3;
  localStorage.setItem("val6", service4);
  vval6 = service4;
  localStorage.setItem("val7", service1);
  vval7 = service1;
  localStorage.setItem("val8", des1);
  vval8 = des1;
  localStorage.setItem("val9", service2);
  vval9 = service2;
  localStorage.setItem("val10", des2);
  vval10 = des2;
  localStorage.setItem("val11", service3);
  vval11 = service3;
  localStorage.setItem("val12", des3);
  vval12 = des3;
  localStorage.setItem("val13", service4);
  vval13 = service4;
  localStorage.setItem("val14", des4);
  vval14 = des4;
  localStorage.setItem("val15", project1);
  vval15 = project1;
  localStorage.setItem("val16", prodescription1);
  vval16 = prodescription1;
  localStorage.setItem("val17", project2);
  vval17 = project2;
  localStorage.setItem("val18", prodescription2);
  vval18 = prodescription2;
  localStorage.setItem("val19", project3);
  vval19 = project3;
  localStorage.setItem("val20", prodescription3);
  vval20 = prodescription3;
  localStorage.setItem("val21", project4);
  vval21 = project4;
  localStorage.setItem("val22", prodescription4);
  vval22 = prodescription4;
  localStorage.setItem("val23", whoyou);
  vval23 = whoyou;
  localStorage.setItem("val24", whodes);
  vval24 = whodes;
  localStorage.setItem("val25", contact1);
  vval25 = contact1;
  localStorage.setItem("val26", contact2);
  vval26 = contact2;
  localStorage.setItem("val27", email1);
  vval27 = email1;
  localStorage.setItem("val28", email2);
  vval28 = email2;
  localStorage.setItem("val29", address);
  vval29 = address;
  const object = {
    vval1 : vval1,
    vval2 : vval2,
    vval3 : vval3,
    vval4 : vval4,
    vval5 : vval5,
    vval6 : vval6,
    vval7 : vval7,
    vval8 : vval8,
    vval9 : vval9,
    vval10 : vval10,
    vval11 : vval11,
    vval12 : vval12,
    vval13 : vval13,
    vval14 : vval14,
    vval15 : vval15,
    vval16 : vval16,
    vval17 : vval17,
    vval18 : vval18,
    vval19 : vval19,
    vval20 : vval20,
    vval21 : vval21,
    vval22 : vval22,
    vval23 : vval23,
    vval24 : vval24,
    vval25 : vval25,
    vval26 : vval26,
    vval27 : vval27,
    vval28 : vval28,
    vval29 : vval29,
  }
  fs.writeFileSync('./profileData.json', JSON.stringify(object, null, 2), 'utf8').
  then(() => {console.log("done");}).
  catch((err) => {console.log(err);});
};


const data = fs.readFileSync('./profileData.json');
const objData = JSON.parse(data);
document.getElementById("uid1").innerHTML = objData.vval1;
document.getElementById("uid2").innerHTML = objData.vval2;
document.getElementById("uid3").innerHTML = objData.vval3;
document.getElementById("uid4").innerHTML = objData.vval4;
document.getElementById("uid5").innerHTML = objData.vval5;
document.getElementById("uid6").innerHTML = objData.vval6;
document.getElementById("uid7").innerHTML = objData.vval7;
document.getElementById("uid8").innerHTML = objData.vval8;
document.getElementById("uid9").innerHTML = objData.vval9;
document.getElementById("uid10").innerHTML = objData.vval10;
document.getElementById("uid11").innerHTML = objData.vval11;
document.getElementById("uid12").innerHTML = objData.vval12;
document.getElementById("uid13").innerHTML = objData.vval13;
document.getElementById("uid14").innerHTML = objData.vval14;
document.getElementById("uid15").innerHTML = objData.vval15;
document.getElementById("uid16").innerHTML = objData.vval16;
document.getElementById("uid17").innerHTML = objData.vval17;
document.getElementById("uid18").innerHTML = objData.vval18;
document.getElementById("uid19").innerHTML = objData.vval19;
document.getElementById("uid20").innerHTML = objData.vval20;
document.getElementById("uid21").innerHTML = objData.vval21;
document.getElementById("uid22").innerHTML = objData.vval22;
document.getElementById("uid23").innerHTML = objData.vval23;
document.getElementById("uid24").innerHTML = objData.vval24;
document.getElementById("uid25").innerHTML = objData.vval25;
document.getElementById("uid26").innerHTML = objData.vval26;
document.getElementById("uid27").innerHTML = objData.vval27;
document.getElementById("uid28").innerHTML = objData.vval28;
document.getElementById("uid29").innerHTML = objData.vval29;
