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
export const brandTagsTypes = [
    { id: 0, name: '所有品牌' },
    { id: 1, name: 'YAMAHA' },
    { id: 2, name: 'Roland' },
    { id: 3, name: 'AZUMI' },
    { id: 4, name: 'Jupiter' },
    { id: 5, name: 'SELMER' },
    { id: 6, name: 'HEL' },
    { id: 7, name: 'OTTO' },
    { id: 8, name: 'Joylink' },
    { id: 9, name: 'BREEDLOVE' },
    { id: 10, name: 'SUSTAIN' },
    { id: 11, name: 'CORONA' },
    { id: 12, name: 'MAPEX' },
    { id: 13, name: 'NUX' },
    { id: 14, name: 'CASIO' },
    { id: 15, name: 'KORG' },
    { id: 16, name: 'Others' },
    { id: 17, name: 'aNueNue' },
    { id: 18, name: 'NOMAD' },
    { id: 19, name: 'HERCULES' },
    { id: 20, name: 'Vic-Firth' },
];

// 顏色篩選選項
export const colorTagsTypes = [
    '#000000',
    '#c0c0c0',
    '#B5A642',
    '#ffffff',
    '#4d2f2f',
    '#8B4513',
    '#802A2A',
    '#872c07',
    '#cc0000',
    '#f29a25',
    '#ffa500',
    '#ffd700',
    '#efd7b3',
    '#ea9999',
    '#9ddfca',
    '#18ebeb',
];
