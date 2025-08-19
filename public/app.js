document.addEventListener('DOMContentLoaded', () => {
  // === Theme Toggle ===
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  }

  // === Counter Component ===
  let count = 0;
  const countValue = document.getElementById('countValue');
  const incrementBtn = document.getElementById('increment');
  const decrementBtn = document.getElementById('decrement');
  const resetBtn = document.getElementById('reset');

  if (countValue && incrementBtn && decrementBtn && resetBtn) {
    incrementBtn.addEventListener('click', () => { count++; countValue.textContent = count; });
    decrementBtn.addEventListener('click', () => { if(count>0) count--; countValue.textContent = count; });
    resetBtn.addEventListener('click', () => { count=0; countValue.textContent = count; });
  }

  // === Modal Handling ===
  const modal = document.getElementById('myModal');
  const openModalBtn = document.getElementById('openModal');
  const closeModalBtn = document.getElementById('closeModal');

  if(modal && openModalBtn && closeModalBtn){
    openModalBtn.addEventListener('click', () => modal.style.display = 'flex');
    closeModalBtn.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', e => { if(e.target===modal) modal.style.display='none'; });
  }

  // === Login/Register Modals ===
  const loginModal = document.getElementById('loginModal');
  const registerModal = document.getElementById('registerModal');

  const showLoginBtn = document.getElementById('showLogin');
  const showRegisterBtn = document.getElementById('showRegister');
  const closeLoginBtn = document.getElementById('closeLoginModal');
  const closeRegisterBtn = document.getElementById('closeRegisterModal');
  const switchToRegister = document.getElementById('switchToRegister');
  const switchToLogin = document.getElementById('switchToLogin');

  if(showLoginBtn && loginModal) showLoginBtn.addEventListener('click', () => loginModal.style.display='flex');
  if(showRegisterBtn && registerModal) showRegisterBtn.addEventListener('click', () => registerModal.style.display='flex');
  if(closeLoginBtn) closeLoginBtn.addEventListener('click', () => loginModal.style.display='none');
  if(closeRegisterBtn) closeRegisterBtn.addEventListener('click', () => registerModal.style.display='none');
  if(switchToRegister) switchToRegister.addEventListener('click', e => { e.preventDefault(); loginModal.style.display='none'; registerModal.style.display='flex'; });
  if(switchToLogin) switchToLogin.addEventListener('click', e => { e.preventDefault(); registerModal.style.display='none'; loginModal.style.display='flex'; });

  // === Tabs ===
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b=>b.classList.remove('active'));
      tabContents.forEach(c=>c.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab)?.classList.add('active');
    });
  });

  // === Search Suggestions ===
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const searchTags = document.querySelectorAll('.suggestion-tag');
  searchTags.forEach(tag => {
    tag.addEventListener('click', () => {
      searchInput.value = tag.dataset.search;
      performSearch(tag.dataset.search);
    });
  });

  const searchBtn = document.getElementById('searchBtn');
  if(searchBtn) searchBtn.addEventListener('click', () => performSearch(searchInput.value));

  function performSearch(query){
    if(searchResults) searchResults.innerHTML = `<p>Showing results for "<strong>${query}</strong>"...</p>`;
    // Replace this with real API call if needed
  }

  // === File Upload ===
  const fileUploadArea = document.getElementById('fileUploadArea');
  const fileInput = document.getElementById('fileInput');
  const fileInfo = document.getElementById('fileInfo');

  if(fileUploadArea && fileInput && fileInfo){
    fileUploadArea.addEventListener('click', () => fileInput.click());
    fileUploadArea.addEventListener('dragover', e => { e.preventDefault(); fileUploadArea.classList.add('dragover'); });
    fileUploadArea.addEventListener('dragleave', () => fileUploadArea.classList.remove('dragover'));
    fileUploadArea.addEventListener('drop', e => { e.preventDefault(); fileUploadArea.classList.remove('dragover'); handleFile(e.dataTransfer.files[0]); });
    fileInput.addEventListener('change', () => handleFile(fileInput.files[0]));
  }

  function handleFile(file){
    if(!file) return;
    fileInfo.style.display = 'block';
    fileInfo.textContent = `Selected File: ${file.name} (${(file.size/1024).toFixed(2)} KB)`;
  }

// === Mock API Fetch (Option A: Stubbed endpoint) ===
const fetchBtn = document.getElementById('fetchData');
const fetchText = document.getElementById('fetchText');
const apiResult = document.getElementById('apiResult');
const apiSuccess = document.getElementById('apiSuccess');

if (fetchBtn) {
  fetchBtn.addEventListener('click', () => {
    fetchBtn.disabled = true;
    if (fetchText) fetchText.textContent = 'Fetching...';
    if (apiSuccess) apiSuccess.style.display = 'none';
    if (apiResult) apiResult.textContent = '';

    fetch("/api/recommendations") // 👈 point to a fake API endpoint
      .then(res => res.json())
      .then(data => {
        if (apiResult) apiResult.textContent = JSON.stringify(data, null, 2);
        if (apiSuccess) apiSuccess.style.display = 'block';
        fetchBtn.disabled = false;
        if (fetchText) fetchText.textContent = 'Fetch Recommendations';
      })
      .catch(err => {
        if (apiResult) apiResult.textContent = "Error fetching data: " + err.message;
        fetchBtn.disabled = false;
      });
  });
}

  // === Login/Register Form Validation ===
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  if(loginForm){
    loginForm.addEventListener('submit', e=>{
      e.preventDefault();
      let valid = true;
      const email = document.getElementById('loginEmail');
      const password = document.getElementById('loginPassword');

      if(!email.value.includes('@')){ document.getElementById('loginEmailError').style.display='block'; valid=false; } 
      else { document.getElementById('loginEmailError').style.display='none'; }
      if(!password.value){ document.getElementById('loginPasswordError').style.display='block'; valid=false; }
      else { document.getElementById('loginPasswordError').style.display='none'; }

      if(valid) document.getElementById('loginSuccess').style.display='block';
    });
  }

  if(registerForm){
    registerForm.addEventListener('submit', e=>{
      e.preventDefault();
      let valid = true;
      const fields = [
        {id:'regFirstName', error:'regFirstNameError'},
        {id:'regLastName', error:'regLastNameError'},
        {id:'regEmail', error:'regEmailError'},
        {id:'regPhone', error:'regPhoneError'},
        {id:'regLocation', error:'regLocationError'},
        {id:'regIndustry', error:'regIndustryError'},
        {id:'regPassword', error:'regPasswordError'},
        {id:'regConfirmPassword', error:'regConfirmPasswordError'}
      ];

      fields.forEach(f=>{
        const input = document.getElementById(f.id);
        if(!input.value || (f.id==='regEmail' && !input.value.includes('@'))){
          document.getElementById(f.error).style.display='block';
          valid=false;
        } else { document.getElementById(f.error).style.display='none'; }
      });

      const password = document.getElementById('regPassword');
      const confirmPassword = document.getElementById('regConfirmPassword');
      if(password.value !== confirmPassword.value){
        document.getElementById('regConfirmPasswordError').style.display='block';
        valid=false;
      }

      if(valid) document.getElementById('registerSuccess').style.display='block';
    });
  }

});
