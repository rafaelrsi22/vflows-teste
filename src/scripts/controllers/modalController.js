const modal = $("#modal");
const closeModalBtn = $($(".modal-close")[0]);
const modalTitleHeader = $($('.modal-title')[0]);
const modalBody = $($('.modal-body')[0]);

function showModal() {
    modal.removeClass("hidden");
}

function updateModal(modalTitle, modalBodyHTML) {
    modalTitleHeader.text(modalTitle);
    modalBody.html(modalBodyHTML);
}

function getModalBodyElementById(elementId) {
    return $(modalBody.children(`#${elementId}`));
}

function startLoadingModal() {
    showModal();
    updateModal('Loading', '<div class="spin"></div>');
}

function stopLoadingModal() {
    hideModal();
    clearModal();
}

function hideModal() {
    modal.addClass("hidden");
}

function clearModal() {
    modalBody.html('');
}

closeModalBtn.on("click", () => {
    hideModal();
});

$("document").ready(() => {
    
});