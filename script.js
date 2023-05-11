let currentPage = 1;

function changePage(page) {
  // Oculta a página atual
  document.getElementById(`page${currentPage}`).style.display = "none";
  
  // Mostra a página selecionada
  document.getElementById(`page${page}`).style.display = "block";
  
  // Atualiza a página atual
  currentPage = page;
}