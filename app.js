class BubbleSort {
    //algorithim
    //check if the next number is less then the current number
    //switch the number is it is true
    //do this for every number
    //iterate this until no switching has occured

    constructor(array) {
        this.array = array;
        this.timer = 0;
        this.isSorted = false;
        this.LengthOfArray = this.array.length;
        this.forLoopI = 0;
        this.switched = false;

        this.pushDown = 0;
        this.lastIndex = 0;
    }
    Sort() {
        let isSorted = false;
        let LengthOfArray = this.array.length;
        while (isSorted == false) {
            let switched = false;
            for (var i = 0; i < LengthOfArray; i++) {
                if (i + 1 < LengthOfArray) {
                    if (this.array[i].id != null) {
                        //the id is the value of the array
                        if (this.array[i + 1].id * 10 < this.array[i].id * 10) {
                            switched = true;

                            let holdLeft = this.array[i].style.height;
                            this.array[i].style.height = this.array[i + 1].style.height;
                            this.array[i + 1].style.height = holdLeft;

                            let holdLeftID = this.array[i].id;
                            this.array[i].id = this.array[i + 1].id;
                            this.array[i + 1].id = holdLeftID;

                            let holdLeftText = this.array[i].innerHTML;
                            this.array[i].innerHTML = this.array[i + 1].innerHTML;
                            this.array[i + 1].innerHTML = holdLeftText;
                        }
                    }
                    else {
                        if (this.array[i + 1] < this.array[i]) {
                            switched = true;
                            let holdLeft = this.array[i];
                            this.array[i] = this.array[i + 1];
                            this.array[i + 1] = holdLeft;
                        }
                    }
                }
            }
            if (switched == false) {
                isSorted = true;
            }
        }
        
        return this.array.slice();
    }

    continuousSort(frameDelay) {
        if (this.timer > frameDelay) {
            this.timer = 0;
            //while loop
            console.log("sorting");
            if (this.isSorted == false) {
                var lastIndex = this.lastIndex;
                if (lastIndex < this.LengthOfArray) {
                    this.array[lastIndex].style.background = "#ff214e";
                }
                this.lastIndex = this.forLoopI;



                //for loop
                if (this.forLoopI < this.LengthOfArray - this.pushDown) {
                    if (this.forLoopI + 1 < this.LengthOfArray) {
                        let i = this.forLoopI;
                        changeFrequency(this.array[i + 1].id);
                        this.array[i].style.background = "white";
                        this.array[i + 1].style.background = "white";
                        if (this.array[i + 1].id * 10 < this.array[i].id * 10) {
                            this.switched = true;
                            let holdLeft = this.array[i].style.height;
                            this.array[i].style.height = this.array[i + 1].style.height;
                            this.array[i + 1].style.height = holdLeft;
                            let holdLeftID = this.array[i].id;
                            this.array[i].id = this.array[i + 1].id;
                            this.array[i + 1].id = holdLeftID;
                            let holdLeftText = this.array[i].innerHTML;
                            this.array[i].innerHTML = this.array[i + 1].innerHTML;
                            this.array[i + 1].innerHTML = holdLeftText;
                        }
                    }
                    this.forLoopI++;
                }
                else {
                    this.forLoopI = 0;
                    this.pushDown++;
                    //check if it is sorted
                    if (this.switched == false) {
                        this.isSorted = true;
                        InitiateSorting = false;
                    }
                    if (lastIndex + 1 < this.LengthOfArray) {
                        this.array[lastIndex + 1].style.background = "#ff214e";
                    }
                    this.switched = false;
                }
            }

        }
        this.timer++;
        return this.array.slice();
    }
};

class InsertionSort {

    constructor(array) {
        this.array = array;
        this.timer = 0;
        this.currentIndex = 0;
        this.forLoopI = 0;
        this.inWhileLoop = false;
        this.LengthOfArray = this.array.length;

        this.lastIndex = 0;
    }


    Sort() {
        //this.LengthOfArray = this.array.length;
        let currentIndex = this.currentIndex;

        for (var i = 0; i < LengthOfArray; i++) {
            while (currentIndex > 0) {
                if (this.array[currentIndex] < this.array[currentIndex - 1]) {
                    let tempHolder = this.array[currentIndex - 1];
                    this.array[currentIndex - 1] = this.array[currentIndex];
                    this.array[currentIndex] = tempHolder;
                    currentIndex = currentIndex - 1;
                }
                else {
                    break;
                }
            }
        }
    }

    continuousSort(frameDelay) {
        if (this.timer > frameDelay) {
            //for loop
            console.log("sorting");
            if (this.forLoopI < this.LengthOfArray) {
                if (!this.inWhileLoop) {
                    this.currentIndex = this.forLoopI;
                }
                //while loop
                this.array[this.lastIndex].style.background = "#ff214e";

                if (this.lastIndex - 1 >= 0) {
                    this.array[this.lastIndex - 1].style.background = "#ff214e";
                }
                this.lastIndex = this.currentIndex;
                if (this.currentIndex > 0) {
                    this.inWhileLoop = true;
                    let currentIndex = this.currentIndex;
                    changeFrequency(this.array[currentIndex - 1].id);
                    this.array[currentIndex].style.background = "white";
                    this.array[currentIndex - 1].style.background = "white";

                    if (this.array[currentIndex].id * 10 < this.array[currentIndex - 1].id * 10) {

                        let tempHolder = this.array[currentIndex - 1].style.height;
                        this.array[currentIndex - 1].style.height = this.array[currentIndex].style.height;
                        this.array[currentIndex].style.height = tempHolder;

                        let holdLeftID = this.array[currentIndex - 1].id;
                        this.array[currentIndex - 1].id = this.array[currentIndex].id;
                        this.array[currentIndex].id = holdLeftID;

                        let holdLeftText = this.array[currentIndex - 1].innerHTML;
                        this.array[currentIndex - 1].innerHTML = this.array[currentIndex].innerHTML;
                        this.array[currentIndex].innerHTML = holdLeftText;

                        this.currentIndex = this.currentIndex - 1;
                    }
                    else {
                        this.currentIndex = this.forLoopI;
                        this.inWhileLoop = false;
                    }
                }
                else {
                    this.currentIndex = this.forLoopI;
                    this.inWhileLoop = false;
                }

                if (!this.inWhileLoop) {
                    this.forLoopI++;
                }
            }
            else {
                this.array[this.lastIndex].style.background = "#ff214e";
                this.array[this.lastIndex - 1].style.background = "#ff214e";
                InitiateSorting = false;
            }
            this.timer = 0;
        }


        this.timer++;
        return this.array.slice();
    }
};

class SelectionSort {

    constructor(array) {
        this.array = array;
        this.timer = 0;

        this.inWhileLoop = false;
        this.forLoopI = 0;
        this.inForLoop = false;

        this.RightBound = this.array.length;
        this.LeftBound = 0;

        this.indexOfMInValue = -1;
    }

    Sort() {
        let RightBound = this.array.length;
        let LeftBound = 0;

        while (LeftBound < RightBound) {
            let minValue = this.array[LeftBound];
            let indexOfMInValue = -1;

            for (var i = this.LeftBound; i < this.RightBound; i++) {
                if (minValue > this.array[i]) {
                    minValue = this.array[i];
                    indexOfMInValue = i;
                }
            }
            if (indexOfMInValue > -1) {
                this.array[indexOfMInValue] = this.array[LeftBound];
                this.array[LeftBound] = minValue;
            }
            this.LeftBound++;
        }
    }


    continuousSort(frameDelay) {
        if (this.timer > frameDelay) {
            //while loop
            console.log("sorting");
            if (this.LeftBound < this.RightBound) {

                if (!this.inForLoop) {
                    this.array[this.LeftBound].style.background = "#ff214e";
                    this.minValue = this.array[this.LeftBound].id;
                    this.minValueHeight = this.array[this.LeftBound].style.height;
                    this.minText = this.array[this.LeftBound].innerHTML;

                    this.indexOfMInValue = -1;
                    this.forLoopI = this.LeftBound;
                }
                //for loop
                if (this.forLoopI > 0) {
                    this.array[this.forLoopI - 1].style.background = "#ff214e";
                }
                if (this.forLoopI < this.RightBound) {
                    this.inForLoop = true;
                    this.array[this.LeftBound].style.background = "white";
                    this.array[this.forLoopI].style.background = "white";

                    changeFrequency(this.array[this.forLoopI].id);

                    if (this.minValue * 10 > this.array[this.forLoopI].id * 10) {

                        this.minValue = this.array[this.forLoopI].id
                        this.minValueHeight = this.array[this.forLoopI].style.height;
                        this.minText = this.array[this.forLoopI].innerHTML;
                        this.indexOfMInValue = this.forLoopI;

                    }
                    this.forLoopI++;
                }
                else {
                    this.inForLoop = false;
                }
                //

                if (!this.inForLoop) {
                    if (this.indexOfMInValue > -1) {
                        this.array[this.indexOfMInValue].id = this.array[this.LeftBound].id;
                        this.array[this.LeftBound].id = this.minValue;

                        this.array[this.indexOfMInValue].style.height = this.array[this.LeftBound].style.height;
                        this.array[this.LeftBound].style.height = this.minValueHeight;

                        this.array[this.indexOfMInValue].innerHTML = this.array[this.LeftBound].innerHTML;
                        this.array[this.LeftBound].innerHTML = this.minText;
                    }
                    this.LeftBound++;
                }
            }
            else {
                InitiateSorting = false;
            }
            //
            this.timer = 0;
        }
        this.timer++;
        return this.array.slice();
    }
};

var sizeOfArray = 15;
var array = new Array(sizeOfArray);
var arrayOftheDivs;
let algMode = 0;

function newSize(value) {
    sizeOfArray = value;
    createRandomArray(sizeOfArray, 50)
}

function randomNumber(min, max) {

    InitiateSorting = false;

    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function createRandomArray(size, maxNumber) {
    size = document.getElementById("arraySizeSlider").value;
    let myArray = new Array(size);
    for (var i = 0; i < size; i++) {
        myArray[i] = randomNumber(1, maxNumber);
    }
    //console.log(myArray);
    array = myArray.slice();
    addArrayVisual();
}

function addArrayVisual() {
    var searchEles = document.getElementsByClassName("arrayBar");

    while (searchEles.length > 0) {
        for (var i = 0; i < searchEles.length; i++) {
            searchEles[i].remove();
        }
    }

    arrayOftheDivs = new Array(sizeOfArray);

    for (var i = 0; i < sizeOfArray; i++) {

        let size = document.getElementById("arraySizeSlider").value;
        let width = (1 / size) * 400;
        let margin = (1 / size) * 200;

        let div = document.createElement("div" + i);
        div.className = "arrayBar";
        div.style.width = width + "px";
        div.style.height = array[i] * 10 + "px";
        div.style.verticalAlign = "bottom";
        div.style.background = "#ff214e";
        div.style.borderRadius = "256px"
        div.style.color = "transparent";
        div.style.marginRight = margin + "px";
        div.style.display = "inline-block";


        div.id = array[i]; //its id will be the value the sorter would compare
        //the sorter would adjust the height 

        div.innerHTML = array[i];

        arrayOftheDivs[i] = div; //array of the the divs created; the sorter would use this

        document.getElementById("arrays").appendChild(div);
    }
    //console.log(arrayOftheDivs[0].id);
}

function ModeSelection(mode) {
    algMode = mode;
}

setInterval(function () {
    Main();
}, 0);

var context = new (window.AudioContext || window.webkitAudioContext)();
var osc = context.createOscillator(); // instantiate an oscillator
osc.type = 'sine'; // this is the default - also square, sawtooth, triangle

function changeFrequency(value) {

    osc.frequency.value = value * 20;
}
osc.frequency.value = 0; // Hz
osc.start(); // start the oscillator

InitiateSorting = false;
var sorter; //the sorting class
function StartSorting() {
    //console.log(algMode);
    InitiateSorting = true;
    if (algMode == 0) {
        sorter = new BubbleSort(arrayOftheDivs);
        //arrayOftheDivs = sorter.Sort();
        //var sorter = new BubbleSort(array);
        //array = sorter.Sort();
        //console.log(array);
    }
    else if (algMode == 1) {
        sorter = new InsertionSort(arrayOftheDivs);
    }
    else if (algMode == 2) {
        sorter = new SelectionSort(arrayOftheDivs);
    }
}

let speedOfSort = 1;
var sortButtonColor;
var methodButtonColor;
var buttonSort;
var sortingMethodButton;

function Start() {
    buttonSort = document.getElementById("sortButton");
    sortButtonColor = buttonSort.style.background;
    sortingMethodButton = document.getElementsByClassName("SortMethods");
    methodButtonColor = sortingMethodButton[0].style.background;

    newSize(15);
}
//main loop
//it is being updated every frame
var startedSound = false;
function Main() {
    if (InitiateSorting) {
        buttonSort.disabled = true;
        buttonSort.style.background = "gray";

        sortingMethodButton.disabled = true;
        for (var i = 0; i < sortingMethodButton.length; i++) {
            sortingMethodButton[i].style.background = "gray";
        }
        if (!startedSound) {
            osc.connect(context.destination);
        }
        startedSound = true;


        arrayOftheDivs = sorter.continuousSort(speedOfSort);
    }
    else {
        buttonSort.disabled = false;
        buttonSort.style.background = sortButtonColor;
        sortingMethodButton.disabled = false;

        if (startedSound) {
            osc.disconnect(context.destination);
            startedSound = false;
        }
        for (var i = 0; i < sortingMethodButton.length; i++) {
            sortingMethodButton[i].style.background = methodButtonColor;
        }
    }
}



//newSize(15);
//array = createRandomArray(sizeOfArray, 20).slice();
//console.log(array);
//document.body.onload = addArrayVisual;
//var sorter = new BubbleSort(array);
//array = sorter.Sort();
//console.log(array);

