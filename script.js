const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem('entqam-theme', document.body.classList.contains('light') ? 'light' : 'dark');
});
if(localStorage.getItem('entqam-theme') === 'light') document.body.classList.add('light');

document.getElementById('searchBtn').addEventListener('click', () => {
  const q = prompt('ماذا تريد أن تبحث عنه؟');
  if(q) alert('البحث عن: ' + q + '\nيمكن ربط هذا الزر لاحقًا بصفحة بحث حقيقية.');
});
