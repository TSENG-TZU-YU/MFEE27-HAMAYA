// 商品主類別
export const categoryMainTypes = [
    { id: 1, mainName: '琴鍵樂器' },
    { id: 2, mainName: '管樂器' },
    { id: 3, mainName: '弓弦樂器' },
    { id: 4, mainName: '吉他/烏克麗麗' },
    { id: 5, mainName: '打擊樂器' },
    { id: 6, mainName: '配件' },
];

// 手機版 排序狀態標題
export const sortByTitle = (sortBy) => {
    if (sortBy === '') {
        return '排序條件';
    }
    if (sortBy === '1') {
        return '價格 低>高';
    }
    if (sortBy === '2') {
        return '價格 高>低';
    }
    if (sortBy === '3') {
        return '上架 新>舊';
    }
    if (sortBy === '4') {
        return '上架 舊>新';
    }
};

// 排序篩選選項
export const sortByTypes = [
    { id: '1', name: '價格：低到高' },
    { id: '2', name: '價格：高到低' },
    { id: '3', name: '上架：新到舊' },
    { id: '4', name: '上架：舊到新' },
];

// 品牌篩選選項
// export const brandTagsTypes = [
//     { id: 0, checked: true, name: '所有品牌' },
//     { id: 1, checked: false, name: 'YAMAHA' },
//     { id: 2, checked: false, name: 'Roland' },
//     { id: 3, checked: false, name: 'AZUMI' },
//     { id: 4, checked: false, name: 'Jupiter' },
//     { id: 5, checked: false, name: 'SELMER' },
//     { id: 6, checked: false, name: 'HEL' },
//     { id: 7, checked: false, name: 'OTTO' },
//     { id: 8, checked: false, name: 'Joylink' },
//     { id: 9, checked: false, name: 'BREEDLOVE' },
//     { id: 10, checked: false, name: 'SUSTAIN' },
//     { id: 11, checked: false, name: 'CORONA' },
//     { id: 12, checked: false, name: 'MAPEX' },
//     { id: 13, checked: false, name: 'NUX' },
//     { id: 14, checked: false, name: 'CASIO' },
//     { id: 15, checked: false, name: 'KORG' },
//     { id: 16, checked: false, name: 'Others' },
//     { id: 17, checked: false, name: 'aNueNue' },
//     { id: 18, checked: false, name: 'NOMAD' },
//     { id: 19, checked: false, name: 'HERCULES' },
//     { id: 20, checked: false, name: 'Vic-Firth' },
// ];

// 顏色篩選選項
// export const colorTagsTypes = [
//     '',
//     '#000000',
//     '#FFFFFF',
//     '#ab1717',
//     '#8B4513',
//     '#802A2A',
//     '#d5830b',
//     '#ed1919',
//     '#006ddd',
//     '#ff0000',
//     '#4d2f2f',
//     '#efd7b3',
//     '#c0c0c0',
//     '#e5bf8e',
//     '#B5A642',
//     '#ffd700',
//     '#f29a25',
//     '#ffa500',
//     '#872c07',
//     '#D54425',
//     '#1663be',
//     '#980000',
//     '#0492C2',
//     '#ffd700',
//     '#b7ba6b',
//     '#a61c00',
//     '#005650',
//     '#000000',
//     '#ffffff',
//     '#9ddfca',
//     '#ffa500',
//     '#cc0000',
//     '#ea9999',
//     '#8B4513',
//     '#18ebeb',
//     '#872c07',
//     '#9ddfca',
//     '#783636',
//     '#434343',
//     '#d43232',
//     '#999999',
//     '#a4c2f4',
//     '#f1c232',
//     '#660000',
//     '#7ae4f6',
//     '#e0c579',
//     '#a77c4f',
//     '#fff2cc',
// ];
