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
    { id: '3', name: '開課：新到舊' },
    { id: '4', name: '開課：舊到新' },
];

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
