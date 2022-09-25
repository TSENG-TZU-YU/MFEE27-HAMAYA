import Swal from 'sweetalert2';
import './index.scss';

// toast 成功訊息帶確認按鈕 1.5秒後自動關閉
export const successToast = (title, confirmBtnName) => {
    Swal.fire({
        customClass: {
            confirmButton: 'btn btn-primary',
        },
        confirm: true,
        icon: 'success',
        title: title,
        showConfirmButton: true,
        confirmButtonText: confirmBtnName,
        confirmButtonColor: '#8CD4F5',
        buttonsStyling: false,
        color: '#00323d',
        background: '#f2f2f2',
        iconColor: '#86a8ae',
        timer: 2000,
        position: 'top',
    });
};

// toast 失敗訊息帶確認按鈕 1.5秒後自動關閉
export const errorToast = (title, confirmBtnName) => {
    Swal.fire({
        customClass: {
            confirmButton: 'btn btn-danger',
        },
        confirm: true,
        icon: 'error',
        title: title,
        showConfirmButton: true,
        confirmButtonText: confirmBtnName,
        confirmButtonColor: '#5b322f',
        buttonsStyling: false,
        color: '#5b322f',
        background: '#f2f2f2',
        iconColor: '#c59894',
        timer: 2000,
        position: 'top',
    });
};

// toast 提示訊息帶確認按鈕 1.5秒後自動關閉
export const warningToast = (title, confirmBtnName) => {
    Swal.fire({
        customClass: {
            confirmButton: 'btn btn-primary',
        },
        confirm: true,
        icon: 'warning',
        title: title,
        showConfirmButton: true,
        confirmButtonText: confirmBtnName,
        confirmButtonColor: '#5b322f',
        buttonsStyling: false,
        color: '#00323d',
        background: '#f2f2f2',
        iconColor: '#767676',
        timer: 2000,
        position: 'top',
    });
};

// basic message 帶確認按鈕 無icon
export const basicAlert = (title, confirmBtnName) => {
    Swal.fire({
        customClass: {
            confirmButton: 'btn btn-primary',
        },
        confirm: true,
        title: title,
        showConfirmButton: true,
        confirmButtonText: confirmBtnName,
        confirmButtonColor: '#8CD4F5',
        buttonsStyling: false,
        color: '#00323d',
        background: '#f2f2f2',
        position: 'top',
    });
};

// 小的 toast 訊息
export const successSmallToast = Swal.mixin({
    width: '10%',
    toast: true,
    position: 'top',
    showConfirmButton: false,
    background: '#f2f2f2',
    timer: 3000,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
});

// 成功範例
// successSmallToast.fire({
//     icon: 'success',
//     iconColor: '#86a8ae',
//     color: '#00323d',
//     title: response.data.message,
// });

// 錯誤範例
// successSmallToast.fire({
//     icon: 'error',
//     iconColor: '#c59894',
//     color: '#5b322f',
//     title: response.data.message,
// });
