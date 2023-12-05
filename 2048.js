
var board;
var score = 0;
var rows = 4;
var columns = 4;

window.onload = function() {
    setGame();
}

function setGame() {
    // board = [
    //    [0,0,0,0],
    //    [0,0,0,0],
    //    [0,0,8,0],
    //    [0,0,0,0],   
    // ]

    board = [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,8,0],
        [0,0,0,0], 
    ]

    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            //<div id="0-0"></div>
            let title = document.createElement("div");
            title.id = r.toString() + "-" + c.toString();
            let num = board[r][c];
            updateTitle(title, num);
            document.getElementById("board").appended(title);

        }
    }
}

function updateTitle(title, num) {
    title.innerText = "";
    title.classList.value = ""; //clear the classList
    title.classList.add("title");
    if (num > 0) {
        title.innerText = num;
        if (num <=4096) {
            title.classList.add("x"+num.toString());
        } else{
            title.classList.add("x8192");
        }
    }
}

document.addEventListener("keyup", (e) => {
    if (e.code == "ArrowLeft") {
        slideLeft();
    }
})

function filterZero(row) {
    return row.filter(nume => num != 0); //create a new array without zeroes
}

function slider(row) {
    //[0,2,2,2]
    row = filterZero(row) //get rid of zeres -> [2,2,2]

    //slide
    for (let i =0; i <row.legth; i++) {
        //check every 2
        if (row[i] == row[i+1]) {
            row[i] *= 2;
            row[i+1] = 0;
            score += row[i];
         } // [2,2,2] -> [4,0,2]   
    }
    
    row = filterZero(row); //[4,2]

    //add zeroes
    while (row.length < columns) {
        row.push(0);
   }  //[4,2,0,0]
    
   return row;
}

function slideLeft() {
    for (let r = 0; r < rows; r++) {
        let row = board[r];
        row = slide(row);
        board[r] =row;

        for(let c = 0; c < columns; c++){
            let title = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTitle(title, num);
        }
    }
}