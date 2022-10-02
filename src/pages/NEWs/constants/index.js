// 手機版 排序狀態標題
export const sortByTitle = (sortBy) => {
    if (sortBy === '') {
        return '排序條件';
    }
    if (sortBy === '1') {
        return '日期 新>舊';
    }
    if (sortBy === '2') {
        return '日期 舊>新';
    }
};

// 排序篩選選項
export const sortByTypes = [
    { id: '1', name: '日期：新到舊' },
    { id: '2', name: '日期：舊到新' },
];

// loader 動畫
export const loader = (
    <div className="sk-chase ">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
    </div>
);
