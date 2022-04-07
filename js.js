var txt = "here";
var txt2 = "<!DOCTYPE html> <html lang="+"en"+">";





    $(document).ready(function() {
    $('form').on('submit', function(e) {
        
        let answers = $("input[type=radio]:checked");
        answers = Array.from(answers);
        let numOfQuestion = $(".question").length;
        if (answers.length < numOfQuestion) {
            var text4 = "<h4>  Answer  questions : ";
            for (var i = 1; i <= numOfQuestion; i++) {
                var x = "q" + i
                qq = $("input[name="+ x +"]:checked").length;
                if (!qq) {
                    text4 += " " + i;
                }
            }
            text4 +="</h4> <h3>Try again with full answers</h3>" 
            $(function () {
            function confirmDialog( message) {
                var confirmdialog = $('<div></div>').appendTo('body')
                    .html('<div>' + message + '</div>')
                    .dialog({
                        width: '450px',
                        modal: true,
                        autoOpen: false,
                        title: "answer all plz",
                        resizable: false,
                        show: { effect: "blind", duration: 400 },
                        modal: true,
                        position:({
                            my: "center",
                            at: "center",
                            of: window
                        }),
                        buttons: {
                            OK: function () {
                                $(this).dialog("close");
                            }
                        },
                        close: function() {
                            $(this).remove();
                        }
                    });
        
                return confirmdialog.dialog("open");
            }
            e.preventDefault();
            var form = this;
            confirmDialog( text4 , function () {
                form.submit();
            });
        });

        } else {
            var txt3 = resuts();
            document.write(txt3);
            //window.open("resalt.html");
        }       
        
        return false;
    });
});










// DarkMode

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-toggle-right'
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'


function resuts() {

    
    var q1 = document.getElementsByName('q1');
    var q2 = document.getElementsByName('q2');
    var q3 = document.getElementsByName('q3');
    var q4 = document.getElementsByName('q4');
    var q5 = document.getElementsByName('q5');

    var checkedButton1;
    var checkedButton2;
    var checkedButton3;
    var checkedButton4;
    var checkedButton5;

    q1.forEach(e => {
        if (e.checked) {
            checkedButton1 = e.value;
            if (checkedButton1.toLowerCase() == "a") {
                checkedButton1 = 'true';
                txt2 += "<h3>q1  result is =  " + checkedButton1 + "<h3> <br>";
            } else {
                txt = "<h3> Q 1 is wrong <h3/> <br>";
                checkedButton1 = null;
                txt2 += txt;
            }
        }
    });
    q2.forEach(e => {
        if (e.checked) {
            checkedButton2 = e.value;
            if (checkedButton2.toLowerCase() == "a") {
                checkedButton2 = 'true';
                txt2 += "<h3>q2 result is =  " + checkedButton2 + "<h3> <br>";
            } else {
                txt = "<h3> Q 2 is wrong <h3/> <br>";
                checkedButton2 = null;
                txt2 += txt;
            }
        }
    });

    q3.forEach(e => {
        if (e.checked) {
            //if radio button is checked, set sort style
            checkedButton3 = e.value;
            if (checkedButton3.toLowerCase() == "a") {
                checkedButton3 = 'true';
                txt2 += "<h3>q3 result is =  " + checkedButton3 + "<h3> <br>";

            } else {
                txt = "<h3> Q 3 is wrong <h3/> <br>";
                checkedButton3 = null;
                txt2 += txt;
            }
            console.log(checkedButton3);
        }
    });

    q4.forEach(e => {
        if (e.checked) {
            //if radio button is checked, set sort style
            checkedButton4 = e.value;
            if (checkedButton4.toLowerCase() == "a") {
                checkedButton4 = 'true';
                txt2 += "<h3>q4 result is =  " + checkedButton4 + "<h3> <br>";

            } else {
                txt = "<h3> Q 4 is wrong <h3/> <br>";
                checkedButton4 = null;
                txt2 += txt;
            }
        }
    });

    q5.forEach(e => {
        if (e.checked) {
            checkedButton5 = e.value;
            if (checkedButton5.toLowerCase() == "b") {
                checkedButton5 = 'true';
                txt2 += "<h3>q5 result is =  " + checkedButton5 + "<h3> <br>";

            } else {
                checkedButton5 = null;
                txt = "<h3> Q 5 is wrong <h3/> <br>";

                txt2 += txt;
            }
        }
    });

    return txt2 +"</html>";
}


        // $('input:radio[name="q1"]').on('click', function() {
        //     console.log("here2");
        //     if ($(this).val() == 'a') {
        //         txt2 += "<h3>q1  result is = true <h3> <br>";
        //         console.log("here3");
        //     } else {
        //         txt2 += "<h3>q1  result is = false <h3> <br>";
        //     }    
        //     }); 
            
        // $('input:radio[name="q2"]').on('click', function() {
        //     if ($(this).val() == 'a') {
        //         txt2 += "<h3>q2  result is = true <h3> <br>";
        //     } else {
        //         txt2 += "<h3>q2  result is = false <h3> <br>";
        //     }    
        //     });  
            
        // $('input:radio[name="q3"]').on('click', function() {
        //     if ($(this).val() == 'a') {
        //         txt2 += "<h3>q2  result is = true <h3> <br>";
        //     } else {
        //         txt2 += "<h3>q2  result is = false <h3> <br>";
        //     }    
        //     });                
            
        // $('input:radio[name="q4"]').on('click', function() {
        //     if ($(this).val() == 'a') {
        //         txt2 += "<h3>q4  result is = true <h3> <br>";
        //     } else {
        //         txt2 += "<h3>q4  result is = false <h3> <br>";
        //     }    
        //     });
            
        // $('input:radio[name="q5"]').on('click', function() {
        //     if ($(this).val() == 'a') {
        //         txt2 += "<h3>q5  result is = true <h3> <br>";
        //     } else {
        //         txt2 += "<h3>q5  result is = false <h3> <br>";
        //     }    
        //     });    