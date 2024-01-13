/*LAB 1-2: JAVASCRIPT CLASSES*/
//FAVE FRIEND CLASS
window.onload = function () {
  let formHandle = document.forms.fave_form;
  //console.log(formHandle);

  formHandle.onsubmit = function () {
    class Friend {
      constructor(name, number) {
        this.name = name;
        this.number = number;
      }
    }

    //validtion would occur below each of the variables, if the values are empty
    //or if the numbers are less than 10 digits
    let pal1 = formHandle.name1;
    let pal2 = formHandle.name2;
    let pal3 = formHandle.name3;
    let cell1 = formHandle.phone1;
    let cell2 = formHandle.phone2;
    let cell3 = formHandle.phone3;

    let friend1 = new Friend(pal1.value, cell1.value);
    let friend2 = new Friend(pal2.value, cell2.value);
    let friend3 = new Friend(pal3.value, cell3.value);

    formHandle.style.display = "none";
    var showList = document.getElementById("faveBlock");
    showList.style.display = "block";
    var amigos = document.getElementById("faveList");

    var faveThree = []; //FAVE 3 ARRAY
    faveThree.push(friend1);
    faveThree.push(friend2);
    faveThree.push(friend3);

    for (var i = 0; i < faveThree.length; i++) {
      amigos.innerHTML += `<li>${faveThree[i].name}</li>`;
    }
    console.log(faveThree);
    return false;
  };
}; //END OF onload FUNCTION
