import img1 from '../assets/images/ptaki.jpg';
import img2 from '../assets/images/restauracja.jpg';
import img3 from '../assets/images/szept.jpg';
import img4 from '../assets/images/ulica.jpg';

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
    },
    3: { 
        id: 500,
        link: "sound=1000hz",
        count: 0,
        play: true,
    },
    4: {
        id: 1000,
        link: "sound=2000hz",
        count: 0,
        play: true,
    },
    5: {
        id: 2000,
        link: "sound=4000hz",
        count: 0,
        play: true,
    },
    6: {
        id: 4000,
        link: "sound=8000hz",
        count: 0,
        play: true,
    },
    7: {
        id: 8000,
        link: 'question=1',
        count: 0,
        play: true,
    },
    8: {
        question: "Czy masz problem ze zrozumieniem mowy w hałasie np. na ulicy?",
        image: img4,
        link: 'question=2',
    },
    9: {
        question: "Czy masz problem z usłyszeniem wysokich dźwięków na przykład ptaków?",
        image: img1,
        link: 'question=3',
    },
    10: {
        question: "Czy masz problem ze zrozumieniem mowy zatłoczonych miejscach np. restauracje?",
        image: img2,
        link: 'question=4',
    },
    11: {
        question: "Czy masz problem ze zrozumieniem mowy podczas szeptu?",
        image: img2,
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