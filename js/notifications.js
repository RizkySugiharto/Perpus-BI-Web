function initNotification() {
    $('#notifications')
        .addClass('position-fixed bottom-0 end-0 p-4 d-flex flex-column flex-wrap-reverse gap-2')
        .css('max-height', '100vh')
        .css('pointer-events', 'none');
}

function addNotification(message, type) {
    $('#notifications').append(
        `<div class="alert alert-${type ?? 'info'} alert-dismissible fade show m-0" role="alert" style="pointer-events: all;">
            <span>${message}</span>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`
    );
}