






 body = document.querySelector('body');

var checkBox = document.getElementById("chkBox");
var checkAuto = document.getElementById("checkAuto");


if (localStorage.getItem("theme") === "auto") {
        
}
else if (localStorage.getItem("theme") === "light") {
        body.classList.add('lightBackground');
        checkBox.checked = false;
}
else{
        body.classList.add('darkBackground');
        checkBox.checked = true;
}

function myFunction() {

        if (checkBox.checked == false){
                body.classList.remove('darkBackground');
                body.classList.add('lightBackground');
                localStorage.setItem("theme", "light");
        }
        else {
                body.classList.add('darkBackground');
                body.classList.remove('lightBackground');
                localStorage.setItem("theme", "dark");
        }
}

function myFunction2() {        
        
        localStorage.setItem("theme", "auto");

        if (checkBox.checked == true){
                body.classList.remove('darkBackground');
        }
        else{
                body.classList.remove('lightBackground');
        }
}        


const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

function openModal(modal) {
        if (modal == null) return
        modal.classList.add('active')
        overlay.classList.add('active')
}


closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
                const modal = button.closest('.modal')
                closeModal(modal)
                hideForms()
          })
})

function closeModal(modal) {
        if (modal == null) return
        modal.classList.remove('active')
        overlay.classList.remove('active')
}


function hideForms() {
                        const formList = document.querySelectorAll(".forms");
                        for (let i = 0; i < formList.length; i++) {
                                  formList[i].style.display = "none";
                        }
        }


function clearForms() {
                        const formList = document.querySelectorAll(".forms");
                        for (let i = 0; i < formList.length; i++) {
                                  formList[i].reset();
                        }
        }



function unhide1() {
                        hideForms();
                        document.getElementById("formName").innerHTML = "Day Evaluation";
                        document.querySelector(".form1").style.display = "block";

                        document.querySelector(".form1").setAttribute("id", "thisForm");
                        document.querySelector(".submit1").setAttribute("id", "thisSubmit");

                        act();                

                        document.querySelector(".form1").removeAttribute("id");
                        document.querySelector(".submit1").removeAttribute("id");
                        }

function unhide2() {
                        hideForms();
                        document.getElementById("formName").innerHTML = "Hobbies, Sleep";
                        document.querySelector(".form2").style.display = "block";

                        document.querySelector(".form2").setAttribute("id", "thisForm");
                        document.querySelector(".submit2").setAttribute("id", "thisSubmit");

                        act();                

                        document.querySelector(".form2").removeAttribute("id");
                        document.querySelector(".submit2").removeAttribute("id");
                        }

function unhide3() {
                        hideForms();
                        document.getElementById("formName").innerHTML = "Gratitude, Memories";
                        document.querySelector(".form3").style.display = "block";

                        document.querySelector(".form3").setAttribute("id", "thisForm");
                        document.querySelector("#text31").setAttribute("form", "thisForm");
                        document.querySelector("#text32").setAttribute("form", "thisForm");
                        document.querySelector("#text33").setAttribute("form", "thisForm");
                        document.querySelector(".submit3").setAttribute("id", "thisSubmit");

                        act();                

                        document.querySelector(".form3").removeAttribute("id");
                        document.querySelector("#text31").removeAttribute("form");
                        document.querySelector("#text32").removeAttribute("form");
                        document.querySelector("#text33").removeAttribute("form");
                        document.querySelector(".submit3").removeAttribute("id");
                        }

function unhide4() {
                        hideForms();
                        document.getElementById("formName").innerHTML = "Meals";
                        document.querySelector(".form4").style.display = "block";

                        document.querySelector(".form4").setAttribute("id", "thisForm");
                        document.querySelector("#text41").setAttribute("form", "thisForm");
                        document.querySelector("#text42").setAttribute("form", "thisForm");
                        document.querySelector("#text43").setAttribute("form", "thisForm");
                        document.querySelector("#text44").setAttribute("form", "thisForm");
                        document.querySelector(".submit4").setAttribute("id", "thisSubmit");

                        act();                

                        document.querySelector(".form4").removeAttribute("id");
                        document.querySelector("#text41").removeAttribute("form");
                        document.querySelector("#text42").removeAttribute("form");
                        document.querySelector("#text43").removeAttribute("form");
                        document.querySelector("#text44").removeAttribute("form");
                        document.querySelector(".submit4").removeAttribute("id");
                        }

function unhide5() {
                        hideForms();
                        document.getElementById("formName").innerHTML = "Expenses";
                        document.querySelector(".form5").style.display = "block";

                        document.querySelector(".form5").setAttribute("id", "thisForm");
                        document.querySelector("#text51").setAttribute("form", "thisForm");
                        document.querySelector("#text52").setAttribute("form", "thisForm");
                        document.querySelector(".submit5").setAttribute("id", "thisSubmit");

                        act();                

                        document.querySelector(".form5").removeAttribute("id");
                        document.querySelector("#text51").removeAttribute("form");
                        document.querySelector("#text52").removeAttribute("form");
                        document.querySelector(".submit5").removeAttribute("id");

                        }

function unhide6() {
                        hideForms();
                        document.getElementById("formName").innerHTML = "Diary";
                        document.querySelector(".form6").style.display = "block";

                        document.querySelector(".form6").setAttribute("id", "thisForm");
                        document.querySelector("#text61").setAttribute("form", "thisForm");
                        document.querySelector(".submit6").setAttribute("id", "thisSubmit");

                        act();                

                        document.querySelector(".form6").removeAttribute("id");
                        document.querySelector("#text61").removeAttribute("form");
                        document.querySelector(".submit6").removeAttribute("id");

                        }


function act(){

        var form = document.querySelector("#thisForm");
        var btn = document.querySelector("#thisSubmit");

        var scriptURL = 'https://script.google.com/macros/s/AKfycbyf0XoihDeMkCdq52xny48zzEvpAh-2GEvMxZ2IGHhA2q9jm8qEBgfcd9_WEqVGDxh4zA/exec';

        form.addEventListener('submit', e => {
        
                e.preventDefault();
                btn.disabled = true;
                btn.innerHTML = "Saving...";

                fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => { 
                        btn.disabled = false;
                        btn.innerHTML = "Send";
                })
                .then(() => {
                        form.reset();
                        closeModal(modal);        
                        hideForms();        
                })

                .catch(error => {
                        btn.disabled = false;
                        btn.innerHTML = "Try again!";
                        alert('Error!', error.message);
                })
        
        }, { once: true });

}



let notification;
document.addEventListener("pushNotification", () => {

if (document.visibilityState === "hidden") {
notification = new Notification("Fill your Journal",{
body: "How was your day?"
});
}
else {
notification.close();
}
})