const attachmentList = $("#attachment-list");

function createAttachmentElement(attachmentId) {
    return `
        <li id="${attachmentId}" class="list-group-item fs-display-flex fs-align-items-center">
            <button type="button" class="delete-button icon-btn btn btn-danger">
                <img src="../assets/trash.png" alt="">
            </button>
            <button type="button" class="view-button icon-btn btn btn-info">
                <img src="../assets/eye.png" alt="">
            </button>
            <h3 style="margin-left: 20px;">Documento anexo ${getAttachmentLength()}</h3>
        </li>
    `;
}

function insertAttachmentIntoList(attachmentElement) {
    attachmentList.append(attachmentElement)
}

function updateAttachmentListTitles() {
    let i = 0;

    for (const child of attachmentList.children()) {
        i++;
        const attachment = $(child);
        const attachmentTitle = $($(attachment.children("h3")[0]));

        attachmentTitle.text("Documento anexo  " + i);
    }
}

function deleteAttachmentFromList(attachmentId) {
    $(`#${attachmentId}`).remove();
    updateAttachmentListTitles();
}

function getAttachmentLength() {
    return attachmentList.children().length + 1;
}