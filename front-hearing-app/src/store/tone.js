export const tone = {
    // 1 - dźwiek kwalifikujący słuch
    1: {
        id: "measurement",
        link: "sound=250hz",
        count: 0,
        play: true
    },
    // 250, 500, {...}, 8000 - częstotliwość dźwięków. Od najniższej do najwyższej  
    2: {
        id: 250,
        link: "sound=500hz",
        count: 0,
        play: true,
        sound: "http://imicadio.com/HearingTestApp/assets/audio/250Hz/250_80.ogg"        
    },
    3: { 
        id: 500,
        link: "sound=1000hz",
        count: 0,
        play: true,
        sound: "http://imicadio.com/HearingTestApp/assets/audio/500Hz/500_80.ogg"
    },
    4: {
        id: 1000,
        link: "sound=2000hz",
        count: 0,
        play: true,
        sound: "http://imicadio.com/HearingTestApp/assets/audio/1000Hz/1000_80.ogg"
    },
    5: {
        id: 2000,
        link: "sound=4000hz",
        count: 0,
        play: true,
        sound: "http://imicadio.com/HearingTestApp/assets/audio/2000Hz/2000_80.ogg"
    },
    6: {
        id: 4000,
        link: "sound=8000hz",
        count: 0,
        play: true,
        sound: "http://imicadio.com/HearingTestApp/assets/audio/4000Hz/4000_80.ogg"
    },
    7: {
        id: 8000,
        link: 'question=1',
        count: 0,
        play: true,
        sound: "http://imicadio.com/HearingTestApp/assets/audio/8000Hz/8000_80.ogg"
    },
    8: {
        question: "Czy masz problem ze zrozumieniem mowy w hałasie np. na ulicy?",
        image: "https://okrabygg.se/wp-content/uploads/2020/12/ulica.jpg",
        link: 'question=2',
    },
    9: {
        question: "Czy masz problem z usłyszeniem wysokich dźwięków na przykład ptaków?",
        image: "https://okrabygg.se/wp-content/uploads/2020/12/ptaki.jpg",
        link: 'question=3',
    },
    10: {
        question: "Czy masz problem ze zrozumieniem mowy zatłoczonych miejscach np. restauracje?",
        image: "https://okrabygg.se/wp-content/uploads/2020/12/restauracja.jpg",
        link: 'question=4',
    },
    11: {
        question: "Czy masz problem ze zrozumieniem mowy podczas szeptu?",
        image: "https://okrabygg.se/wp-content/uploads/2020/12/szept.jpg",
        link: 'summary',
    }
};

export const forms = {    
    1: {
        value: '',
        valid: false,
        count: null
    },
    2: {
        value: '',
        valid: false,
        count: null
    },
    3: {
        value: '',
        valid: false,
        count: null
    },
    4: {
        value: '',
        valid: false,
        count: null
    },
    5: {
        value: '',
        valid: false,
        count: null
    },
    6: {
        value: '',
        valid: false,
        count: null
    },
    7: {
        value: '',
        valid: false,
        count: null
    },
    8: {
        value: '',
        valid: false,
        count: null
    },
    9: {
        value: '',
        valid: false,
        count: null
    },
    10: {
        value: '',
        valid: false,
        count: null
    },
    11: {
        value: '',
        valid: false,
        count: null
    }
};

export const reloadPage = { 1: ''};