document.getElementById('darkMode').addEventListener('click', () => {
    const body = document.body;
    body.classList.toggle('dark-mode');

    const button = document.getElementById('darkMode');
    if (body.classList.contains('dark-mode')) {
        button.textContent = 'Mode claire';
    } else {
        button.textContent = 'Mode sombre';
    }
});



const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

tabs.forEach(tab => {
  tab.addEventListener('click', function() {
    
    tabs.forEach(item => item.classList.remove('tab-active'));
    
   
    contents.forEach(content => content.classList.remove('active'));
    
    
    this.classList.add('tab-active');
    
    
    if (this.classList.contains('tab-nom1')) {
      document.querySelector('.nom1').classList.add('active');
    } else if (this.classList.contains('tab-nom2')) {
      document.querySelector('.nom2').classList.add('active');
    } else if (this.classList.contains('tab-nom3')) {
      document.querySelector('.nom3').classList.add('active');
    }
  });
});