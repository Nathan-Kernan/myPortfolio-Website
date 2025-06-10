function openCertModal(img) {
    var modal = document.getElementById('cert-modal');
    var modalImg = document.getElementById('cert-modal-img');
    modal.style.display = "flex";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
}
function closeCertModal() {
    document.getElementById('cert-modal').style.display = "none";
}
document.querySelectorAll('.cert-modal-close').forEach(btn => {
    btn.onclick = closeCertModal;
});