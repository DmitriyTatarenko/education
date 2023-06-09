export default class VideoPlayer {
    constructor (triggers, overlay) {
        this.btns = document.querySelectorAll(triggers);
        this.overlay = document.querySelector(overlay);
        this.close = this.overlay.querySelector('.close');
    }

    // Метод который добавляет в плеер адресс видео
    bindTriggers () {
        this.btns.forEach (btn => {
            btn.addEventListener('click', () => {
                const path = btn.getAttribute('data-url');

                this.createPlayer(path);
            });
        });
    }

    //Метод закрывающий плеер

    bindCloseBtn () {
        this.close.addEventListener('click', () => {
            this.overlay.style.display = 'none';
            this.player.stopVideo();
            this.player.destroy();
        });
    }

    // Метод который создает Ютуб Плеер(YouTube API)
    createPlayer (url) {
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: `${url}`
            
         });
         
         console.log(this.player);
         this.overlay.style.display = 'flex';

         
    }
    
    init () {
        const tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        this.bindTriggers();
        this.bindCloseBtn();
       
    }

    
}