export default class Download {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
        this.path = '/assets/img/slide_1_m.jpg';
    }

    download(path) {
        const element = document.createElement('a');
        
        element.setAttribute('href', path);
        element.setAttribute('download', 'Rf');
        document.body.appendChild(element);
        element.click();

        document.body.removeChild(element);
    }

    init() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.download(this.path);
            });
        });
    }
}