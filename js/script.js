document.addEventListener('DOMContentLoaded', () => {
    let blockSlider = document.querySelectorAll('.projects__slider');
    let sizeSlider = document.querySelector('.projects__inner');
    const size1 = [2000, 1800, 1600, 1400, 1200];
    const size2 = [850];
    const size3 = [750];
    const size4 = [650];
    const size5 = [586];
    window.addEventListener('resize', () => {
        console.log(sizeSlider.clientWidth);
    })
    window.addEventListener('click', (event) => {
    //    console.log(event.target.dataset.item);
        switch (event.target.dataset.item) {
            case 'all':
                    blockSlider.forEach(element => {
                        if(size1.includes(sizeSlider.clientWidth)){
                            element.style.transform = 'translateY(-0px)';
                        }
                        if(size2.includes(sizeSlider.clientWidth)){
                            element.style.transform = 'translateY(-0px)';
                        }
                        if(size3.includes(sizeSlider.clientWidth)){
                            element.style.transform = 'translateY(-0px)';
                        }
                        if(size4.includes(sizeSlider.clientWidth)){
                            element.style.transform = 'translateY(-0px)';
                        }
                        if(size5.includes(sizeSlider.clientWidth)){
                            element.style.transform = 'translateY(-0px)';
                        }
                    });
                break;
            case 'furniture':
                    blockSlider.forEach(element => {
                        if(size1.includes(sizeSlider.clientWidth)){
                            element.style.transform = 'translateY(-600px)';
                        }
                        if(size2.includes(sizeSlider.clientWidth)){
                            element.style.transform = 'translateY(-900px)';
                        }
                        if(size3.includes(sizeSlider.clientWidth)){
                            element.style.transform = 'translateY(-800px)';
                        }
                        if(size4.includes(sizeSlider.clientWidth)){
                            element.style.transform = 'translateY(-720px)';
                        }
                        if(size5.includes(sizeSlider.clientWidth)){
                            element.style.transform = 'translateY(-670px)';
                        }
                    });
                break;
            case 'design':
                    blockSlider.forEach(element => {
                        if(size1.includes(sizeSlider.clientWidth)){
                            element.style.transform = 'translateY(-1200px)';
                        }
                        if(size2.includes(sizeSlider.clientWidth)){
                            element.style.transform = 'translateY(-1810px)';
                        }
                        if(size3.includes(sizeSlider.clientWidth)){
                            element.style.transform = 'translateY(-1570px)';
                        }
                        if(size4.includes(sizeSlider.clientWidth)){
                            element.style.transform = 'translateY(-1421px)';
                        }
                        if(size5.includes(sizeSlider.clientWidth)){
                            element.style.transform = 'translateY(-1343.1px)';
                        }
                    });
                break;
            case 'house':
                blockSlider.forEach(element => {
                    if(size1.includes(sizeSlider.clientWidth)){
                        element.style.transform = 'translateY(-1800px)';
                    }
                    if(size2.includes(sizeSlider.clientWidth)){
                        element.style.transform = 'translateY(-2714px)';
                    }
                    if(size3.includes(sizeSlider.clientWidth)){
                        element.style.transform = 'translateY(-2354px)';
                    }
                    if(size4.includes(sizeSlider.clientWidth)){
                        element.style.transform = 'translateY(-2131px)';
                    }
                    if(size5.includes(sizeSlider.clientWidth)){
                        element.style.transform = 'translateY(-2014.9px)';
                    }
                });
            break;
            default:
                break;
        }
    });

})