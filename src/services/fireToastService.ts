import Swal from 'sweetalert2';

export function FireErrorToast(title?: string, text?: string) {
    Swal.fire({
        icon: 'error',
        title: title || 'Oops...',
        text: text || 'The third-party API has malfunctioned!',
    });
}