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

// 麵包屑 次類別
export const breadCrumbCategorySub = (subId) => {
    switch (subId) {
        case 1:
            return `/ 琴鍵樂器 / 直立、平台鋼琴`;
        case 2:
            return '/ 琴鍵樂器 / 電子鋼琴';
        case 3:
            return '/ 琴鍵樂器 / 數位鋼琴';
        case 4:
            return '/ 管樂器 / 長笛';
        case 5:
            return '/ 管樂器 / 短笛';
        case 6:
            return '/ 管樂器 / 薩克斯風';
        case 7:
            return '/ 弓弦樂器 / 小提琴';
        case 8:
            return '/ 弓弦樂器 / 中提琴';
        case 9:
            return '/ 弓弦樂器 / 大提琴';
        case 10:
            return '/ 吉他、烏克麗麗 / 木吉他';
        case 11:
            return '/ 吉他、烏克麗麗 / 電吉他';
        case 12:
            return '/ 吉他、烏克麗麗 / 貝斯';
        case 13:
            return '/ 吉他、烏克麗麗 / 烏克麗麗';
        case 14:
            return '/ 打擊樂器 / 爵士鼓';
        case 15:
            return '/ 打擊樂器 / 電子鼓';
        case 16:
            return '/ 打擊樂器 / 木箱鼓';
        case 17:
            return '/ 配件 / 琴鍵樂器';
        case 18:
            return '/ 配件 / 管樂器';
        case 19:
            return '/ 配件 / 弓弦樂器';
        case 20:
            return '/ 配件 / 吉他';
        case 21:
            return '/ 配件 / 打擊樂器';
        default:
            return '';
    }
};

// 麵包屑 主類別
export const breadCrumbCategoryMain = (mainId) => {
    switch (mainId) {
        case 1:
            return `/ 琴鍵樂器`;
        case 2:
            return '/ 管樂器';
        case 3:
            return '/ 弓弦樂器';
        case 4:
            return '/ 吉他、烏克麗麗';
        case 5:
            return '/ 打擊樂器';
        case 6:
            return '/ 配件';
        default:
            return '';
    }
};

// loader 動畫
// export const loader = (
//     <div className="sk-chase">
//         <div className="sk-chase-dot"></div>
//         <div className="sk-chase-dot"></div>
//         <div className="sk-chase-dot"></div>
//         <div className="sk-chase-dot"></div>
//         <div className="sk-chase-dot"></div>
//         <div className="sk-chase-dot"></div>
//     </div>
// );
