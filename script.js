window.addEventListener('DOMContentLoaded', () => {

    const btns = document.querySelectorAll('.btn'),
        photo = document.querySelectorAll('.photo');
    let counter = 0;
    // console.log(btns);
    // console.log(photo);

    function switchBtn() {
        btns.forEach(btn => {
            btn.addEventListener('click', (event) => {
                const target = event.target;

                if (target.innerText == 'назад') {
                    if (counter <= 0) {
                        counter = photo.length - 1;
                    } else {
                        counter--;
                    }
                    
                } else {
                    if (counter >= 2) {
                        counter = 0;
                    } else {
                        counter += 1;
                    }

                }
                hidePhoto();
                photo[counter].classList.add('show');
            });
        });
    }

    function hidePhoto() {
        photo.forEach((item) => {
            item.classList.add('hide');
            item.classList.remove('show');
        });
    }

    // function showPhoto(switchBtn) {
    //     photo.forEach((item, i) => {
    //         console.log(item);
    //     });
    // }
    hidePhoto();
    switchBtn();
});