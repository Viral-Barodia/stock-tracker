import Swal from 'sweetalert2';

/**
 * Function to fire an error toast using Swal
 * @param title => The title to be displayed in the error
 * @param text => The text to be displayed in the error
 * @renders The Error toast
 */
export function FireErrorToast(title?: string, text?: string) {
    Swal.fire({
        icon: 'error',
        title: title || 'Oops...',
        text: text || 'The third-party API has malfunctioned!',
    });
}