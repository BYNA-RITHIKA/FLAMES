function flames() {


    let name1 = document.getElementById("name1").value.toLowerCase();
    let name2 = document.getElementById("name2").value.toLowerCase();

    if (name1.length == 0 && name2.length == 0) {
        alert("Please enter the names of the players");
        return 0;
    } else if (name1.length == 0) {
        alert("Please enter name of the player1");
        return 0;
    } else if (name2.length == 0) {
        alert("Please enter name of the player2");
        return 0;
    }

    if (name1 == name2) {
        alert("Please enter valid names");
        return 0;
    }


    let firstname = name1;
    let secondname = name2;


    let l1 = name1.length;
    let l2 = name2.length;
    let result = document.getElementById("output");

    let len = name1.length + name2.length;
    console.log(len);

    for (var i = 0; i < l1; i++) {
        for (var j = 0; j < l2; j++)

        {
            if (name1[i] == name2[j]) {
                name1 = name1.replace(name1[i], '-');
                name2 = name2.replace(name2[j], '-');


                len -= 2;
                break;
            }
        }
    }


    console.log(len);


    let f = ['Friends', 'Love', 'Affection', 'Marriage', 'Enemy', 'Sisters']
    let p = 6;
    j = 0;
    while (p > 1) {
        let c = 1;
        while (c <= len) {
            if (j >= p) {
                j = 0;
            }

            if (c == len) {
                f.splice(j, 1);
                break;
            } else {
                j = j + 1;
                c = c + 1;
            }
        }
        p = p - 1;

    }


    document.getElementById("output").innerHTML = "Relationship between " + firstname + " and " + secondname + " is " + f[0];



}


function del() {
    window.confirm("Are you sure you want to clear the names?");
    document.getElementById("flames").reset();
    //document.getElementById("name2").value = "";
    document.getElementById("output").innerHTML = "";

}