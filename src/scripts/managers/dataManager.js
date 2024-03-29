const currentData = {
    razaoSocial: undefined,
    nomeFantasia: undefined,
    cnpj: undefined,
    inscricaoEstadual: undefined,
    inscricaoMunicipal: undefined,
    nomeContato: undefined,
    telefoneContato: undefined,
    emailContato: undefined,
    produtos: [],
    anexos: []
};

function buildJSON() {
    return JSON.stringify(currentData);
}

function saveDataIntoStorage() {
    localStorage.setItem('supplier-data', buildJSON());
}

function buildSupplierInfo(info) {
    const {
        socialReason,
        cnpj,
        commercialName,
        stateRegistration,
        municipalRegistration,
        contactName,
        telephone,
        email
    } = info;

    currentData.razaoSocial = socialReason;
    currentData.cnpj = cnpj;
    currentData.nomeFantasia = commercialName;
    currentData.inscricaoEstadual = stateRegistration;
    currentData.inscricaoMunicipal = municipalRegistration;
    currentData.nomeContato = contactName;
    currentData.telefoneContato = telephone;
    currentData.emailContato = email;

    saveDataIntoStorage();
}

function clearDataProducts() {
    currentData.produtos = [];
}

function clearDataAttachments() {
    currentData.anexos = [];
}

function buildProductInfo(info) {
    const {
        productName,
        measureUnit,
        measureQuantity,
        unitValue,
        totalValue
    } = info;

    const newProduct = {
        indice: currentData.produtos.length + 1,
        descricaoProduto: productName,
        unidadeMedida: measureUnit,
        qteEstoque: measureQuantity,
        unitValue: unitValue,
        valorTotal: totalValue
    }

    currentData.produtos.push(newProduct);
}

function buildAttachmentInfo(info) {
    const {
        fileString,
        fileName
    } = info;

    const newAttachment = {
        indice: currentData.anexos.length + 1,
        nomeArquivo: fileName,
        blobArquivo: fileString
    }

    currentData.anexos.push(newAttachment);
}